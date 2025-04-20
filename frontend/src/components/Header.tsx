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
