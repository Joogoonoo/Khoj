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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBT1U7QUFQViwyQkFBc0I7QUFBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXhDLE1BQU1BLFNBQVNBLE1BQU07QUFDbkIsU0FDRSx1QkFBQyxZQUFPLFdBQVUsaURBQ2hCLGlDQUFDLFNBQUksV0FBVSwwQkFDYjtBQUFBLDJCQUFDLFNBQUksV0FBVSxzQ0FDYixpQ0FBQyxPQUFFLG9CQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTyxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FFQTtBQUFBLElBQ0EsdUJBQUMsU0FBSSxXQUFVLDZDQUNiO0FBQUEsNkJBQUMsU0FBSSxXQUFVLHFDQUNiO0FBQUEsK0JBQUMsUUFBSyxJQUFHLEtBQUksV0FBVSxtQkFBa0IsK0JBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBd0Q7QUFBQSxRQUN4RCx1QkFBQyxRQUFLLElBQUcsS0FBSSxXQUFVLG1CQUFrQix1QkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFnRDtBQUFBLFFBQ2hELHVCQUFDLFFBQUssSUFBRyxLQUFJLFdBQVUsbUJBQWtCLHdCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWlEO0FBQUEsUUFDakQsdUJBQUMsUUFBSyxJQUFHLEtBQUksV0FBVSxtQkFBa0Isc0JBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBK0M7QUFBQSxRQUMvQyx1QkFBQyxRQUFLLElBQUcsS0FBSSxXQUFVLG1CQUFrQix3QkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFpRDtBQUFBLFdBTG5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFNQTtBQUFBLE1BQ0EsdUJBQUMsU0FBSSxXQUFVLHdCQUNiO0FBQUEsK0JBQUMsUUFBSyxJQUFHLEtBQUksV0FBVSxtQkFBa0Isd0JBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBaUQ7QUFBQSxRQUNqRCx1QkFBQyxRQUFLLElBQUcsS0FBSSxXQUFVLG1CQUFrQix1QkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFnRDtBQUFBLFFBQ2hELHVCQUFDLFFBQUssSUFBRyxLQUFJLFdBQVUsbUJBQWtCLG9DQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTZEO0FBQUEsV0FIL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUlBO0FBQUEsU0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBYUE7QUFBQSxPQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBa0JBLEtBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FvQkE7QUFFSjtBQUFFQyxLQXhCSUQ7QUEwQk4sZUFBZUE7QUFBTyxJQUFBQztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiRm9vdGVyIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlcyI6WyJGb290ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInctZnVsbCBweS0zIGJnLWdyYXktMTAwIHRleHQtc20gdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIHBiLTMgbWItM1wiPlxuICAgICAgICAgIDxwPuCkreCkvuCksOCkpDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC00IG1iLTMgbWQ6bWItMFwiPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+4KSW4KWL4KScIOCkleClhyDgpKzgpL7gpLDgpYcg4KSu4KWH4KSCPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+4KS14KWN4KSv4KS+4KSq4KS+4KSwPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+4KSX4KWL4KSq4KSo4KWA4KSv4KSk4KS+PC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+4KS24KSw4KWN4KSk4KWH4KSCPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+4KS44KWH4KSf4KS/4KSC4KSX4KWN4KS4PC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiPuCkteCkv+CknOCljeCknuCkvuCkquCkqDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiPuCkteCljeCkr+CkteCkuOCkvuCkrzwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiPuCkluCli+CknCDgpJXgpYjgpLjgpYcg4KSV4KS+4KSuIOCkleCksOCkpOClgCDgpLngpYg8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4gXG4iXSwiZmlsZSI6Ii9ob21lL3Byb2plY3Qvc3JjL2NvbXBvbmVudHMvRm9vdGVyLnRzeCJ9
