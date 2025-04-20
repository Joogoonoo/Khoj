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
