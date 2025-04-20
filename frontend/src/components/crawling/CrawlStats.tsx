import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/crawling/CrawlStats.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3859ff4e"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/project/src/components/crawling/CrawlStats.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=3859ff4e"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { Clock, ArrowUp, AlertCircle } from "/node_modules/.vite/deps/lucide-react.js?v=3859ff4e";
import { crawlerApi } from "/src/api/crawlerApi.ts";
const CrawlStatsComponent = () => {
  _s();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await crawlerApi.getStats();
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-lg shadow-md animate-pulse", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "h-4 bg-gray-200 rounded w-1/2 mb-4" }, void 0, false, {
        fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [...Array(4)].map(
        (_, i) => /* @__PURE__ */ jsxDEV("div", { className: "h-20 bg-gray-200 rounded" }, i, false, {
          fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ) }, void 0, false, {
        fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this);
  }
  if (!stats) {
    return /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-lg shadow-md", children: /* @__PURE__ */ jsxDEV("p", { className: "text-red-500", children: "स्टैट्स लोड करने में त्रुटि हुई" }, void 0, false, {
      fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
    /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold mb-4", children: "क्रॉलिंग स्टैट्स" }, void 0, false, {
      fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center mb-2", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "p-2 bg-blue-100 rounded-full mr-2", children: /* @__PURE__ */ jsxDEV(ArrowUp, { className: "text-primary", size: 16 }, void 0, false, {
            fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
            lineNumber: 53,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-gray-700", children: "कुल URLs" }, void 0, false, {
            fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold", children: stats.totalUrls.toLocaleString() }, void 0, false, {
          fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-green-50 p-4 rounded-lg", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center mb-2", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "p-2 bg-green-100 rounded-full mr-2", children: /* @__PURE__ */ jsxDEV(Clock, { className: "text-green-600", size: 16 }, void 0, false, {
            fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
            lineNumber: 62,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-gray-700", children: "क्रॉल किए गए" }, void 0, false, {
            fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold", children: stats.crawledUrls.toLocaleString() }, void 0, false, {
          fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-500", children: [
          Math.round(stats.crawledUrls / stats.totalUrls * 100),
          "% पूर्ण"
        ] }, void 0, true, {
          fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center mb-2", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "p-2 bg-yellow-100 rounded-full mr-2", children: /* @__PURE__ */ jsxDEV(Clock, { className: "text-yellow-600", size: 16 }, void 0, false, {
            fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-gray-700", children: "प्रतीक्षारत" }, void 0, false, {
            fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold", children: stats.pendingUrls.toLocaleString() }, void 0, false, {
          fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-red-50 p-4 rounded-lg", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center mb-2", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "p-2 bg-red-100 rounded-full mr-2", children: /* @__PURE__ */ jsxDEV(AlertCircle, { className: "text-red-600", size: 16 }, void 0, false, {
            fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
            lineNumber: 85,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-gray-700", children: "विफल" }, void 0, false, {
            fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold", children: stats.failedUrls.toLocaleString() }, void 0, false, {
          fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-500", children: [
          Math.round(stats.failedUrls / stats.totalUrls * 100),
          "% त्रुटि दर"
        ] }, void 0, true, {
          fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row md:justify-between text-sm text-gray-600", children: [
      /* @__PURE__ */ jsxDEV("p", { children: [
        "पिछला क्रॉल: ",
        new Date(stats.lastCrawlTime).toLocaleString()
      ] }, void 0, true, {
        fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: [
        "औसत क्रॉल समय: ",
        stats.averageCrawlTimeMs,
        "ms"
      ] }, void 0, true, {
        fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/project/src/components/crawling/CrawlStats.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
};
_s(CrawlStatsComponent, "zr3d2rzWUuuAzE7RwCrYeGz8vE0=");
_c = CrawlStatsComponent;
export default CrawlStatsComponent;
var _c;
$RefreshReg$(_c, "CrawlStatsComponent");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/components/crawling/CrawlStats.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/components/crawling/CrawlStats.tsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
