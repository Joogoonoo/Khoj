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

//# sourceMappingURL=data:application/json;base64,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UUFDYjtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsS0FBSTtBQUFBLFlBQ0osS0FBSTtBQUFBLFlBQ0osV0FBVTtBQUFBO0FBQUEsVUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFHaUQsS0FKbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU1BO0FBQUEsV0EvRUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWdGQSxLQWpGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBa0ZBO0FBQUEsU0FoWkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWlaQTtBQUFBLElBRUEsdUJBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU87QUFBQSxPQXRaVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBdVpBO0FBRUo7QUFBRW5FLEdBMWdCSUQsZUFBYTtBQUFBb0YsS0FBYnBGO0FBNGdCTixlQUFlQTtBQUFjLElBQUFvRjtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsidXNlRWZmZWN0IiwiTGluayIsIkRhdGFiYXNlIiwiU2VydmVyIiwiR2xvYmUiLCJBcnJvd0xlZnQiLCJQbHVzIiwiVHJhc2gyIiwiUmVmcmVzaEN3IiwiRmlsdGVyIiwiSGVhZGVyIiwiRm9vdGVyIiwiYmlndGFibGVTZXJ2aWNlIiwiaW5kZXhTZXJ2aWNlIiwiQmlndGFibGVBZG1pbiIsIl9zIiwidGFibGVzIiwic2V0VGFibGVzIiwidXNlU3RhdGUiLCJzZWxlY3RlZFRhYmxlIiwic2V0U2VsZWN0ZWRUYWJsZSIsInRhYmxlU3RhdHMiLCJzZXRUYWJsZVN0YXRzIiwiaW5kZXhTdGF0cyIsInNldEluZGV4U3RhdHMiLCJuZXdUYWJsZU5hbWUiLCJzZXROZXdUYWJsZU5hbWUiLCJuZXdDb2x1bW5GYW1pbHkiLCJzZXROZXdDb2x1bW5GYW1pbHkiLCJjb2x1bW5GYW1pbGllcyIsInNldENvbHVtbkZhbWlsaWVzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic2FtcGxlRGF0YSIsInNldFNhbXBsZURhdGEiLCJsb2FkVGFibGVzIiwibG9hZEluZGV4U3RhdHMiLCJsb2FkVGFibGVTdGF0cyIsImxvYWRUYWJsZURhdGEiLCJ0YWJsZUxpc3QiLCJsaXN0VGFibGVzIiwibGVuZ3RoIiwic3RhdHMiLCJnZXRUYWJsZVN0YXRzIiwidGFibGUiLCJnZXRUYWJsZSIsImVycm9yIiwiY29uc29sZSIsImRhdGEiLCJxdWVyeSIsImxpbWl0IiwiZ2V0SW5kZXhTdGF0cyIsImhhbmRsZUNyZWF0ZVRhYmxlIiwiYWxlcnQiLCJjcmVhdGVUYWJsZSIsImhhbmRsZUFkZENvbHVtbkZhbWlseSIsImluY2x1ZGVzIiwiaGFuZGxlUmVtb3ZlQ29sdW1uRmFtaWx5IiwiZmFtaWx5IiwiZmlsdGVyIiwiZiIsImZvcm1hdEJ5dGVzIiwiYnl0ZXMiLCJrIiwic2l6ZXMiLCJpIiwiTWF0aCIsImZsb29yIiwibG9nIiwicGFyc2VGbG9hdCIsInBvdyIsInRvRml4ZWQiLCJ3ZWJwYWdlcyIsImtleXdvcmRzIiwic2l6ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInJvd0NvdW50Iiwiam9pbiIsInJvdyIsImluZGV4IiwiY29sdW1uQ291bnQiLCJPYmplY3QiLCJrZXlzIiwiY29sdW1ucyIsImZhbWlsaWVzIiwiU2V0IiwiY29sIiwic3BsaXQiLCJyb3dLZXkiLCJzdWJzdHJpbmciLCJBcnJheSIsImZyb20iLCJEYXRlIiwidGltZXN0YW1wIiwidG9Mb2NhbGVTdHJpbmciLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VzIjpbIkJpZ3RhYmxlQWRtaW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgRGF0YWJhc2UsIFNlcnZlciwgR2xvYmUsIEFycm93TGVmdCwgUGx1cywgRWRpdCwgVHJhc2gyLCBSZWZyZXNoQ3csIEZpbHRlciB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHsgYmlndGFibGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYmlndGFibGUvQmlndGFibGVTZXJ2aWNlJztcbmltcG9ydCB7IGluZGV4U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2JpZ3RhYmxlL0luZGV4U2VydmljZSc7XG5cbmNvbnN0IEJpZ3RhYmxlQWRtaW4gPSAoKSA9PiB7XG4gIGNvbnN0IFt0YWJsZXMsIHNldFRhYmxlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbc2VsZWN0ZWRUYWJsZSwgc2V0U2VsZWN0ZWRUYWJsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW3RhYmxlU3RhdHMsIHNldFRhYmxlU3RhdHNdID0gdXNlU3RhdGU8eyByb3dDb3VudDogbnVtYmVyLCBzaXplOiBudW1iZXIgfSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaW5kZXhTdGF0cywgc2V0SW5kZXhTdGF0c10gPSB1c2VTdGF0ZTx7IHdlYnBhZ2VzOiBudW1iZXIsIGtleXdvcmRzOiBudW1iZXIgfSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbmV3VGFibGVOYW1lLCBzZXROZXdUYWJsZU5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbmV3Q29sdW1uRmFtaWx5LCBzZXROZXdDb2x1bW5GYW1pbHldID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY29sdW1uRmFtaWxpZXMsIHNldENvbHVtbkZhbWlsaWVzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzYW1wbGVEYXRhLCBzZXRTYW1wbGVEYXRhXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkVGFibGVzKCk7XG4gICAgbG9hZEluZGV4U3RhdHMoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkVGFibGUpIHtcbiAgICAgIGxvYWRUYWJsZVN0YXRzKCk7XG4gICAgICBsb2FkVGFibGVEYXRhKCk7XG4gICAgfVxuICB9LCBbc2VsZWN0ZWRUYWJsZV0pO1xuXG4gIGNvbnN0IGxvYWRUYWJsZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFibGVMaXN0ID0gYmlndGFibGVTZXJ2aWNlLmxpc3RUYWJsZXMoKTtcbiAgICBzZXRUYWJsZXModGFibGVMaXN0KTtcbiAgICBcbiAgICBpZiAodGFibGVMaXN0Lmxlbmd0aCA+IDAgJiYgIXNlbGVjdGVkVGFibGUpIHtcbiAgICAgIHNldFNlbGVjdGVkVGFibGUodGFibGVMaXN0WzBdKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9hZFRhYmxlU3RhdHMgPSAoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZFRhYmxlKSByZXR1cm47XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0YXRzID0gYmlndGFibGVTZXJ2aWNlLmdldFRhYmxlU3RhdHMoc2VsZWN0ZWRUYWJsZSk7XG4gICAgICBzZXRUYWJsZVN0YXRzKHN0YXRzKTtcbiAgICAgIFxuICAgICAgY29uc3QgdGFibGUgPSBiaWd0YWJsZVNlcnZpY2UuZ2V0VGFibGUoc2VsZWN0ZWRUYWJsZSk7XG4gICAgICBzZXRDb2x1bW5GYW1pbGllcyh0YWJsZS5jb2x1bW5GYW1pbGllcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdGFibGUgc3RhdHM6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgXG4gIGNvbnN0IGxvYWRUYWJsZURhdGEgPSAoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZFRhYmxlKSByZXR1cm47XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBiaWd0YWJsZVNlcnZpY2UucXVlcnkoc2VsZWN0ZWRUYWJsZSwgeyBsaW1pdDogMTAgfSk7XG4gICAgICBzZXRTYW1wbGVEYXRhKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHRhYmxlIGRhdGE6JywgZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcbiAgXG4gIGNvbnN0IGxvYWRJbmRleFN0YXRzID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGF0cyA9IGluZGV4U2VydmljZS5nZXRJbmRleFN0YXRzKCk7XG4gICAgICBzZXRJbmRleFN0YXRzKHN0YXRzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBpbmRleCBzdGF0czonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuICBcbiAgY29uc3QgaGFuZGxlQ3JlYXRlVGFibGUgPSAoKSA9PiB7XG4gICAgaWYgKCFuZXdUYWJsZU5hbWUgfHwgY29sdW1uRmFtaWxpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBhbGVydCgn4KSV4KWD4KSq4KSv4KS+IOCkn+Clh+CkrOCksiDgpJXgpL4g4KSo4KS+4KSuIOCklOCksCDgpJXgpK4g4KS44KWHIOCkleCkriDgpI/gpJUg4KSV4KWJ4KSy4KSuIOCkq+CkvOCliOCkruCkv+CksuClgCDgpKbgpLDgpY3gpJwg4KSV4KSw4KWH4KSCJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHRyeSB7XG4gICAgICBiaWd0YWJsZVNlcnZpY2UuY3JlYXRlVGFibGUobmV3VGFibGVOYW1lLCBjb2x1bW5GYW1pbGllcyk7XG4gICAgICBzZXROZXdUYWJsZU5hbWUoJycpO1xuICAgICAgc2V0Q29sdW1uRmFtaWxpZXMoW10pO1xuICAgICAgc2V0TmV3Q29sdW1uRmFtaWx5KCcnKTtcbiAgICAgIGxvYWRUYWJsZXMoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgdGFibGU6JywgZXJyb3IpO1xuICAgICAgYWxlcnQoYOCkn+Clh+CkrOCksiDgpKzgpKjgpL7gpKjgpYcg4KSu4KWH4KSCIOCkpOCljeCksOClgeCkn+CkvzogJHtlcnJvcn1gKTtcbiAgICB9XG4gIH07XG4gIFxuICBjb25zdCBoYW5kbGVBZGRDb2x1bW5GYW1pbHkgPSAoKSA9PiB7XG4gICAgaWYgKCFuZXdDb2x1bW5GYW1pbHkpIHJldHVybjtcbiAgICBcbiAgICBpZiAoIWNvbHVtbkZhbWlsaWVzLmluY2x1ZGVzKG5ld0NvbHVtbkZhbWlseSkpIHtcbiAgICAgIHNldENvbHVtbkZhbWlsaWVzKFsuLi5jb2x1bW5GYW1pbGllcywgbmV3Q29sdW1uRmFtaWx5XSk7XG4gICAgICBzZXROZXdDb2x1bW5GYW1pbHkoJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCgn4KSv4KS5IOCkleClieCksuCkriDgpKvgpLzgpYjgpK7gpL/gpLLgpYAg4KSq4KS54KSy4KWHIOCkuOClhyDgpK7gpYzgpJzgpYLgpKYg4KS54KWIJyk7XG4gICAgfVxuICB9O1xuICBcbiAgY29uc3QgaGFuZGxlUmVtb3ZlQ29sdW1uRmFtaWx5ID0gKGZhbWlseTogc3RyaW5nKSA9PiB7XG4gICAgc2V0Q29sdW1uRmFtaWxpZXMoY29sdW1uRmFtaWxpZXMuZmlsdGVyKGYgPT4gZiAhPT0gZmFtaWx5KSk7XG4gIH07XG5cbiAgY29uc3QgZm9ybWF0Qnl0ZXMgPSAoYnl0ZXM6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gICAgaWYgKGJ5dGVzID09PSAwKSByZXR1cm4gJzAgQnl0ZXMnO1xuICAgIFxuICAgIGNvbnN0IGsgPSAxMDI0O1xuICAgIGNvbnN0IHNpemVzID0gWydCeXRlcycsICdLQicsICdNQicsICdHQicsICdUQiddO1xuICAgIGNvbnN0IGkgPSBNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKGspKTtcbiAgICBcbiAgICByZXR1cm4gcGFyc2VGbG9hdCgoYnl0ZXMgLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZCgyKSkgKyAnICcgKyBzaXplc1tpXTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYXktMTAwIGZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxIZWFkZXIgbWluaW1hbCAvPlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktNiBmbGV4LTFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTMgbWItNlwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2FkbWluXCIgY2xhc3NOYW1lPVwicC0yIGhvdmVyOmJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgPEFycm93TGVmdCBzaXplPXsyMH0gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPuCkluCli+CknCBCaWd0YWJsZSDgpKrgpY3gpLDgpKzgpILgpKfgpKg8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIHsvKiBCYW5uZXIgd2l0aCBkaWFncmFtICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIHNoYWRvdy1tZCBtYi02IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzIgbWItNCBtZDptYi0wXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi0yXCI+4KSW4KWL4KScIOCkleCkviDgpLjgpY3gpLXgpK/gpIIg4KSV4KS+IE5vU1FMIOCkoeClh+Ckn+CkvuCkrOClh+CkuDwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWItM1wiPlxuICAgICAgICAgICAgICAgIOCkueCkruCkvuCksOCkviBCaWd0YWJsZS3gpKrgpY3gpLDgpYfgpLDgpL/gpKQgTm9TUUwg4KSh4KWH4KSf4KS+4KSs4KWH4KS4IOCkrOCkoeCkvOClgCDgpK7gpL7gpKTgpY3gpLDgpL4g4KSu4KWH4KSCIOCkleCljeCksOClieCksiDgpJTgpLAg4KSH4KSC4KSh4KWH4KSV4KWN4KS4IOCkleCkv+CkjyDgpJfgpI8g4KSh4KWH4KSf4KS+IOCkleClhyDgpLLgpL/gpI8g4KSF4KSk4KWN4KSv4KSn4KS/4KSVIOCkuOCljeCkleClh+CksuClh+CkrOCksiDgpLjgpY3gpJ/gpYvgpLDgpYfgpJwg4KSq4KWN4KSw4KSm4KS+4KSoIOCkleCksOCkpOCkviDgpLngpYjgpaQg4KSV4KSIIOCkuOCljeCkpOCkguCkrSDgpLXgpL7gpLLgpYcg4KSq4KSw4KS/4KS14KS+4KSw4KWL4KSCIOCkleCkviDgpIngpKrgpK/gpYvgpJcg4KSV4KSw4KSV4KWHLCDgpLngpK4g4KS14KWH4KSsIOCkquClh+CknOCli+Ckgiwg4KSV4KWA4KS14KSw4KWN4KShIOCklOCksCDgpJXgpY3gpLDgpYngpLLgpL/gpILgpJcg4KSu4KWH4KSf4KS+4KSh4KWH4KSf4KS+IOCkleCliyDgpJXgpYHgpLbgpLLgpKTgpL4g4KS44KWHIOCkuOCkguCkl+CljeCksOCkueClgOCkpCDgpJTgpLAg4KSq4KWB4KSo4KSw4KWN4KSq4KWN4KSw4KS+4KSq4KWN4KSkIOCkleCksCDgpLjgpJXgpKTgpYcg4KS54KWI4KSC4KWkXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS01MCBweC0zIHB5LTEgcm91bmRlZC1mdWxsIHRleHQtc20gdGV4dC1ibHVlLTgwMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPERhdGFiYXNlIHNpemU9ezE0fSBjbGFzc05hbWU9XCJtci0xXCIgLz5cbiAgICAgICAgICAgICAgICAgIOCkleClieCksuCkruCkqOCksCDgpLjgpY3gpJ/gpYvgpLDgpYfgpJxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwIHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgdGV4dC1zbSB0ZXh0LWdyZWVuLTgwMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPFNlcnZlciBzaXplPXsxNH0gY2xhc3NOYW1lPVwibXItMVwiIC8+XG4gICAgICAgICAgICAgICAgICDgpLXgpL/gpKTgpLDgpL/gpKQg4KSG4KSw4KWN4KSV4KS/4KSf4KWH4KSV4KWN4KSa4KSwXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wdXJwbGUtNTAgcHgtMyBweS0xIHJvdW5kZWQtZnVsbCB0ZXh0LXNtIHRleHQtcHVycGxlLTgwMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPEdsb2JlIHNpemU9ezE0fSBjbGFzc05hbWU9XCJtci0xXCIgLz5cbiAgICAgICAgICAgICAgICAgIOCkquClh+Ckn+CkvuCkrOCkvuCkh+CknyDgpLjgpY3gpJXgpYfgpLJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzJcIj5cbiAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyNzU3NjUzOTg5MC1kZmE4MTU2NDgzNjM/aXhpZD1NM3czTWpVek5EaDhNSHd4ZkhObFlYSmphSHd4Zkh4a1lYUmhZbUZ6WlNVeU1HRnlZMmhwZEdWamRIVnlaU1V5TUdScFlXZHlZVzBsTWpCaWFXZGtZWFJoSlRJd2MzUnZjbUZuWlh4bGJud3dmSHg4ZkRFM05ETXlOVEE1TVRaOE1BJml4bGliPXJiLTQuMC4zXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJCaWd0YWJsZSBBcmNoaXRlY3R1cmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTY0IG9iamVjdC1jb3ZlciByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNiBtYi02XCI+XG4gICAgICAgICAgey8qIFN0YXRzIG92ZXJ2aWV3ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMiBiZy13aGl0ZSBwLTYgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XCI+4KSh4KWH4KSf4KS+4KSs4KWH4KS4IOCkheCkteCksuCli+CkleCkqDwvaDI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtNTAgcC00IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIG1iLTFcIj7gpJ/gpYfgpKzgpLLgpY3gpLg8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPnt0YWJsZXMubGVuZ3RofTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwIHAtNCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBtYi0xXCI+4KSH4KSC4KSh4KWH4KSV4KWN4KS44KWN4KShIOCkquClh+CknOClh+CknDwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e2luZGV4U3RhdHM/LndlYnBhZ2VzIHx8IDB9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcteWVsbG93LTUwIHAtNCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBtYi0xXCI+4KSV4KWA4KS14KSw4KWN4KSh4KWN4KS4PC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57aW5kZXhTdGF0cz8ua2V5d29yZHMgfHwgMH08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wdXJwbGUtNTAgcC00IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIG1iLTFcIj7gpLjgpY3gpJ/gpYvgpLDgpYfgpJwg4KS44KS+4KSH4KScPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIHt0YWJsZVN0YXRzID8gZm9ybWF0Qnl0ZXModGFibGVTdGF0cy5zaXplKSA6ICcwIEtCJ31cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi0zXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+4KSf4KWH4KSs4KSyIOCkquCljeCksOCkrOCkguCkp+CkqDwvaDM+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvYWRUYWJsZXN9IGNsYXNzTmFtZT1cInAtMiBiZy1ncmF5LTEwMCBob3ZlcjpiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPFJlZnJlc2hDdyBzaXplPXsxNn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVGFibGV9IFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkVGFibGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0zIHB5LTEgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+4KSf4KWH4KSs4KSyIOCkmuClgeCkqOClh+Ckgjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICB7dGFibGVzLm1hcCh0YWJsZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3RhYmxlfSB2YWx1ZT17dGFibGV9Pnt0YWJsZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB7c2VsZWN0ZWRUYWJsZSAmJiB0YWJsZVN0YXRzICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktNTAgcC00IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj57c2VsZWN0ZWRUYWJsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGJnLWJsdWUtMTAwIHRleHQtYmx1ZS04MDAgcHgtMiBweS0xIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0YWJsZVN0YXRzLnJvd0NvdW50fSDgpKrgpILgpJXgpY3gpKTgpL/gpK/gpL7gpIFcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+4KSV4KWJ4KSy4KSuIOCkq+CliOCkruCkv+CksuClgOCknDo8L3N0cm9uZz4ge2NvbHVtbkZhbWlsaWVzLmpvaW4oJywgJyl9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPuCkuOCkvuCkh+CknDo8L3N0cm9uZz4ge2Zvcm1hdEJ5dGVzKHRhYmxlU3RhdHMuc2l6ZSl9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogQ3JlYXRlIG5ldyB0YWJsZSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTRcIj7gpKjgpK/gpL4g4KSf4KWH4KSs4KSyIOCkrOCkqOCkvuCkj+CkgTwvaDI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICDgpJ/gpYfgpKzgpLIg4KSo4KS+4KSuXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV3VGFibGVOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VGFibGVOYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB4LTMgcHktMlwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VyX2RhdGFcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICDgpJXgpYngpLLgpK4g4KSr4KWI4KSu4KS/4KSy4KWA4KScXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0NvbHVtbkZhbWlseX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q29sdW1uRmFtaWx5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcHgtMyBweS0yXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibWV0YWRhdGFcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkQ29sdW1uRmFtaWx5fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFBsdXMgc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHtjb2x1bW5GYW1pbGllcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAg4KSc4KWL4KSh4KS84KWHIOCkl+CkjyDgpJXgpYngpLLgpK4g4KSr4KWI4KSu4KS/4KSy4KWA4KScOlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgIHtjb2x1bW5GYW1pbGllcy5tYXAoZmFtaWx5ID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ZhbWlseX0gY2xhc3NOYW1lPVwiYmctYmx1ZS01MCB0ZXh0LWJsdWUtODAwIHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgdGV4dC1zbSBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtmYW1pbHl9XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUNvbHVtbkZhbWlseShmYW1pbHkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtcmVkLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXNoMiBzaXplPXsxMn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZVRhYmxlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IW5ld1RhYmxlTmFtZSB8fCBjb2x1bW5GYW1pbGllcy5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBweS0yIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSAke1xuICAgICAgICAgICAgICAgICFuZXdUYWJsZU5hbWUgfHwgY29sdW1uRmFtaWxpZXMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICA/ICdiZy1ncmF5LTMwMCBjdXJzb3Itbm90LWFsbG93ZWQnXG4gICAgICAgICAgICAgICAgICA6ICdiZy1wcmltYXJ5IGhvdmVyOmJnLXByaW1hcnkvOTAnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDgpJ/gpYfgpKzgpLIg4KSs4KSo4KS+4KSP4KSBXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICB7LyogRGF0YSBzYW1wbGUgYW5kIGFyY2hpdGVjdHVyZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC02IG1iLTZcIj5cbiAgICAgICAgICB7LyogU2FtcGxlIGRhdGEgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0yIGJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj7gpKHgpYfgpJ/gpL4g4KSo4KSu4KWC4KSo4KS+PC9oMj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2FkVGFibGVEYXRhfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJnLWdyYXktMTAwIGhvdmVyOmJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFJlZnJlc2hDdyBzaXplPXsxNn0gLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMiBiZy1ncmF5LTEwMCBob3ZlcjpiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxGaWx0ZXIgc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC00OFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluIHJvdW5kZWQtZnVsbCBoLTEwIHctMTAgYm9yZGVyLXQtMiBib3JkZXItYi0yIGJvcmRlci1wcmltYXJ5XCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7IXNlbGVjdGVkVGFibGUgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JheS01MDAgcHktMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPERhdGFiYXNlIHNpemU9ezQwfSBjbGFzc05hbWU9XCJteC1hdXRvIG1iLTMgdGV4dC1ncmF5LTMwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPuCkoeClh+Ckn+CkviDgpKbgpYfgpJbgpKjgpYcg4KSV4KWHIOCksuCkv+CkjyDgpJXgpYPgpKrgpK/gpL4g4KSP4KSVIOCkn+Clh+CkrOCksiDgpJrgpYHgpKjgpYfgpII8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogc2FtcGxlRGF0YS5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JheS01MDAgcHktMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPERhdGFiYXNlIHNpemU9ezQwfSBjbGFzc05hbWU9XCJteC1hdXRvIG1iLTMgdGV4dC1ncmF5LTMwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPuCkh+CkuCDgpJ/gpYfgpKzgpLIg4KSu4KWH4KSCIOCkleCli+CkiCDgpKHgpYfgpJ/gpL4g4KSo4KS54KWA4KSCIOCkueCliDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctZ3JheS01MCB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdyBLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ncmF5LTUwIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sdW1uIEZhbWlsaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctZ3JheS01MCB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbHVtbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ncmF5LTUwIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLXdoaXRlIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3NhbXBsZURhdGEubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbkNvdW50ID0gT2JqZWN0LmtleXMocm93LmNvbHVtbnMpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHVuaXF1ZSBjb2x1bW4gZmFtaWxpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmFtaWxpZXMgPSBuZXcgU2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHJvdy5jb2x1bW5zKS5tYXAoY29sID0+IGNvbC5zcGxpdCgnOicpWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiaG92ZXI6YmctZ3JheS01MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMiB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5yb3dLZXkubGVuZ3RoID4gMzAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHtyb3cucm93S2V5LnN1YnN0cmluZygwLCAzMCl9Li4uYCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHJvdy5yb3dLZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMiB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0FycmF5LmZyb20oZmFtaWxpZXMpLmpvaW4oJywgJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMiB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbkNvdW50fSBjb2x1bW5zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMiB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKHJvdy50aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBBcmNoaXRlY3R1cmUgZGlhZ3JhbSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIHNoYWRvdy1tZCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XCI+4KSG4KSw4KWN4KSV4KS/4KSf4KWH4KSV4KWN4KSa4KSwPC9oMj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4ODk3MjY4NTI4OC1jM2ZkMTU3ZDdjN2E/aXhpZD1NM3czTWpVek5EaDhNSHd4ZkhObFlYSmphSHd5Zkh4a1lYUmhZbUZ6WlNVeU1HRnlZMmhwZEdWamRIVnlaU1V5TUdScFlXZHlZVzBsTWpCaWFXZGtZWFJoSlRJd2MzUnZjbUZuWlh4bGJud3dmSHg4ZkRFM05ETXlOVEE1TVRaOE1BJml4bGliPXJiLTQuMC4zXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJEYXRhYmFzZSBBcmNoaXRlY3R1cmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTQwIG9iamVjdC1jb3ZlciByb3VuZGVkLWxnIG1iLTNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS04MDBcIj7gpJXgpYDgpKvgpYDgpJrgpLDgpY3gpLg8L2gzPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS0yIHRleHQtc20gdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgaC01IHctNSByb3VuZGVkLWZ1bGwgYmctYmx1ZS0xMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXItMlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtYmx1ZS04MDBcIj4xPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj7gpJXgpYngpLLgpK7gpKjgpLAg4KS44KWN4KSf4KWL4KSw4KWH4KScIOCkruClieCkoeCksiDgpLjgpY3gpKrgpL7gpLDgpY3gpLgg4KSh4KWH4KSf4KS+IOCkleClhyDgpLLgpL/gpI8g4KSF4KSo4KWB4KSV4KWC4KSy4KS/4KSkPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBoLTUgdy01IHJvdW5kZWQtZnVsbCBiZy1ibHVlLTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtci0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ibHVlLTgwMFwiPjI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPuCkpOClh+CknOCkvOClgCDgpLjgpYcg4KSV4KWN4KS14KWH4KSw4KWAIOCkleClhyDgpLLgpL/gpI8g4KSu4KSy4KWN4KSf4KWALeCksuClh+CkteCksiDgpIfgpILgpKHgpYfgpJXgpY3gpLjgpL/gpILgpJc8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGgtNSB3LTUgcm91bmRlZC1mdWxsIGJnLWJsdWUtMTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1yLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWJsdWUtODAwXCI+Mzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4+4KSV4KWJ4KSy4KSuIOCkq+CliOCkruCkv+CksuClgOCknCDgpJXgpYcg4KS44KS+4KSlIOCkuOCkguCkrOCkguCkp+Ckv+CkpCDgpKHgpYfgpJ/gpL4g4KSP4KSVIOCkuOCkvuCkpSDgpLjgpY3gpJ/gpYvgpLA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGgtNSB3LTUgcm91bmRlZC1mdWxsIGJnLWJsdWUtMTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1yLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWJsdWUtODAwXCI+NDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4+4KS14KS/4KS24KS+4KSyIOCkteClieCksuCljeCkr+ClguCkriDgpKHgpYfgpJ/gpL4g4KSV4KWHIOCksuCkv+CkjyDgpIfgpKgt4KSu4KWH4KSu4KWL4KSw4KWAIOCkleCliOCktuCkv+CkguCklzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgey8qIEltcGxlbWVudGF0aW9uIGRldGFpbHMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNiBtYi02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0zIGJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTRcIj7gpJbgpYvgpJwg4KSV4KWHIE5vU1FMIOCkoeClh+Ckn+CkvuCkrOClh+CkuCDgpJXgpL4g4KSV4KS+4KSw4KWN4KSv4KS+4KSo4KWN4KS14KSv4KSoPC9oMj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC02XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHAtNFwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtbGcgbWItMlwiPuCkteClh+CkrOCkquClh+CknCDgpJ/gpYfgpKzgpLI8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1zbSBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICDgpIfgpLgg4KSf4KWH4KSs4KSyIOCkruClh+CkgiDgpJXgpY3gpLDgpYngpLIg4KSV4KS/4KSPIOCkl+CkjyDgpLXgpYfgpKwg4KSq4KWH4KSc4KWL4KSCIOCkleCkviDgpLjgpILgpKrgpYLgpLDgpY3gpKMg4KSh4KWH4KSf4KS+IOCkueCli+CkpOCkviDgpLngpYgsIOCknOCkv+CkuOCkruClh+CkgiDgpK7gpYfgpJ/gpL7gpKHgpYfgpJ/gpL4sIOCkuOCkvuCkruCkl+CljeCksOClgCwg4KSU4KSwIOCksOCliOCkguCkleCkv+CkguCklyDgpJzgpL7gpKjgpJXgpL7gpLDgpYAg4KS24KS+4KSu4KS/4KSyIOCkueCli+CkpOClgCDgpLngpYjgpaRcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS01MCBwLTIgcm91bmRlZCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+Um93IEtleTo8L3NwYW4+IDxjb2RlPnJldmVyc2VkX2RvbWFpbiNwYXRoI3RpbWVzdGFtcDwvY29kZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5Db2x1bW4gRmFtaWxpZXM6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHNwYWNlLXktMSBwbC01IGxpc3QtZGlzY1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGNvZGU+bWV0YWRhdGE6PC9jb2RlPiBVUkwsIOCktuClgOCksOCljeCkt+CklSwg4KS14KS/4KS14KSw4KSjPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxjb2RlPmNvbnRlbnQ6PC9jb2RlPiBIVE1MIOCkuOCkvuCkruCkl+CljeCksOClgCwg4KSq4KS+4KSgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxjb2RlPmxpbmtzOjwvY29kZT4g4KSG4KSJ4KSf4KSs4KS+4KSJ4KSC4KShIOCksuCkv+CkguCkleCljeCkuDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48Y29kZT5yYW5raW5nOjwvY29kZT4gUGFnZVJhbmssIOCkquCljeCksOCkvuCkuOCkguCkl+Ckv+CkleCkpOCkvjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHAtNFwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtbGcgbWItMlwiPuCkleClgOCkteCksOCljeCkoeCljeCkuCDgpJ/gpYfgpKzgpLI8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1zbSBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICDgpIfgpKjgpY3gpLXgpLDgpY3gpJ/gpYfgpKEg4KSH4KSC4KSh4KWH4KSV4KWN4KS4IOCkleClhyDgpLDgpYLgpKog4KSu4KWH4KSCIOCkquCljeCksOCkpOCljeCkr+Clh+CklSDgpJXgpYDgpLXgpLDgpY3gpKEg4KSV4KWHIOCksuCkv+CkjyDgpLXgpYfgpKwg4KSq4KWH4KSc4KWL4KSCIOCkleClgCDgpLjgpYLgpJrgpYAsIOCkpOClh+CknOCkvOClgCDgpLjgpYcg4KSW4KWL4KScIOCkquCljeCksOCkpuCkvuCkqCDgpJXgpLDgpKjgpYcg4KSV4KWHIOCksuCkv+Ckj+ClpFxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwIHAtMiByb3VuZGVkIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5Sb3cgS2V5Ojwvc3Bhbj4gPGNvZGU+a2V5d29yZDwvY29kZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5Db2x1bW4gRmFtaWxpZXM6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHNwYWNlLXktMSBwbC01IGxpc3QtZGlzY1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGNvZGU+cGFnZXM6PC9jb2RlPiDgpK7gpL/gpLLgpL7gpKgg4KSV4KSw4KSo4KWHIOCkteCkvuCksuClhyBVUkxzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxjb2RlPnN0YXRzOjwvY29kZT4g4KSG4KS14KWD4KSk4KWN4KSk4KS/LCDgpLjgpY3gpJXgpYvgpLA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBwLTRcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWxnIG1iLTJcIj7gpJXgpY3gpLDgpYngpLJf4KSV4KWN4KSv4KWCIOCkn+Clh+CkrOCksjwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgIOCkleCljeCksOClieCksiDgpJXgpLDgpKjgpYcg4KSV4KWHIOCksuCkv+CkjyBVUkxzIOCklOCksCDgpIngpKjgpJXgpYAg4KSV4KWN4KSw4KWJ4KSyIOCkuOCljeCkpeCkv+CkpOCkvyDgpJXgpYsg4KSf4KWN4KSw4KWI4KSVIOCkleCksOCkpOCkviDgpLngpYgsIOCkh+Ckt+CljeCkn+CkpOCkriDgpJXgpY3gpLDgpYngpLLgpL/gpILgpJcg4KSq4KWN4KSw4KS+4KSl4KSu4KS/4KSV4KSk4KS+IOCkleCliyDgpLjgpJXgpY3gpLfgpK4g4KSs4KSo4KS+4KSk4KS+IOCkueCliOClpFxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwIHAtMiByb3VuZGVkIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5Sb3cgS2V5Ojwvc3Bhbj4gPGNvZGU+cHJpb3JpdHkjdGltZXN0YW1wI3VybDwvY29kZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5Db2x1bW4gRmFtaWxpZXM6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHNwYWNlLXktMSBwbC01IGxpc3QtZGlzY1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGNvZGU+c3RhdHVzOjwvY29kZT4g4KSy4KSC4KSs4KS/4KSkLCDgpJrgpLIg4KSw4KS54KS+LCDgpLjgpKvgpLIsIOCkteCkv+Ckq+CksjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48Y29kZT5tZXRhZGF0YTo8L2NvZGU+IOCksOClh+Ckq+CksOCksCwg4KSq4KWN4KSw4KS+4KSl4KSu4KS/4KSV4KSk4KS+PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDg3OTU4NDQ5OTQzLTI0MjllOGJlODYyNT9peGlkPU0zdzNNalV6TkRoOE1Id3hmSE5sWVhKamFId3pmSHhrWVhSaFltRnpaU1V5TUdGeVkyaHBkR1ZqZEhWeVpTVXlNR1JwWVdkeVlXMGxNakJpYVdka1lYUmhKVEl3YzNSdmNtRm5aWHhsYm53d2ZIeDhmREUzTkRNeU5UQTVNVFo4TUEmaXhsaWI9cmItNC4wLjNcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlN0b3JhZ2UgQXJjaGl0ZWN0dXJlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC02NCBvYmplY3QtY292ZXIgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmlndGFibGVBZG1pbjtcbiBcbiJdLCJmaWxlIjoiL2hvbWUvcHJvamVjdC9zcmMvcGFnZXMvQmlndGFibGVBZG1pbi50c3gifQ==
