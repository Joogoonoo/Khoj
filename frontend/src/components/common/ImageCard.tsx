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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBYVE7QUFiUiwyQkFBc0I7QUFBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUzVDLE1BQU1BLFlBQVlBLENBQUMsRUFBRUMsVUFBVUMsT0FBT0MsYUFBYUMsS0FBcUIsTUFBTTtBQUM1RSxTQUNFLHVCQUFDLFNBQUksV0FBVSxnR0FDYjtBQUFBLDJCQUFDLFNBQUksV0FBVSx3QkFDYjtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsS0FBS0g7QUFBQUEsUUFDTCxLQUFLQztBQUFBQSxRQUNMLFdBQVU7QUFBQTtBQUFBLE1BSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBR3dDLEtBSjFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FNQTtBQUFBLElBQ0EsdUJBQUMsU0FBSSxXQUFVLE9BQ2I7QUFBQSw2QkFBQyxRQUFHLFdBQVUsMEJBQTBCQSxtQkFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUE4QztBQUFBLE1BQzlDLHVCQUFDLE9BQUUsV0FBVSw4QkFBOEJDLHlCQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXVEO0FBQUEsTUFFdERDLFFBQ0M7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE1BQU1BO0FBQUFBLFVBQ04sUUFBTztBQUFBLFVBQ1AsS0FBSTtBQUFBLFVBQ0osV0FBVTtBQUFBLFVBQWlGO0FBQUE7QUFBQSxZQUczRix1QkFBQyxnQkFBYSxNQUFNLElBQUksV0FBVSxVQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF3QztBQUFBO0FBQUE7QUFBQSxRQVAxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFRQTtBQUFBLFNBYko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWVBO0FBQUEsT0F2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXdCQTtBQUVKO0FBQUVDLEtBNUJJTDtBQThCTixlQUFlQTtBQUFVLElBQUFLO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJJbWFnZUNhcmQiLCJpbWFnZVVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsaW5rIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlcyI6WyJJbWFnZUNhcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyBFeHRlcm5hbExpbmsgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG50eXBlIEltYWdlQ2FyZFByb3BzID0ge1xuICBpbWFnZVVybDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBsaW5rPzogc3RyaW5nO1xufTtcblxuY29uc3QgSW1hZ2VDYXJkID0gKHsgaW1hZ2VVcmwsIHRpdGxlLCBkZXNjcmlwdGlvbiwgbGluayB9OiBJbWFnZUNhcmRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LW1kIGJnLXdoaXRlIGhvdmVyOnNoYWRvdy1sZyB0cmFuc2l0aW9uLXNoYWRvdyBkdXJhdGlvbi0zMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00OCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPGltZyBcbiAgICAgICAgICBzcmM9e2ltYWdlVXJsfSBcbiAgICAgICAgICBhbHQ9e3RpdGxlfSBcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZyBtYi0yXCI+e3RpdGxlfTwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1zbSBtYi0zXCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgXG4gICAgICAgIHtsaW5rICYmIChcbiAgICAgICAgICA8YSBcbiAgICAgICAgICAgIGhyZWY9e2xpbmt9IFxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXByaW1hcnkgaG92ZXI6dGV4dC1wcmltYXJ5LzgwIHRleHQtc20gZm9udC1tZWRpdW1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIOCklOCksCDgpJzgpL7gpKjgpYfgpIJcbiAgICAgICAgICAgIDxFeHRlcm5hbExpbmsgc2l6ZT17MTR9IGNsYXNzTmFtZT1cIm1sLTFcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDYXJkO1xuIFxuIl0sImZpbGUiOiIvaG9tZS9wcm9qZWN0L3NyYy9jb21wb25lbnRzL2NvbW1vbi9JbWFnZUNhcmQudHN4In0=
