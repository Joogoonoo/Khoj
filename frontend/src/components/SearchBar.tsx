import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/SearchBar.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3859ff4e"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/project/src/components/SearchBar.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=3859ff4e"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=3859ff4e";
import { Search, Mic, Camera } from "/node_modules/.vite/deps/lucide-react.js?v=3859ff4e";
import { searchApi } from "/src/api/searchApi.ts";
const SearchBar = ({ isHomePage = false, initialQuery = "" }) => {
  _s();
  const [query, setQuery] = useState(initialQuery);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 2) {
        setSuggestions([]);
        return;
      }
      setLoading(true);
      try {
        const response = await searchApi.getSuggestions(query);
        setSuggestions(response.suggestions);
        setShowSuggestions(true);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    };
    const timeoutId = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setShowSuggestions(false);
    }
  };
  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "relative w-full max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSearch, children: [
      /* @__PURE__ */ jsxDEV("div", { className: `flex items-center w-full px-4 py-2 rounded-full border border-gray-200 bg-white ${isHomePage ? "hover:shadow-md" : "shadow-sm"}`, children: [
        /* @__PURE__ */ jsxDEV(Search, { className: "text-gray-400 mr-3", size: 20 }, void 0, false, {
          fileName: "/home/project/src/components/SearchBar.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            type: "text",
            value: query,
            onChange: (e) => setQuery(e.target.value),
            onFocus: () => setShowSuggestions(true),
            onBlur: handleBlur,
            className: "w-full search-input bg-transparent border-none text-lg",
            placeholder: "खोज करें",
            autoFocus: isHomePage
          },
          void 0,
          false,
          {
            fileName: "/home/project/src/components/SearchBar.tsx",
            lineNumber: 60,
            columnNumber: 11
          },
          this
        ),
        query && /* @__PURE__ */ jsxDEV(
          "button",
          {
            type: "button",
            onClick: () => {
              setQuery("");
              setSuggestions([]);
              setShowSuggestions(false);
            },
            className: "text-gray-400 hover:text-gray-600 mr-2",
            children: "×"
          },
          void 0,
          false,
          {
            fileName: "/home/project/src/components/SearchBar.tsx",
            lineNumber: 71,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("button", { type: "button", className: "mx-2", "aria-label": "वॉइस सर्च", children: /* @__PURE__ */ jsxDEV(Mic, { className: "text-primary", size: 20 }, void 0, false, {
          fileName: "/home/project/src/components/SearchBar.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/project/src/components/SearchBar.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("button", { type: "button", "aria-label": "इमेज सर्च", children: /* @__PURE__ */ jsxDEV(Camera, { className: "text-primary", size: 20 }, void 0, false, {
          fileName: "/home/project/src/components/SearchBar.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/project/src/components/SearchBar.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/components/SearchBar.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      showSuggestions && suggestions.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "absolute top-full left-0 right-0 bg-white mt-1 rounded-lg shadow-lg border border-gray-200 z-10", children: suggestions.map(
        (suggestion, index) => /* @__PURE__ */ jsxDEV(
          "button",
          {
            type: "button",
            className: "w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center",
            onClick: () => {
              setQuery(suggestion);
              setShowSuggestions(false);
              navigate(`/search?q=${encodeURIComponent(suggestion)}`);
            },
            children: [
              /* @__PURE__ */ jsxDEV(Search, { size: 16, className: "text-gray-400 mr-3" }, void 0, false, {
                fileName: "/home/project/src/components/SearchBar.tsx",
                lineNumber: 104,
                columnNumber: 17
              }, this),
              suggestion
            ]
          },
          index,
          true,
          {
            fileName: "/home/project/src/components/SearchBar.tsx",
            lineNumber: 94,
            columnNumber: 11
          },
          this
        )
      ) }, void 0, false, {
        fileName: "/home/project/src/components/SearchBar.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/components/SearchBar.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    isHomePage && /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mt-6 space-x-2", children: [
      /* @__PURE__ */ jsxDEV("button", { type: "submit", onClick: handleSearch, className: "px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded text-sm", children: "खोज करें" }, void 0, false, {
        fileName: "/home/project/src/components/SearchBar.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { type: "button", className: "px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded text-sm", children: "मुझे भाग्यशाली लगता हूँ" }, void 0, false, {
        fileName: "/home/project/src/components/SearchBar.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/components/SearchBar.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/project/src/components/SearchBar.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
};
_s(SearchBar, "GnyGShFGPjgo0UekQrHP4E4AoAs=", false, function() {
  return [useNavigate];
});
_c = SearchBar;
export default SearchBar;
var _c;
$RefreshReg$(_c, "SearchBar");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/components/SearchBar.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/components/SearchBar.tsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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REFBd0Qsd0JBQS9HO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFQTtBQUFBLE1BQ0EsdUJBQUMsWUFBTyxNQUFLLFVBQVMsV0FBVSwwREFBd0QsdUNBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFQTtBQUFBLFNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQU9BO0FBQUEsT0FoRUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWtFQTtBQUVKO0FBQUVwQixHQWpISUgsV0FBUztBQUFBLFVBS0lMLFdBQVc7QUFBQTtBQUFBdUMsS0FMeEJsQztBQW1ITixlQUFlQTtBQUFVLElBQUFrQztBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlTmF2aWdhdGUiLCJTZWFyY2giLCJNaWMiLCJDYW1lcmEiLCJzZWFyY2hBcGkiLCJTZWFyY2hCYXIiLCJpc0hvbWVQYWdlIiwiaW5pdGlhbFF1ZXJ5IiwiX3MiLCJxdWVyeSIsInNldFF1ZXJ5IiwidXNlU3RhdGUiLCJzdWdnZXN0aW9ucyIsInNldFN1Z2dlc3Rpb25zIiwic2hvd1N1Z2dlc3Rpb25zIiwic2V0U2hvd1N1Z2dlc3Rpb25zIiwibG9hZGluZyIsInNldExvYWRpbmciLCJuYXZpZ2F0ZSIsImZldGNoU3VnZ2VzdGlvbnMiLCJsZW5ndGgiLCJyZXNwb25zZSIsImdldFN1Z2dlc3Rpb25zIiwiZXJyb3IiLCJjb25zb2xlIiwidGltZW91dElkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImhhbmRsZVNlYXJjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJlbmNvZGVVUklDb21wb25lbnQiLCJoYW5kbGVCbHVyIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJzdWdnZXN0aW9uIiwiaW5kZXgiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VzIjpbIlNlYXJjaEJhci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgU2VhcmNoLCBNaWMsIENhbWVyYSB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBzZWFyY2hBcGkgfSBmcm9tICcuLi9hcGkvc2VhcmNoQXBpJztcblxudHlwZSBTZWFyY2hCYXJQcm9wcyA9IHtcbiAgaXNIb21lUGFnZT86IGJvb2xlYW47XG4gIGluaXRpYWxRdWVyeT86IHN0cmluZztcbn07XG5cbmNvbnN0IFNlYXJjaEJhciA9ICh7IGlzSG9tZVBhZ2UgPSBmYWxzZSwgaW5pdGlhbFF1ZXJ5ID0gJycgfTogU2VhcmNoQmFyUHJvcHMpID0+IHtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShpbml0aWFsUXVlcnkpO1xuICBjb25zdCBbc3VnZ2VzdGlvbnMsIHNldFN1Z2dlc3Rpb25zXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtzaG93U3VnZ2VzdGlvbnMsIHNldFNob3dTdWdnZXN0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFN1Z2dlc3Rpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKHF1ZXJ5Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgc2V0U3VnZ2VzdGlvbnMoW10pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNlYXJjaEFwaS5nZXRTdWdnZXN0aW9ucyhxdWVyeSk7XG4gICAgICAgIHNldFN1Z2dlc3Rpb25zKHJlc3BvbnNlLnN1Z2dlc3Rpb25zKTtcbiAgICAgICAgc2V0U2hvd1N1Z2dlc3Rpb25zKHRydWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc3VnZ2VzdGlvbnM6JywgZXJyb3IpO1xuICAgICAgICBzZXRTdWdnZXN0aW9ucyhbXSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZmV0Y2hTdWdnZXN0aW9ucywgMzAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gIH0sIFtxdWVyeV0pO1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHF1ZXJ5LnRyaW0oKSkge1xuICAgICAgbmF2aWdhdGUoYC9zZWFyY2g/cT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9YCk7XG4gICAgICBzZXRTaG93U3VnZ2VzdGlvbnMoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgIC8vIFVzZSB0aW1lb3V0IHRvIGFsbG93IGNsaWNrIG9uIHN1Z2dlc3Rpb24gYmVmb3JlIGhpZGluZ1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0U2hvd1N1Z2dlc3Rpb25zKGZhbHNlKSwgMjAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIG1heC13LTJ4bCBteC1hdXRvXCI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2VhcmNofT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgcHgtNCBweS0yIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIGJnLXdoaXRlICR7aXNIb21lUGFnZSA/ICdob3ZlcjpzaGFkb3ctbWQnIDogJ3NoYWRvdy1zbSd9YH0+XG4gICAgICAgICAgPFNlYXJjaCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIG1yLTNcIiBzaXplPXsyMH0gLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0U2hvd1N1Z2dlc3Rpb25zKHRydWUpfVxuICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHNlYXJjaC1pbnB1dCBiZy10cmFuc3BhcmVudCBib3JkZXItbm9uZSB0ZXh0LWxnXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4KSW4KWL4KScIOCkleCksOClh+CkglwiXG4gICAgICAgICAgICBhdXRvRm9jdXM9e2lzSG9tZVBhZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7cXVlcnkgJiYgKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFF1ZXJ5KCcnKTtcbiAgICAgICAgICAgICAgICBzZXRTdWdnZXN0aW9ucyhbXSk7XG4gICAgICAgICAgICAgICAgc2V0U2hvd1N1Z2dlc3Rpb25zKGZhbHNlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktNjAwIG1yLTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDDl1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJteC0yXCIgYXJpYS1sYWJlbD1cIuCkteClieCkh+CkuCDgpLjgpLDgpY3gpJpcIj5cbiAgICAgICAgICAgIDxNaWMgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCIgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cIuCkh+CkruClh+CknCDgpLjgpLDgpY3gpJpcIj5cbiAgICAgICAgICAgIDxDYW1lcmEgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCIgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAge3Nob3dTdWdnZXN0aW9ucyAmJiBzdWdnZXN0aW9ucy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC1mdWxsIGxlZnQtMCByaWdodC0wIGJnLXdoaXRlIG10LTEgcm91bmRlZC1sZyBzaGFkb3ctbGcgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB6LTEwXCI+XG4gICAgICAgICAgICB7c3VnZ2VzdGlvbnMubWFwKChzdWdnZXN0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIHRleHQtbGVmdCBob3ZlcjpiZy1ncmF5LTEwMCBmbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0UXVlcnkoc3VnZ2VzdGlvbik7XG4gICAgICAgICAgICAgICAgICBzZXRTaG93U3VnZ2VzdGlvbnMoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoYC9zZWFyY2g/cT0ke2VuY29kZVVSSUNvbXBvbmVudChzdWdnZXN0aW9uKX1gKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFNlYXJjaCBzaXplPXsxNn0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBtci0zXCIgLz5cbiAgICAgICAgICAgICAgICB7c3VnZ2VzdGlvbn1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZm9ybT5cbiAgICAgIFxuICAgICAge2lzSG9tZVBhZ2UgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtNiBzcGFjZS14LTJcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9IGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ncmF5LTUwIGhvdmVyOmJnLWdyYXktMTAwIHJvdW5kZWQgdGV4dC1zbVwiPlxuICAgICAgICAgICAg4KSW4KWL4KScIOCkleCksOClh+CkglxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ncmF5LTUwIGhvdmVyOmJnLWdyYXktMTAwIHJvdW5kZWQgdGV4dC1zbVwiPlxuICAgICAgICAgICAg4KSu4KWB4KSd4KWHIOCkreCkvuCkl+CljeCkr+CktuCkvuCksuClgCDgpLLgpJfgpKTgpL4g4KS54KWC4KSBXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcbiBcbiJdLCJmaWxlIjoiL2hvbWUvcHJvamVjdC9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIudHN4In0=
