import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/crawling/PerformanceCharts.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3859ff4e"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/project/src/components/crawling/PerformanceCharts.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=3859ff4e"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "/node_modules/.vite/deps/recharts.js?v=3859ff4e";
import { crawlerApi } from "/src/api/crawlerApi.ts";
const COLORS = ["#4285F4", "#34A853", "#FBBC05", "#EA4335", "#5F6368"];
const PerformanceCharts = () => {
  _s();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const visualizationData = await crawlerApi.getVisualizationData();
        setData(visualizationData);
      } catch (error) {
        console.error("Error fetching visualization data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-lg shadow-md animate-pulse", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "h-4 bg-gray-200 rounded w-1/2 mb-4" }, void 0, false, {
        fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "h-64 bg-gray-200 rounded mb-4" }, void 0, false, {
        fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "h-64 bg-gray-200 rounded" }, void 0, false, {
          fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "h-64 bg-gray-200 rounded" }, void 0, false, {
          fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this);
  }
  if (!data) {
    return /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-lg shadow-md", children: /* @__PURE__ */ jsxDEV("p", { className: "text-red-500", children: "चार्ट डेटा लोड करने में त्रुटि हुई" }, void 0, false, {
      fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
    /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold mb-6", children: "क्रॉलिंग परफॉरमेंस" }, void 0, false, {
      fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-medium mb-4", children: "दैनिक क्रॉलिंग गतिविधि" }, void 0, false, {
        fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "h-64", children: /* @__PURE__ */ jsxDEV(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV(
        LineChart,
        {
          data: data.timeseriesData,
          margin: { top: 5, right: 30, left: 20, bottom: 5 },
          children: [
            /* @__PURE__ */ jsxDEV(CartesianGrid, { strokeDasharray: "3 3" }, void 0, false, {
              fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
              lineNumber: 62,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(XAxis, { dataKey: "date" }, void 0, false, {
              fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
              lineNumber: 63,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(YAxis, {}, void 0, false, {
              fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
              lineNumber: 64,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(Tooltip, {}, void 0, false, {
              fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
              lineNumber: 65,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(Legend, {}, void 0, false, {
              fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
              lineNumber: 66,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(Line, { type: "monotone", dataKey: "crawledPages", stroke: "#4285F4", name: "क्रॉल किए गए पेज" }, void 0, false, {
              fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
              lineNumber: 67,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(Line, { type: "monotone", dataKey: "indexedPages", stroke: "#34A853", name: "इंडेक्स किए गए पेज" }, void 0, false, {
              fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
              lineNumber: 68,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(Line, { type: "monotone", dataKey: "errors", stroke: "#EA4335", name: "त्रुटियां" }, void 0, false, {
              fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
              lineNumber: 69,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
          lineNumber: 58,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-medium mb-4", children: "सामग्री प्रकार वितरण" }, void 0, false, {
          fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "h-64", children: /* @__PURE__ */ jsxDEV(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV(PieChart, { children: [
          /* @__PURE__ */ jsxDEV(
            Pie,
            {
              data: data.contentTypeData,
              cx: "50%",
              cy: "50%",
              labelLine: false,
              label: ({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`,
              outerRadius: 80,
              fill: "#8884d8",
              dataKey: "value",
              children: data.contentTypeData.map(
                (entry, index) => /* @__PURE__ */ jsxDEV(Cell, { fill: COLORS[index % COLORS.length] }, `cell-${index}`, false, {
                  fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
                  lineNumber: 92,
                  columnNumber: 19
                }, this)
              )
            },
            void 0,
            false,
            {
              fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
              lineNumber: 81,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(Tooltip, {}, void 0, false, {
            fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
            lineNumber: 95,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-medium mb-4", children: "डोमेन वितरण" }, void 0, false, {
          fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "h-64", children: /* @__PURE__ */ jsxDEV(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV(
          BarChart,
          {
            data: data.domainDistribution,
            margin: { top: 5, right: 30, left: 20, bottom: 5 },
            children: [
              /* @__PURE__ */ jsxDEV(CartesianGrid, { strokeDasharray: "3 3" }, void 0, false, {
                fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
                lineNumber: 109,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(XAxis, { dataKey: "name" }, void 0, false, {
                fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
                lineNumber: 110,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(YAxis, {}, void 0, false, {
                fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
                lineNumber: 111,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(Tooltip, {}, void 0, false, {
                fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
                lineNumber: 112,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(Bar, { dataKey: "value", name: "पेज", fill: "#4285F4" }, void 0, false, {
                fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
                lineNumber: 113,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
            lineNumber: 105,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
          lineNumber: 104,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/project/src/components/crawling/PerformanceCharts.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
};
_s(PerformanceCharts, "Zn4cs3026OJRBhxLd0Oqj+bUOXY=");
_c = PerformanceCharts;
export default PerformanceCharts;
var _c;
$RefreshReg$(_c, "PerformanceCharts");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/components/crawling/PerformanceCharts.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/components/crawling/PerformanceCharts.tsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUE7QUFBQTtBQUFBO0FBQUEscUJBQVE7QUFBQSxjQUNSLHVCQUFDLE9BQUksU0FBUSxTQUFRLE1BQUssT0FBTSxNQUFLLGFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQThDO0FBQUE7QUFBQTtBQUFBLFVBUmhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVNBLEtBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVdBLEtBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWFBO0FBQUEsV0FmRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZ0JBO0FBQUEsU0ExQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQTJDQTtBQUFBLE9BbkVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FvRUE7QUFFSjtBQUFFZixHQS9HSUQsbUJBQWlCO0FBQUEwQixLQUFqQjFCO0FBaUhOLGVBQWVBO0FBQWtCLElBQUEwQjtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsidXNlU3RhdGUiLCJMaW5lQ2hhcnQiLCJMaW5lIiwiQmFyQ2hhcnQiLCJCYXIiLCJQaWVDaGFydCIsIlBpZSIsIkNlbGwiLCJYQXhpcyIsIllBeGlzIiwiQ2FydGVzaWFuR3JpZCIsIlRvb2x0aXAiLCJMZWdlbmQiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiY3Jhd2xlckFwaSIsIkNPTE9SUyIsIlBlcmZvcm1hbmNlQ2hhcnRzIiwiX3MiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwidmlzdWFsaXphdGlvbkRhdGEiLCJnZXRWaXN1YWxpemF0aW9uRGF0YSIsImVycm9yIiwiY29uc29sZSIsInRpbWVzZXJpZXNEYXRhIiwidG9wIiwicmlnaHQiLCJsZWZ0IiwiYm90dG9tIiwiY29udGVudFR5cGVEYXRhIiwibmFtZSIsInBlcmNlbnQiLCJ0b0ZpeGVkIiwibWFwIiwiZW50cnkiLCJpbmRleCIsImxlbmd0aCIsImRvbWFpbkRpc3RyaWJ1dGlvbiIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZXMiOlsiUGVyZm9ybWFuY2VDaGFydHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgXG4gIExpbmVDaGFydCwgTGluZSwgQmFyQ2hhcnQsIEJhciwgUGllQ2hhcnQsIFBpZSwgQ2VsbCxcbiAgWEF4aXMsIFlBeGlzLCBDYXJ0ZXNpYW5HcmlkLCBUb29sdGlwLCBMZWdlbmQsIFJlc3BvbnNpdmVDb250YWluZXIgXG59IGZyb20gJ3JlY2hhcnRzJztcbmltcG9ydCB7IGNyYXdsZXJBcGkgfSBmcm9tICcuLi8uLi9hcGkvY3Jhd2xlckFwaSc7XG5cbmNvbnN0IENPTE9SUyA9IFsnIzQyODVGNCcsICcjMzRBODUzJywgJyNGQkJDMDUnLCAnI0VBNDMzNScsICcjNUY2MzY4J107XG5cbmNvbnN0IFBlcmZvcm1hbmNlQ2hhcnRzID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHZpc3VhbGl6YXRpb25EYXRhID0gYXdhaXQgY3Jhd2xlckFwaS5nZXRWaXN1YWxpemF0aW9uRGF0YSgpO1xuICAgICAgICBzZXREYXRhKHZpc3VhbGl6YXRpb25EYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHZpc3VhbGl6YXRpb24gZGF0YTonLCBlcnJvcik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIHNoYWRvdy1tZCBhbmltYXRlLXB1bHNlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IGJnLWdyYXktMjAwIHJvdW5kZWQgdy0xLzIgbWItNFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNjQgYmctZ3JheS0yMDAgcm91bmRlZCBtYi00XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC02NCBiZy1ncmF5LTIwMCByb3VuZGVkXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTY0IGJnLWdyYXktMjAwIHJvdW5kZWRcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC02IHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPuCkmuCkvuCksOCljeCknyDgpKHgpYfgpJ/gpL4g4KSy4KWL4KShIOCkleCksOCkqOClhyDgpK7gpYfgpIIg4KSk4KWN4KSw4KWB4KSf4KS/IOCkueClgeCkiDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC02IHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItNlwiPuCkleCljeCksOClieCksuCkv+CkguCklyDgpKrgpLDgpKvgpYngpLDgpK7gpYfgpILgpLg8L2gyPlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gbWItNFwiPuCkpuCliOCkqOCkv+CklSDgpJXgpY3gpLDgpYngpLLgpL/gpILgpJcg4KSX4KSk4KS/4KS14KS/4KSn4KS/PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTY0XCI+XG4gICAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxuICAgICAgICAgICAgPExpbmVDaGFydFxuICAgICAgICAgICAgICBkYXRhPXtkYXRhLnRpbWVzZXJpZXNEYXRhfVxuICAgICAgICAgICAgICBtYXJnaW49e3sgdG9wOiA1LCByaWdodDogMzAsIGxlZnQ6IDIwLCBib3R0b206IDUgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgLz5cbiAgICAgICAgICAgICAgPFhBeGlzIGRhdGFLZXk9XCJkYXRlXCIgLz5cbiAgICAgICAgICAgICAgPFlBeGlzIC8+XG4gICAgICAgICAgICAgIDxUb29sdGlwIC8+XG4gICAgICAgICAgICAgIDxMZWdlbmQgLz5cbiAgICAgICAgICAgICAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cImNyYXdsZWRQYWdlc1wiIHN0cm9rZT1cIiM0Mjg1RjRcIiBuYW1lPVwi4KSV4KWN4KSw4KWJ4KSyIOCkleCkv+CkjyDgpJfgpI8g4KSq4KWH4KScXCIgLz5cbiAgICAgICAgICAgICAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cImluZGV4ZWRQYWdlc1wiIHN0cm9rZT1cIiMzNEE4NTNcIiBuYW1lPVwi4KSH4KSC4KSh4KWH4KSV4KWN4KS4IOCkleCkv+CkjyDgpJfgpI8g4KSq4KWH4KScXCIgLz5cbiAgICAgICAgICAgICAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cImVycm9yc1wiIHN0cm9rZT1cIiNFQTQzMzVcIiBuYW1lPVwi4KSk4KWN4KSw4KWB4KSf4KS/4KSv4KS+4KSCXCIgLz5cbiAgICAgICAgICAgIDwvTGluZUNoYXJ0PlxuICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0yIGdhcC04IG1iLTRcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSBtYi00XCI+4KS44KS+4KSu4KSX4KWN4KSw4KWAIOCkquCljeCksOCkleCkvuCksCDgpLXgpL/gpKTgpLDgpKM8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC02NFwiPlxuICAgICAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxuICAgICAgICAgICAgICA8UGllQ2hhcnQ+XG4gICAgICAgICAgICAgICAgPFBpZVxuICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YS5jb250ZW50VHlwZURhdGF9XG4gICAgICAgICAgICAgICAgICBjeD1cIjUwJVwiXG4gICAgICAgICAgICAgICAgICBjeT1cIjUwJVwiXG4gICAgICAgICAgICAgICAgICBsYWJlbExpbmU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9eyh7IG5hbWUsIHBlcmNlbnQgfSkgPT4gYCR7bmFtZX06ICR7KHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMCl9JWB9XG4gICAgICAgICAgICAgICAgICBvdXRlclJhZGl1cz17ODB9XG4gICAgICAgICAgICAgICAgICBmaWxsPVwiIzg4ODRkOFwiXG4gICAgICAgICAgICAgICAgICBkYXRhS2V5PVwidmFsdWVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtkYXRhLmNvbnRlbnRUeXBlRGF0YS5tYXAoKGVudHJ5OiBhbnksIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENlbGwga2V5PXtgY2VsbC0ke2luZGV4fWB9IGZpbGw9e0NPTE9SU1tpbmRleCAlIENPTE9SUy5sZW5ndGhdfSAvPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9QaWU+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgLz5cbiAgICAgICAgICAgICAgPC9QaWVDaGFydD5cbiAgICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIG1iLTRcIj7gpKHgpYvgpK7gpYfgpKgg4KS14KS/4KSk4KSw4KSjPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNjRcIj5cbiAgICAgICAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgPEJhckNoYXJ0XG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YS5kb21haW5EaXN0cmlidXRpb259XG4gICAgICAgICAgICAgICAgbWFyZ2luPXt7IHRvcDogNSwgcmlnaHQ6IDMwLCBsZWZ0OiAyMCwgYm90dG9tOiA1IH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIiAvPlxuICAgICAgICAgICAgICAgIDxYQXhpcyBkYXRhS2V5PVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgPFlBeGlzIC8+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgLz5cbiAgICAgICAgICAgICAgICA8QmFyIGRhdGFLZXk9XCJ2YWx1ZVwiIG5hbWU9XCLgpKrgpYfgpJxcIiBmaWxsPVwiIzQyODVGNFwiIC8+XG4gICAgICAgICAgICAgIDwvQmFyQ2hhcnQ+XG4gICAgICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQZXJmb3JtYW5jZUNoYXJ0cztcbiBcbiJdLCJmaWxlIjoiL2hvbWUvcHJvamVjdC9zcmMvY29tcG9uZW50cy9jcmF3bGluZy9QZXJmb3JtYW5jZUNoYXJ0cy50c3gifQ==
