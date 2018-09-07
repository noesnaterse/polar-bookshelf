import {DocMeta} from '../metadata/DocMeta';
import {IListenablePersistenceLayer} from '../datastore/IListenablePersistenceLayer';
import {Batcher} from '../datastore/batcher/Batcher';
import {TraceEvent} from '../proxies/TraceEvent';
import {Logger} from '../logger/Logger';
import {DocInfo} from '../metadata/DocInfo';

const {Proxies} = require("../proxies/Proxies");

const log = Logger.create();

export class ModelPersister {

    public readonly docMeta: DocMeta;

    private readonly persistenceLayer: IListenablePersistenceLayer;

    constructor(persistenceLayer: IListenablePersistenceLayer, docMeta: DocMeta) {
        this.persistenceLayer = persistenceLayer;
        this.docMeta = docMeta;

        const batcher = new Batcher(async () => {

            // right now we just sync the datastore on mutation.  We do not
            // attempt to use a journal yet.

            await this.persistenceLayer.sync(this.docMeta.docInfo.fingerprint, this.docMeta);

        });

        this.docMeta = Proxies.create(this.docMeta, (traceEvent: TraceEvent) => {

            log.info(`sync of persistence layer at ${traceEvent.path} : ${traceEvent.property}"`);

            setTimeout(() => {

                // use setTimeout so that we function in the same thread which
                // avoids concurrency issues with the batcher.

                batcher.enqueue().run()
                    .catch(err => log.error("Unable to commit to disk: ", err));

            }, 0);

            return true;

        });

        this.persistenceLayer.addEventListener(event => {
            log.debug("Received updated DocInfo.");
            this.docMeta.docInfo = new DocInfo(event.docInfo);
        });

    }

}
