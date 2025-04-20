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

//# sourceMappingURL=data:application/json;base64,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eEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBNEM7QUFBQSxhQUo5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBS0E7QUFBQSxRQUNBLHVCQUFDLE9BQUUsV0FBVSxzQkFBc0JmLGdCQUFNb0IsV0FBV0wsZUFBZSxLQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXFFO0FBQUEsUUFDckUsdUJBQUMsT0FBRSxXQUFVLHlCQUNWRTtBQUFBQSxlQUFLQyxNQUFPbEIsTUFBTW9CLGFBQWFwQixNQUFNYyxZQUFhLEdBQUc7QUFBQSxVQUFFO0FBQUEsYUFEMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVBO0FBQUEsV0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBV0E7QUFBQSxTQTdDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBOENBO0FBQUEsSUFFQSx1QkFBQyxTQUFJLFdBQVUsc0VBQ2I7QUFBQSw2QkFBQyxPQUFFO0FBQUE7QUFBQSxRQUFjLElBQUlPLEtBQUtyQixNQUFNc0IsYUFBYSxFQUFFUCxlQUFlO0FBQUEsV0FBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFnRTtBQUFBLE1BQ2hFLHVCQUFDLE9BQUU7QUFBQTtBQUFBLFFBQWdCZixNQUFNdUI7QUFBQUEsUUFBbUI7QUFBQSxXQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQThDO0FBQUEsU0FGaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUdBO0FBQUEsT0F0REY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXVEQTtBQUVKO0FBQUV4QixHQWxHSUQscUJBQW1CO0FBQUEwQixLQUFuQjFCO0FBb0dOLGVBQWVBO0FBQW9CLElBQUEwQjtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsidXNlU3RhdGUiLCJDbG9jayIsIkFycm93VXAiLCJBbGVydENpcmNsZSIsImNyYXdsZXJBcGkiLCJDcmF3bFN0YXRzQ29tcG9uZW50IiwiX3MiLCJzdGF0cyIsInNldFN0YXRzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VFZmZlY3QiLCJmZXRjaFN0YXRzIiwiZGF0YSIsImdldFN0YXRzIiwiZXJyb3IiLCJjb25zb2xlIiwiQXJyYXkiLCJtYXAiLCJfIiwiaSIsInRvdGFsVXJscyIsInRvTG9jYWxlU3RyaW5nIiwiY3Jhd2xlZFVybHMiLCJNYXRoIiwicm91bmQiLCJwZW5kaW5nVXJscyIsImZhaWxlZFVybHMiLCJEYXRlIiwibGFzdENyYXdsVGltZSIsImF2ZXJhZ2VDcmF3bFRpbWVNcyIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZXMiOlsiQ3Jhd2xTdGF0cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDbG9jaywgQXJyb3dVcCwgQWxlcnRDaXJjbGUgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgY3Jhd2xlckFwaSwgQ3Jhd2xTdGF0cyB9IGZyb20gJy4uLy4uL2FwaS9jcmF3bGVyQXBpJztcblxuY29uc3QgQ3Jhd2xTdGF0c0NvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRzLCBzZXRTdGF0c10gPSB1c2VTdGF0ZTxDcmF3bFN0YXRzIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hTdGF0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjcmF3bGVyQXBpLmdldFN0YXRzKCk7XG4gICAgICAgIHNldFN0YXRzKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc3RhdHM6JywgZXJyb3IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoU3RhdHMoKTtcbiAgfSwgW10pO1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC02IHJvdW5kZWQtbGcgc2hhZG93LW1kIGFuaW1hdGUtcHVsc2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQgYmctZ3JheS0yMDAgcm91bmRlZCB3LTEvMiBtYi00XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICAgIHtbLi4uQXJyYXkoNCldLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImgtMjAgYmctZ3JheS0yMDAgcm91bmRlZFwiPjwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAoIXN0YXRzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC02IHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPuCkuOCljeCkn+CliOCkn+CljeCkuCDgpLLgpYvgpKEg4KSV4KSw4KSo4KWHIOCkruClh+CkgiDgpKTgpY3gpLDgpYHgpJ/gpL8g4KS54KWB4KSIPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTYgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XCI+4KSV4KWN4KSw4KWJ4KSy4KS/4KSC4KSXIOCkuOCljeCkn+CliOCkn+CljeCkuDwvaDI+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNCBtYi00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS01MCBwLTQgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYmctYmx1ZS0xMDAgcm91bmRlZC1mdWxsIG1yLTJcIj5cbiAgICAgICAgICAgICAgPEFycm93VXAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCIgc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPuCkleClgeCksiBVUkxzPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPntzdGF0cy50b3RhbFVybHMudG9Mb2NhbGVTdHJpbmcoKX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmVlbi01MCBwLTQgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYmctZ3JlZW4tMTAwIHJvdW5kZWQtZnVsbCBtci0yXCI+XG4gICAgICAgICAgICAgIDxDbG9jayBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTYwMFwiIHNpemU9ezE2fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj7gpJXgpY3gpLDgpYngpLIg4KSV4KS/4KSPIOCkl+Ckjzwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57c3RhdHMuY3Jhd2xlZFVybHMudG9Mb2NhbGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICB7TWF0aC5yb3VuZCgoc3RhdHMuY3Jhd2xlZFVybHMgLyBzdGF0cy50b3RhbFVybHMpICogMTAwKX0lIOCkquClguCksOCljeCko1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXllbGxvdy01MCBwLTQgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYmcteWVsbG93LTEwMCByb3VuZGVkLWZ1bGwgbXItMlwiPlxuICAgICAgICAgICAgICA8Q2xvY2sgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNjAwXCIgc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPuCkquCljeCksOCkpOClgOCkleCljeCkt+CkvuCksOCkpDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57c3RhdHMucGVuZGluZ1VybHMudG9Mb2NhbGVTdHJpbmcoKX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNTAgcC00IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGJnLXJlZC0xMDAgcm91bmRlZC1mdWxsIG1yLTJcIj5cbiAgICAgICAgICAgICAgPEFsZXJ0Q2lyY2xlIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMFwiIHNpemU9ezE2fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj7gpLXgpL/gpKvgpLI8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3N0YXRzLmZhaWxlZFVybHMudG9Mb2NhbGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICB7TWF0aC5yb3VuZCgoc3RhdHMuZmFpbGVkVXJscyAvIHN0YXRzLnRvdGFsVXJscykgKiAxMDApfSUg4KSk4KWN4KSw4KWB4KSf4KS/IOCkpuCksFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOmp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgPHA+4KSq4KS/4KSb4KSy4KS+IOCkleCljeCksOClieCksjoge25ldyBEYXRlKHN0YXRzLmxhc3RDcmF3bFRpbWUpLnRvTG9jYWxlU3RyaW5nKCl9PC9wPlxuICAgICAgICA8cD7gpJTgpLjgpKQg4KSV4KWN4KSw4KWJ4KSyIOCkuOCkruCkrzoge3N0YXRzLmF2ZXJhZ2VDcmF3bFRpbWVNc31tczwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3Jhd2xTdGF0c0NvbXBvbmVudDtcbiBcbiJdLCJmaWxlIjoiL2hvbWUvcHJvamVjdC9zcmMvY29tcG9uZW50cy9jcmF3bGluZy9DcmF3bFN0YXRzLnRzeCJ9
