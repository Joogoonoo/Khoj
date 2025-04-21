import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/BigtableAdmin.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3859ff4e"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/project/src/pages/BigtableAdmin.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=3859ff4e"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=3859ff4e";
import { Database, Server, Globe, ArrowLeft, Plus, Trash2, RefreshCw, Filter } from "/node_modules/.vite/deps/lucide-react.js?v=3859ff4e";
import Header from "/src/components/Header.tsx";
import Footer from "/src/components/Footer.tsx";
import { bigtableService } from "/src/services/bigtable/BigtableService.ts";
import { indexService } from "/src/services/bigtable/IndexService.ts";
const BigtableAdmin = () => {
  _s();
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState("");
  const [tableStats, setTableStats] = useState(null);
  const [indexStats, setIndexStats] = useState(null);
  const [newTableName, setNewTableName] = useState("");
  const [newColumnFamily, setNewColumnFamily] = useState("");
  const [columnFamilies, setColumnFamilies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sampleData, setSampleData] = useState([]);
  useEffect(() => {
    loadTables();
    loadIndexStats();
  }, []);
  useEffect(() => {
    if (selectedTable) {
      loadTableStats();
      loadTableData();
    }
  }, [selectedTable]);
  const loadTables = () => {
    const tableList = bigtableService.listTables();
    setTables(tableList);
    if (tableList.length > 0 && !selectedTable) {
      setSelectedTable(tableList[0]);
    }
  };
  const loadTableStats = () => {
    if (!selectedTable)
      return;
    try {
      const stats = bigtableService.getTableStats(selectedTable);
      setTableStats(stats);
      const table = bigtableService.getTable(selectedTable);
      setColumnFamilies(table.columnFamilies);
    } catch (error) {
      console.error("Error loading table stats:", error);
    }
  };
  const loadTableData = () => {
    if (!selectedTable)
      return;
    try {
      setIsLoading(true);
      const data = bigtableService.query(selectedTable, { limit: 10 });
      setSampleData(data);
    } catch (error) {
      console.error("Error loading table data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const loadIndexStats = () => {
    try {
      const stats = indexService.getIndexStats();
      setIndexStats(stats);
    } catch (error) {
      console.error("Error loading index stats:", error);
    }
  };
  const handleCreateTable = () => {
    if (!newTableName || columnFamilies.length === 0) {
      alert("कृपया टेबल का नाम और कम से कम एक कॉलम फ़ैमिली दर्ज करें");
      return;
    }
    try {
      bigtableService.createTable(newTableName, columnFamilies);
      setNewTableName("");
      setColumnFamilies([]);
      setNewColumnFamily("");
      loadTables();
    } catch (error) {
      console.error("Error creating table:", error);
      alert(`टेबल बनाने में त्रुटि: ${error}`);
    }
  };
  const handleAddColumnFamily = () => {
    if (!newColumnFamily)
      return;
    if (!columnFamilies.includes(newColumnFamily)) {
      setColumnFamilies([...columnFamilies, newColumnFamily]);
      setNewColumnFamily("");
    } else {
      alert("यह कॉलम फ़ैमिली पहले से मौजूद है");
    }
  };
  const handleRemoveColumnFamily = (family) => {
    setColumnFamilies(columnFamilies.filter((f) => f !== family));
  };
  const formatBytes = (bytes) => {
    if (bytes === 0)
      return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-gray-100 flex flex-col", children: [
    /* @__PURE__ */ jsxDEV(Header, { minimal: true }, void 0, false, {
      fileName: "/home/project/src/pages/BigtableAdmin.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 py-6 flex-1", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-3 mb-6", children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/admin", className: "p-2 hover:bg-gray-200 rounded-full", children: /* @__PURE__ */ jsxDEV(ArrowLeft, { size: 20 }, void 0, false, {
          fileName: "/home/project/src/pages/BigtableAdmin.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/BigtableAdmin.tsx",
          lineNumber: 127,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-2xl font-bold", children: "खोज Bigtable प्रबंधन" }, void 0, false, {
          fileName: "/home/project/src/pages/BigtableAdmin.tsx",
          lineNumber: 130,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/BigtableAdmin.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-lg shadow-md mb-6 overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row items-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "md:w-1/2 mb-4 md:mb-0", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold mb-2", children: "खोज का स्वयं का NoSQL डेटाबेस" }, void 0, false, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 137,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 mb-3", children: "हमारा Bigtable-प्रेरित NoSQL डेटाबेस बड़ी मात्रा में क्रॉल और इंडेक्स किए गए डेटा के लिए अत्यधिक स्केलेबल स्टोरेज प्रदान करता है। कई स्तंभ वाले परिवारों का उपयोग करके, हम वेब पेजों, कीवर्ड और क्रॉलिंग मेटाडेटा को कुशलता से संग्रहीत और पुनर्प्राप्त कर सकते हैं।" }, void 0, false, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 138,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-50 px-3 py-1 rounded-full text-sm text-blue-800 flex items-center", children: [
              /* @__PURE__ */ jsxDEV(Database, { size: 14, className: "mr-1" }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 143,
                columnNumber: 19
              }, this),
              "कॉलमनर स्टोरेज"
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 142,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-green-50 px-3 py-1 rounded-full text-sm text-green-800 flex items-center", children: [
              /* @__PURE__ */ jsxDEV(Server, { size: 14, className: "mr-1" }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 147,
                columnNumber: 19
              }, this),
              "वितरित आर्किटेक्चर"
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 146,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-purple-50 px-3 py-1 rounded-full text-sm text-purple-800 flex items-center", children: [
              /* @__PURE__ */ jsxDEV(Globe, { size: 14, className: "mr-1" }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 151,
                columnNumber: 19
              }, this),
              "पेटाबाइट स्केल"
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 150,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 141,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/BigtableAdmin.tsx",
          lineNumber: 136,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "md:w-1/2", children: /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMGFyY2hpdGVjdHVyZSUyMGRpYWdyYW0lMjBiaWdkYXRhJTIwc3RvcmFnZXxlbnwwfHx8fDE3NDMyNTA5MTZ8MA&ixlib=rb-4.0.3",
            alt: "Bigtable Architecture",
            className: "w-full h-64 object-cover rounded-lg"
          },
          void 0,
          false,
          {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 157,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "/home/project/src/pages/BigtableAdmin.tsx",
          lineNumber: 156,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/BigtableAdmin.tsx",
        lineNumber: 135,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/project/src/pages/BigtableAdmin.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-2 bg-white p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold mb-4", children: "डेटाबेस अवलोकन" }, void 0, false, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 169,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-sm text-gray-500 mb-1", children: "टेबल्स" }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 173,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold", children: tables.length }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 174,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 172,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-green-50 p-4 rounded-lg", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-sm text-gray-500 mb-1", children: "इंडेक्स्ड पेजेज" }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 178,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold", children: indexStats?.webpages || 0 }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 179,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 177,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-sm text-gray-500 mb-1", children: "कीवर्ड्स" }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 183,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold", children: indexStats?.keywords || 0 }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 184,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 182,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-purple-50 p-4 rounded-lg", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-sm text-gray-500 mb-1", children: "स्टोरेज साइज" }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 188,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold", children: tableStats ? formatBytes(tableStats.size) : "0 KB" }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 189,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 187,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 171,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center mb-3", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "font-medium", children: "टेबल प्रबंधन" }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 197,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxDEV("button", { onClick: loadTables, className: "p-2 bg-gray-100 hover:bg-gray-200 rounded-full", children: /* @__PURE__ */ jsxDEV(RefreshCw, { size: 16 }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 201,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 200,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "select",
                  {
                    value: selectedTable,
                    onChange: (e) => setSelectedTable(e.target.value),
                    className: "px-3 py-1 border border-gray-300 rounded-md text-sm",
                    children: [
                      /* @__PURE__ */ jsxDEV("option", { value: "", children: "टेबल चुनें" }, void 0, false, {
                        fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                        lineNumber: 208,
                        columnNumber: 21
                      }, this),
                      tables.map(
                        (table) => /* @__PURE__ */ jsxDEV("option", { value: table, children: table }, table, false, {
                          fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                          lineNumber: 210,
                          columnNumber: 21
                        }, this)
                      )
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                    lineNumber: 203,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 199,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 196,
              columnNumber: 15
            }, this),
            selectedTable && tableStats && /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center mb-3", children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "font-medium text-gray-700", children: selectedTable }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 219,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full", children: [
                  tableStats.rowCount,
                  " पंक्तियाँ"
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 220,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 218,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-600 mb-3", children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "कॉलम फैमिलीज:" }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 226,
                  columnNumber: 21
                }, this),
                " ",
                columnFamilies.join(", ")
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 225,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-600", children: [
                /* @__PURE__ */ jsxDEV("strong", { children: "साइज:" }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 230,
                  columnNumber: 21
                }, this),
                " ",
                formatBytes(tableStats.size)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 229,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 217,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 195,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/BigtableAdmin.tsx",
          lineNumber: 168,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold mb-4", children: "नया टेबल बनाएँ" }, void 0, false, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 239,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "टेबल नाम" }, void 0, false, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 242,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "text",
                value: newTableName,
                onChange: (e) => setNewTableName(e.target.value),
                className: "w-full border border-gray-300 rounded-md px-3 py-2",
                placeholder: "user_data"
              },
              void 0,
              false,
              {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 245,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 241,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "कॉलम फैमिलीज" }, void 0, false, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 255,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "text",
                  value: newColumnFamily,
                  onChange: (e) => setNewColumnFamily(e.target.value),
                  className: "flex-1 border border-gray-300 rounded-md px-3 py-2",
                  placeholder: "metadata"
                },
                void 0,
                false,
                {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 259,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: handleAddColumnFamily,
                  className: "bg-blue-500 text-white px-3 py-2 rounded-md",
                  children: /* @__PURE__ */ jsxDEV(Plus, { size: 16 }, void 0, false, {
                    fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                    lineNumber: 270,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 266,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 258,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 254,
            columnNumber: 13
          }, this),
          columnFamilies.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "text-sm font-medium text-gray-700 mb-2", children: "जोड़े गए कॉलम फैमिलीज:" }, void 0, false, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 277,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-2", children: columnFamilies.map(
              (family) => /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center", children: [
                family,
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => handleRemoveColumnFamily(family),
                    className: "ml-2 text-gray-500 hover:text-red-500",
                    children: /* @__PURE__ */ jsxDEV(Trash2, { size: 12 }, void 0, false, {
                      fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                      lineNumber: 288,
                      columnNumber: 25
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                    lineNumber: 284,
                    columnNumber: 23
                  },
                  this
                )
              ] }, family, true, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 282,
                columnNumber: 17
              }, this)
            ) }, void 0, false, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 280,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 276,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: handleCreateTable,
              disabled: !newTableName || columnFamilies.length === 0,
              className: `w-full py-2 rounded-md text-white ${!newTableName || columnFamilies.length === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-primary hover:bg-primary/90"}`,
              children: "टेबल बनाएँ"
            },
            void 0,
            false,
            {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 296,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/BigtableAdmin.tsx",
          lineNumber: 238,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/BigtableAdmin.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-2 bg-white p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center mb-4", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold", children: "डेटा नमूना" }, void 0, false, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 315,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: loadTableData,
                  className: "p-2 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center",
                  children: /* @__PURE__ */ jsxDEV(RefreshCw, { size: 16 }, void 0, false, {
                    fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                    lineNumber: 322,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 318,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("button", { className: "p-2 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center", children: /* @__PURE__ */ jsxDEV(Filter, { size: 16 }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 325,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 324,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 317,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 314,
            columnNumber: 13
          }, this),
          isLoading ? /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center items-center h-48", children: /* @__PURE__ */ jsxDEV("div", { className: "animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary" }, void 0, false, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 332,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 331,
            columnNumber: 13
          }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: !selectedTable ? /* @__PURE__ */ jsxDEV("div", { className: "text-center text-gray-500 py-10", children: [
            /* @__PURE__ */ jsxDEV(Database, { size: 40, className: "mx-auto mb-3 text-gray-300" }, void 0, false, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 338,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "डेटा देखने के लिए कृपया एक टेबल चुनें" }, void 0, false, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 339,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 337,
            columnNumber: 15
          }, this) : sampleData.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "text-center text-gray-500 py-10", children: [
            /* @__PURE__ */ jsxDEV(Database, { size: 40, className: "mx-auto mb-3 text-gray-300" }, void 0, false, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 343,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "इस टेबल में कोई डेटा नहीं है" }, void 0, false, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 344,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 342,
            columnNumber: 15
          }, this) : /* @__PURE__ */ jsxDEV("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV("table", { className: "min-w-full divide-y divide-gray-200", children: [
            /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { children: [
              /* @__PURE__ */ jsxDEV("th", { className: "px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Row Key" }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 351,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("th", { className: "px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Column Families" }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 354,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("th", { className: "px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Columns" }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 357,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ jsxDEV("th", { className: "px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Timestamp" }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 360,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 350,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 349,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("tbody", { className: "bg-white divide-y divide-gray-200", children: sampleData.map((row, index) => {
              const columnCount = Object.keys(row.columns).length;
              const families = new Set(
                Object.keys(row.columns).map((col) => col.split(":")[0])
              );
              return /* @__PURE__ */ jsxDEV("tr", { className: "hover:bg-gray-50", children: [
                /* @__PURE__ */ jsxDEV("td", { className: "px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900", children: row.rowKey.length > 30 ? `${row.rowKey.substring(0, 30)}...` : row.rowKey }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 375,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ jsxDEV("td", { className: "px-4 py-2 whitespace-nowrap text-sm text-gray-500", children: Array.from(families).join(", ") }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 380,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ jsxDEV("td", { className: "px-4 py-2 whitespace-nowrap text-sm text-gray-500", children: [
                  columnCount,
                  " columns"
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 383,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ jsxDEV("td", { className: "px-4 py-2 whitespace-nowrap text-sm text-gray-500", children: new Date(row.timestamp).toLocaleString() }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 386,
                  columnNumber: 31
                }, this)
              ] }, index, true, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 374,
                columnNumber: 25
              }, this);
            }) }, void 0, false, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 365,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 348,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 347,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 335,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/BigtableAdmin.tsx",
          lineNumber: 313,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-lg shadow-md overflow-hidden", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold mb-4", children: "आर्किटेक्चर" }, void 0, false, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 402,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxkYXRhYmFzZSUyMGFyY2hpdGVjdHVyZSUyMGRpYWdyYW0lMjBiaWdkYXRhJTIwc3RvcmFnZXxlbnwwfHx8fDE3NDMyNTA5MTZ8MA&ixlib=rb-4.0.3",
                alt: "Database Architecture",
                className: "w-full h-40 object-cover rounded-lg mb-3"
              },
              void 0,
              false,
              {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 405,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("h3", { className: "font-medium text-gray-800", children: "कीफीचर्स" }, void 0, false, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 411,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 text-sm text-gray-600", children: [
              /* @__PURE__ */ jsxDEV("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2", children: /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-blue-800", children: "1" }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 415,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 414,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "कॉलमनर स्टोरेज मॉडल स्पार्स डेटा के लिए अनुकूलित" }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 417,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 413,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2", children: /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-blue-800", children: "2" }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 421,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 420,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "तेज़ी से क्वेरी के लिए मल्टी-लेवल इंडेक्सिंग" }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 423,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 419,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2", children: /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-blue-800", children: "3" }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 427,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 426,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "कॉलम फैमिलीज के साथ संबंधित डेटा एक साथ स्टोर" }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 429,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 425,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2", children: /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-medium text-blue-800", children: "4" }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 433,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 432,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "विशाल वॉल्यूम डेटा के लिए इन-मेमोरी कैशिंग" }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 435,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 431,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 412,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 404,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/BigtableAdmin.tsx",
          lineNumber: 401,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/BigtableAdmin.tsx",
        lineNumber: 311,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6", children: /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-3 bg-white p-6 rounded-lg shadow-md", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold mb-4", children: "खोज के NoSQL डेटाबेस का कार्यान्वयन" }, void 0, false, {
          fileName: "/home/project/src/pages/BigtableAdmin.tsx",
          lineNumber: 445,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "border border-gray-200 rounded-lg p-4", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "font-semibold text-lg mb-2", children: "वेबपेज टेबल" }, void 0, false, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 449,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 text-sm mb-3", children: "इस टेबल में क्रॉल किए गए वेब पेजों का संपूर्ण डेटा होता है, जिसमें मेटाडेटा, सामग्री, और रैंकिंग जानकारी शामिल होती है।" }, void 0, false, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 450,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-50 p-2 rounded text-sm", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "Row Key:" }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 456,
                  columnNumber: 21
                }, this),
                " ",
                /* @__PURE__ */ jsxDEV("code", { children: "reversed_domain#path#timestamp" }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 456,
                  columnNumber: 67
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 455,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-sm", children: /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "Column Families:" }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 460,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 459,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("ul", { className: "text-sm space-y-1 pl-5 list-disc", children: [
                /* @__PURE__ */ jsxDEV("li", { children: [
                  /* @__PURE__ */ jsxDEV("code", { children: "metadata:" }, void 0, false, {
                    fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                    lineNumber: 464,
                    columnNumber: 25
                  }, this),
                  " URL, शीर्षक, विवरण"
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 464,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("li", { children: [
                  /* @__PURE__ */ jsxDEV("code", { children: "content:" }, void 0, false, {
                    fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                    lineNumber: 465,
                    columnNumber: 25
                  }, this),
                  " HTML सामग्री, पाठ"
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 465,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("li", { children: [
                  /* @__PURE__ */ jsxDEV("code", { children: "links:" }, void 0, false, {
                    fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                    lineNumber: 466,
                    columnNumber: 25
                  }, this),
                  " आउटबाउंड लिंक्स"
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 466,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("li", { children: [
                  /* @__PURE__ */ jsxDEV("code", { children: "ranking:" }, void 0, false, {
                    fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                    lineNumber: 467,
                    columnNumber: 25
                  }, this),
                  " PageRank, प्रासंगिकता"
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 467,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 463,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 454,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 448,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "border border-gray-200 rounded-lg p-4", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "font-semibold text-lg mb-2", children: "कीवर्ड्स टेबल" }, void 0, false, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 473,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 text-sm mb-3", children: "इन्वर्टेड इंडेक्स के रूप में प्रत्येक कीवर्ड के लिए वेब पेजों की सूची, तेज़ी से खोज प्रदान करने के लिए।" }, void 0, false, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 474,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-50 p-2 rounded text-sm", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "Row Key:" }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 480,
                  columnNumber: 21
                }, this),
                " ",
                /* @__PURE__ */ jsxDEV("code", { children: "keyword" }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 480,
                  columnNumber: 67
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 479,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-sm", children: /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "Column Families:" }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 484,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 483,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("ul", { className: "text-sm space-y-1 pl-5 list-disc", children: [
                /* @__PURE__ */ jsxDEV("li", { children: [
                  /* @__PURE__ */ jsxDEV("code", { children: "pages:" }, void 0, false, {
                    fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                    lineNumber: 488,
                    columnNumber: 25
                  }, this),
                  " मिलान करने वाले URLs"
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 488,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("li", { children: [
                  /* @__PURE__ */ jsxDEV("code", { children: "stats:" }, void 0, false, {
                    fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                    lineNumber: 489,
                    columnNumber: 25
                  }, this),
                  " आवृत्ति, स्कोर"
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 489,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 487,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 478,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 472,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "border border-gray-200 rounded-lg p-4", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "font-semibold text-lg mb-2", children: "क्रॉल_क्यू टेबल" }, void 0, false, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 495,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 text-sm mb-3", children: "क्रॉल करने के लिए URLs और उनकी क्रॉल स्थिति को ट्रैक करता है, इष्टतम क्रॉलिंग प्राथमिकता को सक्षम बनाता है।" }, void 0, false, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 496,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-50 p-2 rounded text-sm", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "Row Key:" }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 502,
                  columnNumber: 21
                }, this),
                " ",
                /* @__PURE__ */ jsxDEV("code", { children: "priority#timestamp#url" }, void 0, false, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 502,
                  columnNumber: 67
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 501,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-sm", children: /* @__PURE__ */ jsxDEV("span", { className: "font-medium", children: "Column Families:" }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 506,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 505,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("ul", { className: "text-sm space-y-1 pl-5 list-disc", children: [
                /* @__PURE__ */ jsxDEV("li", { children: [
                  /* @__PURE__ */ jsxDEV("code", { children: "status:" }, void 0, false, {
                    fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                    lineNumber: 510,
                    columnNumber: 25
                  }, this),
                  " लंबित, चल रहा, सफल, विफल"
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 510,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("li", { children: [
                  /* @__PURE__ */ jsxDEV("code", { children: "metadata:" }, void 0, false, {
                    fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                    lineNumber: 511,
                    columnNumber: 25
                  }, this),
                  " रेफरर, प्राथमिकता"
                ] }, void 0, true, {
                  fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                  lineNumber: 511,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BigtableAdmin.tsx",
                lineNumber: 509,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BigtableAdmin.tsx",
              lineNumber: 500,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 494,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/BigtableAdmin.tsx",
          lineNumber: 447,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-6", children: /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxkYXRhYmFzZSUyMGFyY2hpdGVjdHVyZSUyMGRpYWdyYW0lMjBiaWdkYXRhJTIwc3RvcmFnZXxlbnwwfHx8fDE3NDMyNTA5MTZ8MA&ixlib=rb-4.0.3",
            alt: "Storage Architecture",
            className: "w-full h-64 object-cover rounded-lg"
          },
          void 0,
          false,
          {
            fileName: "/home/project/src/pages/BigtableAdmin.tsx",
            lineNumber: 518,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "/home/project/src/pages/BigtableAdmin.tsx",
          lineNumber: 517,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/BigtableAdmin.tsx",
        lineNumber: 444,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/project/src/pages/BigtableAdmin.tsx",
        lineNumber: 443,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/pages/BigtableAdmin.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/home/project/src/pages/BigtableAdmin.tsx",
      lineNumber: 528,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/project/src/pages/BigtableAdmin.tsx",
    lineNumber: 122,
    columnNumber: 5
  }, this);
};
_s(BigtableAdmin, "SMoa2xPXx9v4AqAekI9hZOTfJ50=");
_c = BigtableAdmin;
export default BigtableAdmin;
var _c;
$RefreshReg$(_c, "BigtableAdmin");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/pages/BigtableAdmin.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/pages/BigtableAdmin.tsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
