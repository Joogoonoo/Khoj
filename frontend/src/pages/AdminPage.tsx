import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/AdminPage.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3859ff4e"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/project/src/pages/AdminPage.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=3859ff4e"; const useState = __vite__cjsImport3_react["useState"];
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=3859ff4e";
import { Settings, Home, Database, Activity, Search, FileText, Shield, Clock, Server, HardDrive } from "/node_modules/.vite/deps/lucide-react.js?v=3859ff4e";
import Header from "/src/components/Header.tsx";
import Footer from "/src/components/Footer.tsx";
const AdminPage = () => {
  _s();
  const [activeTab, setActiveTab] = useState("dashboard");
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-gray-100 flex flex-col", children: [
    /* @__PURE__ */ jsxDEV(Header, { minimal: true }, void 0, false, {
      fileName: "/home/project/src/pages/AdminPage.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 py-6 flex-1", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row gap-6", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "w-full md:w-64 bg-white rounded-lg shadow-md p-4", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold mb-4 text-primary", children: "प्रशासक पैनल" }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPage.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("nav", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => setActiveTab("dashboard"),
              className: `w-full flex items-center space-x-3 px-4 py-2 rounded-md ${activeTab === "dashboard" ? "bg-primary text-white" : "hover:bg-gray-100"}`,
              children: [
                /* @__PURE__ */ jsxDEV(Activity, { size: 18 }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 29,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "डैशबोर्ड" }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 30,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/project/src/pages/AdminPage.tsx",
              lineNumber: 23,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => setActiveTab("search"),
              className: `w-full flex items-center space-x-3 px-4 py-2 rounded-md ${activeTab === "search" ? "bg-primary text-white" : "hover:bg-gray-100"}`,
              children: [
                /* @__PURE__ */ jsxDEV(Search, { size: 18 }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 39,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "खोज प्रबंधन" }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 40,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/project/src/pages/AdminPage.tsx",
              lineNumber: 33,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/crawler-dashboard",
              className: "w-full flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-100",
              children: [
                /* @__PURE__ */ jsxDEV(Database, { size: 18 }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 47,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "क्रॉलर डैशबोर्ड" }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 48,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/project/src/pages/AdminPage.tsx",
              lineNumber: 43,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/bigtable-admin",
              className: "w-full flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-100",
              children: [
                /* @__PURE__ */ jsxDEV(Server, { size: 18 }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 55,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "Bigtable प्रबंधन" }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 56,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/project/src/pages/AdminPage.tsx",
              lineNumber: 51,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/blobstore-admin",
              className: "w-full flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-100",
              children: [
                /* @__PURE__ */ jsxDEV(HardDrive, { size: 18 }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 63,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "Blobstore प्रबंधन" }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 64,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/project/src/pages/AdminPage.tsx",
              lineNumber: 59,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => setActiveTab("content"),
              className: `w-full flex items-center space-x-3 px-4 py-2 rounded-md ${activeTab === "content" ? "bg-primary text-white" : "hover:bg-gray-100"}`,
              children: [
                /* @__PURE__ */ jsxDEV(FileText, { size: 18 }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 73,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "सामग्री प्रबंधन" }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 74,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/project/src/pages/AdminPage.tsx",
              lineNumber: 67,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => setActiveTab("security"),
              className: `w-full flex items-center space-x-3 px-4 py-2 rounded-md ${activeTab === "security" ? "bg-primary text-white" : "hover:bg-gray-100"}`,
              children: [
                /* @__PURE__ */ jsxDEV(Shield, { size: 18 }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 83,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "सुरक्षा" }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 84,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/project/src/pages/AdminPage.tsx",
              lineNumber: 77,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => setActiveTab("settings"),
              className: `w-full flex items-center space-x-3 px-4 py-2 rounded-md ${activeTab === "settings" ? "bg-primary text-white" : "hover:bg-gray-100"}`,
              children: [
                /* @__PURE__ */ jsxDEV(Settings, { size: 18 }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 93,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "सेटिंग्स" }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 94,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/project/src/pages/AdminPage.tsx",
              lineNumber: 87,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/",
              className: "w-full flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-100 text-gray-600",
              children: [
                /* @__PURE__ */ jsxDEV(Home, { size: 18 }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 101,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "होम पेज" }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 102,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/project/src/pages/AdminPage.tsx",
              lineNumber: 97,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPage.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/AdminPage.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex-1 bg-white rounded-lg shadow-md p-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center mb-6", children: [
          /* @__PURE__ */ jsxDEV("h1", { className: "text-2xl font-bold", children: [
            activeTab === "dashboard" && "डैशबोर्ड",
            activeTab === "search" && "खोज प्रबंधन",
            activeTab === "content" && "सामग्री प्रबंधन",
            activeTab === "security" && "सुरक्षा",
            activeTab === "settings" && "सेटिंग्स"
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPage.tsx",
            lineNumber: 110,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full flex items-center", children: [
            /* @__PURE__ */ jsxDEV(Clock, { size: 14, className: "mr-1" }, void 0, false, {
              fileName: "/home/project/src/pages/AdminPage.tsx",
              lineNumber: 119,
              columnNumber: 17
            }, this),
            "अंतिम अपडेट: आज, 14:30"
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPage.tsx",
            lineNumber: 118,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPage.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this),
        activeTab === "dashboard" && /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-50 rounded-lg p-4 border border-blue-100", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-medium mb-1", children: "कुल खोजें" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPage.tsx",
                lineNumber: 128,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-3xl font-bold", children: "1,24,578" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPage.tsx",
                lineNumber: 129,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-green-600 mt-1", children: "+5.2% पिछले सप्ताह से" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPage.tsx",
                lineNumber: 130,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPage.tsx",
              lineNumber: 127,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-green-50 rounded-lg p-4 border border-green-100", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-medium mb-1", children: "इंडेक्स किए गए पेज" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPage.tsx",
                lineNumber: 134,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-3xl font-bold", children: "5,67,892" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPage.tsx",
                lineNumber: 135,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-green-600 mt-1", children: "+12.3% पिछले महीने से" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPage.tsx",
                lineNumber: 136,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPage.tsx",
              lineNumber: 133,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-purple-50 rounded-lg p-4 border border-purple-100", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-medium mb-1", children: "औसत प्रतिक्रिया समय" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPage.tsx",
                lineNumber: 140,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-3xl font-bold", children: "0.42s" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPage.tsx",
                lineNumber: 141,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-green-600 mt-1", children: "-0.05s पिछले सप्ताह से" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPage.tsx",
                lineNumber: 142,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPage.tsx",
              lineNumber: 139,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPage.tsx",
            lineNumber: 126,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex-1 bg-gray-50 p-4 rounded-lg border border-gray-200", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-medium mb-3", children: "त्वरित लिंक" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPage.tsx",
                lineNumber: 148,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxDEV(
                  Link,
                  {
                    to: "/crawler-dashboard",
                    className: "bg-white p-3 rounded border border-gray-200 hover:shadow-md flex items-center",
                    children: [
                      /* @__PURE__ */ jsxDEV(Database, { size: 16, className: "mr-2 text-primary" }, void 0, false, {
                        fileName: "/home/project/src/pages/AdminPage.tsx",
                        lineNumber: 154,
                        columnNumber: 25
                      }, this),
                      "क्रॉलर डैशबोर्ड"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/home/project/src/pages/AdminPage.tsx",
                    lineNumber: 150,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  Link,
                  {
                    to: "/bigtable-admin",
                    className: "bg-white p-3 rounded border border-gray-200 hover:shadow-md flex items-center",
                    children: [
                      /* @__PURE__ */ jsxDEV(Server, { size: 16, className: "mr-2 text-tertiary" }, void 0, false, {
                        fileName: "/home/project/src/pages/AdminPage.tsx",
                        lineNumber: 161,
                        columnNumber: 25
                      }, this),
                      "Bigtable प्रबंधन"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/home/project/src/pages/AdminPage.tsx",
                    lineNumber: 157,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  Link,
                  {
                    to: "/blobstore-admin",
                    className: "bg-white p-3 rounded border border-gray-200 hover:shadow-md flex items-center",
                    children: [
                      /* @__PURE__ */ jsxDEV(HardDrive, { size: 16, className: "mr-2 text-quaternary" }, void 0, false, {
                        fileName: "/home/project/src/pages/AdminPage.tsx",
                        lineNumber: 168,
                        columnNumber: 25
                      }, this),
                      "Blobstore प्रबंधन"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/home/project/src/pages/AdminPage.tsx",
                    lineNumber: 164,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    className: "bg-white p-3 rounded border border-gray-200 hover:shadow-md flex items-center",
                    children: [
                      /* @__PURE__ */ jsxDEV(Search, { size: 16, className: "mr-2 text-secondary" }, void 0, false, {
                        fileName: "/home/project/src/pages/AdminPage.tsx",
                        lineNumber: 174,
                        columnNumber: 25
                      }, this),
                      "खोज सेटिंग्स"
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/home/project/src/pages/AdminPage.tsx",
                    lineNumber: 171,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/AdminPage.tsx",
                lineNumber: 149,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPage.tsx",
              lineNumber: 147,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "md:w-1/3 bg-gray-50 p-4 rounded-lg border border-gray-200", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-medium mb-3", children: "सिस्टम स्थिति" }, void 0, false, {
                fileName: "/home/project/src/pages/AdminPage.tsx",
                lineNumber: 181,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxDEV("span", { children: "सीपीयू उपयोग" }, void 0, false, {
                    fileName: "/home/project/src/pages/AdminPage.tsx",
                    lineNumber: 184,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "24%" }, void 0, false, {
                    fileName: "/home/project/src/pages/AdminPage.tsx",
                    lineNumber: 185,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 183,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "w-full bg-gray-200 rounded-full h-2.5", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-primary h-2.5 rounded-full", style: { width: "24%" } }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 188,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 187,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center mt-3", children: [
                  /* @__PURE__ */ jsxDEV("span", { children: "मेमोरी उपयोग" }, void 0, false, {
                    fileName: "/home/project/src/pages/AdminPage.tsx",
                    lineNumber: 192,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "67%" }, void 0, false, {
                    fileName: "/home/project/src/pages/AdminPage.tsx",
                    lineNumber: 193,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 191,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "w-full bg-gray-200 rounded-full h-2.5", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-secondary h-2.5 rounded-full", style: { width: "67%" } }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 196,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 195,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center mt-3", children: [
                  /* @__PURE__ */ jsxDEV("span", { children: "डिस्क उपयोग" }, void 0, false, {
                    fileName: "/home/project/src/pages/AdminPage.tsx",
                    lineNumber: 200,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "42%" }, void 0, false, {
                    fileName: "/home/project/src/pages/AdminPage.tsx",
                    lineNumber: 201,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 199,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "w-full bg-gray-200 rounded-full h-2.5", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-tertiary h-2.5 rounded-full", style: { width: "42%" } }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 204,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "/home/project/src/pages/AdminPage.tsx",
                  lineNumber: 203,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/AdminPage.tsx",
                lineNumber: 182,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/AdminPage.tsx",
              lineNumber: 180,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/AdminPage.tsx",
            lineNumber: 146,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/AdminPage.tsx",
          lineNumber: 125,
          columnNumber: 13
        }, this),
        activeTab === "search" && /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", children: "खोज प्रबंधन डैशबोर्ड सामग्री यहां दिखाई जाएगी।" }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPage.tsx",
          lineNumber: 214,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPage.tsx",
          lineNumber: 213,
          columnNumber: 13
        }, this),
        activeTab === "content" && /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", children: "सामग्री प्रबंधन डैशबोर्ड सामग्री यहां दिखाई जाएगी।" }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPage.tsx",
          lineNumber: 220,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPage.tsx",
          lineNumber: 219,
          columnNumber: 13
        }, this),
        activeTab === "security" && /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", children: "सुरक्षा डैशबोर्ड सामग्री यहां दिखाई जाएगी।" }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPage.tsx",
          lineNumber: 226,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPage.tsx",
          lineNumber: 225,
          columnNumber: 13
        }, this),
        activeTab === "settings" && /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600", children: "सेटिंग्स डैशबोर्ड सामग्री यहां दिखाई जाएगी।" }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPage.tsx",
          lineNumber: 232,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/AdminPage.tsx",
          lineNumber: 231,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/AdminPage.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/pages/AdminPage.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/project/src/pages/AdminPage.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/home/project/src/pages/AdminPage.tsx",
      lineNumber: 239,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/project/src/pages/AdminPage.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
};
_s(AdminPage, "EZIq+yjoOG1DNoxcFU03DF5qjSk=");
_c = AdminPage;
export default AdminPage;
var _c;
$RefreshReg$(_c, "AdminPage");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/pages/AdminPage.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/pages/AdminPage.tsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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V0E2TkEsS0E5TkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQStOQTtBQUFBLElBRUEsdUJBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU87QUFBQSxPQXBPVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBcU9BO0FBRUo7QUFBRUQsR0EzT0lELFdBQVM7QUFBQU0sS0FBVE47QUE2T04sZUFBZUE7QUFBVSxJQUFBTTtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiTGluayIsIlNldHRpbmdzIiwiSG9tZSIsIkRhdGFiYXNlIiwiQWN0aXZpdHkiLCJTZWFyY2giLCJGaWxlVGV4dCIsIlNoaWVsZCIsIkNsb2NrIiwiU2VydmVyIiwiSGFyZERyaXZlIiwiSGVhZGVyIiwiRm9vdGVyIiwiQWRtaW5QYWdlIiwiX3MiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJ1c2VTdGF0ZSIsIndpZHRoIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlcyI6WyJBZG1pblBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFNldHRpbmdzLCBIb21lLCBEYXRhYmFzZSwgQWN0aXZpdHksIFNlYXJjaCwgRmlsZVRleHQsIFNoaWVsZCwgQ2xvY2ssIFNlcnZlciwgSGFyZERyaXZlIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmNvbnN0IEFkbWluUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKCdkYXNoYm9hcmQnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYXktMTAwIGZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxIZWFkZXIgbWluaW1hbCAvPlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktNiBmbGV4LTFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC02XCI+XG4gICAgICAgICAgey8qIFNpZGViYXIgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy02NCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTRcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00IHRleHQtcHJpbWFyeVwiPlxuICAgICAgICAgICAgICDgpKrgpY3gpLDgpLbgpL7gpLjgpJUg4KSq4KWI4KSo4KSyXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignZGFzaGJvYXJkJyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMyBweC00IHB5LTIgcm91bmRlZC1tZCAke1xuICAgICAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSAnZGFzaGJvYXJkJyA/ICdiZy1wcmltYXJ5IHRleHQtd2hpdGUnIDogJ2hvdmVyOmJnLWdyYXktMTAwJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEFjdGl2aXR5IHNpemU9ezE4fSAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPuCkoeCliOCktuCkrOCli+CksOCljeCkoTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignc2VhcmNoJyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMyBweC00IHB5LTIgcm91bmRlZC1tZCAke1xuICAgICAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSAnc2VhcmNoJyA/ICdiZy1wcmltYXJ5IHRleHQtd2hpdGUnIDogJ2hvdmVyOmJnLWdyYXktMTAwJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFNlYXJjaCBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj7gpJbgpYvgpJwg4KSq4KWN4KSw4KSs4KSC4KSn4KSoPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgIHRvPVwiL2NyYXdsZXItZGFzaGJvYXJkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zIHB4LTQgcHktMiByb3VuZGVkLW1kIGhvdmVyOmJnLWdyYXktMTAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxEYXRhYmFzZSBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj7gpJXgpY3gpLDgpYngpLLgpLAg4KSh4KWI4KS24KSs4KWL4KSw4KWN4KShPC9zcGFuPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgICB0bz1cIi9iaWd0YWJsZS1hZG1pblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMyBweC00IHB5LTIgcm91bmRlZC1tZCBob3ZlcjpiZy1ncmF5LTEwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U2VydmVyIHNpemU9ezE4fSAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPkJpZ3RhYmxlIOCkquCljeCksOCkrOCkguCkp+CkqDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgdG89XCIvYmxvYnN0b3JlLWFkbWluXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zIHB4LTQgcHktMiByb3VuZGVkLW1kIGhvdmVyOmJnLWdyYXktMTAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxIYXJkRHJpdmUgc2l6ZT17MTh9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+QmxvYnN0b3JlIOCkquCljeCksOCkrOCkguCkp+CkqDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ2NvbnRlbnQnKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zIHB4LTQgcHktMiByb3VuZGVkLW1kICR7XG4gICAgICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09ICdjb250ZW50JyA/ICdiZy1wcmltYXJ5IHRleHQtd2hpdGUnIDogJ2hvdmVyOmJnLWdyYXktMTAwJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZpbGVUZXh0IHNpemU9ezE4fSAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPuCkuOCkvuCkruCkl+CljeCksOClgCDgpKrgpY3gpLDgpKzgpILgpKfgpKg8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ3NlY3VyaXR5Jyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMyBweC00IHB5LTIgcm91bmRlZC1tZCAke1xuICAgICAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSAnc2VjdXJpdHknID8gJ2JnLXByaW1hcnkgdGV4dC13aGl0ZScgOiAnaG92ZXI6YmctZ3JheS0xMDAnXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U2hpZWxkIHNpemU9ezE4fSAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPuCkuOClgeCksOCkleCljeCkt+Ckvjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignc2V0dGluZ3MnKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zIHB4LTQgcHktMiByb3VuZGVkLW1kICR7XG4gICAgICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09ICdzZXR0aW5ncycgPyAnYmctcHJpbWFyeSB0ZXh0LXdoaXRlJyA6ICdob3ZlcjpiZy1ncmF5LTEwMCdcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTZXR0aW5ncyBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj7gpLjgpYfgpJ/gpL/gpILgpJfgpY3gpLg8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgdG89XCIvXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zIHB4LTQgcHktMiByb3VuZGVkLW1kIGhvdmVyOmJnLWdyYXktMTAwIHRleHQtZ3JheS02MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEhvbWUgc2l6ZT17MTh9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+4KS54KWL4KSuIOCkquClh+CknDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgey8qIE1haW4gQ29udGVudCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTZcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdkYXNoYm9hcmQnICYmICfgpKHgpYjgpLbgpKzgpYvgpLDgpY3gpKEnfVxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdzZWFyY2gnICYmICfgpJbgpYvgpJwg4KSq4KWN4KSw4KSs4KSC4KSn4KSoJ31cbiAgICAgICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnY29udGVudCcgJiYgJ+CkuOCkvuCkruCkl+CljeCksOClgCDgpKrgpY3gpLDgpKzgpILgpKfgpKgnfVxuICAgICAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdzZWN1cml0eScgJiYgJ+CkuOClgeCksOCkleCljeCkt+Ckvid9XG4gICAgICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ3NldHRpbmdzJyAmJiAn4KS44KWH4KSf4KS/4KSC4KSX4KWN4KS4J31cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gcHgtMyBweS0xIGJnLWJsdWUtMTAwIHRleHQtYmx1ZS04MDAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPENsb2NrIHNpemU9ezE0fSBjbGFzc05hbWU9XCJtci0xXCIgLz5cbiAgICAgICAgICAgICAgICDgpIXgpILgpKTgpL/gpK4g4KSF4KSq4KSh4KWH4KSfOiDgpIbgpJwsIDE0OjMwXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnZGFzaGJvYXJkJyAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC00IG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS01MCByb3VuZGVkLWxnIHAtNCBib3JkZXIgYm9yZGVyLWJsdWUtMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIG1iLTFcIj7gpJXgpYHgpLIg4KSW4KWL4KSc4KWH4KSCPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+MSwyNCw1Nzg8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmVlbi02MDAgbXQtMVwiPis1LjIlIOCkquCkv+Ckm+CksuClhyDgpLjgpKrgpY3gpKTgpL7gpLkg4KS44KWHPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAgcm91bmRlZC1sZyBwLTQgYm9yZGVyIGJvcmRlci1ncmVlbi0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gbWItMVwiPuCkh+CkguCkoeClh+CkleCljeCkuCDgpJXgpL/gpI8g4KSX4KSPIOCkquClh+CknDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPjUsNjcsODkyPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JlZW4tNjAwIG10LTFcIj4rMTIuMyUg4KSq4KS/4KSb4KSy4KWHIOCkruCkueClgOCkqOClhyDgpLjgpYc8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wdXJwbGUtNTAgcm91bmRlZC1sZyBwLTQgYm9yZGVyIGJvcmRlci1wdXJwbGUtMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIG1iLTFcIj7gpJTgpLjgpKQg4KSq4KWN4KSw4KSk4KS/4KSV4KWN4KSw4KS/4KSv4KS+IOCkuOCkruCkrzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPjAuNDJzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JlZW4tNjAwIG10LTFcIj4tMC4wNXMg4KSq4KS/4KSb4KSy4KWHIOCkuOCkquCljeCkpOCkvuCkuSDgpLjgpYc8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGJnLWdyYXktNTAgcC00IHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSBtYi0zXCI+4KSk4KWN4KS14KSw4KS/4KSkIOCksuCkv+CkguCklTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvY3Jhd2xlci1kYXNoYm9hcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtMyByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0yMDAgaG92ZXI6c2hhZG93LW1kIGZsZXggaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YWJhc2Ugc2l6ZT17MTZ9IGNsYXNzTmFtZT1cIm1yLTIgdGV4dC1wcmltYXJ5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIOCkleCljeCksOClieCksuCksCDgpKHgpYjgpLbgpKzgpYvgpLDgpY3gpKFcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0bz1cIi9iaWd0YWJsZS1hZG1pblwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC0zIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBob3ZlcjpzaGFkb3ctbWQgZmxleCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXJ2ZXIgc2l6ZT17MTZ9IGNsYXNzTmFtZT1cIm1yLTIgdGV4dC10ZXJ0aWFyeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBCaWd0YWJsZSDgpKrgpY3gpLDgpKzgpILgpKfgpKhcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0bz1cIi9ibG9ic3RvcmUtYWRtaW5cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtMyByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0yMDAgaG92ZXI6c2hhZG93LW1kIGZsZXggaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGFyZERyaXZlIHNpemU9ezE2fSBjbGFzc05hbWU9XCJtci0yIHRleHQtcXVhdGVybmFyeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBCbG9ic3RvcmUg4KSq4KWN4KSw4KSs4KSC4KSn4KSoXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTMgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIGhvdmVyOnNoYWRvdy1tZCBmbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaCBzaXplPXsxNn0gY2xhc3NOYW1lPVwibXItMiB0ZXh0LXNlY29uZGFyeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICDgpJbgpYvgpJwg4KS44KWH4KSf4KS/4KSC4KSX4KWN4KS4XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzMgYmctZ3JheS01MCBwLTQgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIG1iLTNcIj7gpLjgpL/gpLjgpY3gpJ/gpK4g4KS44KWN4KSl4KS/4KSk4KS/PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+4KS44KWA4KSq4KWA4KSv4KWCIOCkieCkquCkr+Cli+Cklzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+MjQlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCBoLTIuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IGgtMi41IHJvdW5kZWQtZnVsbFwiIHN0eWxlPXt7IHdpZHRoOiAnMjQlJyB9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7gpK7gpYfgpK7gpYvgpLDgpYAg4KSJ4KSq4KSv4KWL4KSXPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj42NyU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIGgtMi41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNlY29uZGFyeSBoLTIuNSByb3VuZGVkLWZ1bGxcIiBzdHlsZT17eyB3aWR0aDogJzY3JScgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+4KSh4KS/4KS44KWN4KSVIOCkieCkquCkr+Cli+Cklzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+NDIlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCBoLTIuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy10ZXJ0aWFyeSBoLTIuNSByb3VuZGVkLWZ1bGxcIiBzdHlsZT17eyB3aWR0aDogJzQyJScgfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ3NlYXJjaCcgJiYgKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj7gpJbgpYvgpJwg4KSq4KWN4KSw4KSs4KSC4KSn4KSoIOCkoeCliOCktuCkrOCli+CksOCljeCkoSDgpLjgpL7gpK7gpJfgpY3gpLDgpYAg4KSv4KS54KS+4KSCIOCkpuCkv+CkluCkvuCkiCDgpJzgpL7gpI/gpJfgpYDgpaQ8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ2NvbnRlbnQnICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+4KS44KS+4KSu4KSX4KWN4KSw4KWAIOCkquCljeCksOCkrOCkguCkp+CkqCDgpKHgpYjgpLbgpKzgpYvgpLDgpY3gpKEg4KS44KS+4KSu4KSX4KWN4KSw4KWAIOCkr+CkueCkvuCkgiDgpKbgpL/gpJbgpL7gpIgg4KSc4KS+4KSP4KSX4KWA4KWkPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdzZWN1cml0eScgJiYgKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj7gpLjgpYHgpLDgpJXgpY3gpLfgpL4g4KSh4KWI4KS24KSs4KWL4KSw4KWN4KShIOCkuOCkvuCkruCkl+CljeCksOClgCDgpK/gpLngpL7gpIIg4KSm4KS/4KSW4KS+4KSIIOCknOCkvuCkj+Ckl+ClgOClpDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnc2V0dGluZ3MnICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+4KS44KWH4KSf4KS/4KSC4KSX4KWN4KS4IOCkoeCliOCktuCkrOCli+CksOCljeCkoSDgpLjgpL7gpK7gpJfgpY3gpLDgpYAg4KSv4KS54KS+4KSCIOCkpuCkv+CkluCkvuCkiCDgpJzgpL7gpI/gpJfgpYDgpaQ8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRtaW5QYWdlO1xuIFxuIl0sImZpbGUiOiIvaG9tZS9wcm9qZWN0L3NyYy9wYWdlcy9BZG1pblBhZ2UudHN4In0=
