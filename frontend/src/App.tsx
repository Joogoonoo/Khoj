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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBV0ksbUJBRTZCLGNBRjdCO0FBWEosMkJBQXVCO0FBQVEsTUFBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pELE9BQU9BLGNBQWM7QUFDckIsT0FBT0MsdUJBQXVCO0FBQzlCLE9BQU9DLGVBQWU7QUFDdEIsT0FBT0Msc0JBQXNCO0FBQzdCLE9BQU9DLG1CQUFtQjtBQUMxQixPQUFPQyxvQkFBb0I7QUFDM0IsT0FBT0MscUJBQXFCO0FBRTVCLFNBQVNDLE1BQU07QUFDYixTQUNFLG1DQUNFO0FBQUEsMkJBQUMsVUFDQztBQUFBLDZCQUFDLFNBQU0sTUFBSyxLQUFJLFNBQVMsdUJBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVMsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFzQztBQUFBLE1BQ3RDLHVCQUFDLFNBQU0sTUFBSyxXQUFVLFNBQVMsdUJBQUMsdUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFrQixLQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXFEO0FBQUEsTUFDckQsdUJBQUMsU0FBTSxNQUFLLFVBQVMsU0FBUyx1QkFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBVSxLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTRDO0FBQUEsTUFDNUMsdUJBQUMsU0FBTSxNQUFLLHNCQUFxQixTQUFTLHVCQUFDLHNCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBaUIsS0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUErRDtBQUFBLE1BQy9ELHVCQUFDLFNBQU0sTUFBSyxtQkFBa0IsU0FBUyx1QkFBQyxtQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWMsS0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF5RDtBQUFBLE1BQ3pELHVCQUFDLFNBQU0sTUFBSyxvQkFBbUIsU0FBUyx1QkFBQyxvQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWUsS0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUEyRDtBQUFBLFNBTjdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FPQTtBQUFBLElBQ0EsdUJBQUMscUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFnQjtBQUFBLE9BVGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FVQTtBQUVKO0FBQUNDLEtBZFFEO0FBZ0JULGVBQWVBO0FBQUksSUFBQUM7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIkhvbWVQYWdlIiwiU2VhcmNoUmVzdWx0c1BhZ2UiLCJBZG1pblBhZ2UiLCJDcmF3bGVyRGFzaGJvYXJkIiwiQmlndGFibGVBZG1pbiIsIkJsb2JzdG9yZUFkbWluIiwiRG93bmxvYWRQcm9qZWN0IiwiQXBwIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlcyI6WyJBcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyBSb3V0ZXMsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi9wYWdlcy9Ib21lUGFnZSc7XG5pbXBvcnQgU2VhcmNoUmVzdWx0c1BhZ2UgZnJvbSAnLi9wYWdlcy9TZWFyY2hSZXN1bHRzUGFnZSc7XG5pbXBvcnQgQWRtaW5QYWdlIGZyb20gJy4vcGFnZXMvQWRtaW5QYWdlJztcbmltcG9ydCBDcmF3bGVyRGFzaGJvYXJkIGZyb20gJy4vcGFnZXMvQ3Jhd2xlckRhc2hib2FyZCc7XG5pbXBvcnQgQmlndGFibGVBZG1pbiBmcm9tICcuL3BhZ2VzL0JpZ3RhYmxlQWRtaW4nO1xuaW1wb3J0IEJsb2JzdG9yZUFkbWluIGZyb20gJy4vcGFnZXMvQmxvYnN0b3JlQWRtaW4nO1xuaW1wb3J0IERvd25sb2FkUHJvamVjdCBmcm9tICcuL2NvbXBvbmVudHMvRG93bmxvYWRQcm9qZWN0JztcblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Um91dGVzPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZVBhZ2UgLz59IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL3NlYXJjaFwiIGVsZW1lbnQ9ezxTZWFyY2hSZXN1bHRzUGFnZSAvPn0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRtaW5cIiBlbGVtZW50PXs8QWRtaW5QYWdlIC8+fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9jcmF3bGVyLWRhc2hib2FyZFwiIGVsZW1lbnQ9ezxDcmF3bGVyRGFzaGJvYXJkIC8+fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9iaWd0YWJsZS1hZG1pblwiIGVsZW1lbnQ9ezxCaWd0YWJsZUFkbWluIC8+fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9ibG9ic3RvcmUtYWRtaW5cIiBlbGVtZW50PXs8QmxvYnN0b3JlQWRtaW4gLz59IC8+XG4gICAgICA8L1JvdXRlcz5cbiAgICAgIDxEb3dubG9hZFByb2plY3QgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIFxuIl0sImZpbGUiOiIvaG9tZS9wcm9qZWN0L3NyYy9BcHAudHN4In0=
