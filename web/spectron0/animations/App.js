"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("react");
const framer_motion_1 = require("framer-motion");
exports.FadeIn = (props) => {
    return (React.createElement(framer_motion_1.motion.div, { key: "fade-in-motion", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }, props.children));
};
exports.FadeIn2 = (props) => {
    const pageVariants = {
        initial: {
            opacity: 0,
        },
        in: {
            opacity: 1,
        },
        out: {
            opacity: 0,
        }
    };
    return (React.createElement(framer_motion_1.motion.div, { key: "fade-in-2-motion", initial: "initial", animate: "in", exit: "out", variants: pageVariants }, props.children));
};
exports.RightSidebar = (props) => {
    const style = Object.assign({ position: 'absolute', right: 0, top: 0, width: '350px', height: '100%' }, props.style || {});
    return (React.createElement(framer_motion_1.motion.div, { key: "right-sidebar", initial: { right: -350 }, animate: { right: 0 }, exit: { right: -350 }, style: style }, props.children));
};
const FirstPage = () => (React.createElement(exports.FadeIn, null, "this is the first page"));
const SecondPage = () => (React.createElement(exports.FadeIn, null, "this is the second page"));
const ThirdPage = () => (React.createElement("div", null, "this is the third page just inside a basic div"));
const RightSidebarPage = () => (React.createElement(exports.RightSidebar, { style: { backgroundColor: 'red' } },
    React.createElement("div", null, "this is the left sidebar")));
