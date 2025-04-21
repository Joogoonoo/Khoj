import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/SearchResultsPage.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3859ff4e"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/project/src/pages/SearchResultsPage.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=3859ff4e";
import __vite__cjsImport4_react from "/node_modules/.vite/deps/react.js?v=3859ff4e"; const useEffect = __vite__cjsImport4_react["useEffect"]; const useState = __vite__cjsImport4_react["useState"];
import Header from "/src/components/Header.tsx";
import SearchBar from "/src/components/SearchBar.tsx";
import Footer from "/src/components/Footer.tsx";
import { Search, Image, FileText, Video, Play, Book, Map, Filter, ChevronDown, Clock } from "/node_modules/.vite/deps/lucide-react.js?v=3859ff4e";
import { searchApi } from "/src/api/searchApi.ts";
const SearchResultsPage = () => {
  _s();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const performSearch = async () => {
      setLoading(true);
      try {
        const response = await searchApi.search(query);
        setSearchResults(response.results);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    };
    if (query) {
      performSearch();
    } else {
      setSearchResults([]);
      setLoading(false);
    }
  }, [query]);
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "border-b", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto", children: [
      /* @__PURE__ */ jsxDEV(Header, { minimal: true }, void 0, false, {
        fileName: "/home/project/src/pages/SearchResultsPage.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "py-3 px-4", children: /* @__PURE__ */ jsxDEV(SearchBar, { initialQuery: query }, void 0, false, {
        fileName: "/home/project/src/pages/SearchResultsPage.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/project/src/pages/SearchResultsPage.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center text-sm gap-6 px-4 pb-2 overflow-x-auto", children: [
        /* @__PURE__ */ jsxDEV("button", { className: "flex items-center text-primary border-b-2 border-primary pb-2 font-medium", children: [
          /* @__PURE__ */ jsxDEV(Search, { size: 16, className: "mr-1" }, void 0, false, {
            fileName: "/home/project/src/pages/SearchResultsPage.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this),
          "सब कुछ"
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/SearchResultsPage.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "flex items-center text-gray-600 hover:text-gray-800", children: [
          /* @__PURE__ */ jsxDEV(Image, { size: 16, className: "mr-1" }, void 0, false, {
            fileName: "/home/project/src/pages/SearchResultsPage.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, this),
          "छवियां"
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/SearchResultsPage.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "flex items-center text-gray-600 hover:text-gray-800", children: [
          /* @__PURE__ */ jsxDEV(FileText, { size: 16, className: "mr-1" }, void 0, false, {
            fileName: "/home/project/src/pages/SearchResultsPage.tsx",
            lineNumber: 56,
            columnNumber: 15
          }, this),
          "समाचार"
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/SearchResultsPage.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "flex items-center text-gray-600 hover:text-gray-800", children: [
          /* @__PURE__ */ jsxDEV(Video, { size: 16, className: "mr-1" }, void 0, false, {
            fileName: "/home/project/src/pages/SearchResultsPage.tsx",
            lineNumber: 60,
            columnNumber: 15
          }, this),
          "वीडियो"
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/SearchResultsPage.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "flex items-center text-gray-600 hover:text-gray-800", children: [
          /* @__PURE__ */ jsxDEV(Map, { size: 16, className: "mr-1" }, void 0, false, {
            fileName: "/home/project/src/pages/SearchResultsPage.tsx",
            lineNumber: 64,
            columnNumber: 15
          }, this),
          "मानचित्र"
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/SearchResultsPage.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "flex items-center text-gray-600 hover:text-gray-800", children: [
          /* @__PURE__ */ jsxDEV(Book, { size: 16, className: "mr-1" }, void 0, false, {
            fileName: "/home/project/src/pages/SearchResultsPage.tsx",
            lineNumber: 68,
            columnNumber: 15
          }, this),
          "किताबें"
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/SearchResultsPage.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "flex items-center text-gray-600 hover:text-gray-800", children: [
          /* @__PURE__ */ jsxDEV(Play, { size: 16, className: "mr-1" }, void 0, false, {
            fileName: "/home/project/src/pages/SearchResultsPage.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, this),
          "उड़ान"
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/SearchResultsPage.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "flex items-center text-gray-600 hover:text-gray-800", children: [
          /* @__PURE__ */ jsxDEV(Filter, { size: 16, className: "mr-1" }, void 0, false, {
            fileName: "/home/project/src/pages/SearchResultsPage.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this),
          "उपकरण"
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/SearchResultsPage.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/SearchResultsPage.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/pages/SearchResultsPage.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/project/src/pages/SearchResultsPage.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "flex-1 container mx-auto px-4 py-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "mb-4 text-sm text-gray-600", children: /* @__PURE__ */ jsxDEV("p", { children: "लगभग 1,23,00,000 परिणाम (0.62 सेकंड)" }, void 0, false, {
        fileName: "/home/project/src/pages/SearchResultsPage.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/project/src/pages/SearchResultsPage.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      loading ? /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center items-center py-20", children: /* @__PURE__ */ jsxDEV("div", { className: "animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary" }, void 0, false, {
        fileName: "/home/project/src/pages/SearchResultsPage.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/project/src/pages/SearchResultsPage.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this) : /* @__PURE__ */ jsxDEV("div", { className: "mb-8", children: searchResults.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "text-center py-10", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 mb-4", children: "कोई परिणाम नहीं मिला" }, void 0, false, {
          fileName: "/home/project/src/pages/SearchResultsPage.tsx",
          lineNumber: 96,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-500 text-sm", children: "अपने खोज शब्दों की जाँच करें या अलग कीवर्ड का प्रयास करें" }, void 0, false, {
          fileName: "/home/project/src/pages/SearchResultsPage.tsx",
          lineNumber: 97,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/SearchResultsPage.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this) : searchResults.map(
        (result, index) => /* @__PURE__ */ jsxDEV("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-gray-600 mb-1", children: result.url }, void 0, false, {
            fileName: "/home/project/src/pages/SearchResultsPage.tsx",
            lineNumber: 102,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl text-blue-800 hover:underline font-medium mb-1", children: /* @__PURE__ */ jsxDEV("a", { href: "#", children: result.title }, void 0, false, {
            fileName: "/home/project/src/pages/SearchResultsPage.tsx",
            lineNumber: 106,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/home/project/src/pages/SearchResultsPage.tsx",
            lineNumber: 105,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", children: result.description }, void 0, false, {
            fileName: "/home/project/src/pages/SearchResultsPage.tsx",
            lineNumber: 108,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-1 text-xs text-gray-500 flex items-center", children: [
            /* @__PURE__ */ jsxDEV(Clock, { size: 12, className: "mr-1" }, void 0, false, {
              fileName: "/home/project/src/pages/SearchResultsPage.tsx",
              lineNumber: 110,
              columnNumber: 21
            }, this),
            new Date(result.lastCrawled).toLocaleDateString(),
            " •",
            /* @__PURE__ */ jsxDEV("span", { className: "ml-1", children: [
              (result.size / 1024).toFixed(1),
              " KB"
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/SearchResultsPage.tsx",
              lineNumber: 112,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/SearchResultsPage.tsx",
            lineNumber: 109,
            columnNumber: 19
          }, this)
        ] }, index, true, {
          fileName: "/home/project/src/pages/SearchResultsPage.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this)
      ) }, void 0, false, {
        fileName: "/home/project/src/pages/SearchResultsPage.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      searchResults.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center mt-10 mb-12", children: /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-2xl text-primary mr-4", children: "G" }, void 0, false, {
          fileName: "/home/project/src/pages/SearchResultsPage.tsx",
          lineNumber: 123,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: [
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
            (num) => num === 1 ? /* @__PURE__ */ jsxDEV("button", { className: "w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white", children: num }, num, false, {
              fileName: "/home/project/src/pages/SearchResultsPage.tsx",
              lineNumber: 127,
              columnNumber: 15
            }, this) : /* @__PURE__ */ jsxDEV("button", { className: "w-8 h-8 flex items-center justify-center hover:underline text-blue-800", children: num }, num, false, {
              fileName: "/home/project/src/pages/SearchResultsPage.tsx",
              lineNumber: 131,
              columnNumber: 15
            }, this)
          ),
          /* @__PURE__ */ jsxDEV("button", { className: "flex items-center justify-center text-blue-800 ml-2", children: [
            "अगला",
            /* @__PURE__ */ jsxDEV(ChevronDown, { className: "rotate-270 ml-1", size: 16 }, void 0, false, {
              fileName: "/home/project/src/pages/SearchResultsPage.tsx",
              lineNumber: 138,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/SearchResultsPage.tsx",
            lineNumber: 136,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/SearchResultsPage.tsx",
          lineNumber: 124,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/SearchResultsPage.tsx",
        lineNumber: 122,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/project/src/pages/SearchResultsPage.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      query && /* @__PURE__ */ jsxDEV("div", { className: "border-t py-4", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-8 justify-center text-sm", children: [
        /* @__PURE__ */ jsxDEV("p", { children: "अन्य लोग भी खोजते हैं:" }, void 0, false, {
          fileName: "/home/project/src/pages/SearchResultsPage.tsx",
          lineNumber: 148,
          columnNumber: 15
        }, this),
        [
          `${query} समाचार`,
          `${query} विकिपीडिया`,
          `${query} का अर्थ क्या है`,
          `${query} के फायदे`,
          `${query} के नुकसान`
        ].map(
          (term, idx) => /* @__PURE__ */ jsxDEV("a", { href: "#", className: "text-blue-800 hover:underline", children: term }, idx, false, {
            fileName: "/home/project/src/pages/SearchResultsPage.tsx",
            lineNumber: 156,
            columnNumber: 13
          }, this)
        )
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/SearchResultsPage.tsx",
        lineNumber: 147,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/project/src/pages/SearchResultsPage.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/pages/SearchResultsPage.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/home/project/src/pages/SearchResultsPage.tsx",
      lineNumber: 163,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/project/src/pages/SearchResultsPage.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
};
_s(SearchResultsPage, "Myaru5QRFPiYqGcggwhb/40OTa0=", false, function() {
  return [useLocation];
});
_c = SearchResultsPage;
export default SearchResultsPage;
var _c;
$RefreshReg$(_c, "SearchResultsPage");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/pages/SearchResultsPage.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/pages/SearchResultsPage.tsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
