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
