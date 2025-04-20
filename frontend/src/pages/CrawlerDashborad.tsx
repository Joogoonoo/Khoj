import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/CrawlerDashboard.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3859ff4e"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/project/src/pages/CrawlerDashboard.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=3859ff4e";
import { Home, ArrowLeft, Settings } from "/node_modules/.vite/deps/lucide-react.js?v=3859ff4e";
import Header from "/src/components/Header.tsx";
import Footer from "/src/components/Footer.tsx";
import CrawlForm from "/src/components/crawling/CrawlForm.tsx";
import CrawlStats from "/src/components/crawling/CrawlStats.tsx";
import CrawlHistory from "/src/components/crawling/CrawlHistory.tsx";
import PerformanceCharts from "/src/components/crawling/PerformanceCharts.tsx";
const CrawlerDashboard = () => {
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-gray-100 flex flex-col", children: [
    /* @__PURE__ */ jsxDEV(Header, { minimal: true }, void 0, false, {
      fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 py-6 flex-1", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ jsxDEV(Link, { to: "/admin", className: "p-2 hover:bg-gray-200 rounded-full", children: /* @__PURE__ */ jsxDEV(ArrowLeft, { size: 20 }, void 0, false, {
            fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
            lineNumber: 19,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
            lineNumber: 18,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-2xl font-bold", children: "वेब क्रॉलर डैशबोर्ड" }, void 0, false, {
            fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
            lineNumber: 21,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
          lineNumber: 17,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md flex items-center", children: [
            /* @__PURE__ */ jsxDEV(Home, { size: 16, className: "mr-2" }, void 0, false, {
              fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
              lineNumber: 26,
              columnNumber: 15
            }, this),
            "होम"
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
            lineNumber: 25,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("button", { className: "px-4 py-2 bg-primary text-white rounded-md flex items-center", children: [
            /* @__PURE__ */ jsxDEV(Settings, { size: 16, className: "mr-2" }, void 0, false, {
              fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
              lineNumber: 30,
              columnNumber: 15
            }, this),
            "क्रॉलर सेटिंग्स"
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
            lineNumber: 29,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxDEV(CrawlStats, {}, void 0, false, {
          fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV(CrawlHistory, {}, void 0, false, {
          fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6", children: [
        /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV(CrawlForm, {}, void 0, false, {
          fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxDEV(PerformanceCharts, {}, void 0, false, {
          fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold mb-4", children: "इंडेक्सिंग दृष्टिकोण" }, void 0, false, {
          fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "border border-gray-200 rounded-lg p-4", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold mb-2", children: "क्रॉलिंग रणनीति" }, void 0, false, {
              fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
              lineNumber: 59,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 mb-3", children: "हमारी क्रॉलिंग रणनीति का उद्देश्य वेब पेजों को कुशलतापूर्वक इंडेक्स करना है, जबकि सर्वर लोड और नेटवर्क ट्रैफिक को न्यूनतम रखना है।" }, void 0, false, {
              fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
              lineNumber: 60,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("h4", { className: "font-medium mb-1", children: "मुख्य विशेषताएं:" }, void 0, false, {
              fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
              lineNumber: 62,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "list-disc list-inside space-y-1 text-gray-600", children: [
              /* @__PURE__ */ jsxDEV("li", { children: "उच्च प्राथमिकता वाले पेजों के लिए अनुकूलित क्रॉल आवृत्ति" }, void 0, false, {
                fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
                lineNumber: 64,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "हानिकारक URL पैटर्न को छोड़ने के लिए robots.txt का पालन" }, void 0, false, {
                fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
                lineNumber: 65,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "पेज प्राथमिकता निर्धारित करने के लिए आवागमन विश्लेषण" }, void 0, false, {
                fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
                lineNumber: 66,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: "केवल महत्वपूर्ण सामग्री के लिए स्मार्ट रीक्रॉलिंग" }, void 0, false, {
                fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
                lineNumber: 67,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
              lineNumber: 63,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
            lineNumber: 58,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "border border-gray-200 rounded-lg p-4", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold mb-2", children: "इंडेक्सिंग प्रक्रिया" }, void 0, false, {
              fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
              lineNumber: 72,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 mb-3", children: "इंडेक्सिंग प्रक्रिया निम्नलिखित चरणों का अनुसरण करती है:" }, void 0, false, {
              fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
              lineNumber: 73,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("ol", { className: "list-decimal list-inside space-y-2 text-gray-600", children: [
              /* @__PURE__ */ jsxDEV("li", { className: "pb-2 border-b border-gray-100", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "URL निष्कर्षण:" }, void 0, false, {
                  fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
                  lineNumber: 77,
                  columnNumber: 19
                }, this),
                " वेबपेज से सभी लिंक निकालना और प्राथमिकता कतार में जोड़ना"
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
                lineNumber: 76,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("li", { className: "pb-2 border-b border-gray-100", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "कंटेंट फ़ेचिंग:" }, void 0, false, {
                  fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
                  lineNumber: 80,
                  columnNumber: 19
                }, this),
                " प्राथमिकता के अनुसार URL से सामग्री प्राप्त करना"
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
                lineNumber: 79,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("li", { className: "pb-2 border-b border-gray-100", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "टेक्स्ट निष्कर्षण:" }, void 0, false, {
                  fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
                  lineNumber: 83,
                  columnNumber: 19
                }, this),
                " HTML से टेक्स्ट और मेटाडेटा निकालना"
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
                lineNumber: 82,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("li", { className: "pb-2 border-b border-gray-100", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "अनुक्रमणिका निर्माण:" }, void 0, false, {
                  fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
                  lineNumber: 86,
                  columnNumber: 19
                }, this),
                " खोज के लिए अनुकूलित इंडेक्स बनाना"
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
                lineNumber: 85,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "रैंकिंग डेटा जोड़ना:" }, void 0, false, {
                  fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
                  lineNumber: 89,
                  columnNumber: 19
                }, this),
                " खोज परिणामों को बेहतर बनाने के लिए रैंकिंग मेट्रिक्स का उपयोग"
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
                lineNumber: 88,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
              lineNumber: 75,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold mb-3", children: "मशीन लर्निंग और उन्नत तकनीकें" }, void 0, false, {
            fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
            lineNumber: 96,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 mb-4", children: "हमारा इंडेक्सिंग सिस्टम सबसे प्रासंगिक और उपयोगी खोज परिणामों के निर्माण के लिए मशीन लर्निंग का उपयोग करता है।" }, void 0, false, {
            fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
            lineNumber: 97,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "font-medium mb-2 text-blue-800", children: "सामग्री विश्लेषण" }, void 0, false, {
                fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
                lineNumber: 101,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-600", children: "हमारा NLP मॉडल सामग्री का विश्लेषण करता है और प्रासंगिकता, गुणवत्ता और विश्वसनीयता के आधार पर स्कोर करता है।" }, void 0, false, {
                fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
                lineNumber: 102,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
              lineNumber: 100,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-green-50 p-4 rounded-lg", children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "font-medium mb-2 text-green-800", children: "सिमिलैरिटी डिटेक्शन" }, void 0, false, {
                fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
                lineNumber: 106,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-600", children: "डुप्लिकेट सामग्री की पहचान करता है और खोज परिणामों की विविधता सुनिश्चित करने के लिए अनुकूलित करता है।" }, void 0, false, {
                fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
                lineNumber: 107,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
              lineNumber: 105,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-purple-50 p-4 rounded-lg", children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "font-medium mb-2 text-purple-800", children: "एंटिटी रिकग्निशन" }, void 0, false, {
                fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
                lineNumber: 111,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-600", children: "टेक्स्ट से महत्वपूर्ण एंटिटीज, नाम और अवधारणाओं को निकालता है और संबंधित परिणामों को बढ़ावा देता है।" }, void 0, false, {
                fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
                lineNumber: 112,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
              lineNumber: 110,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
            lineNumber: 99,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/project/src/pages/CrawlerDashboard.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
};
_c = CrawlerDashboard;
export default CrawlerDashboard;
var _c;
$RefreshReg$(_c, "CrawlerDashboard");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/pages/CrawlerDashboard.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/pages/CrawlerDashboard.tsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QTtBQUFBO0FBQUEsbUJBR0E7QUFBQSxZQUVBLHVCQUFDLFNBQUksV0FBVSw4QkFDYjtBQUFBLHFDQUFDLFFBQUcsV0FBVSxtQ0FBa0MsbUNBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQW1FO0FBQUEsY0FDbkUsdUJBQUMsT0FBRSxXQUFVLHlCQUF3QixxSEFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBMEk7QUFBQSxpQkFGNUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHQTtBQUFBLFlBRUEsdUJBQUMsU0FBSSxXQUFVLCtCQUNiO0FBQUEscUNBQUMsUUFBRyxXQUFVLG9DQUFtQyxnQ0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBaUU7QUFBQSxjQUNqRSx1QkFBQyxPQUFFLFdBQVUseUJBQXdCLG9IQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF5STtBQUFBLGlCQUYzSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdBO0FBQUEsZUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWVBO0FBQUEsYUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW9CQTtBQUFBLFdBN0RGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE4REE7QUFBQSxTQXJHRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBc0dBO0FBQUEsSUFFQSx1QkFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTztBQUFBLE9BM0dUO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0E0R0E7QUFFSjtBQUFFQyxLQWhISUQ7QUFrSE4sZUFBZUE7QUFBaUIsSUFBQUM7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbIkhvbWUiLCJBcnJvd0xlZnQiLCJTZXR0aW5ncyIsIkhlYWRlciIsIkZvb3RlciIsIkNyYXdsRm9ybSIsIkNyYXdsU3RhdHMiLCJDcmF3bEhpc3RvcnkiLCJQZXJmb3JtYW5jZUNoYXJ0cyIsIkNyYXdsZXJEYXNoYm9hcmQiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VzIjpbIkNyYXdsZXJEYXNoYm9hcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBIb21lLCBBcnJvd0xlZnQsIFNldHRpbmdzIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgQ3Jhd2xGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvY3Jhd2xpbmcvQ3Jhd2xGb3JtJztcbmltcG9ydCBDcmF3bFN0YXRzIGZyb20gJy4uL2NvbXBvbmVudHMvY3Jhd2xpbmcvQ3Jhd2xTdGF0cyc7XG5pbXBvcnQgQ3Jhd2xIaXN0b3J5IGZyb20gJy4uL2NvbXBvbmVudHMvY3Jhd2xpbmcvQ3Jhd2xIaXN0b3J5JztcbmltcG9ydCBQZXJmb3JtYW5jZUNoYXJ0cyBmcm9tICcuLi9jb21wb25lbnRzL2NyYXdsaW5nL1BlcmZvcm1hbmNlQ2hhcnRzJztcblxuY29uc3QgQ3Jhd2xlckRhc2hib2FyZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMCBmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8SGVhZGVyIG1pbmltYWwgLz5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB5LTYgZmxleC0xXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtM1wiPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvYWRtaW5cIiBjbGFzc05hbWU9XCJwLTIgaG92ZXI6YmctZ3JheS0yMDAgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgIDxBcnJvd0xlZnQgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+4KS14KWH4KSsIOCkleCljeCksOClieCksuCksCDgpKHgpYjgpLbgpKzgpYvgpLDgpY3gpKE8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ncmF5LTIwMCBob3ZlcjpiZy1ncmF5LTMwMCByb3VuZGVkLW1kIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxIb21lIHNpemU9ezE2fSBjbGFzc05hbWU9XCJtci0yXCIgLz5cbiAgICAgICAgICAgICAg4KS54KWL4KSuXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1wcmltYXJ5IHRleHQtd2hpdGUgcm91bmRlZC1tZCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8U2V0dGluZ3Mgc2l6ZT17MTZ9IGNsYXNzTmFtZT1cIm1yLTJcIiAvPlxuICAgICAgICAgICAgICDgpJXgpY3gpLDgpYngpLLgpLAg4KS44KWH4KSf4KS/4KSC4KSX4KWN4KS4XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTMgZ2FwLTYgbWItNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tMlwiPlxuICAgICAgICAgICAgPENyYXdsU3RhdHMgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPENyYXdsSGlzdG9yeSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMyBnYXAtNiBtYi02XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDcmF3bEZvcm0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgIDxQZXJmb3JtYW5jZUNoYXJ0cyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC02IHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTRcIj7gpIfgpILgpKHgpYfgpJXgpY3gpLjgpL/gpILgpJcg4KSm4KWD4KS34KWN4KSf4KS/4KSV4KWL4KSjPC9oMj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHAtNFwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTJcIj7gpJXgpY3gpLDgpYngpLLgpL/gpILgpJcg4KSw4KSj4KSo4KWA4KSk4KS/PC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi0zXCI+4KS54KSu4KS+4KSw4KWAIOCkleCljeCksOClieCksuCkv+CkguCklyDgpLDgpKPgpKjgpYDgpKTgpL8g4KSV4KS+IOCkieCkpuCljeCkpuClh+CktuCljeCkryDgpLXgpYfgpKwg4KSq4KWH4KSc4KWL4KSCIOCkleCliyDgpJXgpYHgpLbgpLLgpKTgpL7gpKrgpYLgpLDgpY3gpLXgpJUg4KSH4KSC4KSh4KWH4KSV4KWN4KS4IOCkleCksOCkqOCkviDgpLngpYgsIOCknOCkrOCkleCkvyDgpLjgpLDgpY3gpLXgpLAg4KSy4KWL4KShIOCklOCksCDgpKjgpYfgpJ/gpLXgpLDgpY3gpJUg4KSf4KWN4KSw4KWI4KSr4KS/4KSVIOCkleCliyDgpKjgpY3gpK/gpYLgpKjgpKTgpK4g4KSw4KSW4KSo4KS+IOCkueCliOClpDwvcD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBtYi0xXCI+4KSu4KWB4KSW4KWN4KSvIOCkteCkv+CktuClh+Ckt+CkpOCkvuCkj+Ckgjo8L2g0PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIGxpc3QtaW5zaWRlIHNwYWNlLXktMSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgPGxpPuCkieCkmuCljeCkmiDgpKrgpY3gpLDgpL7gpKXgpK7gpL/gpJXgpKTgpL4g4KS14KS+4KSy4KWHIOCkquClh+CknOCli+CkgiDgpJXgpYcg4KSy4KS/4KSPIOCkheCkqOClgeCkleClguCksuCkv+CkpCDgpJXgpY3gpLDgpYngpLIg4KSG4KS14KWD4KSk4KWN4KSk4KS/PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+4KS54KS+4KSo4KS/4KSV4KS+4KSw4KSVIFVSTCDgpKrgpYjgpJ/gpLDgpY3gpKgg4KSV4KWLIOCkm+Cli+CkoeCkvOCkqOClhyDgpJXgpYcg4KSy4KS/4KSPIHJvYm90cy50eHQg4KSV4KS+IOCkquCkvuCksuCkqDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPuCkquClh+CknCDgpKrgpY3gpLDgpL7gpKXgpK7gpL/gpJXgpKTgpL4g4KSo4KS/4KSw4KWN4KSn4KS+4KSw4KS/4KSkIOCkleCksOCkqOClhyDgpJXgpYcg4KSy4KS/4KSPIOCkhuCkteCkvuCkl+CkruCkqCDgpLXgpL/gpLbgpY3gpLLgpYfgpLfgpKM8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT7gpJXgpYfgpLXgpLIg4KSu4KS54KSk4KWN4KS14KSq4KWC4KSw4KWN4KSjIOCkuOCkvuCkruCkl+CljeCksOClgCDgpJXgpYcg4KSy4KS/4KSPIOCkuOCljeCkruCkvuCksOCljeCknyDgpLDgpYDgpJXgpY3gpLDgpYngpLLgpL/gpILgpJc8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHAtNFwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTJcIj7gpIfgpILgpKHgpYfgpJXgpY3gpLjgpL/gpILgpJcg4KSq4KWN4KSw4KSV4KWN4KSw4KS/4KSv4KS+PC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi0zXCI+4KSH4KSC4KSh4KWH4KSV4KWN4KS44KS/4KSC4KSXIOCkquCljeCksOCkleCljeCksOCkv+Ckr+CkviDgpKjgpL/gpK7gpY3gpKjgpLLgpL/gpJbgpL/gpKQg4KSa4KSw4KSj4KWL4KSCIOCkleCkviDgpIXgpKjgpYHgpLjgpLDgpKMg4KSV4KSw4KSk4KWAIOCkueCliDo8L3A+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwibGlzdC1kZWNpbWFsIGxpc3QtaW5zaWRlIHNwYWNlLXktMiB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBiLTIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMTAwXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPlVSTCDgpKjgpL/gpLfgpY3gpJXgpLDgpY3gpLfgpKM6PC9zcGFuPiDgpLXgpYfgpKzgpKrgpYfgpJwg4KS44KWHIOCkuOCkreClgCDgpLLgpL/gpILgpJUg4KSo4KS/4KSV4KS+4KSy4KSo4KS+IOCklOCksCDgpKrgpY3gpLDgpL7gpKXgpK7gpL/gpJXgpKTgpL4g4KSV4KSk4KS+4KSwIOCkruClh+CkgiDgpJzgpYvgpKHgpLzgpKjgpL5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYi0yIGJvcmRlci1iIGJvcmRlci1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj7gpJXgpILgpJ/gpYfgpILgpJ8g4KSr4KS84KWH4KSa4KS/4KSC4KSXOjwvc3Bhbj4g4KSq4KWN4KSw4KS+4KSl4KSu4KS/4KSV4KSk4KS+IOCkleClhyDgpIXgpKjgpYHgpLjgpL7gpLAgVVJMIOCkuOClhyDgpLjgpL7gpK7gpJfgpY3gpLDgpYAg4KSq4KWN4KSw4KS+4KSq4KWN4KSkIOCkleCksOCkqOCkvlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBiLTIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMTAwXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPuCkn+Clh+CkleCljeCkuOCljeCknyDgpKjgpL/gpLfgpY3gpJXgpLDgpY3gpLfgpKM6PC9zcGFuPiBIVE1MIOCkuOClhyDgpJ/gpYfgpJXgpY3gpLjgpY3gpJ8g4KSU4KSwIOCkruClh+Ckn+CkvuCkoeClh+Ckn+CkviDgpKjgpL/gpJXgpL7gpLLgpKjgpL5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYi0yIGJvcmRlci1iIGJvcmRlci1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj7gpIXgpKjgpYHgpJXgpY3gpLDgpK7gpKPgpL/gpJXgpL4g4KSo4KS/4KSw4KWN4KSu4KS+4KSjOjwvc3Bhbj4g4KSW4KWL4KScIOCkleClhyDgpLLgpL/gpI8g4KSF4KSo4KWB4KSV4KWC4KSy4KS/4KSkIOCkh+CkguCkoeClh+CkleCljeCkuCDgpKzgpKjgpL7gpKjgpL5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+4KSw4KWI4KSC4KSV4KS/4KSC4KSXIOCkoeClh+Ckn+CkviDgpJzgpYvgpKHgpLzgpKjgpL46PC9zcGFuPiDgpJbgpYvgpJwg4KSq4KSw4KS/4KSj4KS+4KSu4KWL4KSCIOCkleCliyDgpKzgpYfgpLngpKTgpLAg4KSs4KSo4KS+4KSo4KWHIOCkleClhyDgpLLgpL/gpI8g4KSw4KWI4KSC4KSV4KS/4KSC4KSXIOCkruClh+Ckn+CljeCksOCkv+CkleCljeCkuCDgpJXgpL4g4KSJ4KSq4KSv4KWL4KSXXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi0zXCI+4KSu4KS24KWA4KSoIOCksuCksOCljeCkqOCkv+CkguCklyDgpJTgpLAg4KSJ4KSo4KWN4KSo4KSkIOCkpOCkleCkqOClgOCkleClh+CkgjwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIG1iLTRcIj7gpLngpK7gpL7gpLDgpL4g4KSH4KSC4KSh4KWH4KSV4KWN4KS44KS/4KSC4KSXIOCkuOCkv+CkuOCljeCkn+CkriDgpLjgpKzgpLjgpYcg4KSq4KWN4KSw4KS+4KS44KSC4KSX4KS/4KSVIOCklOCksCDgpIngpKrgpK/gpYvgpJfgpYAg4KSW4KWL4KScIOCkquCksOCkv+Cko+CkvuCkruCli+CkgiDgpJXgpYcg4KSo4KS/4KSw4KWN4KSu4KS+4KSjIOCkleClhyDgpLLgpL/gpI8g4KSu4KS24KWA4KSoIOCksuCksOCljeCkqOCkv+CkguCklyDgpJXgpL4g4KSJ4KSq4KSv4KWL4KSXIOCkleCksOCkpOCkviDgpLngpYjgpaQ8L3A+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtNTAgcC00IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gbWItMiB0ZXh0LWJsdWUtODAwXCI+4KS44KS+4KSu4KSX4KWN4KSw4KWAIOCkteCkv+CktuCljeCksuClh+Ckt+CkozwvaDQ+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+4KS54KSu4KS+4KSw4KS+IE5MUCDgpK7gpYngpKHgpLIg4KS44KS+4KSu4KSX4KWN4KSw4KWAIOCkleCkviDgpLXgpL/gpLbgpY3gpLLgpYfgpLfgpKMg4KSV4KSw4KSk4KS+IOCkueCliCDgpJTgpLAg4KSq4KWN4KSw4KS+4KS44KSC4KSX4KS/4KSV4KSk4KS+LCDgpJfgpYHgpKPgpLXgpKTgpY3gpKTgpL4g4KSU4KSwIOCkteCkv+CktuCljeCkteCkuOCkqOClgOCkr+CkpOCkviDgpJXgpYcg4KSG4KSn4KS+4KSwIOCkquCksCDgpLjgpY3gpJXgpYvgpLAg4KSV4KSw4KSk4KS+IOCkueCliOClpDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwIHAtNCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIG1iLTIgdGV4dC1ncmVlbi04MDBcIj7gpLjgpL/gpK7gpL/gpLLgpYjgpLDgpL/gpJ/gpYAg4KSh4KS/4KSf4KWH4KSV4KWN4KS24KSoPC9oND5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj7gpKHgpYHgpKrgpY3gpLLgpL/gpJXgpYfgpJ8g4KS44KS+4KSu4KSX4KWN4KSw4KWAIOCkleClgCDgpKrgpLngpJrgpL7gpKgg4KSV4KSw4KSk4KS+IOCkueCliCDgpJTgpLAg4KSW4KWL4KScIOCkquCksOCkv+Cko+CkvuCkruCli+CkgiDgpJXgpYAg4KS14KS/4KS14KS/4KSn4KSk4KS+IOCkuOClgeCkqOCkv+CktuCljeCkmuCkv+CkpCDgpJXgpLDgpKjgpYcg4KSV4KWHIOCksuCkv+CkjyDgpIXgpKjgpYHgpJXgpYLgpLLgpL/gpKQg4KSV4KSw4KSk4KS+IOCkueCliOClpDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXB1cnBsZS01MCBwLTQgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBtYi0yIHRleHQtcHVycGxlLTgwMFwiPuCkj+CkguCkn+Ckv+Ckn+ClgCDgpLDgpL/gpJXgpJfgpY3gpKjgpL/gpLbgpKg8L2g0PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPuCkn+Clh+CkleCljeCkuOCljeCknyDgpLjgpYcg4KSu4KS54KSk4KWN4KS14KSq4KWC4KSw4KWN4KSjIOCkj+CkguCkn+Ckv+Ckn+ClgOCknCwg4KSo4KS+4KSuIOCklOCksCDgpIXgpLXgpKfgpL7gpLDgpKPgpL7gpJPgpIIg4KSV4KWLIOCkqOCkv+CkleCkvuCksuCkpOCkviDgpLngpYgg4KSU4KSwIOCkuOCkguCkrOCkguCkp+Ckv+CkpCDgpKrgpLDgpL/gpKPgpL7gpK7gpYvgpIIg4KSV4KWLIOCkrOCkouCkvOCkvuCkteCkviDgpKbgpYfgpKTgpL4g4KS54KWI4KWkPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcmF3bGVyRGFzaGJvYXJkO1xuIFxuIl0sImZpbGUiOiIvaG9tZS9wcm9qZWN0L3NyYy9wYWdlcy9DcmF3bGVyRGFzaGJvYXJkLnRzeCJ9
