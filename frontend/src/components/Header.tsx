import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Header.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3859ff4e"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "/home/project/src/components/Header.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=3859ff4e";
import { Settings, Grid, User } from "/node_modules/.vite/deps/lucide-react.js?v=3859ff4e";
const Header = ({ minimal = false }) => {
  return /* @__PURE__ */ jsxDEV("header", { className: `w-full ${minimal ? "py-2" : "py-4"}`, children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center", children: [
    minimal && /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl font-bold", children: [
      /* @__PURE__ */ jsxDEV("span", { className: "text-primary", children: "ख" }, void 0, false, {
        fileName: "/home/project/src/components/Header.tsx",
        lineNumber: 16,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: "text-secondary", children: "ो" }, void 0, false, {
        fileName: "/home/project/src/components/Header.tsx",
        lineNumber: 17,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: "text-tertiary", children: "ज" }, void 0, false, {
        fileName: "/home/project/src/components/Header.tsx",
        lineNumber: 18,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/components/Header.tsx",
      lineNumber: 15,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "/home/project/src/components/Header.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: `flex items-center ml-auto gap-4`, children: [
      /* @__PURE__ */ jsxDEV("button", { className: "p-2 rounded-full hover:bg-gray-100", "aria-label": "सेटिंग्स", children: /* @__PURE__ */ jsxDEV(Settings, { size: 20 }, void 0, false, {
        fileName: "/home/project/src/components/Header.tsx",
        lineNumber: 24,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/home/project/src/components/Header.tsx",
        lineNumber: 23,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "p-2 rounded-full hover:bg-gray-100", "aria-label": "गूगल ऐप्स", children: /* @__PURE__ */ jsxDEV(Grid, { size: 20 }, void 0, false, {
        fileName: "/home/project/src/components/Header.tsx",
        lineNumber: 27,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/home/project/src/components/Header.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "p-2 rounded-full hover:bg-gray-100 bg-blue-500 text-white", "aria-label": "प्रोफाइल", children: /* @__PURE__ */ jsxDEV(User, { size: 20 }, void 0, false, {
        fileName: "/home/project/src/components/Header.tsx",
        lineNumber: 30,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/home/project/src/components/Header.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/components/Header.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "/home/project/src/components/Header.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/home/project/src/components/Header.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/project/src/components/Header.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
};
_c = Header;
export default Header;
var _c;
$RefreshReg$(_c, "Header");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/components/Header.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/components/Header.tsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZWdCO0FBZmhCLDJCQUFzQjtBQUFrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeEMsU0FBaUJBLFVBQVVDLE1BQU1DLFlBQVk7QUFNN0MsTUFBTUMsU0FBU0EsQ0FBQyxFQUFFQyxVQUFVLE1BQW1CLE1BQU07QUFDbkQsU0FDRSx1QkFBQyxZQUFPLFdBQVcsVUFBVUEsVUFBVSxTQUFTLE1BQU0sSUFDcEQsaUNBQUMsU0FBSSxXQUFVLDBCQUNiLGlDQUFDLFNBQUksV0FBVSxxQ0FDWkE7QUFBQUEsZUFDQyx1QkFBQyxRQUFLLElBQUcsS0FBSSxXQUFVLHFCQUNyQixpQ0FBQyxRQUFHLFdBQVUsc0JBQ1o7QUFBQSw2QkFBQyxVQUFLLFdBQVUsZ0JBQWUsaUJBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBZ0M7QUFBQSxNQUNoQyx1QkFBQyxVQUFLLFdBQVUsa0JBQWlCLGlCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWtDO0FBQUEsTUFDbEMsdUJBQUMsVUFBSyxXQUFVLGlCQUFnQixpQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFpQztBQUFBLFNBSG5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FJQSxLQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FNQTtBQUFBLElBRUYsdUJBQUMsU0FBSSxXQUFXLG1DQUNkO0FBQUEsNkJBQUMsWUFBTyxXQUFVLHNDQUFxQyxjQUFXLFlBQ2hFLGlDQUFDLFlBQVMsTUFBTSxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQW1CLEtBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFQTtBQUFBLE1BQ0EsdUJBQUMsWUFBTyxXQUFVLHNDQUFxQyxjQUFXLGFBQ2hFLGlDQUFDLFFBQUssTUFBTSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBZSxLQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUE7QUFBQSxNQUNBLHVCQUFDLFlBQU8sV0FBVSw2REFBNEQsY0FBVyxZQUN2RixpQ0FBQyxRQUFLLE1BQU0sTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWUsS0FEakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUVBO0FBQUEsU0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBVUE7QUFBQSxPQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBcUJBLEtBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F1QkEsS0F4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXlCQTtBQUVKO0FBQUVDLEtBN0JJRjtBQStCTixlQUFlQTtBQUFPLElBQUFFO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJTZXR0aW5ncyIsIkdyaWQiLCJVc2VyIiwiSGVhZGVyIiwibWluaW1hbCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZXMiOlsiSGVhZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgU2VhcmNoLCBTZXR0aW5ncywgR3JpZCwgVXNlciB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbnR5cGUgSGVhZGVyUHJvcHMgPSB7XG4gIG1pbmltYWw/OiBib29sZWFuO1xufTtcblxuY29uc3QgSGVhZGVyID0gKHsgbWluaW1hbCA9IGZhbHNlIH06IEhlYWRlclByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2B3LWZ1bGwgJHttaW5pbWFsID8gJ3B5LTInIDogJ3B5LTQnfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAge21pbmltYWwgJiYgKFxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPuCkljwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeVwiPuClizwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXRlcnRpYXJ5XCI+4KScPC9zcGFuPlxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBtbC1hdXRvIGdhcC00YH0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLWZ1bGwgaG92ZXI6YmctZ3JheS0xMDBcIiBhcmlhLWxhYmVsPVwi4KS44KWH4KSf4KS/4KSC4KSX4KWN4KS4XCI+XG4gICAgICAgICAgICAgIDxTZXR0aW5ncyBzaXplPXsyMH0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1mdWxsIGhvdmVyOmJnLWdyYXktMTAwXCIgYXJpYS1sYWJlbD1cIuCkl+ClguCkl+CksiDgpJDgpKrgpY3gpLhcIj5cbiAgICAgICAgICAgICAgPEdyaWQgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0yIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy1ncmF5LTEwMCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlXCIgYXJpYS1sYWJlbD1cIuCkquCljeCksOCli+Ckq+CkvuCkh+CkslwiPlxuICAgICAgICAgICAgICA8VXNlciBzaXplPXsyMH0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIFxuIl0sImZpbGUiOiIvaG9tZS9wcm9qZWN0L3NyYy9jb21wb25lbnRzL0hlYWRlci50c3gifQ==
