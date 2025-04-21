import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/HomePage.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3859ff4e"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/project/src/pages/HomePage.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=3859ff4e";
import Header from "/src/components/Header.tsx";
import SearchBar from "/src/components/SearchBar.tsx";
import Footer from "/src/components/Footer.tsx";
import ImageCard from "/src/components/common/ImageCard.tsx";
import { Database, Server, Globe } from "/node_modules/.vite/deps/lucide-react.js?v=3859ff4e";
const HomePage = () => {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "min-h-screen flex flex-col",
      style: {
        backgroundImage: `url('https://images.unsplash.com/photo-1511296265581-c2450046447d?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxoaW5kaSUyMHNlYXJjaCUyMGVuZ2luZSUyMGdvb2dsZSUyMGludGVyZmFjZXxlbnwwfHx8fDE3NDMzMjA2NzB8MA')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-white bg-opacity-90" }, void 0, false, {
          fileName: "/home/project/src/pages/HomePage.tsx",
          lineNumber: 18,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 flex-1", children: [
          /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
            fileName: "/home/project/src/pages/HomePage.tsx",
            lineNumber: 20,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("main", { className: "flex-1 flex flex-col items-center justify-center px-4 -mt-20", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-8", children: /* @__PURE__ */ jsxDEV("h1", { className: "text-7xl font-bold mb-5", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-primary", children: "ख" }, void 0, false, {
                fileName: "/home/project/src/pages/HomePage.tsx",
                lineNumber: 24,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-secondary", children: "ो" }, void 0, false, {
                fileName: "/home/project/src/pages/HomePage.tsx",
                lineNumber: 25,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-tertiary", children: "ज" }, void 0, false, {
                fileName: "/home/project/src/pages/HomePage.tsx",
                lineNumber: 26,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/HomePage.tsx",
              lineNumber: 23,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "/home/project/src/pages/HomePage.tsx",
              lineNumber: 22,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV(SearchBar, { isHomePage: true }, void 0, false, {
              fileName: "/home/project/src/pages/HomePage.tsx",
              lineNumber: 29,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-16 max-w-4xl w-full", children: [
              /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold mb-6 text-center", children: "वेब क्रॉलिंग और इंडेक्सिंग" }, void 0, false, {
                fileName: "/home/project/src/pages/HomePage.tsx",
                lineNumber: 32,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "p-3 rounded-full bg-blue-50 mb-3", children: /* @__PURE__ */ jsxDEV(Database, { className: "text-primary", size: 24 }, void 0, false, {
                    fileName: "/home/project/src/pages/HomePage.tsx",
                    lineNumber: 37,
                    columnNumber: 19
                  }, this) }, void 0, false, {
                    fileName: "/home/project/src/pages/HomePage.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("h3", { className: "font-bold mb-2", children: "स्मार्ट क्रॉलिंग" }, void 0, false, {
                    fileName: "/home/project/src/pages/HomePage.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 text-sm", children: "हमारा क्रॉलर वेब पेजों को स्मार्ट तरीके से इंडेक्स करता है, केवल प्रासंगिक सामग्री पर ध्यान केंद्रित करता है।" }, void 0, false, {
                    fileName: "/home/project/src/pages/HomePage.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/HomePage.tsx",
                  lineNumber: 35,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "p-3 rounded-full bg-green-50 mb-3", children: /* @__PURE__ */ jsxDEV(Server, { className: "text-quaternary", size: 24 }, void 0, false, {
                    fileName: "/home/project/src/pages/HomePage.tsx",
                    lineNumber: 45,
                    columnNumber: 19
                  }, this) }, void 0, false, {
                    fileName: "/home/project/src/pages/HomePage.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("h3", { className: "font-bold mb-2", children: "उन्नत इंडेक्सिंग" }, void 0, false, {
                    fileName: "/home/project/src/pages/HomePage.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 text-sm", children: "हमारी इंडेक्सिंग तकनीक सटीक खोज परिणाम सुनिश्चित करने के लिए AI और ML का उपयोग करती है।" }, void 0, false, {
                    fileName: "/home/project/src/pages/HomePage.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/HomePage.tsx",
                  lineNumber: 43,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "p-3 rounded-full bg-yellow-50 mb-3", children: /* @__PURE__ */ jsxDEV(Globe, { className: "text-tertiary", size: 24 }, void 0, false, {
                    fileName: "/home/project/src/pages/HomePage.tsx",
                    lineNumber: 53,
                    columnNumber: 19
                  }, this) }, void 0, false, {
                    fileName: "/home/project/src/pages/HomePage.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("h3", { className: "font-bold mb-2", children: "Bigtable डेटाबेस" }, void 0, false, {
                    fileName: "/home/project/src/pages/HomePage.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 text-sm", children: "हमारा स्वयं का NoSQL डेटाबेस पेटाबाइट स्केल डेटा स्टोरेज और तेज़ क्वेरी रिट्रीवल प्रदान करता है।" }, void 0, false, {
                    fileName: "/home/project/src/pages/HomePage.tsx",
                    lineNumber: 56,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/HomePage.tsx",
                  lineNumber: 51,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/HomePage.tsx",
                lineNumber: 34,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl font-bold mb-6 text-center", children: "उन्नत विश्लेषण" }, void 0, false, {
                fileName: "/home/project/src/pages/HomePage.tsx",
                lineNumber: 60,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", children: [
                /* @__PURE__ */ jsxDEV(
                  ImageCard,
                  {
                    imageUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxzZWFyY2glMjBlbmdpbmUlMjBjcmF3bGVyJTIwZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MHx8fHwxNzQzMjUwMTUyfDA&ixlib=rb-4.0.3",
                    title: "डेटा विश्लेषण",
                    description: "हमारे उन्नत डैशबोर्ड आपको क्रॉलिंग और इंडेक्सिंग प्रक्रिया की पूरी जानकारी देते हैं।",
                    link: "/crawler-dashboard"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/project/src/pages/HomePage.tsx",
                    lineNumber: 63,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  ImageCard,
                  {
                    imageUrl: "https://images.unsplash.com/photo-1596742578443-7682ef5251cd?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxoaW5kaSUyMHNlYXJjaCUyMGVuZ2luZSUyMGdvb2dsZSUyMGludGVyZmFjZXxlbnwwfHx8fDE3NDMzMjA2NzB8MA",
                    title: "मोबाइल इंटरफेस",
                    description: "हमारा खोज इंजन मोबाइल-फ्रेंडली है और सभी डिवाइस पर अच्छी तरह से काम करता है।",
                    link: "/bigtable-admin"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/project/src/pages/HomePage.tsx",
                    lineNumber: 70,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  ImageCard,
                  {
                    imageUrl: "https://images.unsplash.com/photo-1608616693532-89a59cb12324?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxoaW5kaSUyMHNlYXJjaCUyMGVuZ2luZSUyMGdvb2dsZSUyMGludGVyZmFjZXxlbnwwfHx8fDE3NDMzMjA2NzB8MA",
                    title: "भारतीय संस्कृति",
                    description: "हमारा खोज इंजन भारतीय भाषाओं और संस्कृति के लिए विशेष रूप से अनुकूलित है।",
                    link: "/crawler-dashboard"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/project/src/pages/HomePage.tsx",
                    lineNumber: 77,
                    columnNumber: 15
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/HomePage.tsx",
                lineNumber: 62,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: "/admin",
                  className: "px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 inline-flex items-center",
                  children: "प्रशासक पैनल देखें"
                },
                void 0,
                false,
                {
                  fileName: "/home/project/src/pages/HomePage.tsx",
                  lineNumber: 86,
                  columnNumber: 15
                },
                this
              ) }, void 0, false, {
                fileName: "/home/project/src/pages/HomePage.tsx",
                lineNumber: 85,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/HomePage.tsx",
              lineNumber: 31,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/HomePage.tsx",
            lineNumber: 21,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/HomePage.tsx",
          lineNumber: 19,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative z-10", children: /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
          fileName: "/home/project/src/pages/HomePage.tsx",
          lineNumber: 97,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/HomePage.tsx",
          lineNumber: 96,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/home/project/src/pages/HomePage.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  );
};
_c = HomePage;
export default HomePage;
var _c;
$RefreshReg$(_c, "HomePage");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/pages/HomePage.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/pages/HomePage.tsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
