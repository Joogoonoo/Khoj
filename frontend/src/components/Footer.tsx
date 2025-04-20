import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Footer.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3859ff4e"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/project/src/components/Footer.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=3859ff4e";
const Footer = () => {
  return /* @__PURE__ */ jsxDEV("footer", { className: "w-full py-3 bg-gray-100 text-sm text-gray-600", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "border-b border-gray-300 pb-3 mb-3", children: /* @__PURE__ */ jsxDEV("p", { children: "भारत" }, void 0, false, {
      fileName: "/home/project/src/components/Footer.tsx",
      lineNumber: 8,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/home/project/src/components/Footer.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row justify-between", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-4 mb-3 md:mb-0", children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "hover:underline", children: "खोज के बारे में" }, void 0, false, {
          fileName: "/home/project/src/components/Footer.tsx",
          lineNumber: 12,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "hover:underline", children: "व्यापार" }, void 0, false, {
          fileName: "/home/project/src/components/Footer.tsx",
          lineNumber: 13,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "hover:underline", children: "गोपनीयता" }, void 0, false, {
          fileName: "/home/project/src/components/Footer.tsx",
          lineNumber: 14,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "hover:underline", children: "शर्तें" }, void 0, false, {
          fileName: "/home/project/src/components/Footer.tsx",
          lineNumber: 15,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "hover:underline", children: "सेटिंग्स" }, void 0, false, {
          fileName: "/home/project/src/components/Footer.tsx",
          lineNumber: 16,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/components/Footer.tsx",
        lineNumber: 11,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "hover:underline", children: "विज्ञापन" }, void 0, false, {
          fileName: "/home/project/src/components/Footer.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "hover:underline", children: "व्यवसाय" }, void 0, false, {
          fileName: "/home/project/src/components/Footer.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "hover:underline", children: "खोज कैसे काम करती है" }, void 0, false, {
          fileName: "/home/project/src/components/Footer.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/components/Footer.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/components/Footer.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/project/src/components/Footer.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/project/src/components/Footer.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
};
_c = Footer;
export default Footer;
var _c;
$RefreshReg$(_c, "Footer");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/components/Footer.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/components/Footer.tsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
