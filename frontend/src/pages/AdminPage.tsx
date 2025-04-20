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
