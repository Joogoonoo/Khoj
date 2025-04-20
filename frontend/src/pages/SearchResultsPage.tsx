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

//# sourceMappingURL=data:application/json;base64,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Q1gsdUJBQUMsT0FBWSxNQUFLLEtBQUksV0FBVSxpQ0FBaUNELGtCQUF6REMsS0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFzRTtBQUFBLFFBQ3ZFO0FBQUEsV0FWSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBV0EsS0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYUE7QUFBQSxTQTVFSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBOEVBO0FBQUEsSUFFQSx1QkFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTztBQUFBLE9BNUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0E2SEE7QUFFSjtBQUFFL0IsR0E3SklELG1CQUFpQjtBQUFBLFVBQ0pHLFdBQVc7QUFBQTtBQUFBOEIsS0FEeEJqQztBQStKTixlQUFlQTtBQUFrQixJQUFBaUM7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiU2VhcmNoQmFyIiwiRm9vdGVyIiwiU2VhcmNoIiwiSW1hZ2UiLCJGaWxlVGV4dCIsIlZpZGVvIiwiUGxheSIsIkJvb2siLCJNYXAiLCJGaWx0ZXIiLCJDaGV2cm9uRG93biIsIkNsb2NrIiwic2VhcmNoQXBpIiwiU2VhcmNoUmVzdWx0c1BhZ2UiLCJfcyIsImxvY2F0aW9uIiwidXNlTG9jYXRpb24iLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJxdWVyeSIsImdldCIsInNlYXJjaFJlc3VsdHMiLCJzZXRTZWFyY2hSZXN1bHRzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwZXJmb3JtU2VhcmNoIiwicmVzcG9uc2UiLCJyZXN1bHRzIiwiZXJyb3IiLCJjb25zb2xlIiwibGVuZ3RoIiwibWFwIiwicmVzdWx0IiwiaW5kZXgiLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiRGF0ZSIsImxhc3RDcmF3bGVkIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic2l6ZSIsInRvRml4ZWQiLCJudW0iLCJ0ZXJtIiwiaWR4IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlcyI6WyJTZWFyY2hSZXN1bHRzUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHsgU2VhcmNoLCBJbWFnZSwgRmlsZVRleHQsIFZpZGVvLCBQbGF5LCBDYWxlbmRhciwgQm9vaywgTWFwLCBGaWx0ZXIsIENoZXZyb25Eb3duLCBDbG9jayB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBzZWFyY2hBcGksIFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uL2FwaS9zZWFyY2hBcGknO1xuXG5jb25zdCBTZWFyY2hSZXN1bHRzUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCk7XG4gIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zLmdldCgncScpIHx8ICcnO1xuICBcbiAgY29uc3QgW3NlYXJjaFJlc3VsdHMsIHNldFNlYXJjaFJlc3VsdHNdID0gdXNlU3RhdGU8U2VhcmNoUmVzdWx0W10+KFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHBlcmZvcm1TZWFyY2ggPSBhc3luYyAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzZWFyY2hBcGkuc2VhcmNoKHF1ZXJ5KTtcbiAgICAgICAgc2V0U2VhcmNoUmVzdWx0cyhyZXNwb25zZS5yZXN1bHRzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NlYXJjaCBlcnJvcjonLCBlcnJvcik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGlmIChxdWVyeSkge1xuICAgICAgcGVyZm9ybVNlYXJjaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWFyY2hSZXN1bHRzKFtdKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSwgW3F1ZXJ5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgICA8SGVhZGVyIG1pbmltYWwgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTMgcHgtNFwiPlxuICAgICAgICAgICAgPFNlYXJjaEJhciBpbml0aWFsUXVlcnk9e3F1ZXJ5fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1zbSBnYXAtNiBweC00IHBiLTIgb3ZlcmZsb3cteC1hdXRvXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtcHJpbWFyeSBib3JkZXItYi0yIGJvcmRlci1wcmltYXJ5IHBiLTIgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgPFNlYXJjaCBzaXplPXsxNn0gY2xhc3NOYW1lPVwibXItMVwiIC8+XG4gICAgICAgICAgICAgIOCkuOCkrCDgpJXgpYHgpJtcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgICAgICAgPEltYWdlIHNpemU9ezE2fSBjbGFzc05hbWU9XCJtci0xXCIgLz5cbiAgICAgICAgICAgICAg4KSb4KS14KS/4KSv4KS+4KSCXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgICAgICAgIDxGaWxlVGV4dCBzaXplPXsxNn0gY2xhc3NOYW1lPVwibXItMVwiIC8+XG4gICAgICAgICAgICAgIOCkuOCkruCkvuCkmuCkvuCksFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICA8VmlkZW8gc2l6ZT17MTZ9IGNsYXNzTmFtZT1cIm1yLTFcIiAvPlxuICAgICAgICAgICAgICDgpLXgpYDgpKHgpL/gpK/gpYtcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgICAgICAgPE1hcCBzaXplPXsxNn0gY2xhc3NOYW1lPVwibXItMVwiIC8+XG4gICAgICAgICAgICAgIOCkruCkvuCkqOCkmuCkv+CkpOCljeCksFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICA8Qm9vayBzaXplPXsxNn0gY2xhc3NOYW1lPVwibXItMVwiIC8+XG4gICAgICAgICAgICAgIOCkleCkv+CkpOCkvuCkrOClh+CkglxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICA8UGxheSBzaXplPXsxNn0gY2xhc3NOYW1lPVwibXItMVwiIC8+XG4gICAgICAgICAgICAgIOCkieCkoeCkvOCkvuCkqFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICA8RmlsdGVyIHNpemU9ezE2fSBjbGFzc05hbWU9XCJtci0xXCIgLz5cbiAgICAgICAgICAgICAg4KSJ4KSq4KSV4KSw4KSjXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xIGNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgPHA+4KSy4KSX4KSt4KSXIDEsMjMsMDAsMDAwIOCkquCksOCkv+Cko+CkvuCkriAoMC42MiDgpLjgpYfgpJXgpILgpKEpPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB5LTIwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtc3BpbiByb3VuZGVkLWZ1bGwgaC0xMCB3LTEwIGJvcmRlci10LTIgYm9yZGVyLWItMiBib3JkZXItcHJpbWFyeVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgICAge3NlYXJjaFJlc3VsdHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTEwXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi00XCI+4KSV4KWL4KSIIOCkquCksOCkv+Cko+CkvuCkriDgpKjgpLngpYDgpIIg4KSu4KS/4KSy4KS+PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC1zbVwiPuCkheCkquCkqOClhyDgpJbgpYvgpJwg4KS24KSs4KWN4KSm4KWL4KSCIOCkleClgCDgpJzgpL7gpIHgpJog4KSV4KSw4KWH4KSCIOCkr+CkviDgpIXgpLLgpJcg4KSV4KWA4KS14KSw4KWN4KShIOCkleCkviDgpKrgpY3gpLDgpK/gpL7gpLgg4KSV4KSw4KWH4KSCPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMubWFwKChyZXN1bHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIHtyZXN1bHQudXJsfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWJsdWUtODAwIGhvdmVyOnVuZGVybGluZSBmb250LW1lZGl1bSBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e3Jlc3VsdC50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPntyZXN1bHQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xIHRleHQteHMgdGV4dC1ncmF5LTUwMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2xvY2sgc2l6ZT17MTJ9IGNsYXNzTmFtZT1cIm1yLTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUocmVzdWx0Lmxhc3RDcmF3bGVkKS50b0xvY2FsZURhdGVTdHJpbmcoKX0g4oCiIFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xXCI+eyhyZXN1bHQuc2l6ZSAvIDEwMjQpLnRvRml4ZWQoMSl9IEtCPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHtzZWFyY2hSZXN1bHRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0xMCBtYi0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1wcmltYXJ5IG1yLTRcIj5HPC9zcGFuPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICB7WzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXS5tYXAoKG51bSkgPT4gKFxuICAgICAgICAgICAgICAgICAgbnVtID09PSAxID8gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17bnVtfSBjbGFzc05hbWU9XCJ3LTggaC04IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7bnVtfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXtudW19IGNsYXNzTmFtZT1cInctOCBoLTggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6dW5kZXJsaW5lIHRleHQtYmx1ZS04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7bnVtfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtYmx1ZS04MDAgbWwtMlwiPlxuICAgICAgICAgICAgICAgICAg4KSF4KSX4KSy4KS+XG4gICAgICAgICAgICAgICAgICA8Q2hldnJvbkRvd24gY2xhc3NOYW1lPVwicm90YXRlLTI3MCBtbC0xXCIgc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAge3F1ZXJ5ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10IHB5LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTgganVzdGlmeS1jZW50ZXIgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICA8cD7gpIXgpKjgpY3gpK8g4KSy4KWL4KSXIOCkreClgCDgpJbgpYvgpJzgpKTgpYcg4KS54KWI4KSCOjwvcD5cbiAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICBgJHtxdWVyeX0g4KS44KSu4KS+4KSa4KS+4KSwYCxcbiAgICAgICAgICAgICAgICBgJHtxdWVyeX0g4KS14KS/4KSV4KS/4KSq4KWA4KSh4KS/4KSv4KS+YCxcbiAgICAgICAgICAgICAgICBgJHtxdWVyeX0g4KSV4KS+IOCkheCksOCljeCkpSDgpJXgpY3gpK/gpL4g4KS54KWIYCxcbiAgICAgICAgICAgICAgICBgJHtxdWVyeX0g4KSV4KWHIOCkq+CkvuCkr+CkpuClh2AsXG4gICAgICAgICAgICAgICAgYCR7cXVlcnl9IOCkleClhyDgpKjgpYHgpJXgpLjgpL7gpKhgXG4gICAgICAgICAgICAgIF0ubWFwKCh0ZXJtLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICA8YSBrZXk9e2lkeH0gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtODAwIGhvdmVyOnVuZGVybGluZVwiPnt0ZXJtfTwvYT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0c1BhZ2U7XG4gXG4iXSwiZmlsZSI6Ii9ob21lL3Byb2plY3Qvc3JjL3BhZ2VzL1NlYXJjaFJlc3VsdHNQYWdlLnRzeCJ9
