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
