import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/common/ImageCard.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3859ff4e"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/project/src/components/common/ImageCard.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { ExternalLink } from "/node_modules/.vite/deps/lucide-react.js?v=3859ff4e";
const ImageCard = ({ imageUrl, title, description, link }) => {
  return /* @__PURE__ */ jsxDEV("div", { className: "rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "h-48 overflow-hidden", children: /* @__PURE__ */ jsxDEV(
      "img",
      {
        src: imageUrl,
        alt: title,
        className: "w-full h-full object-cover"
      },
      void 0,
      false,
      {
        fileName: "/home/project/src/components/common/ImageCard.tsx",
        lineNumber: 14,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/home/project/src/components/common/ImageCard.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-lg mb-2", children: title }, void 0, false, {
        fileName: "/home/project/src/components/common/ImageCard.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 text-sm mb-3", children: description }, void 0, false, {
        fileName: "/home/project/src/components/common/ImageCard.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      link && /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: link,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium",
          children: [
            "और जानें",
            /* @__PURE__ */ jsxDEV(ExternalLink, { size: 14, className: "ml-1" }, void 0, false, {
              fileName: "/home/project/src/components/common/ImageCard.tsx",
              lineNumber: 32,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/home/project/src/components/common/ImageCard.tsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/home/project/src/components/common/ImageCard.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/project/src/components/common/ImageCard.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
};
_c = ImageCard;
export default ImageCard;
var _c;
$RefreshReg$(_c, "ImageCard");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/components/common/ImageCard.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/components/common/ImageCard.tsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
