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

//# sourceMappingURL=data:application/json;base64,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QSxrQkFDQyxJQUFHO0FBQUEsa0JBQ0gsV0FBVTtBQUFBLGtCQUF1RztBQUFBO0FBQUEsZ0JBRm5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUtBLEtBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFPQTtBQUFBLGlCQTdERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQThEQTtBQUFBLGVBeEVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeUVBO0FBQUEsYUEzRUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTRFQTtBQUFBLFFBQ0EsdUJBQUMsU0FBSSxXQUFVLGlCQUNiLGlDQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFPLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVBO0FBQUE7QUFBQTtBQUFBLElBeEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQXlGQTtBQUVKO0FBQUVDLEtBN0ZJSjtBQStGTixlQUFlQTtBQUFTLElBQUFJO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJIZWFkZXIiLCJTZWFyY2hCYXIiLCJGb290ZXIiLCJJbWFnZUNhcmQiLCJEYXRhYmFzZSIsIlNlcnZlciIsIkdsb2JlIiwiSG9tZVBhZ2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZXMiOlsiSG9tZVBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hCYXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgSW1hZ2VDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL0ltYWdlQ2FyZCc7XG5pbXBvcnQgeyBEYXRhYmFzZSwgU2VydmVyLCBBY3Rpdml0eSwgR2xvYmUgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IFxuICAgICAgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2xcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxMTI5NjI2NTU4MS1jMjQ1MDA0NjQ0N2Q/aXhpZD1NM3czTWpVek5EaDhNSHd4ZkhObFlYSmphSHd4Zkh4b2FXNWthU1V5TUhObFlYSmphQ1V5TUdWdVoybHVaU1V5TUdkdmIyZHNaU1V5TUdsdWRHVnlabUZqWlh4bGJud3dmSHg4ZkRFM05ETXpNakEyTnpCOE1BJylgLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJ1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctd2hpdGUgYmctb3BhY2l0eS05MFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIGZsZXgtMVwiPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC00IC1tdC0yMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItOFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtN3hsIGZvbnQtYm9sZCBtYi01XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPuCkljwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnlcIj7gpYs8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtdGVydGlhcnlcIj7gpJw8L3NwYW4+XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTZWFyY2hCYXIgaXNIb21lUGFnZT17dHJ1ZX0gLz5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTE2IG1heC13LTR4bCB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNiB0ZXh0LWNlbnRlclwiPuCkteClh+CkrCDgpJXgpY3gpLDgpYngpLLgpL/gpILgpJcg4KSU4KSwIOCkh+CkguCkoeClh+CkleCljeCkuOCkv+CkguCklzwvaDI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNiBtYi04XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgcC00IGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgcm91bmRlZC1mdWxsIGJnLWJsdWUtNTAgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgPERhdGFiYXNlIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiIHNpemU9ezI0fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgbWItMlwiPuCkuOCljeCkruCkvuCksOCljeCknyDgpJXgpY3gpLDgpYngpLLgpL/gpILgpJc8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1zbVwiPuCkueCkruCkvuCksOCkviDgpJXgpY3gpLDgpYngpLLgpLAg4KS14KWH4KSsIOCkquClh+CknOCli+CkgiDgpJXgpYsg4KS44KWN4KSu4KS+4KSw4KWN4KSfIOCkpOCksOClgOCkleClhyDgpLjgpYcg4KSH4KSC4KSh4KWH4KSV4KWN4KS4IOCkleCksOCkpOCkviDgpLngpYgsIOCkleClh+CkteCksiDgpKrgpY3gpLDgpL7gpLjgpILgpJfgpL/gpJUg4KS44KS+4KSu4KSX4KWN4KSw4KWAIOCkquCksCDgpKfgpY3gpK/gpL7gpKgg4KSV4KWH4KSC4KSm4KWN4KSw4KS/4KSkIOCkleCksOCkpOCkviDgpLngpYjgpaQ8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBwLTQgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tNTAgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgPFNlcnZlciBjbGFzc05hbWU9XCJ0ZXh0LXF1YXRlcm5hcnlcIiBzaXplPXsyNH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG1iLTJcIj7gpIngpKjgpY3gpKjgpKQg4KSH4KSC4KSh4KWH4KSV4KWN4KS44KS/4KSC4KSXPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQtc21cIj7gpLngpK7gpL7gpLDgpYAg4KSH4KSC4KSh4KWH4KSV4KWN4KS44KS/4KSC4KSXIOCkpOCkleCkqOClgOCklSDgpLjgpJ/gpYDgpJUg4KSW4KWL4KScIOCkquCksOCkv+Cko+CkvuCkriDgpLjgpYHgpKjgpL/gpLbgpY3gpJrgpL/gpKQg4KSV4KSw4KSo4KWHIOCkleClhyDgpLLgpL/gpI8gQUkg4KSU4KSwIE1MIOCkleCkviDgpIngpKrgpK/gpYvgpJcg4KSV4KSw4KSk4KWAIOCkueCliOClpDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIHAtNCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtZnVsbCBiZy15ZWxsb3ctNTAgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgPEdsb2JlIGNsYXNzTmFtZT1cInRleHQtdGVydGlhcnlcIiBzaXplPXsyNH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG1iLTJcIj5CaWd0YWJsZSDgpKHgpYfgpJ/gpL7gpKzgpYfgpLg8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1zbVwiPuCkueCkruCkvuCksOCkviDgpLjgpY3gpLXgpK/gpIIg4KSV4KS+IE5vU1FMIOCkoeClh+Ckn+CkvuCkrOClh+CkuCDgpKrgpYfgpJ/gpL7gpKzgpL7gpIfgpJ8g4KS44KWN4KSV4KWH4KSyIOCkoeClh+Ckn+CkviDgpLjgpY3gpJ/gpYvgpLDgpYfgpJwg4KSU4KSwIOCkpOClh+CknOCkvCDgpJXgpY3gpLXgpYfgpLDgpYAg4KSw4KS/4KSf4KWN4KSw4KWA4KS14KSyIOCkquCljeCksOCkpuCkvuCkqCDgpJXgpLDgpKTgpL4g4KS54KWI4KWkPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTYgdGV4dC1jZW50ZXJcIj7gpIngpKjgpY3gpKjgpKQg4KS14KS/4KS24KWN4KSy4KWH4KS34KSjPC9oMj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC02IG1iLTEyXCI+XG4gICAgICAgICAgICAgIDxJbWFnZUNhcmQgXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyNjYyODk1MzMwMS0zZTU4OWE2YThiNzQ/aXhpZD1NM3czTWpVek5EaDhNSHd4ZkhObFlYSmphSHd4Zkh4elpXRnlZMmdsTWpCbGJtZHBibVVsTWpCamNtRjNiR1Z5SlRJd1pHRjBZU1V5TUhacGMzVmhiR2w2WVhScGIyNThaVzU4TUh4OGZId3hOelF6TWpVd01UVXlmREEmaXhsaWI9cmItNC4wLjNcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwi4KSh4KWH4KSf4KS+IOCkteCkv+CktuCljeCksuClh+Ckt+Cko1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCLgpLngpK7gpL7gpLDgpYcg4KSJ4KSo4KWN4KSo4KSkIOCkoeCliOCktuCkrOCli+CksOCljeCkoSDgpIbgpKrgpJXgpYsg4KSV4KWN4KSw4KWJ4KSy4KS/4KSC4KSXIOCklOCksCDgpIfgpILgpKHgpYfgpJXgpY3gpLjgpL/gpILgpJcg4KSq4KWN4KSw4KSV4KWN4KSw4KS/4KSv4KS+IOCkleClgCDgpKrgpYLgpLDgpYAg4KSc4KS+4KSo4KSV4KS+4KSw4KWAIOCkpuClh+CkpOClhyDgpLngpYjgpILgpaRcIlxuICAgICAgICAgICAgICAgIGxpbms9XCIvY3Jhd2xlci1kYXNoYm9hcmRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPEltYWdlQ2FyZCBcbiAgICAgICAgICAgICAgICBpbWFnZVVybD1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTk2NzQyNTc4NDQzLTc2ODJlZjUyNTFjZD9peGlkPU0zdzNNalV6TkRoOE1Id3hmSE5sWVhKamFId3lmSHhvYVc1a2FTVXlNSE5sWVhKamFDVXlNR1Z1WjJsdVpTVXlNR2R2YjJkc1pTVXlNR2x1ZEdWeVptRmpaWHhsYm53d2ZIeDhmREUzTkRNek1qQTJOekI4TUFcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwi4KSu4KWL4KSs4KS+4KSH4KSyIOCkh+CkguCkn+CksOCkq+Clh+CkuFwiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCLgpLngpK7gpL7gpLDgpL4g4KSW4KWL4KScIOCkh+CkguCknOCkqCDgpK7gpYvgpKzgpL7gpIfgpLIt4KSr4KWN4KSw4KWH4KSC4KSh4KSy4KWAIOCkueCliCDgpJTgpLAg4KS44KSt4KWAIOCkoeCkv+CkteCkvuCkh+CkuCDgpKrgpLAg4KSF4KSa4KWN4KSb4KWAIOCkpOCksOCkuSDgpLjgpYcg4KSV4KS+4KSuIOCkleCksOCkpOCkviDgpLngpYjgpaRcIlxuICAgICAgICAgICAgICAgIGxpbms9XCIvYmlndGFibGUtYWRtaW5cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPEltYWdlQ2FyZCBcbiAgICAgICAgICAgICAgICBpbWFnZVVybD1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjA4NjE2NjkzNTMyLTg5YTU5Y2IxMjMyND9peGlkPU0zdzNNalV6TkRoOE1Id3hmSE5sWVhKamFId3pmSHhvYVc1a2FTVXlNSE5sWVhKamFDVXlNR1Z1WjJsdVpTVXlNR2R2YjJkc1pTVXlNR2x1ZEdWeVptRmpaWHhsYm53d2ZIeDhmREUzTkRNek1qQTJOekI4TUFcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwi4KSt4KS+4KSw4KSk4KWA4KSvIOCkuOCkguCkuOCljeCkleClg+CkpOCkv1wiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCLgpLngpK7gpL7gpLDgpL4g4KSW4KWL4KScIOCkh+CkguCknOCkqCDgpK3gpL7gpLDgpKTgpYDgpK8g4KSt4KS+4KS34KS+4KST4KSCIOCklOCksCDgpLjgpILgpLjgpY3gpJXgpYPgpKTgpL8g4KSV4KWHIOCksuCkv+CkjyDgpLXgpL/gpLbgpYfgpLcg4KSw4KWC4KSqIOCkuOClhyDgpIXgpKjgpYHgpJXgpYLgpLLgpL/gpKQg4KS54KWI4KWkXCJcbiAgICAgICAgICAgICAgICBsaW5rPVwiL2NyYXdsZXItZGFzaGJvYXJkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgIHRvPVwiL2FkbWluXCIgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIGJnLXByaW1hcnkgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgZm9udC1tZWRpdW0gaG92ZXI6YmctcHJpbWFyeS85MCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg4KSq4KWN4KSw4KS24KS+4KS44KSVIOCkquCliOCkqOCksiDgpKbgpYfgpJbgpYfgpIJcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwXCI+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4gXG4iXSwiZmlsZSI6Ii9ob21lL3Byb2plY3Qvc3JjL3BhZ2VzL0hvbWVQYWdlLnRzeCJ9
