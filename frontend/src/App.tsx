import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3859ff4e"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/project/src/App.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Routes, Route } from "/node_modules/.vite/deps/react-router-dom.js?v=3859ff4e";
import HomePage from "/src/pages/HomePage.tsx";
import SearchResultsPage from "/src/pages/SearchResultsPage.tsx";
import AdminPage from "/src/pages/AdminPage.tsx";
import CrawlerDashboard from "/src/pages/CrawlerDashboard.tsx";
import BigtableAdmin from "/src/pages/BigtableAdmin.tsx";
import BlobstoreAdmin from "/src/pages/BlobstoreAdmin.tsx";
import DownloadProject from "/src/components/DownloadProject.tsx";
function App() {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Routes, { children: [
      /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(HomePage, {}, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 14,
        columnNumber: 34
      }, this) }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/search", element: /* @__PURE__ */ jsxDEV(SearchResultsPage, {}, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 15,
        columnNumber: 40
      }, this) }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/admin", element: /* @__PURE__ */ jsxDEV(AdminPage, {}, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 16,
        columnNumber: 39
      }, this) }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/crawler-dashboard", element: /* @__PURE__ */ jsxDEV(CrawlerDashboard, {}, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 17,
        columnNumber: 51
      }, this) }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/bigtable-admin", element: /* @__PURE__ */ jsxDEV(BigtableAdmin, {}, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 18,
        columnNumber: 48
      }, this) }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/blobstore-admin", element: /* @__PURE__ */ jsxDEV(BlobstoreAdmin, {}, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 19,
        columnNumber: 49
      }, this) }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(DownloadProject, {}, void 0, false, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/project/src/App.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
_c = App;
export default App;
var _c;
$RefreshReg$(_c, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/App.tsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
