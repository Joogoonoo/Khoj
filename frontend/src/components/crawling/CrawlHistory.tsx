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

//# sourceMappingURL=data:application/json;base64,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R0EsSUFFQSx1QkFBQyxVQUFLLFdBQVUsMENBQ2Q7QUFBQSx1Q0FBQyxpQkFBYyxNQUFNLElBQUksV0FBVSxVQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUF5QztBQUFBO0FBQUEsbUJBRDNDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBR0EsS0FWSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVlBO0FBQUE7QUFBQTtBQUFBLFVBaENLRDtBQUFBQSxVQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFrQ0E7QUFBQSxNQUNEO0FBQUEsTUFFRCx1QkFBQyxZQUFPLFdBQVUsNkNBQTJDLHdCQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUE7QUFBQSxTQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBMENBO0FBQUEsT0FoREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWtEQTtBQUVKO0FBQUVyQixHQXZGSUQsY0FBWTtBQUFBMEIsS0FBWjFCO0FBeUZOLGVBQWVBO0FBQWEsSUFBQTBCO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJDbG9jayIsIkNoZWNrIiwiQWxlcnRUcmlhbmdsZSIsImNyYXdsZXJBcGkiLCJDcmF3bEhpc3RvcnkiLCJfcyIsImNyYXdscyIsInNldENyYXdscyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaENyYXdscyIsImRhdGEiLCJnZXRSZWNlbnRDcmF3bHMiLCJlcnJvciIsImNvbnNvbGUiLCJmb3JtYXREYXRlIiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIkFycmF5IiwibWFwIiwiXyIsImkiLCJsZW5ndGgiLCJjcmF3bCIsImluZGV4Iiwic3RhdHVzIiwidXJsIiwibGFzdENyYXdsZWQiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VzIjpbIkNyYXdsSGlzdG9yeS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDbG9jaywgQ2hlY2ssIEFsZXJ0VHJpYW5nbGUgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgY3Jhd2xlckFwaSwgQ3Jhd2xSZXN1bHQgfSBmcm9tICcuLi8uLi9hcGkvY3Jhd2xlckFwaSc7XG5cbmNvbnN0IENyYXdsSGlzdG9yeSA9ICgpID0+IHtcbiAgY29uc3QgW2NyYXdscywgc2V0Q3Jhd2xzXSA9IHVzZVN0YXRlPENyYXdsUmVzdWx0W10+KFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaENyYXdscyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjcmF3bGVyQXBpLmdldFJlY2VudENyYXdscyg1KTtcbiAgICAgICAgc2V0Q3Jhd2xzKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY3Jhd2wgaGlzdG9yeTonLCBlcnJvcik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hDcmF3bHMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVN0cmluZygpO1xuICB9O1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC02IHJvdW5kZWQtbGcgc2hhZG93LW1kIGFuaW1hdGUtcHVsc2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQgYmctZ3JheS0yMDAgcm91bmRlZCB3LTEvMiBtYi00XCI+PC9kaXY+XG4gICAgICAgIHtbLi4uQXJyYXkoNSldLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJoLTE0IGJnLWdyYXktMjAwIHJvdW5kZWQgbWItMlwiPjwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC02IHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItNFwiPuCkueCkvuCksiDgpJXgpYAg4KSV4KWN4KSw4KWJ4KSy4KS/4KSC4KSXPC9oMj5cbiAgICAgIFxuICAgICAge2NyYXdscy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj7gpJXgpYvgpIgg4KS54KS+4KSyIOCkleClgCDgpJXgpY3gpLDgpYngpLLgpL/gpILgpJcg4KSo4KS54KWA4KSCIOCkruCkv+CksuClgDwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2NyYXdscy5tYXAoKGNyYXdsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAga2V5PXtpbmRleH0gXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMyBtYi0yIHJvdW5kZWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuICR7XG4gICAgICAgICAgICAgICAgY3Jhd2wuc3RhdHVzID09PSAnc3VjY2VzcycgPyAnYmctZ3JlZW4tNTAnIDogJ2JnLXJlZC01MCdcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgICBocmVmPXtjcmF3bC51cmx9IFxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgaG92ZXI6dW5kZXJsaW5lIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y3Jhd2wudXJsfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBmbGV4IGl0ZW1zLWNlbnRlciBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICA8Q2xvY2sgc2l6ZT17MTJ9IGNsYXNzTmFtZT1cIm1yLTFcIiAvPlxuICAgICAgICAgICAgICAgICAge2Zvcm1hdERhdGUoY3Jhd2wubGFzdENyYXdsZWQpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7Y3Jhd2wuc3RhdHVzID09PSAnc3VjY2VzcycgPyAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyZWVuLTYwMCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVjayBzaXplPXsxNn0gY2xhc3NOYW1lPVwibXItMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIOCkuOCkq+CkslxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXJlZC02MDAgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8QWxlcnRUcmlhbmdsZSBzaXplPXsxNn0gY2xhc3NOYW1lPVwibXItMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIOCkteCkv+Ckq+CkslxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtdC0zIHRleHQtcHJpbWFyeSBob3Zlcjp1bmRlcmxpbmUgdGV4dC1zbVwiPlxuICAgICAgICAgICAg4KSU4KSwIOCkpuClh+CkluClh+CkglxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcmF3bEhpc3Rvcnk7XG4gXG4iXSwiZmlsZSI6Ii9ob21lL3Byb2plY3Qvc3JjL2NvbXBvbmVudHMvY3Jhd2xpbmcvQ3Jhd2xIaXN0b3J5LnRzeCJ9
