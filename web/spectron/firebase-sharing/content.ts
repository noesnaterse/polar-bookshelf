import {SpectronRenderer} from '../../js/test/SpectronRenderer';
import {FirebaseDatastore} from '../../js/datastore/FirebaseDatastore';
import {Logger} from '../../js/logger/Logger';
import {Firebase} from '../../js/firebase/Firebase';
import {MockDocMetas} from '../../js/metadata/DocMetas';
import {DocPermissions} from '../../js/datastore/firebase/DocPermissions';
import {RecipientTokenMap} from '../../js/datastore/firebase/DocPermissions';
import {DocTokens} from '../../js/datastore/firebase/DocTokens';
import {DocPeerPendings} from '../../js/datastore/firebase/DocPeerPendings';
import {assert} from 'chai';
import {Backend} from '../../js/datastore/Backend';
import {FilePaths} from '../../js/util/FilePaths';
import {FileRef} from '../../js/datastore/Datastore';
import {FirebaseDatastores} from '../../js/datastore/FirebaseDatastores';
import {DocPeer} from '../../js/datastore/firebase/DocPeers';

const log = Logger.create();

mocha.setup('bdd');
mocha.timeout(10000);

const FIREBASE_USER = process.env.FIREBASE_USER!;
const FIREBASE_PASS = process.env.FIREBASE_PASS!;

const FIREBASE_USER1 = process.env.FIREBASE_USER1!;
const FIREBASE_PASS1 = process.env.FIREBASE_PASS1!;


async function verifyFailed(delegate: () => Promise<any>) {

    let failed: boolean;

    try {

        await delegate();
        failed = false;

    } catch (e) {
        failed = true;
    }

    if (! failed) {
        throw new Error("Did not fail as expected");
    }

}

SpectronRenderer.run(async (state) => {

    console.log("Running...");

    const app = Firebase.init();
    const firestore = app.firestore();

    const docMeta = MockDocMetas.createMockDocMeta();

    const pdfPath = FilePaths.join(__dirname, "..", "..", "..", "docs", "examples", "pdf", "chubby.pdf");

    const fileRef: FileRef = {
        name: "chubby.pdf"
    };

    async function verifyFileFetch(docPeer: DocPeer) {

        console.log("Making sure we can fetch the URL to the shared file in the backend");

        console.log("Trying with token: " + docPeer.token);

        const fetchURL = FirebaseDatastores.computeFetchURL({
            token: docPeer.token,
            docID: docPeer.docID,
            fileRef,
            backend: Backend.STASH
        });

        console.log({fetchURL});

        const response = await fetch(fetchURL);
        assert.equal(response.status, 200);

    }

    async function writeInitialData() {

        await app.auth().signInWithEmailAndPassword(FIREBASE_USER, FIREBASE_PASS);
        console.log("We are authenticated now");

        const datastore = new FirebaseDatastore();
        await datastore.init();

        await datastore.writeFile(Backend.STASH, fileRef, {path: pdfPath});

        await datastore.writeDocMeta(docMeta);

        // keep the doc ID of the document so we can login with another user to test with.
        const docID = FirebaseDatastore.computeDocMetaID(docMeta.docInfo.fingerprint);

        console.log("Working with docID: " + docID);

        const token = DocTokens.create();

        async function writeDocPermission() {

            const recipientTokens: RecipientTokenMap = {};
            recipientTokens[FIREBASE_USER1] = token;
            const fingerprint = docMeta.docInfo.fingerprint;

            await DocPermissions.write(fingerprint, recipientTokens);

        }

        async function writeDocPeerPending() {

            await DocPeerPendings.write({
                to: FIREBASE_USER1,
                message: 'here is your doc yo',
                reciprocal: false,
                token,
                docID
            });

        }

        async function verifyGetFile() {
            const file = datastore.getFile(Backend.STASH, fileRef);
            const response = await fetch(file.url);
            assert.equal(response.status, 200);
            console.log("We can fetch the doc as the user.");
        }

        await writeDocPermission();
        await writeDocPeerPending();

        await verifyGetFile();

        await firestore.collection("doc_meta").doc(docID).get();
        console.log("Got the doc with the primary user");

        await datastore.stop();

        return docID;

    }

    async function verifyAccessToDocs() {

        console.log("Verifying access to docs");

        await app.auth().signInWithEmailAndPassword(FIREBASE_USER1, FIREBASE_PASS1);

        console.log("Getting doc peer pendings");
        const docPeerPendings = await DocPeerPendings.get();

        assert.isTrue(docPeerPendings.length >= 1);

        // verify that at least ONE of these is the doc we're looking for

        assert.isTrue(docPeerPendings.filter(current => current.docID === docID).length >= 1);

        const docPeerPending = docPeerPendings.filter(current => current.docID === docID)[0];

        const docPeer = await DocPeerPendings.accept(docPeerPending);

        await verifyFileFetch(docPeer);

        console.log("We are authenticated now with the new user.");

        await firestore.collection("doc_meta").doc(docID).get();

        console.log("Got the document!");

        return docPeer;

    }

    async function revokeAccessToDocs() {

        await app.auth().signInWithEmailAndPassword(FIREBASE_USER, FIREBASE_PASS);

        async function writeDocPermission() {

            const recipientTokens: RecipientTokenMap = {};

            const fingerprint = docMeta.docInfo.fingerprint;

            await DocPermissions.write(fingerprint, recipientTokens);

        }

        await writeDocPermission();

        await firestore.collection("doc_meta").doc(docID).get();

        console.log("We have now revoked access to the docs");

    }

    async function verifyAccessRevoked(docPeer: DocPeer) {

        await app.auth().signInWithEmailAndPassword(FIREBASE_USER1, FIREBASE_PASS1);

        async function verifyDocMetaRevoked() {
            await verifyFailed(async () => await firestore.collection("doc_meta").doc(docID).get());
        }

        async function verifyFileFetchRevoked() {
            await verifyFailed(async () => await verifyFileFetch(docPeer));
        }

        await verifyDocMetaRevoked();
        await verifyFileFetchRevoked();

    }

    const docID = await writeInitialData();
    const docPeer = await verifyAccessToDocs();
    await revokeAccessToDocs();
    await verifyAccessRevoked(docPeer);

    console.log("ALL WORKED!");

});

class Maths {

    public static stats(values: readonly number[]): Stats {

        // compute min/max/mean 90 and 95th percentile.
        const min = Math.min(...values);
        const max = Math.max(...values);
        const mean = this.mean(values);

        // total duration
        const duration = this.sum(values);
        const percentile90 = this.percentile(90, values);
        const percentile95 = this.percentile(95, values);

        return {min, max, mean, duration, percentile90, percentile95};

    }

    public static percentile(percentile: number,
                             values: readonly number[]) {

        if (values.length === 0) {
            return NaN;
        }

        const cutoff = Math.floor((values.length * (percentile / 100)) - 1);

        if (cutoff < 0 || cutoff >= values.length) {
            throw new Error("Invalid cutoff: " + cutoff);
        }

        const ranked = [...values].sort().reverse();

        return ranked[cutoff];

    }

    public static sum(values: readonly number[]) {

        let result: number = 0;

        for (const value of values) {
            result += value;
        }

        return result;

    }

    public static mean(values: readonly number[]) {

        if (values.length === 0) {
            return NaN;
        }

        const sum = Maths.sum(values);

        return sum / values.length;

    }

}

interface Stats {
    readonly min: number;
    readonly max: number;
    readonly mean: number;
    readonly duration: number;
    readonly percentile90: number;
    readonly percentile95: number;
}