const ToggleVisibilityButton = (props) => (React.createElement("button", { key: "toggle-button-impl", onClick: () => props.onClick() }, "toggle visibility"));
const ToggleFade = (props) => {
    if (props.show) {
        return (React.createElement("div", { key: "toggle-fade" },
            React.createElement(ToggleVisibilityButton, { key: "toggle-button", onClick: () => props.toggle() }),
            React.createElement(exports.FadeIn, { key: "fade-in" },
                React.createElement("div", { key: "fade-content" }, "This should fade in and out on toggle"))));
    }
    else {
        return (React.createElement("div", { key: "toggle-fade" },
            React.createElement(ToggleVisibilityButton, { key: "toggle-button", onClick: () => props.toggle() })));
    }
};
const ToggleVisibility = () => {
    const [show, toggle] = react_1.useState(true);
    return (React.createElement(framer_motion_1.AnimatePresence, null,
        React.createElement(ToggleFade, { key: "toggle-fade", show: show, toggle: () => toggle(!show) })));
};
exports.App = () => (React.createElement(ToggleVisibility, null));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsaUNBQStCO0FBRy9CLGlEQUFzRDtBQUV6QyxRQUFBLE1BQU0sR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO0lBRWpDLE9BQU8sQ0FDSCxvQkFBQyxzQkFBTSxDQUFDLEdBQUcsSUFBQyxHQUFHLEVBQUMsZ0JBQWdCLEVBQ3BCLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFDdkIsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUN2QixJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBRTNCLEtBQUssQ0FBQyxRQUFRLENBQ04sQ0FDaEIsQ0FBQztBQUVOLENBQUMsQ0FBQztBQUVXLFFBQUEsT0FBTyxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7SUFFbEMsTUFBTSxZQUFZLEdBQUc7UUFDakIsT0FBTyxFQUFFO1lBQ0wsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUNELEVBQUUsRUFBRTtZQUNBLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFDRCxHQUFHLEVBQUU7WUFDRCxPQUFPLEVBQUUsQ0FBQztTQUNiO0tBQ0osQ0FBQztJQUVGLE9BQU8sQ0FDSCxvQkFBQyxzQkFBTSxDQUFDLEdBQUcsSUFBQyxHQUFHLEVBQUUsa0JBQWtCLEVBQ3ZCLE9BQU8sRUFBQyxTQUFTLEVBQ2pCLE9BQU8sRUFBQyxJQUFJLEVBQ1osSUFBSSxFQUFDLEtBQUssRUFDVixRQUFRLEVBQUUsWUFBWSxJQUU3QixLQUFLLENBQUMsUUFBUSxDQUNOLENBQ2hCLENBQUM7QUFFTixDQUFDLENBQUM7QUFFVyxRQUFBLFlBQVksR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO0lBRXZDLE1BQU0sS0FBSyxtQkFDUCxRQUFRLEVBQUUsVUFBVSxFQUNwQixLQUFLLEVBQUUsQ0FBQyxFQUNSLEdBQUcsRUFBRSxDQUFDLEVBQ04sS0FBSyxFQUFFLE9BQU8sRUFDZCxNQUFNLEVBQUUsTUFBTSxJQUNYLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUN2QixDQUFDO0lBRUYsT0FBTyxDQUNILG9CQUFDLHNCQUFNLENBQUMsR0FBRyxJQUFDLEdBQUcsRUFBQyxlQUFlLEVBQ25CLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUN4QixPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQ3JCLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUNyQixLQUFLLEVBQUUsS0FBSyxJQUVuQixLQUFLLENBQUMsUUFBUSxDQUNOLENBQ2hCLENBQUM7QUFFTixDQUFDLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUNwQixvQkFBQyxjQUFNLGlDQUVFLENBQ1osQ0FBQztBQUVGLE1BQU0sVUFBVSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQ3JCLG9CQUFDLGNBQU0sa0NBRUUsQ0FDWixDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FDcEIsa0ZBRU0sQ0FDVCxDQUFDO0FBRUYsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUUzQixvQkFBQyxvQkFBWSxJQUFDLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUM7SUFDekMsNERBRU0sQ0FDSyxDQUVsQixDQUFDO0FBTUYsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLEtBQW1CLEVBQUUsRUFBRSxDQUFDLENBQ3BELGdDQUFRLEdBQUcsRUFBQyxvQkFBb0IsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSx3QkFBNEIsQ0FDOUYsQ0FBQztBQVFGLE1BQU0sVUFBVSxHQUFHLENBQUMsS0FBc0IsRUFBRSxFQUFFO0lBRTFDLElBQUksS0FBSyxDQUFDLElBQUksRUFBRTtRQUNaLE9BQU8sQ0FDSCw2QkFBSyxHQUFHLEVBQUMsYUFBYTtZQUNsQixvQkFBQyxzQkFBc0IsSUFBQyxHQUFHLEVBQUMsZUFBZSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUc7WUFDNUUsb0JBQUMsY0FBTSxJQUFDLEdBQUcsRUFBQyxTQUFTO2dCQUNqQiw2QkFBSyxHQUFHLEVBQUMsY0FBYyw0Q0FFakIsQ0FDRCxDQUNQLENBQ1QsQ0FBQztLQUNMO1NBQU07UUFDSCxPQUFPLENBQ0gsNkJBQUssR0FBRyxFQUFDLGFBQWE7WUFDbEIsb0JBQUMsc0JBQXNCLElBQUMsR0FBRyxFQUFDLGVBQWUsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQzFFLENBQ1QsQ0FBQztLQUNMO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLEVBQUU7SUFFMUIsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxnQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXRDLE9BQU8sQ0FDSCxvQkFBQywrQkFBZTtRQUNaLG9CQUFDLFVBQVUsSUFBQyxHQUFHLEVBQUMsYUFBYSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFFLElBQUksQ0FBQyxHQUFHLENBQzNELENBQ3JCLENBQUM7QUFFTixDQUFDLENBQUM7QUFPVyxRQUFBLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUVyQixvQkFBQyxnQkFBZ0IsT0FBRSxDQWdDdEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7SGFzaFJvdXRlciwgTGluaywgUm91dGUsIFN3aXRjaH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IHtBbmltYXRlUHJlc2VuY2UsIG1vdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmV4cG9ydCBjb25zdCBGYWRlSW4gPSAocHJvcHM6IGFueSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1vdGlvbi5kaXYga2V5PVwiZmFkZS1pbi1tb3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fT5cblxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgKTtcblxufTtcblxuZXhwb3J0IGNvbnN0IEZhZGVJbjIgPSAocHJvcHM6IGFueSkgPT4ge1xuXG4gICAgY29uc3QgcGFnZVZhcmlhbnRzID0ge1xuICAgICAgICBpbml0aWFsOiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB9LFxuICAgICAgICBpbjoge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgfSxcbiAgICAgICAgb3V0OiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtb3Rpb24uZGl2IGtleT17XCJmYWRlLWluLTItbW90aW9uXCJ9XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT1cImluXCJcbiAgICAgICAgICAgICAgICAgICAgZXhpdD1cIm91dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtwYWdlVmFyaWFudHN9PlxuXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICApO1xuXG59O1xuXG5leHBvcnQgY29uc3QgUmlnaHRTaWRlYmFyID0gKHByb3BzOiBhbnkpID0+IHtcblxuICAgIGNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgd2lkdGg6ICczNTBweCcsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAuLi5wcm9wcy5zdHlsZSB8fCB7fSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1vdGlvbi5kaXYga2V5PVwicmlnaHQtc2lkZWJhclwiXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgcmlnaHQ6IC0zNTAgfX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyByaWdodDogMCB9fVxuICAgICAgICAgICAgICAgICAgICBleGl0PXt7IHJpZ2h0OiAtMzUwIH19XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX0+XG5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICk7XG5cbn07XG5cbmNvbnN0IEZpcnN0UGFnZSA9ICgpID0+IChcbiAgICA8RmFkZUluPlxuICAgICAgICB0aGlzIGlzIHRoZSBmaXJzdCBwYWdlXG4gICAgPC9GYWRlSW4+XG4pO1xuXG5jb25zdCBTZWNvbmRQYWdlID0gKCkgPT4gKFxuICAgIDxGYWRlSW4+XG4gICAgICAgIHRoaXMgaXMgdGhlIHNlY29uZCBwYWdlXG4gICAgPC9GYWRlSW4+XG4pO1xuXG5jb25zdCBUaGlyZFBhZ2UgPSAoKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgdGhpcyBpcyB0aGUgdGhpcmQgcGFnZSBqdXN0IGluc2lkZSBhIGJhc2ljIGRpdlxuICAgIDwvZGl2PlxuKTtcblxuY29uc3QgUmlnaHRTaWRlYmFyUGFnZSA9ICgpID0+IChcblxuICAgIDxSaWdodFNpZGViYXIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnfX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB0aGlzIGlzIHRoZSBsZWZ0IHNpZGViYXJcbiAgICAgICAgPC9kaXY+XG4gICAgPC9SaWdodFNpZGViYXI+XG5cbik7XG5cbmludGVyZmFjZSBUb2dnbGVyUHJvcHMge1xuICAgIHJlYWRvbmx5IG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFRvZ2dsZVZpc2liaWxpdHlCdXR0b24gPSAocHJvcHM6IFRvZ2dsZXJQcm9wcykgPT4gKFxuICAgIDxidXR0b24ga2V5PVwidG9nZ2xlLWJ1dHRvbi1pbXBsXCIgb25DbGljaz17KCkgPT4gcHJvcHMub25DbGljaygpfT50b2dnbGUgdmlzaWJpbGl0eTwvYnV0dG9uPlxuKTtcblxuXG5pbnRlcmZhY2UgVG9nZ2xlRmFkZVByb3BzIHtcbiAgICByZWFkb25seSBzaG93OiBib29sZWFuO1xuICAgIHJlYWRvbmx5IHRvZ2dsZTogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgVG9nZ2xlRmFkZSA9IChwcm9wczogVG9nZ2xlRmFkZVByb3BzKSA9PiB7XG5cbiAgICBpZiAocHJvcHMuc2hvdykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9XCJ0b2dnbGUtZmFkZVwiPlxuICAgICAgICAgICAgICAgIDxUb2dnbGVWaXNpYmlsaXR5QnV0dG9uIGtleT1cInRvZ2dsZS1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy50b2dnbGUoKX0vPlxuICAgICAgICAgICAgICAgIDxGYWRlSW4ga2V5PVwiZmFkZS1pblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cImZhZGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBzaG91bGQgZmFkZSBpbiBhbmQgb3V0IG9uIHRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0ZhZGVJbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT1cInRvZ2dsZS1mYWRlXCI+XG4gICAgICAgICAgICAgICAgPFRvZ2dsZVZpc2liaWxpdHlCdXR0b24ga2V5PVwidG9nZ2xlLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHByb3BzLnRvZ2dsZSgpfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5jb25zdCBUb2dnbGVWaXNpYmlsaXR5ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3Nob3csIHRvZ2dsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICA8VG9nZ2xlRmFkZSBrZXk9XCJ0b2dnbGUtZmFkZVwiIHNob3c9e3Nob3d9IHRvZ2dsZT17KCkgPT4gdG9nZ2xlKCEgc2hvdyl9Lz5cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgKTtcblxufTtcblxuLy8gVGhpcyBkb2Vzbid0IHdvcmsgd2hlbiBhbmltYXRpbmcgdGhlIGV4aXQgYW5pbWF0aW9ucy4gIEhlcmUncyB3aGF0IEkndmUgdHJpZWQ6XG5cbi8vIC0gSSd2ZSBjb25maXJtZWQgdGhhdCBoYXZpbmcgYSBjb21wb25lbnQgd2hpY2ggaGFzIGEgYnV0dG9uIGFuZCB0b2dnbGVzIHRuZSBwcmVzZW50cyB3aXRoaW4gYW4gQW5pbWF0ZVByZXNlbmNlXG4vLyAgIGRvZXMgaW4gZmFjdCBwbGF5IHRoZSBleGl0IGFuaW1hdGlvbi5cblxuZXhwb3J0IGNvbnN0IEFwcCA9ICgpID0+IChcblxuICAgIDxUb2dnbGVWaXNpYmlsaXR5Lz5cblxuICAgIC8vIDxIYXNoUm91dGVyIGtleT1cImJyb3dzZXItcm91dGVyXCIgaGFzaFR5cGU9XCJub3NsYXNoXCIgYmFzZW5hbWU9XCIvXCI+XG4gICAgLy8gICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cbiAgICAvLyAgICAgICAgIDxMaW5rIHRvPVwiL1wiPmhvbWU8L0xpbms+XG4gICAgLy8gICAgICAgICAmbmJzcDtcbiAgICAvLyAgICAgICAgIDxMaW5rIHRvPVwiL3NlY29uZFwiPnNlY29uZDwvTGluaz5cbiAgICAvLyAgICAgICAgICZuYnNwO1xuICAgIC8vICAgICAgICAgPExpbmsgdG89XCIvdGhpcmRcIj50aGlyZDwvTGluaz5cbiAgICAvLyAgICAgICAgICZuYnNwO1xuICAgIC8vICAgICAgICAgPExpbmsgdG89XCIvdG9nZ2xlclwiPnRvZ2dsZXI8L0xpbms+XG4gICAgLy8gICAgICAgICAmbmJzcDtcbiAgICAvLyAgICAgICAgIDxMaW5rIHRvPVwiL3NpZGViYXJcIj5zaWRlYmFyPC9MaW5rPlxuICAgIC8vICAgICA8L2Rpdj5cbiAgICAvL1xuICAgIC8vICAgICA8Um91dGUgcmVuZGVyPXsoeyBsb2NhdGlvbiB9KSA9PiAoXG4gICAgLy8gICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlciBpbml0aWFsPXtmYWxzZX0+XG4gICAgLy9cbiAgICAvLyAgICAgICAgICAgICA8U3dpdGNoPlxuICAgIC8vXG4gICAgLy8gICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvJyBjb21wb25lbnQ9e0ZpcnN0UGFnZX0gLz5cbiAgICAvLyAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy9zZWNvbmQnIGNvbXBvbmVudD17U2Vjb25kUGFnZX0gLz5cbiAgICAvLyAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy90aGlyZCcgY29tcG9uZW50PXtUaGlyZFBhZ2V9IC8+XG4gICAgLy8gICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvdG9nZ2xlcicgY29tcG9uZW50PXtUb2dnbGVWaXNpYmlsaXR5fSAvPlxuICAgIC8vICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nL3NpZGViYXInIGNvbXBvbmVudD17UmlnaHRTaWRlYmFyUGFnZX0gLz5cbiAgICAvL1xuICAgIC8vICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgIC8vICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgLy8gICAgICl9Lz5cbiAgICAvL1xuICAgIC8vIDwvSGFzaFJvdXRlcj5cblxuKTtcbiJdfQ==