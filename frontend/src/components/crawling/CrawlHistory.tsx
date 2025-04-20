import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/crawling/CrawlHistory.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3859ff4e"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/project/src/components/crawling/CrawlHistory.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=3859ff4e"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { Clock, Check, AlertTriangle } from "/node_modules/.vite/deps/lucide-react.js?v=3859ff4e";
import { crawlerApi } from "/src/api/crawlerApi.ts";
const CrawlHistory = () => {
  _s();
  const [crawls, setCrawls] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCrawls = async () => {
      try {
        const data = await crawlerApi.getRecentCrawls(5);
        setCrawls(data);
      } catch (error) {
        console.error("Error fetching crawl history:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCrawls();
  }, []);
  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  };
  if (loading) {
    return /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-lg shadow-md animate-pulse", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "h-4 bg-gray-200 rounded w-1/2 mb-4" }, void 0, false, {
        fileName: "/home/project/src/components/crawling/CrawlHistory.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      [...Array(5)].map(
        (_, i) => /* @__PURE__ */ jsxDEV("div", { className: "h-14 bg-gray-200 rounded mb-2" }, i, false, {
          fileName: "/home/project/src/components/crawling/CrawlHistory.tsx",
          lineNumber: 33,
          columnNumber: 9
        }, this)
      )
    ] }, void 0, true, {
      fileName: "/home/project/src/components/crawling/CrawlHistory.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
    /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold mb-4", children: "हाल की क्रॉलिंग" }, void 0, false, {
      fileName: "/home/project/src/components/crawling/CrawlHistory.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    crawls.length === 0 ? /* @__PURE__ */ jsxDEV("p", { className: "text-gray-500", children: "कोई हाल की क्रॉलिंग नहीं मिली" }, void 0, false, {
      fileName: "/home/project/src/components/crawling/CrawlHistory.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this) : /* @__PURE__ */ jsxDEV("div", { children: [
      crawls.map(
        (crawl, index) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: `p-3 mb-2 rounded flex items-center justify-between ${crawl.status === "success" ? "bg-green-50" : "bg-red-50"}`,
            children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV(
                  "a",
                  {
                    href: crawl.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-blue-600 hover:underline font-medium",
                    children: crawl.url
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/project/src/components/crawling/CrawlHistory.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-gray-500 flex items-center mt-1", children: [
                  /* @__PURE__ */ jsxDEV(Clock, { size: 12, className: "mr-1" }, void 0, false, {
                    fileName: "/home/project/src/components/crawling/CrawlHistory.tsx",
                    lineNumber: 64,
                    columnNumber: 19
                  }, this),
                  formatDate(crawl.lastCrawled)
                ] }, void 0, true, {
                  fileName: "/home/project/src/components/crawling/CrawlHistory.tsx",
                  lineNumber: 63,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/components/crawling/CrawlHistory.tsx",
                lineNumber: 54,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: crawl.status === "success" ? /* @__PURE__ */ jsxDEV("span", { className: "flex items-center text-green-600 text-sm", children: [
                /* @__PURE__ */ jsxDEV(Check, { size: 16, className: "mr-1" }, void 0, false, {
                  fileName: "/home/project/src/components/crawling/CrawlHistory.tsx",
                  lineNumber: 72,
                  columnNumber: 21
                }, this),
                "सफल"
              ] }, void 0, true, {
                fileName: "/home/project/src/components/crawling/CrawlHistory.tsx",
                lineNumber: 71,
                columnNumber: 13
              }, this) : /* @__PURE__ */ jsxDEV("span", { className: "flex items-center text-red-600 text-sm", children: [
                /* @__PURE__ */ jsxDEV(AlertTriangle, { size: 16, className: "mr-1" }, void 0, false, {
                  fileName: "/home/project/src/components/crawling/CrawlHistory.tsx",
                  lineNumber: 77,
                  columnNumber: 21
                }, this),
                "विफल"
              ] }, void 0, true, {
                fileName: "/home/project/src/components/crawling/CrawlHistory.tsx",
                lineNumber: 76,
                columnNumber: 13
              }, this) }, void 0, false, {
                fileName: "/home/project/src/components/crawling/CrawlHistory.tsx",
                lineNumber: 69,
                columnNumber: 15
              }, this)
            ]
          },
          index,
          true,
          {
            fileName: "/home/project/src/components/crawling/CrawlHistory.tsx",
            lineNumber: 48,
            columnNumber: 9
          },
          this
        )
      ),
      /* @__PURE__ */ jsxDEV("button", { className: "mt-3 text-primary hover:underline text-sm", children: "और देखें" }, void 0, false, {
        fileName: "/home/project/src/components/crawling/CrawlHistory.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/components/crawling/CrawlHistory.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/project/src/components/crawling/CrawlHistory.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
};
_s(CrawlHistory, "XjMW2TCJ0nZg1E3OVV+TdiFDclU=");
_c = CrawlHistory;
export default CrawlHistory;
var _c;
$RefreshReg$(_c, "CrawlHistory");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/components/crawling/CrawlHistory.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/components/crawling/CrawlHistory.tsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
