import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/BlobstoreAdmin.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3859ff4e"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/project/src/pages/BlobstoreAdmin.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=3859ff4e"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"]; const useRef = __vite__cjsImport3_react["useRef"];
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=3859ff4e";
import { ArrowLeft, Database, HardDrive, File, Upload, Search, Download, Trash2, Tag, RefreshCw } from "/node_modules/.vite/deps/lucide-react.js?v=3859ff4e";
import Header from "/src/components/Header.tsx";
import Footer from "/src/components/Footer.tsx";
import { blobIndexService } from "/src/services/blobstore/BlobIndexService.ts";
const BlobstoreAdmin = () => {
  _s();
  const [blobs, setBlobs] = useState([]);
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBlob, setSelectedBlob] = useState(null);
  const [newTags, setNewTags] = useState({});
  const [showUploadModal, setShowUploadModal] = useState(false);
  const fileInputRef = useRef(null);
  const [uploadFile, setUploadFile] = useState(null);
  const [uploadKey, setUploadKey] = useState("");
  const [uploadTags, setUploadTags] = useState({});
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState("");
  useEffect(() => {
    loadBlobs();
    loadStats();
  }, []);
  const loadBlobs = async () => {
    setIsLoading(true);
    try {
      const results = blobIndexService.searchBlobs({}, { limit: 100 });
      setBlobs(results);
    } catch (error) {
      console.error("Error loading blobs:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const loadStats = () => {
    try {
      const statsData = blobIndexService.getStats();
      setStats(statsData);
    } catch (error) {
      console.error("Error loading stats:", error);
    }
  };
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      loadBlobs();
      return;
    }
    try {
      const filteredBlobs = blobs.filter(
        (blob) => blob.key.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setBlobs(filteredBlobs);
    } catch (error) {
      console.error("Error searching blobs:", error);
    }
  };
  const handleSelectBlob = (blob) => {
    setSelectedBlob(blob);
    setNewTags({ ...blob.tags });
  };
  const handleUpdateTags = async () => {
    if (!selectedBlob)
      return;
    try {
      const updatedBlob = blobIndexService.updateIndexedMetadata(
        selectedBlob.key,
        newTags
      );
      if (updatedBlob) {
        setBlobs(blobs.map(
          (blob) => blob.key === selectedBlob.key ? updatedBlob : blob
        ));
        setSelectedBlob(updatedBlob);
      }
    } catch (error) {
      console.error("Error updating blob tags:", error);
    }
  };
  const handleDeleteBlob = async (key) => {
    if (window.confirm("क्या आप वाकई इस ब्लॉब को हटाना चाहते हैं?")) {
      try {
        const success = blobIndexService.deleteBlob(key);
        if (success) {
          if (selectedBlob?.key === key) {
            setSelectedBlob(null);
          }
          setBlobs(blobs.filter((blob) => blob.key !== key));
          loadStats();
        }
      } catch (error) {
        console.error("Error deleting blob:", error);
      }
    }
  };
  const handleUploadFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setUploadFile(file);
      if (!uploadKey) {
        setUploadKey(`uploads/${Date.now()}/${file.name}`);
      }
      setShowUploadModal(true);
    }
  };
  const handleUpload = async () => {
    if (!uploadFile || !uploadKey) {
      setUploadError("फ़ाइल और कुंजी आवश्यक हैं");
      return;
    }
    setUploadProgress(0);
    setUploadError("");
    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i);
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    try {
      const metadata = await blobIndexService.storeBlob(
        uploadKey,
        uploadFile,
        uploadFile.type,
        uploadTags,
        {
          fileName: uploadFile.name,
          uploadTime: Date.now()
        }
      );
      setBlobs([metadata, ...blobs]);
      loadStats();
      setUploadFile(null);
      setUploadKey("");
      setUploadTags({});
      setShowUploadModal(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadError(error.message);
    } finally {
      setUploadProgress(0);
    }
  };
  const addTag = () => {
    setNewTags({
      ...newTags,
      [`tag_${Object.keys(newTags).length + 1}`]: ""
    });
  };
  const removeTag = (key) => {
    const { [key]: _, ...rest } = newTags;
    setNewTags(rest);
  };
  const addUploadTag = () => {
    setUploadTags({
      ...uploadTags,
      [`tag_${Object.keys(uploadTags).length + 1}`]: ""
    });
  };
  const removeUploadTag = (key) => {
    const { [key]: _, ...rest } = uploadTags;
    setUploadTags(rest);
  };
  const formatBytes = (bytes) => {
    if (bytes === 0)
      return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-gray-100 flex flex-col", children: [
    /* @__PURE__ */ jsxDEV(Header, { minimal: true }, void 0, false, {
      fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
      lineNumber: 228,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4 py-6 flex-1", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center space-x-3 mb-6", children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/admin", className: "p-2 hover:bg-gray-200 rounded-full", children: /* @__PURE__ */ jsxDEV(ArrowLeft, { size: 20 }, void 0, false, {
          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
          lineNumber: 233,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
          lineNumber: 232,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-2xl font-bold", children: "खोज Blobstore प्रबंधन" }, void 0, false, {
          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
          lineNumber: 235,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
        lineNumber: 231,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-lg shadow-md mb-6 overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col md:flex-row items-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "md:w-1/2 mb-4 md:mb-0", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold mb-2", children: "खोज का बड़ी बाइनरी फ़ाइल स्टोरेज सिस्टम" }, void 0, false, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 242,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 mb-3", children: "हमारा Blobstore सिस्टम बड़ी बाइनरी फ़ाइलों जैसे छवियों, दस्तावेज़ों, वीडियो, और अन्य मीडिया को स्टोर और प्रबंधित करने के लिए डिज़ाइन किया गया है। Bigtable के साथ एकीकृत, यह उच्च-मात्रा वाली बाइनरी सामग्री का कुशलतापूर्वक प्रबंधन करता है।" }, void 0, false, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 243,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-50 px-3 py-1 rounded-full text-sm text-blue-800 flex items-center", children: [
              /* @__PURE__ */ jsxDEV(File, { size: 14, className: "mr-1" }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 248,
                columnNumber: 19
              }, this),
              "बाइनरी फाइल स्टोरेज"
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 247,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-green-50 px-3 py-1 rounded-full text-sm text-green-800 flex items-center", children: [
              /* @__PURE__ */ jsxDEV(Database, { size: 14, className: "mr-1" }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 252,
                columnNumber: 19
              }, this),
              "मेटाडेटा इंडेक्सिंग"
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 251,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-purple-50 px-3 py-1 rounded-full text-sm text-purple-800 flex items-center", children: [
              /* @__PURE__ */ jsxDEV(HardDrive, { size: 14, className: "mr-1" }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 256,
                columnNumber: 19
              }, this),
              "पेटाबाइट स्केल"
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 255,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 246,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
          lineNumber: 241,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "md:w-1/2", children: /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxiaW5hcnklMjBkYXRhJTIwc3RvcmFnZSUyMHN5c3RlbSUyMGRhdGFiYXNlJTIwYmxvYnMlMjBmaWxlc3xlbnwwfHx8fDE3NDMyNTIzNzB8MA&ixlib=rb-4.0.3",
            alt: "Blobstore System",
            className: "w-full h-64 object-cover rounded-lg"
          },
          void 0,
          false,
          {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 262,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
          lineNumber: 261,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
        lineNumber: 240,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
        lineNumber: 239,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-2 bg-white p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center mb-4", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold", children: "स्टोरेज अवलोकन" }, void 0, false, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 275,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("button", { onClick: loadStats, className: "p-2 bg-gray-100 hover:bg-gray-200 rounded-full", children: /* @__PURE__ */ jsxDEV(RefreshCw, { size: 16 }, void 0, false, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 277,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 276,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 274,
            columnNumber: 13
          }, this),
          stats ? /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-sm text-gray-500 mb-1", children: "ब्लॉब्स" }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 284,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold", children: stats.blobCount }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 285,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 283,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-green-50 p-4 rounded-lg", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-sm text-gray-500 mb-1", children: "इंडेक्स्ड" }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 289,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold", children: stats.indexedCount }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 290,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 288,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-sm text-gray-500 mb-1", children: "कुल स्टोरेज" }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 294,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold", children: formatBytes(stats.totalSize) }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 295,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 293,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-purple-50 p-4 rounded-lg", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-sm text-gray-500 mb-1", children: "उपलब्ध" }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 299,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold", children: formatBytes(stats.availableSize) }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 300,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 298,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 282,
            columnNumber: 13
          }, this) : /* @__PURE__ */ jsxDEV("div", { className: "h-24 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary" }, void 0, false, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 305,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 304,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "font-medium mb-3", children: "स्टोरेज उपयोग" }, void 0, false, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 310,
              columnNumber: 15
            }, this),
            stats && /* @__PURE__ */ jsxDEV("div", { className: "w-full bg-gray-200 rounded-full h-2.5 mb-2", children: /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "bg-primary h-2.5 rounded-full",
                style: { width: `${stats.totalSize / (stats.totalSize + stats.availableSize) * 100}%` }
              },
              void 0,
              false,
              {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 313,
                columnNumber: 19
              },
              this
            ) }, void 0, false, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 312,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between text-sm text-gray-600", children: [
              /* @__PURE__ */ jsxDEV("span", { children: [
                "प्रयुक्त: ",
                stats ? formatBytes(stats.totalSize) : "लोड हो रहा है..."
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 320,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: [
                "कुल: ",
                stats ? formatBytes(stats.totalSize + stats.availableSize) : "लोड हो रहा है..."
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 321,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 319,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 309,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
          lineNumber: 273,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold mb-4", children: "अपलोड फ़ाइल" }, void 0, false, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 328,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "border-2 border-dashed border-gray-300 rounded-lg p-8 mb-4 text-center cursor-pointer hover:bg-gray-50", onClick: handleUploadFile, children: [
            /* @__PURE__ */ jsxDEV(Upload, { className: "mx-auto text-gray-400 mb-2", size: 32 }, void 0, false, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 331,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 mb-1", children: "क्लिक करें या फ़ाइल खींचें और छोड़ें" }, void 0, false, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 332,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-gray-500", children: "PNG, JPG, PDF, MP4 आदि" }, void 0, false, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 333,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 330,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "file",
              ref: fileInputRef,
              className: "hidden",
              onChange: handleFileChange
            },
            void 0,
            false,
            {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 336,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: handleUploadFile,
              className: "w-full py-2 bg-primary hover:bg-primary/90 text-white rounded-md flex items-center justify-center",
              children: [
                /* @__PURE__ */ jsxDEV(Upload, { size: 16, className: "mr-2" }, void 0, false, {
                  fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                  lineNumber: 347,
                  columnNumber: 15
                }, this),
                "फ़ाइल अपलोड करें"
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 343,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
          lineNumber: 327,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
        lineNumber: 271,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-2 bg-white p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center mb-4", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold", children: "स्टोर्ड ब्लॉब्स" }, void 0, false, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 357,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "relative mr-2", children: [
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    type: "text",
                    placeholder: "खोजें...",
                    value: searchTerm,
                    onChange: (e) => setSearchTerm(e.target.value),
                    className: "px-3 py-1 pr-8 border border-gray-300 rounded-md text-sm",
                    onKeyDown: (e) => e.key === "Enter" && handleSearch()
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                    lineNumber: 361,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(Search, { size: 14, className: "absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" }, void 0, false, {
                  fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                  lineNumber: 369,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 360,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: loadBlobs,
                  className: "p-2 bg-gray-100 hover:bg-gray-200 rounded-full",
                  children: /* @__PURE__ */ jsxDEV(RefreshCw, { size: 16 }, void 0, false, {
                    fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                    lineNumber: 376,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                  lineNumber: 372,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 359,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 356,
            columnNumber: 13
          }, this),
          isLoading ? /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center items-center h-48", children: /* @__PURE__ */ jsxDEV("div", { className: "animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary" }, void 0, false, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 383,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 382,
            columnNumber: 13
          }, this) : blobs.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "text-center py-8", children: [
            /* @__PURE__ */ jsxDEV(File, { size: 40, className: "mx-auto text-gray-300 mb-2" }, void 0, false, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 387,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-gray-500", children: "कोई ब्लॉब नहीं मिला" }, void 0, false, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 388,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 386,
            columnNumber: 13
          }, this) : /* @__PURE__ */ jsxDEV("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV("table", { className: "min-w-full divide-y divide-gray-200", children: [
            /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { children: [
              /* @__PURE__ */ jsxDEV("th", { className: "px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "कुंजी" }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 395,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("th", { className: "px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "प्रकार" }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 398,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("th", { className: "px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "आकार" }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 401,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("th", { className: "px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "बनाया गया" }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 404,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("th", { className: "px-4 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "कार्रवाई" }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 407,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 394,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 393,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("tbody", { className: "bg-white divide-y divide-gray-200", children: blobs.map(
              (blob, index) => /* @__PURE__ */ jsxDEV(
                "tr",
                {
                  className: `hover:bg-gray-50 ${selectedBlob?.key === blob.key ? "bg-blue-50" : ""}`,
                  onClick: () => handleSelectBlob(blob),
                  children: [
                    /* @__PURE__ */ jsxDEV("td", { className: "px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900", children: blob.key.length > 30 ? `${blob.key.substring(0, 15)}...${blob.key.substring(blob.key.length - 10)}` : blob.key }, void 0, false, {
                      fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                      lineNumber: 419,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("td", { className: "px-4 py-2 whitespace-nowrap text-sm text-gray-500", children: blob.contentType.split("/")[1] || blob.contentType }, void 0, false, {
                      fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                      lineNumber: 424,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("td", { className: "px-4 py-2 whitespace-nowrap text-sm text-gray-500", children: formatBytes(blob.size) }, void 0, false, {
                      fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                      lineNumber: 427,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("td", { className: "px-4 py-2 whitespace-nowrap text-sm text-gray-500", children: formatDate(blob.createdAt) }, void 0, false, {
                      fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                      lineNumber: 430,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("td", { className: "px-4 py-2 whitespace-nowrap text-sm text-gray-500", children: /* @__PURE__ */ jsxDEV("div", { className: "flex space-x-2", children: [
                      /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          className: "p-1 hover:bg-gray-200 rounded",
                          onClick: (e) => {
                            e.stopPropagation();
                            handleSelectBlob(blob);
                          },
                          children: /* @__PURE__ */ jsxDEV(Tag, { size: 16, className: "text-blue-600" }, void 0, false, {
                            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                            lineNumber: 442,
                            columnNumber: 31
                          }, this)
                        },
                        void 0,
                        false,
                        {
                          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                          lineNumber: 435,
                          columnNumber: 29
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          className: "p-1 hover:bg-gray-200 rounded",
                          onClick: (e) => {
                            e.stopPropagation();
                            alert("डाउनलोड सुविधा वास्तविक कार्यान्वयन में जोड़ी जाएगी");
                          },
                          children: /* @__PURE__ */ jsxDEV(Download, { size: 16, className: "text-green-600" }, void 0, false, {
                            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                            lineNumber: 452,
                            columnNumber: 31
                          }, this)
                        },
                        void 0,
                        false,
                        {
                          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                          lineNumber: 444,
                          columnNumber: 29
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          className: "p-1 hover:bg-gray-200 rounded",
                          onClick: (e) => {
                            e.stopPropagation();
                            handleDeleteBlob(blob.key);
                          },
                          children: /* @__PURE__ */ jsxDEV(Trash2, { size: 16, className: "text-red-600" }, void 0, false, {
                            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                            lineNumber: 461,
                            columnNumber: 31
                          }, this)
                        },
                        void 0,
                        false,
                        {
                          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                          lineNumber: 454,
                          columnNumber: 29
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                      lineNumber: 434,
                      columnNumber: 27
                    }, this) }, void 0, false, {
                      fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                      lineNumber: 433,
                      columnNumber: 25
                    }, this)
                  ]
                },
                index,
                true,
                {
                  fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                  lineNumber: 414,
                  columnNumber: 19
                },
                this
              )
            ) }, void 0, false, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 412,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 392,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 391,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
          lineNumber: 355,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold mb-4", children: "ब्लॉब विवरण" }, void 0, false, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 475,
            columnNumber: 13
          }, this),
          selectedBlob ? /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-medium text-gray-700", children: "कुंजी" }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 480,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "mt-1 text-sm text-gray-900 break-all", children: selectedBlob.key }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 481,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 479,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-medium text-gray-700", children: "प्रकार" }, void 0, false, {
                  fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                  lineNumber: 486,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "mt-1 text-sm text-gray-900", children: selectedBlob.contentType }, void 0, false, {
                  fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                  lineNumber: 487,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 485,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-medium text-gray-700", children: "आकार" }, void 0, false, {
                  fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                  lineNumber: 491,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "mt-1 text-sm text-gray-900", children: formatBytes(selectedBlob.size) }, void 0, false, {
                  fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                  lineNumber: 492,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 490,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-medium text-gray-700", children: "बनाया गया" }, void 0, false, {
                  fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                  lineNumber: 496,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "mt-1 text-sm text-gray-900", children: formatDate(selectedBlob.createdAt) }, void 0, false, {
                  fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                  lineNumber: 497,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 495,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-medium text-gray-700", children: "आखिरी एक्सेस" }, void 0, false, {
                  fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                  lineNumber: 501,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "mt-1 text-sm text-gray-900", children: selectedBlob.lastAccessed ? formatDate(selectedBlob.lastAccessed) : "N/A" }, void 0, false, {
                  fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                  lineNumber: 502,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 500,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 484,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-medium text-gray-700 mb-2", children: "टैग्स" }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 509,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: Object.entries(newTags).map(
                ([key, value], index) => /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxDEV(
                    "input",
                    {
                      type: "text",
                      placeholder: "टैग कुंजी",
                      value: key,
                      onChange: (e) => {
                        const updatedTags = { ...newTags };
                        delete updatedTags[key];
                        updatedTags[e.target.value] = value;
                        setNewTags(updatedTags);
                      },
                      className: "flex-1 px-2 py-1 border border-gray-300 rounded-md text-sm"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                      lineNumber: 514,
                      columnNumber: 25
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(
                    "input",
                    {
                      type: "text",
                      placeholder: "टैग मान",
                      value,
                      onChange: (e) => {
                        setNewTags({
                          ...newTags,
                          [key]: e.target.value
                        });
                      },
                      className: "flex-1 px-2 py-1 border border-gray-300 rounded-md text-sm"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                      lineNumber: 526,
                      columnNumber: 25
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => removeTag(key),
                      className: "p-1 bg-red-50 text-red-600 rounded",
                      children: /* @__PURE__ */ jsxDEV(Trash2, { size: 16 }, void 0, false, {
                        fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                        lineNumber: 542,
                        columnNumber: 27
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                      lineNumber: 538,
                      columnNumber: 25
                    },
                    this
                  )
                ] }, index, true, {
                  fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                  lineNumber: 513,
                  columnNumber: 19
                }, this)
              ) }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 511,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "mt-2 flex justify-between", children: [
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: addTag,
                    className: "text-primary text-sm hover:underline",
                    children: "टैग जोड़ें"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                    lineNumber: 549,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: handleUpdateTags,
                    className: "px-3 py-1 bg-primary hover:bg-primary/90 text-white rounded-md text-sm",
                    children: "अपडेट करें"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                    lineNumber: 556,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 548,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 508,
              columnNumber: 17
            }, this),
            selectedBlob.indexedFields && Object.keys(selectedBlob.indexedFields).length > 0 && /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-medium text-gray-700 mb-2", children: "इंडेक्स्ड फील्ड्स" }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 567,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-50 p-3 rounded-md", children: /* @__PURE__ */ jsxDEV("pre", { className: "text-xs overflow-x-auto", children: JSON.stringify(selectedBlob.indexedFields, null, 2) }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 570,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 569,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 566,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 478,
            columnNumber: 13
          }, this) : /* @__PURE__ */ jsxDEV("div", { className: "text-center py-8", children: [
            /* @__PURE__ */ jsxDEV(File, { size: 40, className: "mx-auto text-gray-300 mb-2" }, void 0, false, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 579,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-gray-500", children: "विवरण देखने के लिए एक ब्लॉब चुनें" }, void 0, false, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 580,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 578,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
          lineNumber: 474,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
        lineNumber: 353,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-6 bg-white p-6 rounded-lg shadow-md", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold mb-4", children: "Blobstore आर्किटेक्चर" }, void 0, false, {
          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
          lineNumber: 588,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxiaW5hcnklMjBkYXRhJTIwc3RvcmFnZSUyMHN5c3RlbSUyMGRhdGFiYXNlJTIwYmxvYnMlMjBmaWxlc3xlbnwwfHx8fDE3NDMyNTIzNzB8MA&ixlib=rb-4.0.3",
              alt: "Blobstore Architecture",
              className: "w-full h-64 object-cover rounded-lg"
            },
            void 0,
            false,
            {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 592,
              columnNumber: 15
            },
            this
          ) }, void 0, false, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 591,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "font-medium text-gray-800 mb-3", children: "Blobstore सिस्टम कैसे काम करता है" }, void 0, false, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 600,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 mb-4", children: "हमारा Blobstore सिस्टम बड़े बाइनरी डेटा के कुशल भंडारण और पुनर्प्राप्ति के लिए द्वि-स्तरीय वास्तुकला का उपयोग करता है:" }, void 0, false, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 601,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bg-blue-50 p-3 rounded-lg", children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "font-medium text-blue-800 mb-1", children: "डेटा स्टोरेज लेयर" }, void 0, false, {
                  fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                  lineNumber: 607,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-600", children: "बड़े बाइनरी ऑब्जेक्ट्स को कुशलतापूर्वक संग्रहीत करता है, मेमोरी का इष्टतम उपयोग सुनिश्चित करता है, और तेज़ पुनर्प्राप्ति प्रदान करता है।" }, void 0, false, {
                  fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                  lineNumber: 608,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 606,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "font-medium text-green-800 mb-1", children: "मेटाडेटा इंडेक्सिंग लेयर" }, void 0, false, {
                  fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                  lineNumber: 614,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-600", children: "Bigtable का उपयोग करके ब्लॉब मेटाडेटा को इंडेक्स करें, टैग, कुंजी, या कस्टम इंडेक्स्ड फ़ील्ड द्वारा तेज़ खोज को सक्षम करें।" }, void 0, false, {
                  fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                  lineNumber: 615,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 613,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "bg-purple-50 p-3 rounded-lg", children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "font-medium text-purple-800 mb-1", children: "एकीकृत इंटरफेस" }, void 0, false, {
                  fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                  lineNumber: 621,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-600", children: "उपयोगकर्ताओं को अनुक्रमणिका या भंडारण परत की जटिलताओं से निपटने की आवश्यकता के बिना एक एकीकृत API प्रदान करें।" }, void 0, false, {
                  fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                  lineNumber: 622,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 620,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
              lineNumber: 605,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 599,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
          lineNumber: 590,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
        lineNumber: 587,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
      lineNumber: 230,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
      lineNumber: 632,
      columnNumber: 7
    }, this),
    showUploadModal && /* @__PURE__ */ jsxDEV("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-lg max-w-md w-full p-6", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold mb-4", children: "फ़ाइल अपलोड करें" }, void 0, false, {
        fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
        lineNumber: 638,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "फ़ाइल" }, void 0, false, {
          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
          lineNumber: 641,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center bg-gray-50 p-2 rounded-md", children: [
          /* @__PURE__ */ jsxDEV(File, { size: 16, className: "text-gray-500 mr-2" }, void 0, false, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 645,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm truncate", children: uploadFile?.name }, void 0, false, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 646,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
          lineNumber: 644,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
        lineNumber: 640,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "स्टोरेज कुंजी" }, void 0, false, {
          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
          lineNumber: 651,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            type: "text",
            value: uploadKey,
            onChange: (e) => setUploadKey(e.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm",
            placeholder: "uploads/filename.jpg"
          },
          void 0,
          false,
          {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 654,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
        lineNumber: 650,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "टैग्स" }, void 0, false, {
          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
          lineNumber: 664,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-2 mb-2", children: Object.entries(uploadTags).map(
          ([key, value], index) => /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "text",
                placeholder: "टैग कुंजी",
                value: key,
                onChange: (e) => {
                  const updatedTags = { ...uploadTags };
                  delete updatedTags[key];
                  updatedTags[e.target.value] = value;
                  setUploadTags(updatedTags);
                },
                className: "flex-1 px-2 py-1 border border-gray-300 rounded-md text-sm"
              },
              void 0,
              false,
              {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 671,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "text",
                placeholder: "टैग मान",
                value,
                onChange: (e) => {
                  setUploadTags({
                    ...uploadTags,
                    [key]: e.target.value
                  });
                },
                className: "flex-1 px-2 py-1 border border-gray-300 rounded-md text-sm"
              },
              void 0,
              false,
              {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 683,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => removeUploadTag(key),
                className: "p-1 bg-red-50 text-red-600 rounded",
                children: /* @__PURE__ */ jsxDEV(Trash2, { size: 16 }, void 0, false, {
                  fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                  lineNumber: 699,
                  columnNumber: 23
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
                lineNumber: 695,
                columnNumber: 21
              },
              this
            )
          ] }, index, true, {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 670,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
          lineNumber: 668,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: addUploadTag,
            className: "text-primary text-sm hover:underline",
            children: "टैग जोड़ें"
          },
          void 0,
          false,
          {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 705,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
        lineNumber: 663,
        columnNumber: 13
      }, this),
      uploadProgress > 0 && /* @__PURE__ */ jsxDEV("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-full bg-gray-200 rounded-full h-2.5 mb-1", children: /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "bg-primary h-2.5 rounded-full",
            style: { width: `${uploadProgress}%` }
          },
          void 0,
          false,
          {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 716,
            columnNumber: 19
          },
          this
        ) }, void 0, false, {
          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
          lineNumber: 715,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-right", children: [
          uploadProgress,
          "%"
        ] }, void 0, true, {
          fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
          lineNumber: 721,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
        lineNumber: 714,
        columnNumber: 11
      }, this),
      uploadError && /* @__PURE__ */ jsxDEV("div", { className: "mb-4 bg-red-50 p-2 text-red-600 text-sm rounded-md", children: uploadError }, void 0, false, {
        fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
        lineNumber: 726,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setShowUploadModal(false),
            className: "px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm",
            children: "रद्द करें"
          },
          void 0,
          false,
          {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 732,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: handleUpload,
            className: "px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-md text-sm",
            children: "अपलोड करें"
          },
          void 0,
          false,
          {
            fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
            lineNumber: 738,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
        lineNumber: 731,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
      lineNumber: 637,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
      lineNumber: 636,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/project/src/pages/BlobstoreAdmin.tsx",
    lineNumber: 227,
    columnNumber: 5
  }, this);
};
_s(BlobstoreAdmin, "ZPpxgL3FZKvC14bf+8skxmpXN3Q=");
_c = BlobstoreAdmin;
export default BlobstoreAdmin;
var _c;
$RefreshReg$(_c, "BlobstoreAdmin");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/pages/BlobstoreAdmin.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/pages/BlobstoreAdmin.tsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBbU9NOzJCQW5PTjtBQUFvQkEsb0JBQWlCLE9BQVEsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEQsU0FBU0MsWUFBWTtBQUNyQixTQUFTQyxXQUFXQyxVQUFVQyxXQUFXQyxNQUFNQyxRQUFRQyxRQUFRQyxVQUFVQyxRQUFRQyxLQUFLQyxpQkFBeUI7QUFDL0csT0FBT0MsWUFBWTtBQUNuQixPQUFPQyxZQUFZO0FBQ25CLFNBQVNDLHdCQUE2QztBQUV0RCxNQUFNQyxpQkFBaUJBLE1BQU07QUFBQUMsS0FBQTtBQUMzQixRQUFNLENBQUNDLE9BQU9DLFFBQVEsSUFBSUMsU0FBZ0MsRUFBRTtBQUM1RCxRQUFNLENBQUNDLE9BQU9DLFFBQVEsSUFBSUYsU0FLaEIsSUFBSTtBQUNkLFFBQU0sQ0FBQ0csV0FBV0MsWUFBWSxJQUFJSixTQUFTLElBQUk7QUFDL0MsUUFBTSxDQUFDSyxZQUFZQyxhQUFhLElBQUlOLFNBQVMsRUFBRTtBQUMvQyxRQUFNLENBQUNPLGNBQWNDLGVBQWUsSUFBSVIsU0FBcUMsSUFBSTtBQUNqRixRQUFNLENBQUNTLFNBQVNDLFVBQVUsSUFBSVYsU0FBaUMsQ0FBQyxDQUFDO0FBQ2pFLFFBQU0sQ0FBQ1csaUJBQWlCQyxrQkFBa0IsSUFBSVosU0FBUyxLQUFLO0FBRTVELFFBQU1hLGVBQWVDLE9BQXlCLElBQUk7QUFDbEQsUUFBTSxDQUFDQyxZQUFZQyxhQUFhLElBQUloQixTQUFzQixJQUFJO0FBQzlELFFBQU0sQ0FBQ2lCLFdBQVdDLFlBQVksSUFBSWxCLFNBQVMsRUFBRTtBQUM3QyxRQUFNLENBQUNtQixZQUFZQyxhQUFhLElBQUlwQixTQUFpQyxDQUFDLENBQUM7QUFDdkUsUUFBTSxDQUFDcUIsZ0JBQWdCQyxpQkFBaUIsSUFBSXRCLFNBQVMsQ0FBQztBQUN0RCxRQUFNLENBQUN1QixhQUFhQyxjQUFjLElBQUl4QixTQUFTLEVBQUU7QUFFakRuQixZQUFVLE1BQU07QUFDZDRDLGNBQVU7QUFDVkMsY0FBVTtBQUFBLEVBQ1osR0FBRyxFQUFFO0FBRUwsUUFBTUQsWUFBWSxZQUFZO0FBQzVCckIsaUJBQWEsSUFBSTtBQUNqQixRQUFJO0FBRUYsWUFBTXVCLFVBQVVoQyxpQkFBaUJpQyxZQUFZLENBQUMsR0FBRyxFQUFFQyxPQUFPLElBQUksQ0FBQztBQUMvRDlCLGVBQVM0QixPQUFPO0FBQUEsSUFDbEIsU0FBU0csT0FBTztBQUNkQyxjQUFRRCxNQUFNLHdCQUF3QkEsS0FBSztBQUFBLElBQzdDLFVBQUM7QUFDQzFCLG1CQUFhLEtBQUs7QUFBQSxJQUNwQjtBQUFBLEVBQ0Y7QUFFQSxRQUFNc0IsWUFBWUEsTUFBTTtBQUN0QixRQUFJO0FBQ0YsWUFBTU0sWUFBWXJDLGlCQUFpQnNDLFNBQVM7QUFDNUMvQixlQUFTOEIsU0FBUztBQUFBLElBQ3BCLFNBQVNGLE9BQU87QUFDZEMsY0FBUUQsTUFBTSx3QkFBd0JBLEtBQUs7QUFBQSxJQUM3QztBQUFBLEVBQ0Y7QUFFQSxRQUFNSSxlQUFlQSxNQUFNO0FBQ3pCLFFBQUksQ0FBQzdCLFdBQVc4QixLQUFLLEdBQUc7QUFDdEJWLGdCQUFVO0FBQ1Y7QUFBQSxJQUNGO0FBRUEsUUFBSTtBQUVGLFlBQU1XLGdCQUFnQnRDLE1BQU11QztBQUFBQSxRQUFPLENBQUFDLFNBQ2pDQSxLQUFLQyxJQUFJQyxZQUFZLEVBQUVDLFNBQVNwQyxXQUFXbUMsWUFBWSxDQUFDO0FBQUEsTUFDMUQ7QUFDQXpDLGVBQVNxQyxhQUFhO0FBQUEsSUFDeEIsU0FBU04sT0FBTztBQUNkQyxjQUFRRCxNQUFNLDBCQUEwQkEsS0FBSztBQUFBLElBQy9DO0FBQUEsRUFDRjtBQUVBLFFBQU1ZLG1CQUFtQkEsQ0FBQ0osU0FBOEI7QUFDdEQ5QixvQkFBZ0I4QixJQUFJO0FBRXBCNUIsZUFBVyxFQUFFLEdBQUc0QixLQUFLSyxLQUFLLENBQUM7QUFBQSxFQUM3QjtBQUVBLFFBQU1DLG1CQUFtQixZQUFZO0FBQ25DLFFBQUksQ0FBQ3JDO0FBQWM7QUFFbkIsUUFBSTtBQUNGLFlBQU1zQyxjQUFjbEQsaUJBQWlCbUQ7QUFBQUEsUUFDbkN2QyxhQUFhZ0M7QUFBQUEsUUFDYjlCO0FBQUFBLE1BQ0Y7QUFFQSxVQUFJb0MsYUFBYTtBQUVmOUMsaUJBQVNELE1BQU1pRDtBQUFBQSxVQUFJLENBQUFULFNBQ2pCQSxLQUFLQyxRQUFRaEMsYUFBYWdDLE1BQU1NLGNBQWNQO0FBQUFBLFFBQ2hELENBQUM7QUFDRDlCLHdCQUFnQnFDLFdBQVc7QUFBQSxNQUM3QjtBQUFBLElBQ0YsU0FBU2YsT0FBTztBQUNkQyxjQUFRRCxNQUFNLDZCQUE2QkEsS0FBSztBQUFBLElBQ2xEO0FBQUEsRUFDRjtBQUVBLFFBQU1rQixtQkFBbUIsT0FBT1QsUUFBZ0I7QUFDOUMsUUFBSVUsT0FBT0MsUUFBUSwyQ0FBMkMsR0FBRztBQUMvRCxVQUFJO0FBQ0YsY0FBTUMsVUFBVXhELGlCQUFpQnlELFdBQVdiLEdBQUc7QUFFL0MsWUFBSVksU0FBUztBQUNYLGNBQUk1QyxjQUFjZ0MsUUFBUUEsS0FBSztBQUM3Qi9CLDRCQUFnQixJQUFJO0FBQUEsVUFDdEI7QUFDQVQsbUJBQVNELE1BQU11QyxPQUFPLENBQUFDLFNBQVFBLEtBQUtDLFFBQVFBLEdBQUcsQ0FBQztBQUMvQ2Isb0JBQVU7QUFBQSxRQUNaO0FBQUEsTUFDRixTQUFTSSxPQUFPO0FBQ2RDLGdCQUFRRCxNQUFNLHdCQUF3QkEsS0FBSztBQUFBLE1BQzdDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxRQUFNdUIsbUJBQW1CQSxNQUFNO0FBQzdCLFFBQUl4QyxhQUFheUMsU0FBUztBQUN4QnpDLG1CQUFheUMsUUFBUUMsTUFBTTtBQUFBLElBQzdCO0FBQUEsRUFDRjtBQUVBLFFBQU1DLG1CQUFtQkEsQ0FBQ0MsTUFBMkM7QUFDbkUsVUFBTUMsUUFBUUQsRUFBRUUsT0FBT0Q7QUFDdkIsUUFBSUEsU0FBU0EsTUFBTUUsU0FBUyxHQUFHO0FBQzdCLFlBQU1DLE9BQU9ILE1BQU0sQ0FBQztBQUNwQjFDLG9CQUFjNkMsSUFBSTtBQUdsQixVQUFJLENBQUM1QyxXQUFXO0FBQ2RDLHFCQUFhLFdBQVc0QyxLQUFLQyxJQUFJLENBQUMsSUFBSUYsS0FBS0csSUFBSSxFQUFFO0FBQUEsTUFDbkQ7QUFFQXBELHlCQUFtQixJQUFJO0FBQUEsSUFDekI7QUFBQSxFQUNGO0FBRUEsUUFBTXFELGVBQWUsWUFBWTtBQUMvQixRQUFJLENBQUNsRCxjQUFjLENBQUNFLFdBQVc7QUFDN0JPLHFCQUFlLDJCQUEyQjtBQUMxQztBQUFBLElBQ0Y7QUFFQUYsc0JBQWtCLENBQUM7QUFDbkJFLG1CQUFlLEVBQUU7QUFHakIsYUFBUzBDLElBQUksR0FBR0EsS0FBSyxLQUFLQSxLQUFLLElBQUk7QUFDakM1Qyx3QkFBa0I0QyxDQUFDO0FBQ25CLFlBQU0sSUFBSUMsUUFBUSxDQUFBQyxZQUFXQyxXQUFXRCxTQUFTLEdBQUcsQ0FBQztBQUFBLElBQ3ZEO0FBRUEsUUFBSTtBQUVGLFlBQU1FLFdBQVcsTUFBTTNFLGlCQUFpQjRFO0FBQUFBLFFBQ3RDdEQ7QUFBQUEsUUFDQUY7QUFBQUEsUUFDQUEsV0FBV3lEO0FBQUFBLFFBQ1hyRDtBQUFBQSxRQUNBO0FBQUEsVUFDRXNELFVBQVUxRCxXQUFXaUQ7QUFBQUEsVUFDckJVLFlBQVlaLEtBQUtDLElBQUk7QUFBQSxRQUN2QjtBQUFBLE1BQ0Y7QUFHQWhFLGVBQVMsQ0FBQ3VFLFVBQVUsR0FBR3hFLEtBQUssQ0FBQztBQUM3QjRCLGdCQUFVO0FBR1ZWLG9CQUFjLElBQUk7QUFDbEJFLG1CQUFhLEVBQUU7QUFDZkUsb0JBQWMsQ0FBQyxDQUFDO0FBQ2hCUix5QkFBbUIsS0FBSztBQUV4QixVQUFJQyxhQUFheUMsU0FBUztBQUN4QnpDLHFCQUFheUMsUUFBUXFCLFFBQVE7QUFBQSxNQUMvQjtBQUFBLElBQ0YsU0FBUzdDLE9BQU87QUFDZEMsY0FBUUQsTUFBTSx5QkFBeUJBLEtBQUs7QUFDNUNOLHFCQUFnQk0sTUFBZ0I4QyxPQUFPO0FBQUEsSUFDekMsVUFBQztBQUNDdEQsd0JBQWtCLENBQUM7QUFBQSxJQUNyQjtBQUFBLEVBQ0Y7QUFFQSxRQUFNdUQsU0FBU0EsTUFBTTtBQUNuQm5FLGVBQVc7QUFBQSxNQUNULEdBQUdEO0FBQUFBLE1BQ0gsQ0FBQyxPQUFPcUUsT0FBT0MsS0FBS3RFLE9BQU8sRUFBRW1ELFNBQVMsQ0FBQyxFQUFFLEdBQUc7QUFBQSxJQUM5QyxDQUFDO0FBQUEsRUFDSDtBQUVBLFFBQU1vQixZQUFZQSxDQUFDekMsUUFBZ0I7QUFDakMsVUFBTSxFQUFFLENBQUNBLEdBQUcsR0FBRzBDLEdBQUcsR0FBR0MsS0FBSyxJQUFJekU7QUFDOUJDLGVBQVd3RSxJQUFJO0FBQUEsRUFDakI7QUFFQSxRQUFNQyxlQUFlQSxNQUFNO0FBQ3pCL0Qsa0JBQWM7QUFBQSxNQUNaLEdBQUdEO0FBQUFBLE1BQ0gsQ0FBQyxPQUFPMkQsT0FBT0MsS0FBSzVELFVBQVUsRUFBRXlDLFNBQVMsQ0FBQyxFQUFFLEdBQUc7QUFBQSxJQUNqRCxDQUFDO0FBQUEsRUFDSDtBQUVBLFFBQU13QixrQkFBa0JBLENBQUM3QyxRQUFnQjtBQUN2QyxVQUFNLEVBQUUsQ0FBQ0EsR0FBRyxHQUFHMEMsR0FBRyxHQUFHQyxLQUFLLElBQUkvRDtBQUM5QkMsa0JBQWM4RCxJQUFJO0FBQUEsRUFDcEI7QUFFQSxRQUFNRyxjQUFjQSxDQUFDQyxVQUEwQjtBQUM3QyxRQUFJQSxVQUFVO0FBQUcsYUFBTztBQUV4QixVQUFNQyxJQUFJO0FBQ1YsVUFBTUMsUUFBUSxDQUFDLFNBQVMsTUFBTSxNQUFNLE1BQU0sSUFBSTtBQUM5QyxVQUFNdEIsSUFBSXVCLEtBQUtDLE1BQU1ELEtBQUtFLElBQUlMLEtBQUssSUFBSUcsS0FBS0UsSUFBSUosQ0FBQyxDQUFDO0FBRWxELFdBQU9LLFlBQVlOLFFBQVFHLEtBQUtJLElBQUlOLEdBQUdyQixDQUFDLEdBQUc0QixRQUFRLENBQUMsQ0FBQyxJQUFJLE1BQU1OLE1BQU10QixDQUFDO0FBQUEsRUFDeEU7QUFFQSxRQUFNNkIsYUFBYUEsQ0FBQ0MsY0FBOEI7QUFDaEQsV0FBTyxJQUFJbEMsS0FBS2tDLFNBQVMsRUFBRUMsZUFBZTtBQUFBLEVBQzVDO0FBRUEsU0FDRSx1QkFBQyxTQUFJLFdBQVUsMENBQ2I7QUFBQSwyQkFBQyxVQUFPLFNBQU8sUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWU7QUFBQSxJQUVmLHVCQUFDLFNBQUksV0FBVSxzQ0FDYjtBQUFBLDZCQUFDLFNBQUksV0FBVSxvQ0FDYjtBQUFBLCtCQUFDLFFBQUssSUFBRyxVQUFTLFdBQVUsc0NBQzFCLGlDQUFDLGFBQVUsTUFBTSxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQW9CLEtBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFQTtBQUFBLFFBQ0EsdUJBQUMsUUFBRyxXQUFVLHNCQUFxQixxQ0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF3RDtBQUFBLFdBSjFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFLQTtBQUFBLE1BR0EsdUJBQUMsU0FBSSxXQUFVLDBEQUNiLGlDQUFDLFNBQUksV0FBVSwwQ0FDYjtBQUFBLCtCQUFDLFNBQUksV0FBVSx5QkFDYjtBQUFBLGlDQUFDLFFBQUcsV0FBVSwwQkFBeUIsdURBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQThFO0FBQUEsVUFDOUUsdUJBQUMsT0FBRSxXQUFVLHNCQUFvQiw2UEFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFQTtBQUFBLFVBQ0EsdUJBQUMsU0FBSSxXQUFVLHdCQUNiO0FBQUEsbUNBQUMsU0FBSSxXQUFVLDZFQUNiO0FBQUEscUNBQUMsUUFBSyxNQUFNLElBQUksV0FBVSxVQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFnQztBQUFBO0FBQUEsaUJBRGxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBR0E7QUFBQSxZQUNBLHVCQUFDLFNBQUksV0FBVSwrRUFDYjtBQUFBLHFDQUFDLFlBQVMsTUFBTSxJQUFJLFdBQVUsVUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBb0M7QUFBQTtBQUFBLGlCQUR0QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdBO0FBQUEsWUFDQSx1QkFBQyxTQUFJLFdBQVUsaUZBQ2I7QUFBQSxxQ0FBQyxhQUFVLE1BQU0sSUFBSSxXQUFVLFVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXFDO0FBQUE7QUFBQSxpQkFEdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHQTtBQUFBLGVBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFhQTtBQUFBLGFBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFtQkE7QUFBQSxRQUNBLHVCQUFDLFNBQUksV0FBVSxZQUNiO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDQyxLQUFJO0FBQUEsWUFDSixLQUFJO0FBQUEsWUFDSixXQUFVO0FBQUE7QUFBQSxVQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUdpRCxLQUpuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTUE7QUFBQSxXQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNEJBLEtBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE4QkE7QUFBQSxNQUVBLHVCQUFDLFNBQUksV0FBVSw4Q0FFYjtBQUFBLCtCQUFDLFNBQUksV0FBVSxtREFDYjtBQUFBLGlDQUFDLFNBQUksV0FBVSwwQ0FDYjtBQUFBLG1DQUFDLFFBQUcsV0FBVSxxQkFBb0IsOEJBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWdEO0FBQUEsWUFDaEQsdUJBQUMsWUFBTyxTQUFTdkUsV0FBVyxXQUFVLGtEQUNwQyxpQ0FBQyxhQUFVLE1BQU0sTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBb0IsS0FEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFLQTtBQUFBLFVBRUN6QixRQUNDLHVCQUFDLFNBQUksV0FBVSx5Q0FDYjtBQUFBLG1DQUFDLFNBQUksV0FBVSw2QkFDYjtBQUFBLHFDQUFDLFFBQUcsV0FBVSw4QkFBNkIsdUJBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWtEO0FBQUEsY0FDbEQsdUJBQUMsT0FBRSxXQUFVLHNCQUFzQkEsZ0JBQU1pRyxhQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFtRDtBQUFBLGlCQUZyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdBO0FBQUEsWUFFQSx1QkFBQyxTQUFJLFdBQVUsOEJBQ2I7QUFBQSxxQ0FBQyxRQUFHLFdBQVUsOEJBQTZCLHlCQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFvRDtBQUFBLGNBQ3BELHVCQUFDLE9BQUUsV0FBVSxzQkFBc0JqRyxnQkFBTWtHLGdCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFzRDtBQUFBLGlCQUZ4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdBO0FBQUEsWUFFQSx1QkFBQyxTQUFJLFdBQVUsK0JBQ2I7QUFBQSxxQ0FBQyxRQUFHLFdBQVUsOEJBQTZCLDJCQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFzRDtBQUFBLGNBQ3RELHVCQUFDLE9BQUUsV0FBVSxzQkFBc0JkLHNCQUFZcEYsTUFBTW1HLFNBQVMsS0FBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBZ0U7QUFBQSxpQkFGbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHQTtBQUFBLFlBRUEsdUJBQUMsU0FBSSxXQUFVLCtCQUNiO0FBQUEscUNBQUMsUUFBRyxXQUFVLDhCQUE2QixzQkFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBaUQ7QUFBQSxjQUNqRCx1QkFBQyxPQUFFLFdBQVUsc0JBQXNCZixzQkFBWXBGLE1BQU1vRyxhQUFhLEtBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQW9FO0FBQUEsaUJBRnRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBR0E7QUFBQSxlQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW9CQSxJQUVBLHVCQUFDLFNBQUksV0FBVSx5Q0FDYixpQ0FBQyxTQUFJLFdBQVUsNEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBd0YsS0FEMUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFQTtBQUFBLFVBR0YsdUJBQUMsU0FBSSxXQUFVLFFBQ2I7QUFBQSxtQ0FBQyxRQUFHLFdBQVUsb0JBQW1CLDZCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUE4QztBQUFBLFlBQzdDcEcsU0FDQyx1QkFBQyxTQUFJLFdBQVUsOENBQ2I7QUFBQSxjQUFDO0FBQUE7QUFBQSxnQkFDQyxXQUFVO0FBQUEsZ0JBQ1YsT0FBTyxFQUFFcUcsT0FBTyxHQUFJckcsTUFBTW1HLGFBQWFuRyxNQUFNbUcsWUFBWW5HLE1BQU1vRyxpQkFBa0IsR0FBRyxJQUFJO0FBQUE7QUFBQSxjQUYxRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFHQyxLQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBS0E7QUFBQSxZQUVGLHVCQUFDLFNBQUksV0FBVSw4Q0FDYjtBQUFBLHFDQUFDLFVBQUs7QUFBQTtBQUFBLGdCQUFXcEcsUUFBUW9GLFlBQVlwRixNQUFNbUcsU0FBUyxJQUFJO0FBQUEsbUJBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTJFO0FBQUEsY0FDM0UsdUJBQUMsVUFBSztBQUFBO0FBQUEsZ0JBQU1uRyxRQUFRb0YsWUFBWXBGLE1BQU1tRyxZQUFZbkcsTUFBTW9HLGFBQWEsSUFBSTtBQUFBLG1CQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE0RjtBQUFBLGlCQUY5RjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWNBO0FBQUEsYUFsREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW1EQTtBQUFBLFFBR0EsdUJBQUMsU0FBSSxXQUFVLHFDQUNiO0FBQUEsaUNBQUMsUUFBRyxXQUFVLDBCQUF5QiwyQkFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBa0Q7QUFBQSxVQUVsRCx1QkFBQyxTQUFJLFdBQVUsMEdBQXlHLFNBQVNoRCxrQkFDL0g7QUFBQSxtQ0FBQyxVQUFPLFdBQVUsOEJBQTZCLE1BQU0sTUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBd0Q7QUFBQSxZQUN4RCx1QkFBQyxPQUFFLFdBQVUsc0JBQXFCLG9EQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFzRTtBQUFBLFlBQ3RFLHVCQUFDLE9BQUUsV0FBVSx5QkFBd0Isc0NBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQTJEO0FBQUEsZUFIN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFJQTtBQUFBLFVBRUE7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNDLE1BQUs7QUFBQSxjQUNMLEtBQUt4QztBQUFBQSxjQUNMLFdBQVU7QUFBQSxjQUNWLFVBQVUyQztBQUFBQTtBQUFBQSxZQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUk2QjtBQUFBLFVBRzdCO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDQyxTQUFTSDtBQUFBQSxjQUNULFdBQVU7QUFBQSxjQUVWO0FBQUEsdUNBQUMsVUFBTyxNQUFNLElBQUksV0FBVSxVQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFrQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSnBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU1BO0FBQUEsYUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXVCQTtBQUFBLFdBL0VGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFnRkE7QUFBQSxNQUVBLHVCQUFDLFNBQUksV0FBVSx5Q0FFYjtBQUFBLCtCQUFDLFNBQUksV0FBVSxtREFDYjtBQUFBLGlDQUFDLFNBQUksV0FBVSwwQ0FDYjtBQUFBLG1DQUFDLFFBQUcsV0FBVSxxQkFBb0IsK0JBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWlEO0FBQUEsWUFFakQsdUJBQUMsU0FBSSxXQUFVLHFCQUNiO0FBQUEscUNBQUMsU0FBSSxXQUFVLGlCQUNiO0FBQUE7QUFBQSxrQkFBQztBQUFBO0FBQUEsb0JBQ0MsTUFBSztBQUFBLG9CQUNMLGFBQVk7QUFBQSxvQkFDWixPQUFPaEQ7QUFBQUEsb0JBQ1AsVUFBVSxDQUFDb0QsTUFBTW5ELGNBQWNtRCxFQUFFRSxPQUFPZ0IsS0FBSztBQUFBLG9CQUM3QyxXQUFVO0FBQUEsb0JBQ1YsV0FBVyxDQUFDbEIsTUFBTUEsRUFBRWxCLFFBQVEsV0FBV0wsYUFBYTtBQUFBO0FBQUEsa0JBTnREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFNd0Q7QUFBQSxnQkFFeEQsdUJBQUMsVUFBTyxNQUFNLElBQUksV0FBVSx1RUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBK0Y7QUFBQSxtQkFUakc7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFVQTtBQUFBLGNBRUE7QUFBQSxnQkFBQztBQUFBO0FBQUEsa0JBQ0MsU0FBU1Q7QUFBQUEsa0JBQ1QsV0FBVTtBQUFBLGtCQUVWLGlDQUFDLGFBQVUsTUFBTSxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFvQjtBQUFBO0FBQUEsZ0JBSnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUtBO0FBQUEsaUJBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbUJBO0FBQUEsZUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF1QkE7QUFBQSxVQUVDdEIsWUFDQyx1QkFBQyxTQUFJLFdBQVUseUNBQ2IsaUNBQUMsU0FBSSxXQUFVLDhFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQTBGLEtBRDVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRUEsSUFDRUwsTUFBTThELFdBQVcsSUFDbkIsdUJBQUMsU0FBSSxXQUFVLG9CQUNiO0FBQUEsbUNBQUMsUUFBSyxNQUFNLElBQUksV0FBVSxnQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBc0Q7QUFBQSxZQUN0RCx1QkFBQyxPQUFFLFdBQVUsaUJBQWdCLG1DQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFnRDtBQUFBLGVBRmxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBR0EsSUFFQSx1QkFBQyxTQUFJLFdBQVUsbUJBQ2IsaUNBQUMsV0FBTSxXQUFVLHVDQUNmO0FBQUEsbUNBQUMsV0FDQyxpQ0FBQyxRQUNDO0FBQUEscUNBQUMsUUFBRyxXQUFVLDZGQUEyRixxQkFBekc7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFQTtBQUFBLGNBQ0EsdUJBQUMsUUFBRyxXQUFVLDZGQUEyRixzQkFBekc7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFQTtBQUFBLGNBQ0EsdUJBQUMsUUFBRyxXQUFVLDZGQUEyRixvQkFBekc7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFQTtBQUFBLGNBQ0EsdUJBQUMsUUFBRyxXQUFVLDZGQUEyRix5QkFBekc7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFQTtBQUFBLGNBQ0EsdUJBQUMsUUFBRyxXQUFVLDZGQUEyRix3QkFBekc7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFQTtBQUFBLGlCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZ0JBLEtBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBa0JBO0FBQUEsWUFDQSx1QkFBQyxXQUFNLFdBQVUscUNBQ2Q5RCxnQkFBTWlEO0FBQUFBLGNBQUksQ0FBQ1QsTUFBTWlFLFVBQ2hCO0FBQUEsZ0JBQUM7QUFBQTtBQUFBLGtCQUVDLFdBQVcsb0JBQW9CaEcsY0FBY2dDLFFBQVFELEtBQUtDLE1BQU0sZUFBZSxFQUFFO0FBQUEsa0JBQ2pGLFNBQVMsTUFBTUcsaUJBQWlCSixJQUFJO0FBQUEsa0JBRXBDO0FBQUEsMkNBQUMsUUFBRyxXQUFVLGlFQUNYQSxlQUFLQyxJQUFJcUIsU0FBUyxLQUNmLEdBQUd0QixLQUFLQyxJQUFJaUUsVUFBVSxHQUFHLEVBQUUsQ0FBQyxNQUFNbEUsS0FBS0MsSUFBSWlFLFVBQVVsRSxLQUFLQyxJQUFJcUIsU0FBUyxFQUFFLENBQUMsS0FDMUV0QixLQUFLQyxPQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSUE7QUFBQSxvQkFDQSx1QkFBQyxRQUFHLFdBQVUscURBQ1hELGVBQUttRSxZQUFZQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUtwRSxLQUFLbUUsZUFEMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFFQTtBQUFBLG9CQUNBLHVCQUFDLFFBQUcsV0FBVSxxREFDWHBCLHNCQUFZL0MsS0FBS3FFLElBQUksS0FEeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFFQTtBQUFBLG9CQUNBLHVCQUFDLFFBQUcsV0FBVSxxREFDWFoscUJBQVd6RCxLQUFLc0UsU0FBUyxLQUQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUVBO0FBQUEsb0JBQ0EsdUJBQUMsUUFBRyxXQUFVLHFEQUNaLGlDQUFDLFNBQUksV0FBVSxrQkFDYjtBQUFBO0FBQUEsd0JBQUM7QUFBQTtBQUFBLDBCQUNDLFdBQVU7QUFBQSwwQkFDVixTQUFTLENBQUNuRCxNQUFNO0FBQ2RBLDhCQUFFb0QsZ0JBQWdCO0FBQ2xCbkUsNkNBQWlCSixJQUFJO0FBQUEsMEJBQ3ZCO0FBQUEsMEJBRUEsaUNBQUMsT0FBSSxNQUFNLElBQUksV0FBVSxtQkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBd0M7QUFBQTtBQUFBLHdCQVAxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUUE7QUFBQSxzQkFDQTtBQUFBLHdCQUFDO0FBQUE7QUFBQSwwQkFDQyxXQUFVO0FBQUEsMEJBQ1YsU0FBUyxDQUFDbUIsTUFBTTtBQUNkQSw4QkFBRW9ELGdCQUFnQjtBQUVsQkMsa0NBQU0scURBQXFEO0FBQUEsMEJBQzdEO0FBQUEsMEJBRUEsaUNBQUMsWUFBUyxNQUFNLElBQUksV0FBVSxvQkFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBOEM7QUFBQTtBQUFBLHdCQVJoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBU0E7QUFBQSxzQkFDQTtBQUFBLHdCQUFDO0FBQUE7QUFBQSwwQkFDQyxXQUFVO0FBQUEsMEJBQ1YsU0FBUyxDQUFDckQsTUFBTTtBQUNkQSw4QkFBRW9ELGdCQUFnQjtBQUNsQjdELDZDQUFpQlYsS0FBS0MsR0FBRztBQUFBLDBCQUMzQjtBQUFBLDBCQUVBLGlDQUFDLFVBQU8sTUFBTSxJQUFJLFdBQVUsa0JBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQTBDO0FBQUE7QUFBQSx3QkFQNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVFBO0FBQUEseUJBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBNkJBLEtBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBK0JBO0FBQUE7QUFBQTtBQUFBLGdCQWpES2dFO0FBQUFBLGdCQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FtREE7QUFBQSxZQUNELEtBdERIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdURBO0FBQUEsZUEzRUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE0RUEsS0E3RUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE4RUE7QUFBQSxhQWxISjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBb0hBO0FBQUEsUUFHQSx1QkFBQyxTQUFJLFdBQVUscUNBQ2I7QUFBQSxpQ0FBQyxRQUFHLFdBQVUsMEJBQXlCLDJCQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFrRDtBQUFBLFVBRWpEaEcsZUFDQyx1QkFBQyxTQUNDO0FBQUEsbUNBQUMsU0FBSSxXQUFVLFFBQ2I7QUFBQSxxQ0FBQyxRQUFHLFdBQVUscUNBQW9DLHFCQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF1RDtBQUFBLGNBQ3ZELHVCQUFDLE9BQUUsV0FBVSx3Q0FBd0NBLHVCQUFhZ0MsT0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBc0U7QUFBQSxpQkFGeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHQTtBQUFBLFlBRUEsdUJBQUMsU0FBSSxXQUFVLCtCQUNiO0FBQUEscUNBQUMsU0FDQztBQUFBLHVDQUFDLFFBQUcsV0FBVSxxQ0FBb0Msc0JBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXdEO0FBQUEsZ0JBQ3hELHVCQUFDLE9BQUUsV0FBVSw4QkFBOEJoQyx1QkFBYWtHLGVBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQW9FO0FBQUEsbUJBRnRFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBR0E7QUFBQSxjQUVBLHVCQUFDLFNBQ0M7QUFBQSx1Q0FBQyxRQUFHLFdBQVUscUNBQW9DLG9CQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFzRDtBQUFBLGdCQUN0RCx1QkFBQyxPQUFFLFdBQVUsOEJBQThCcEIsc0JBQVk5RSxhQUFhb0csSUFBSSxLQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUEwRTtBQUFBLG1CQUY1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUdBO0FBQUEsY0FFQSx1QkFBQyxTQUNDO0FBQUEsdUNBQUMsUUFBRyxXQUFVLHFDQUFvQyx5QkFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBMkQ7QUFBQSxnQkFDM0QsdUJBQUMsT0FBRSxXQUFVLDhCQUE4QloscUJBQVd4RixhQUFhcUcsU0FBUyxLQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUE4RTtBQUFBLG1CQUZoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUdBO0FBQUEsY0FFQSx1QkFBQyxTQUNDO0FBQUEsdUNBQUMsUUFBRyxXQUFVLHFDQUFvQyw0QkFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBOEQ7QUFBQSxnQkFDOUQsdUJBQUMsT0FBRSxXQUFVLDhCQUNWckcsdUJBQWF3RyxlQUFlaEIsV0FBV3hGLGFBQWF3RyxZQUFZLElBQUksU0FEdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBS0E7QUFBQSxpQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFzQkE7QUFBQSxZQUVBLHVCQUFDLFNBQUksV0FBVSxRQUNiO0FBQUEscUNBQUMsUUFBRyxXQUFVLDBDQUF5QyxxQkFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBNEQ7QUFBQSxjQUU1RCx1QkFBQyxTQUFJLFdBQVUsYUFDWmpDLGlCQUFPa0MsUUFBUXZHLE9BQU8sRUFBRXNDO0FBQUFBLGdCQUFJLENBQUMsQ0FBQ1IsS0FBS29DLEtBQUssR0FBRzRCLFVBQzFDLHVCQUFDLFNBQWdCLFdBQVUsY0FDekI7QUFBQTtBQUFBLG9CQUFDO0FBQUE7QUFBQSxzQkFDQyxNQUFLO0FBQUEsc0JBQ0wsYUFBWTtBQUFBLHNCQUNaLE9BQU9oRTtBQUFBQSxzQkFDUCxVQUFVLENBQUNrQixNQUFNO0FBQ2YsOEJBQU13RCxjQUFjLEVBQUUsR0FBR3hHLFFBQVE7QUFDakMsK0JBQU93RyxZQUFZMUUsR0FBRztBQUN0QjBFLG9DQUFZeEQsRUFBRUUsT0FBT2dCLEtBQUssSUFBSUE7QUFDOUJqRSxtQ0FBV3VHLFdBQVc7QUFBQSxzQkFDeEI7QUFBQSxzQkFDQSxXQUFVO0FBQUE7QUFBQSxvQkFWWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVXdFO0FBQUEsa0JBRXhFO0FBQUEsb0JBQUM7QUFBQTtBQUFBLHNCQUNDLE1BQUs7QUFBQSxzQkFDTCxhQUFZO0FBQUEsc0JBQ1o7QUFBQSxzQkFDQSxVQUFVLENBQUN4RCxNQUFNO0FBQ2YvQyxtQ0FBVztBQUFBLDBCQUNULEdBQUdEO0FBQUFBLDBCQUNILENBQUM4QixHQUFHLEdBQUdrQixFQUFFRSxPQUFPZ0I7QUFBQUEsd0JBQ2xCLENBQUM7QUFBQSxzQkFDSDtBQUFBLHNCQUNBLFdBQVU7QUFBQTtBQUFBLG9CQVZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFVd0U7QUFBQSxrQkFFeEU7QUFBQSxvQkFBQztBQUFBO0FBQUEsc0JBQ0MsU0FBUyxNQUFNSyxVQUFVekMsR0FBRztBQUFBLHNCQUM1QixXQUFVO0FBQUEsc0JBRVYsaUNBQUMsVUFBTyxNQUFNLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBaUI7QUFBQTtBQUFBLG9CQUpuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBS0E7QUFBQSxxQkE5QlFnRSxPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBK0JBO0FBQUEsY0FDRCxLQWxDSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQW1DQTtBQUFBLGNBRUEsdUJBQUMsU0FBSSxXQUFVLDZCQUNiO0FBQUE7QUFBQSxrQkFBQztBQUFBO0FBQUEsb0JBQ0MsU0FBUzFCO0FBQUFBLG9CQUNULFdBQVU7QUFBQSxvQkFBc0M7QUFBQTtBQUFBLGtCQUZsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBS0E7QUFBQSxnQkFFQTtBQUFBLGtCQUFDO0FBQUE7QUFBQSxvQkFDQyxTQUFTakM7QUFBQUEsb0JBQ1QsV0FBVTtBQUFBLG9CQUF3RTtBQUFBO0FBQUEsa0JBRnBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFLQTtBQUFBLG1CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBY0E7QUFBQSxpQkF0REY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF1REE7QUFBQSxZQUVDckMsYUFBYTJHLGlCQUFpQnBDLE9BQU9DLEtBQUt4RSxhQUFhMkcsYUFBYSxFQUFFdEQsU0FBUyxLQUM5RSx1QkFBQyxTQUNDO0FBQUEscUNBQUMsUUFBRyxXQUFVLDBDQUF5QyxpQ0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBd0U7QUFBQSxjQUV4RSx1QkFBQyxTQUFJLFdBQVUsNkJBQ2IsaUNBQUMsU0FBSSxXQUFVLDJCQUNadUQsZUFBS0MsVUFBVTdHLGFBQWEyRyxlQUFlLE1BQU0sQ0FBQyxLQURyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVBLEtBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFJQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUUE7QUFBQSxlQWhHSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWtHQSxJQUVBLHVCQUFDLFNBQUksV0FBVSxvQkFDYjtBQUFBLG1DQUFDLFFBQUssTUFBTSxJQUFJLFdBQVUsZ0NBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXNEO0FBQUEsWUFDdEQsdUJBQUMsT0FBRSxXQUFVLGlCQUFnQixpREFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBOEQ7QUFBQSxlQUZoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUdBO0FBQUEsYUEzR0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTZHQTtBQUFBLFdBdE9GO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF1T0E7QUFBQSxNQUdBLHVCQUFDLFNBQUksV0FBVSwwQ0FDYjtBQUFBLCtCQUFDLFFBQUcsV0FBVSwwQkFBeUIscUNBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBNEQ7QUFBQSxRQUU1RCx1QkFBQyxTQUFJLFdBQVUseUNBQ2I7QUFBQSxpQ0FBQyxTQUNDO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDQyxLQUFJO0FBQUEsY0FDSixLQUFJO0FBQUEsY0FDSixXQUFVO0FBQUE7QUFBQSxZQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUdpRCxLQUpuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU1BO0FBQUEsVUFFQSx1QkFBQyxTQUNDO0FBQUEsbUNBQUMsUUFBRyxXQUFVLGtDQUFpQyxpREFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBZ0Y7QUFBQSxZQUNoRix1QkFBQyxPQUFFLFdBQVUsc0JBQW9CLHNJQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVBO0FBQUEsWUFFQSx1QkFBQyxTQUFJLFdBQVUsYUFDYjtBQUFBLHFDQUFDLFNBQUksV0FBVSw2QkFDYjtBQUFBLHVDQUFDLFFBQUcsV0FBVSxrQ0FBaUMsaUNBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQWdFO0FBQUEsZ0JBQ2hFLHVCQUFDLE9BQUUsV0FBVSx5QkFBdUIsd0pBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUtBO0FBQUEsY0FFQSx1QkFBQyxTQUFJLFdBQVUsOEJBQ2I7QUFBQSx1Q0FBQyxRQUFHLFdBQVUsbUNBQWtDLHdDQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUF3RTtBQUFBLGdCQUN4RSx1QkFBQyxPQUFFLFdBQVUseUJBQXVCLDJJQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFLQTtBQUFBLGNBRUEsdUJBQUMsU0FBSSxXQUFVLCtCQUNiO0FBQUEsdUNBQUMsUUFBRyxXQUFVLG9DQUFtQyw4QkFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBK0Q7QUFBQSxnQkFDL0QsdUJBQUMsT0FBRSxXQUFVLHlCQUF1Qiw4SEFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBS0E7QUFBQSxpQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFxQkE7QUFBQSxlQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTRCQTtBQUFBLGFBckNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFzQ0E7QUFBQSxXQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMENBO0FBQUEsU0EvWUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWdaQTtBQUFBLElBRUEsdUJBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU87QUFBQSxJQUdOdkcsbUJBQ0MsdUJBQUMsU0FBSSxXQUFVLGtGQUNiLGlDQUFDLFNBQUksV0FBVSwyQ0FDYjtBQUFBLDZCQUFDLFFBQUcsV0FBVSwwQkFBeUIsZ0NBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBdUQ7QUFBQSxNQUV2RCx1QkFBQyxTQUFJLFdBQVUsUUFDYjtBQUFBLCtCQUFDLFdBQU0sV0FBVSxnREFBOEMscUJBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFQTtBQUFBLFFBQ0EsdUJBQUMsU0FBSSxXQUFVLCtDQUNiO0FBQUEsaUNBQUMsUUFBSyxNQUFNLElBQUksV0FBVSx3QkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBOEM7QUFBQSxVQUM5Qyx1QkFBQyxVQUFLLFdBQVUsb0JBQW9CSSxzQkFBWWlELFFBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXFEO0FBQUEsYUFGdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUdBO0FBQUEsV0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUUE7QUFBQSxNQUVBLHVCQUFDLFNBQUksV0FBVSxRQUNiO0FBQUEsK0JBQUMsV0FBTSxXQUFVLGdEQUE4Qyw2QkFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVBO0FBQUEsUUFDQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsTUFBSztBQUFBLFlBQ0wsT0FBTy9DO0FBQUFBLFlBQ1AsVUFBVSxDQUFDd0MsTUFBTXZDLGFBQWF1QyxFQUFFRSxPQUFPZ0IsS0FBSztBQUFBLFlBQzVDLFdBQVU7QUFBQSxZQUNWLGFBQVk7QUFBQTtBQUFBLFVBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBS29DO0FBQUEsV0FUdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVdBO0FBQUEsTUFFQSx1QkFBQyxTQUFJLFdBQVUsUUFDYjtBQUFBLCtCQUFDLFdBQU0sV0FBVSxnREFBOEMscUJBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFQTtBQUFBLFFBRUEsdUJBQUMsU0FBSSxXQUFVLGtCQUNaRyxpQkFBT2tDLFFBQVE3RixVQUFVLEVBQUU0QjtBQUFBQSxVQUFJLENBQUMsQ0FBQ1IsS0FBS29DLEtBQUssR0FBRzRCLFVBQzdDLHVCQUFDLFNBQWdCLFdBQVUsY0FDekI7QUFBQTtBQUFBLGNBQUM7QUFBQTtBQUFBLGdCQUNDLE1BQUs7QUFBQSxnQkFDTCxhQUFZO0FBQUEsZ0JBQ1osT0FBT2hFO0FBQUFBLGdCQUNQLFVBQVUsQ0FBQ2tCLE1BQU07QUFDZix3QkFBTXdELGNBQWMsRUFBRSxHQUFHOUYsV0FBVztBQUNwQyx5QkFBTzhGLFlBQVkxRSxHQUFHO0FBQ3RCMEUsOEJBQVl4RCxFQUFFRSxPQUFPZ0IsS0FBSyxJQUFJQTtBQUM5QnZELGdDQUFjNkYsV0FBVztBQUFBLGdCQUMzQjtBQUFBLGdCQUNBLFdBQVU7QUFBQTtBQUFBLGNBVlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVXdFO0FBQUEsWUFFeEU7QUFBQSxjQUFDO0FBQUE7QUFBQSxnQkFDQyxNQUFLO0FBQUEsZ0JBQ0wsYUFBWTtBQUFBLGdCQUNaO0FBQUEsZ0JBQ0EsVUFBVSxDQUFDeEQsTUFBTTtBQUNmckMsZ0NBQWM7QUFBQSxvQkFDWixHQUFHRDtBQUFBQSxvQkFDSCxDQUFDb0IsR0FBRyxHQUFHa0IsRUFBRUUsT0FBT2dCO0FBQUFBLGtCQUNsQixDQUFDO0FBQUEsZ0JBQ0g7QUFBQSxnQkFDQSxXQUFVO0FBQUE7QUFBQSxjQVZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVV3RTtBQUFBLFlBRXhFO0FBQUEsY0FBQztBQUFBO0FBQUEsZ0JBQ0MsU0FBUyxNQUFNUyxnQkFBZ0I3QyxHQUFHO0FBQUEsZ0JBQ2xDLFdBQVU7QUFBQSxnQkFFVixpQ0FBQyxVQUFPLE1BQU0sTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFpQjtBQUFBO0FBQUEsY0FKbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBS0E7QUFBQSxlQTlCUWdFLE9BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkErQkE7QUFBQSxRQUNELEtBbENIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFtQ0E7QUFBQSxRQUVBO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDQyxTQUFTcEI7QUFBQUEsWUFDVCxXQUFVO0FBQUEsWUFBc0M7QUFBQTtBQUFBLFVBRmxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUtBO0FBQUEsV0EvQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWdEQTtBQUFBLE1BRUM5RCxpQkFBaUIsS0FDaEIsdUJBQUMsU0FBSSxXQUFVLFFBQ2I7QUFBQSwrQkFBQyxTQUFJLFdBQVUsOENBQ2I7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFdBQVU7QUFBQSxZQUNWLE9BQU8sRUFBRWlGLE9BQU8sR0FBR2pGLGNBQWMsSUFBSTtBQUFBO0FBQUEsVUFGdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBR0MsS0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBS0E7QUFBQSxRQUNBLHVCQUFDLFNBQUksV0FBVSxzQkFBc0JBO0FBQUFBO0FBQUFBLFVBQWU7QUFBQSxhQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXFEO0FBQUEsV0FQdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVFBO0FBQUEsTUFHREUsZUFDQyx1QkFBQyxTQUFJLFdBQVUsc0RBQ1pBLHlCQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFQTtBQUFBLE1BR0YsdUJBQUMsU0FBSSxXQUFVLDBCQUNiO0FBQUE7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFNBQVMsTUFBTVgsbUJBQW1CLEtBQUs7QUFBQSxZQUN2QyxXQUFVO0FBQUEsWUFBNEQ7QUFBQTtBQUFBLFVBRnhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUtBO0FBQUEsUUFDQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsU0FBU3FEO0FBQUFBLFlBQ1QsV0FBVTtBQUFBLFlBQXdFO0FBQUE7QUFBQSxVQUZwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFLQTtBQUFBLFdBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWFBO0FBQUEsU0EzR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQTRHQSxLQTdHRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBOEdBO0FBQUEsT0F2Z0JKO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F5Z0JBO0FBRUo7QUFBRXBFLEdBdHVCSUQsZ0JBQWM7QUFBQXlILEtBQWR6SDtBQXd1Qk4sZUFBZUE7QUFBZSxJQUFBeUg7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbInVzZUVmZmVjdCIsIkxpbmsiLCJBcnJvd0xlZnQiLCJEYXRhYmFzZSIsIkhhcmREcml2ZSIsIkZpbGUiLCJVcGxvYWQiLCJTZWFyY2giLCJEb3dubG9hZCIsIlRyYXNoMiIsIlRhZyIsIlJlZnJlc2hDdyIsIkhlYWRlciIsIkZvb3RlciIsImJsb2JJbmRleFNlcnZpY2UiLCJCbG9ic3RvcmVBZG1pbiIsIl9zIiwiYmxvYnMiLCJzZXRCbG9icyIsInVzZVN0YXRlIiwic3RhdHMiLCJzZXRTdGF0cyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwic2VsZWN0ZWRCbG9iIiwic2V0U2VsZWN0ZWRCbG9iIiwibmV3VGFncyIsInNldE5ld1RhZ3MiLCJzaG93VXBsb2FkTW9kYWwiLCJzZXRTaG93VXBsb2FkTW9kYWwiLCJmaWxlSW5wdXRSZWYiLCJ1c2VSZWYiLCJ1cGxvYWRGaWxlIiwic2V0VXBsb2FkRmlsZSIsInVwbG9hZEtleSIsInNldFVwbG9hZEtleSIsInVwbG9hZFRhZ3MiLCJzZXRVcGxvYWRUYWdzIiwidXBsb2FkUHJvZ3Jlc3MiLCJzZXRVcGxvYWRQcm9ncmVzcyIsInVwbG9hZEVycm9yIiwic2V0VXBsb2FkRXJyb3IiLCJsb2FkQmxvYnMiLCJsb2FkU3RhdHMiLCJyZXN1bHRzIiwic2VhcmNoQmxvYnMiLCJsaW1pdCIsImVycm9yIiwiY29uc29sZSIsInN0YXRzRGF0YSIsImdldFN0YXRzIiwiaGFuZGxlU2VhcmNoIiwidHJpbSIsImZpbHRlcmVkQmxvYnMiLCJmaWx0ZXIiLCJibG9iIiwia2V5IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImhhbmRsZVNlbGVjdEJsb2IiLCJ0YWdzIiwiaGFuZGxlVXBkYXRlVGFncyIsInVwZGF0ZWRCbG9iIiwidXBkYXRlSW5kZXhlZE1ldGFkYXRhIiwibWFwIiwiaGFuZGxlRGVsZXRlQmxvYiIsIndpbmRvdyIsImNvbmZpcm0iLCJzdWNjZXNzIiwiZGVsZXRlQmxvYiIsImhhbmRsZVVwbG9hZEZpbGUiLCJjdXJyZW50IiwiY2xpY2siLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZSIsImZpbGVzIiwidGFyZ2V0IiwibGVuZ3RoIiwiZmlsZSIsIkRhdGUiLCJub3ciLCJuYW1lIiwiaGFuZGxlVXBsb2FkIiwiaSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIm1ldGFkYXRhIiwic3RvcmVCbG9iIiwidHlwZSIsImZpbGVOYW1lIiwidXBsb2FkVGltZSIsInZhbHVlIiwibWVzc2FnZSIsImFkZFRhZyIsIk9iamVjdCIsImtleXMiLCJyZW1vdmVUYWciLCJfIiwicmVzdCIsImFkZFVwbG9hZFRhZyIsInJlbW92ZVVwbG9hZFRhZyIsImZvcm1hdEJ5dGVzIiwiYnl0ZXMiLCJrIiwic2l6ZXMiLCJNYXRoIiwiZmxvb3IiLCJsb2ciLCJwYXJzZUZsb2F0IiwicG93IiwidG9GaXhlZCIsImZvcm1hdERhdGUiLCJ0aW1lc3RhbXAiLCJ0b0xvY2FsZVN0cmluZyIsImJsb2JDb3VudCIsImluZGV4ZWRDb3VudCIsInRvdGFsU2l6ZSIsImF2YWlsYWJsZVNpemUiLCJ3aWR0aCIsImluZGV4Iiwic3Vic3RyaW5nIiwiY29udGVudFR5cGUiLCJzcGxpdCIsInNpemUiLCJjcmVhdGVkQXQiLCJzdG9wUHJvcGFnYXRpb24iLCJhbGVydCIsImxhc3RBY2Nlc3NlZCIsImVudHJpZXMiLCJ1cGRhdGVkVGFncyIsImluZGV4ZWRGaWVsZHMiLCJKU09OIiwic3RyaW5naWZ5IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlcyI6WyJCbG9ic3RvcmVBZG1pbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEFycm93TGVmdCwgRGF0YWJhc2UsIEhhcmREcml2ZSwgRmlsZSwgVXBsb2FkLCBTZWFyY2gsIERvd25sb2FkLCBUcmFzaDIsIFRhZywgUmVmcmVzaEN3LCBGaWx0ZXIgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCB7IGJsb2JJbmRleFNlcnZpY2UsIEluZGV4ZWRCbG9iTWV0YWRhdGEgfSBmcm9tICcuLi9zZXJ2aWNlcy9ibG9ic3RvcmUvQmxvYkluZGV4U2VydmljZSc7XG5cbmNvbnN0IEJsb2JzdG9yZUFkbWluID0gKCkgPT4ge1xuICBjb25zdCBbYmxvYnMsIHNldEJsb2JzXSA9IHVzZVN0YXRlPEluZGV4ZWRCbG9iTWV0YWRhdGFbXT4oW10pO1xuICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlPHtcbiAgICBibG9iQ291bnQ6IG51bWJlcjtcbiAgICB0b3RhbFNpemU6IG51bWJlcjtcbiAgICBhdmFpbGFibGVTaXplOiBudW1iZXI7XG4gICAgaW5kZXhlZENvdW50OiBudW1iZXI7XG4gIH0gfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzZWxlY3RlZEJsb2IsIHNldFNlbGVjdGVkQmxvYl0gPSB1c2VTdGF0ZTxJbmRleGVkQmxvYk1ldGFkYXRhIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtuZXdUYWdzLCBzZXROZXdUYWdzXSA9IHVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KHt9KTtcbiAgY29uc3QgW3Nob3dVcGxvYWRNb2RhbCwgc2V0U2hvd1VwbG9hZE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIGNvbnN0IGZpbGVJbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgW3VwbG9hZEZpbGUsIHNldFVwbG9hZEZpbGVdID0gdXNlU3RhdGU8RmlsZSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdXBsb2FkS2V5LCBzZXRVcGxvYWRLZXldID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdXBsb2FkVGFncywgc2V0VXBsb2FkVGFnc10gPSB1c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+Pih7fSk7XG4gIGNvbnN0IFt1cGxvYWRQcm9ncmVzcywgc2V0VXBsb2FkUHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt1cGxvYWRFcnJvciwgc2V0VXBsb2FkRXJyb3JdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZEJsb2JzKCk7XG4gICAgbG9hZFN0YXRzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBsb2FkQmxvYnMgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICAvLyBJbiBhIHJlYWwgYXBwLCB3ZSB3b3VsZCBmaWx0ZXIgYnkgc2VhcmNoVGVybSBoZXJlXG4gICAgICBjb25zdCByZXN1bHRzID0gYmxvYkluZGV4U2VydmljZS5zZWFyY2hCbG9icyh7fSwgeyBsaW1pdDogMTAwIH0pO1xuICAgICAgc2V0QmxvYnMocmVzdWx0cyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgYmxvYnM6JywgZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2FkU3RhdHMgPSAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0YXRzRGF0YSA9IGJsb2JJbmRleFNlcnZpY2UuZ2V0U3RhdHMoKTtcbiAgICAgIHNldFN0YXRzKHN0YXRzRGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgc3RhdHM6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XG4gICAgaWYgKCFzZWFyY2hUZXJtLnRyaW0oKSkge1xuICAgICAgbG9hZEJsb2JzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFNpbXBsZSBzZWFyY2ggYnkga2V5IGNvbnRhaW5pbmcgdGhlIHNlYXJjaCB0ZXJtXG4gICAgICBjb25zdCBmaWx0ZXJlZEJsb2JzID0gYmxvYnMuZmlsdGVyKGJsb2IgPT4gXG4gICAgICAgIGJsb2Iua2V5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxuICAgICAgKTtcbiAgICAgIHNldEJsb2JzKGZpbHRlcmVkQmxvYnMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZWFyY2hpbmcgYmxvYnM6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTZWxlY3RCbG9iID0gKGJsb2I6IEluZGV4ZWRCbG9iTWV0YWRhdGEpID0+IHtcbiAgICBzZXRTZWxlY3RlZEJsb2IoYmxvYik7XG4gICAgLy8gSW5pdGlhbGl6ZSBuZXcgdGFncyB3aXRoIGV4aXN0aW5nIHRhZ3NcbiAgICBzZXROZXdUYWdzKHsgLi4uYmxvYi50YWdzIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZVRhZ3MgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZEJsb2IpIHJldHVybjtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cGRhdGVkQmxvYiA9IGJsb2JJbmRleFNlcnZpY2UudXBkYXRlSW5kZXhlZE1ldGFkYXRhKFxuICAgICAgICBzZWxlY3RlZEJsb2Iua2V5LFxuICAgICAgICBuZXdUYWdzXG4gICAgICApO1xuXG4gICAgICBpZiAodXBkYXRlZEJsb2IpIHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBibG9iIGluIHRoZSBsaXN0XG4gICAgICAgIHNldEJsb2JzKGJsb2JzLm1hcChibG9iID0+IFxuICAgICAgICAgIGJsb2Iua2V5ID09PSBzZWxlY3RlZEJsb2Iua2V5ID8gdXBkYXRlZEJsb2IgOiBibG9iXG4gICAgICAgICkpO1xuICAgICAgICBzZXRTZWxlY3RlZEJsb2IodXBkYXRlZEJsb2IpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBibG9iIHRhZ3M6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVCbG9iID0gYXN5bmMgKGtleTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5jb25maXJtKCfgpJXgpY3gpK/gpL4g4KSG4KSqIOCkteCkvuCkleCkiCDgpIfgpLgg4KSs4KWN4KSy4KWJ4KSsIOCkleCliyDgpLngpJ/gpL7gpKjgpL4g4KSa4KS+4KS54KSk4KWHIOCkueCliOCkgj8nKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IGJsb2JJbmRleFNlcnZpY2UuZGVsZXRlQmxvYihrZXkpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRCbG9iPy5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRCbG9iKG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZXRCbG9icyhibG9icy5maWx0ZXIoYmxvYiA9PiBibG9iLmtleSAhPT0ga2V5KSk7XG4gICAgICAgICAgbG9hZFN0YXRzKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGJsb2I6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVVcGxvYWRGaWxlID0gKCkgPT4ge1xuICAgIGlmIChmaWxlSW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgZmlsZUlucHV0UmVmLmN1cnJlbnQuY2xpY2soKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGZpbGVzID0gZS50YXJnZXQuZmlsZXM7XG4gICAgaWYgKGZpbGVzICYmIGZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1swXTtcbiAgICAgIHNldFVwbG9hZEZpbGUoZmlsZSk7XG4gICAgICBcbiAgICAgIC8vIEdlbmVyYXRlIGEgZGVmYXVsdCBrZXkgYmFzZWQgb24gZmlsZSBuYW1lXG4gICAgICBpZiAoIXVwbG9hZEtleSkge1xuICAgICAgICBzZXRVcGxvYWRLZXkoYHVwbG9hZHMvJHtEYXRlLm5vdygpfS8ke2ZpbGUubmFtZX1gKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgc2V0U2hvd1VwbG9hZE1vZGFsKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVVcGxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCF1cGxvYWRGaWxlIHx8ICF1cGxvYWRLZXkpIHtcbiAgICAgIHNldFVwbG9hZEVycm9yKCfgpKvgpLzgpL7gpIfgpLIg4KSU4KSwIOCkleClgeCkguCknOClgCDgpIbgpLXgpLbgpY3gpK/gpJUg4KS54KWI4KSCJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0VXBsb2FkUHJvZ3Jlc3MoMCk7XG4gICAgc2V0VXBsb2FkRXJyb3IoJycpO1xuXG4gICAgLy8gU2ltdWxhdGVkIHVwbG9hZCB3aXRoIHByb2dyZXNzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMTAwOyBpICs9IDEwKSB7XG4gICAgICBzZXRVcGxvYWRQcm9ncmVzcyhpKTtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDApKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgLy8gU3RvcmUgdGhlIGJsb2JcbiAgICAgIGNvbnN0IG1ldGFkYXRhID0gYXdhaXQgYmxvYkluZGV4U2VydmljZS5zdG9yZUJsb2IoXG4gICAgICAgIHVwbG9hZEtleSxcbiAgICAgICAgdXBsb2FkRmlsZSxcbiAgICAgICAgdXBsb2FkRmlsZS50eXBlLFxuICAgICAgICB1cGxvYWRUYWdzLFxuICAgICAgICB7IFxuICAgICAgICAgIGZpbGVOYW1lOiB1cGxvYWRGaWxlLm5hbWUsXG4gICAgICAgICAgdXBsb2FkVGltZTogRGF0ZS5ub3coKVxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICAvLyBBZGQgdG8gdGhlIGxpc3RcbiAgICAgIHNldEJsb2JzKFttZXRhZGF0YSwgLi4uYmxvYnNdKTtcbiAgICAgIGxvYWRTdGF0cygpO1xuICAgICAgXG4gICAgICAvLyBSZXNldCB0aGUgdXBsb2FkIGZvcm1cbiAgICAgIHNldFVwbG9hZEZpbGUobnVsbCk7XG4gICAgICBzZXRVcGxvYWRLZXkoJycpO1xuICAgICAgc2V0VXBsb2FkVGFncyh7fSk7XG4gICAgICBzZXRTaG93VXBsb2FkTW9kYWwoZmFsc2UpO1xuICAgICAgXG4gICAgICBpZiAoZmlsZUlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgZmlsZUlucHV0UmVmLmN1cnJlbnQudmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBsb2FkaW5nIGZpbGU6JywgZXJyb3IpO1xuICAgICAgc2V0VXBsb2FkRXJyb3IoKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0VXBsb2FkUHJvZ3Jlc3MoMCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZFRhZyA9ICgpID0+IHtcbiAgICBzZXROZXdUYWdzKHtcbiAgICAgIC4uLm5ld1RhZ3MsXG4gICAgICBbYHRhZ18ke09iamVjdC5rZXlzKG5ld1RhZ3MpLmxlbmd0aCArIDF9YF06ICcnXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVGFnID0gKGtleTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBba2V5XTogXywgLi4ucmVzdCB9ID0gbmV3VGFncztcbiAgICBzZXROZXdUYWdzKHJlc3QpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFVwbG9hZFRhZyA9ICgpID0+IHtcbiAgICBzZXRVcGxvYWRUYWdzKHtcbiAgICAgIC4uLnVwbG9hZFRhZ3MsXG4gICAgICBbYHRhZ18ke09iamVjdC5rZXlzKHVwbG9hZFRhZ3MpLmxlbmd0aCArIDF9YF06ICcnXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVXBsb2FkVGFnID0gKGtleTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBba2V5XTogXywgLi4ucmVzdCB9ID0gdXBsb2FkVGFncztcbiAgICBzZXRVcGxvYWRUYWdzKHJlc3QpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1hdEJ5dGVzID0gKGJ5dGVzOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAgIGlmIChieXRlcyA9PT0gMCkgcmV0dXJuICcwIEJ5dGVzJztcbiAgICBcbiAgICBjb25zdCBrID0gMTAyNDtcbiAgICBjb25zdCBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInXTtcbiAgICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7XG4gICAgXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoKGJ5dGVzIC8gTWF0aC5wb3coaywgaSkpLnRvRml4ZWQoMikpICsgJyAnICsgc2l6ZXNbaV07XG4gIH07XG5cbiAgY29uc3QgZm9ybWF0RGF0ZSA9ICh0aW1lc3RhbXA6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYXktMTAwIGZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxIZWFkZXIgbWluaW1hbCAvPlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktNiBmbGV4LTFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTMgbWItNlwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2FkbWluXCIgY2xhc3NOYW1lPVwicC0yIGhvdmVyOmJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgPEFycm93TGVmdCBzaXplPXsyMH0gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPuCkluCli+CknCBCbG9ic3RvcmUg4KSq4KWN4KSw4KSs4KSC4KSn4KSoPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICB7LyogQmFubmVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIHNoYWRvdy1tZCBtYi02IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzIgbWItNCBtZDptYi0wXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi0yXCI+4KSW4KWL4KScIOCkleCkviDgpKzgpKHgpLzgpYAg4KSs4KS+4KSH4KSo4KSw4KWAIOCkq+CkvOCkvuCkh+CksiDgpLjgpY3gpJ/gpYvgpLDgpYfgpJwg4KS44KS/4KS44KWN4KSf4KSuPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi0zXCI+XG4gICAgICAgICAgICAgICAg4KS54KSu4KS+4KSw4KS+IEJsb2JzdG9yZSDgpLjgpL/gpLjgpY3gpJ/gpK4g4KSs4KSh4KS84KWAIOCkrOCkvuCkh+CkqOCksOClgCDgpKvgpLzgpL7gpIfgpLLgpYvgpIIg4KSc4KWI4KS44KWHIOCkm+CkteCkv+Ckr+Cli+Ckgiwg4KSm4KS44KWN4KSk4KS+4KS14KWH4KSc4KS84KWL4KSCLCDgpLXgpYDgpKHgpL/gpK/gpYssIOCklOCksCDgpIXgpKjgpY3gpK8g4KSu4KWA4KSh4KS/4KSv4KS+IOCkleCliyDgpLjgpY3gpJ/gpYvgpLAg4KSU4KSwIOCkquCljeCksOCkrOCkguCkp+Ckv+CkpCDgpJXgpLDgpKjgpYcg4KSV4KWHIOCksuCkv+CkjyDgpKHgpL/gpJzgpLzgpL7gpIfgpKgg4KSV4KS/4KSv4KS+IOCkl+Ckr+CkviDgpLngpYjgpaQgQmlndGFibGUg4KSV4KWHIOCkuOCkvuCkpSDgpI/gpJXgpYDgpJXgpYPgpKQsIOCkr+CkuSDgpIngpJrgpY3gpJot4KSu4KS+4KSk4KWN4KSw4KS+IOCkteCkvuCksuClgCDgpKzgpL7gpIfgpKjgpLDgpYAg4KS44KS+4KSu4KSX4KWN4KSw4KWAIOCkleCkviDgpJXgpYHgpLbgpLLgpKTgpL7gpKrgpYLgpLDgpY3gpLXgpJUg4KSq4KWN4KSw4KSs4KSC4KSn4KSoIOCkleCksOCkpOCkviDgpLngpYjgpaRcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwIHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgdGV4dC1zbSB0ZXh0LWJsdWUtODAwIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8RmlsZSBzaXplPXsxNH0gY2xhc3NOYW1lPVwibXItMVwiIC8+XG4gICAgICAgICAgICAgICAgICDgpKzgpL7gpIfgpKjgpLDgpYAg4KSr4KS+4KSH4KSyIOCkuOCljeCkn+Cli+CksOClh+CknFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAgcHgtMyBweS0xIHJvdW5kZWQtZnVsbCB0ZXh0LXNtIHRleHQtZ3JlZW4tODAwIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8RGF0YWJhc2Ugc2l6ZT17MTR9IGNsYXNzTmFtZT1cIm1yLTFcIiAvPlxuICAgICAgICAgICAgICAgICAg4KSu4KWH4KSf4KS+4KSh4KWH4KSf4KS+IOCkh+CkguCkoeClh+CkleCljeCkuOCkv+CkguCkl1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcHVycGxlLTUwIHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgdGV4dC1zbSB0ZXh0LXB1cnBsZS04MDAgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxIYXJkRHJpdmUgc2l6ZT17MTR9IGNsYXNzTmFtZT1cIm1yLTFcIiAvPlxuICAgICAgICAgICAgICAgICAg4KSq4KWH4KSf4KS+4KSs4KS+4KSH4KSfIOCkuOCljeCkleClh+CkslxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTEvMlwiPlxuICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQyNzQ0MTczLTA1MzM2ZmNjN2FkND9peGlkPU0zdzNNalV6TkRoOE1Id3hmSE5sWVhKamFId3lmSHhpYVc1aGNua2xNakJrWVhSaEpUSXdjM1J2Y21GblpTVXlNSE41YzNSbGJTVXlNR1JoZEdGaVlYTmxKVEl3WW14dlluTWxNakJtYVd4bGMzeGxibnd3Zkh4OGZERTNORE15TlRJek56QjhNQSZpeGxpYj1yYi00LjAuM1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiQmxvYnN0b3JlIFN5c3RlbVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtNjQgb2JqZWN0LWNvdmVyIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC02IG1iLTZcIj5cbiAgICAgICAgICB7LyogU3RhdHMgb3ZlcnZpZXcgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0yIGJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj7gpLjgpY3gpJ/gpYvgpLDgpYfgpJwg4KSF4KS14KSy4KWL4KSV4KSoPC9oMj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2FkU3RhdHN9IGNsYXNzTmFtZT1cInAtMiBiZy1ncmF5LTEwMCBob3ZlcjpiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8UmVmcmVzaEN3IHNpemU9ezE2fSAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7c3RhdHMgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS01MCBwLTQgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBtYi0xXCI+4KSs4KWN4KSy4KWJ4KSs4KWN4KS4PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPntzdGF0cy5ibG9iQ291bnR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAgcC00IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgbWItMVwiPuCkh+CkguCkoeClh+CkleCljeCkuOCljeCkoTwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57c3RhdHMuaW5kZXhlZENvdW50fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXllbGxvdy01MCBwLTQgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBtYi0xXCI+4KSV4KWB4KSyIOCkuOCljeCkn+Cli+CksOClh+CknDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57Zm9ybWF0Qnl0ZXMoc3RhdHMudG90YWxTaXplKX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wdXJwbGUtNTAgcC00IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgbWItMVwiPuCkieCkquCksuCkrOCljeCkpzwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57Zm9ybWF0Qnl0ZXMoc3RhdHMuYXZhaWxhYmxlU2l6ZSl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0yNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluIHJvdW5kZWQtZnVsbCBoLTggdy04IGJvcmRlci10LTIgYm9yZGVyLWItMiBib3JkZXItcHJpbWFyeVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gbWItM1wiPuCkuOCljeCkn+Cli+CksOClh+CknCDgpIngpKrgpK/gpYvgpJc8L2gzPlxuICAgICAgICAgICAgICB7c3RhdHMgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCBoLTIuNSBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IGgtMi41IHJvdW5kZWQtZnVsbFwiIFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7KHN0YXRzLnRvdGFsU2l6ZSAvIChzdGF0cy50b3RhbFNpemUgKyBzdGF0cy5hdmFpbGFibGVTaXplKSkgKiAxMDB9JWAgfX1cbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj7gpKrgpY3gpLDgpK/gpYHgpJXgpY3gpKQ6IHtzdGF0cyA/IGZvcm1hdEJ5dGVzKHN0YXRzLnRvdGFsU2l6ZSkgOiAn4KSy4KWL4KShIOCkueCliyDgpLDgpLngpL4g4KS54KWILi4uJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+4KSV4KWB4KSyOiB7c3RhdHMgPyBmb3JtYXRCeXRlcyhzdGF0cy50b3RhbFNpemUgKyBzdGF0cy5hdmFpbGFibGVTaXplKSA6ICfgpLLgpYvgpKEg4KS54KWLIOCksOCkueCkviDgpLngpYguLi4nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogVXBsb2FkIHNlY3Rpb24gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTYgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XCI+4KSF4KSq4KSy4KWL4KShIOCkq+CkvOCkvuCkh+CksjwvaDI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBwLTggbWItNCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTUwXCIgb25DbGljaz17aGFuZGxlVXBsb2FkRmlsZX0+XG4gICAgICAgICAgICAgIDxVcGxvYWQgY2xhc3NOYW1lPVwibXgtYXV0byB0ZXh0LWdyYXktNDAwIG1iLTJcIiBzaXplPXszMn0gLz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi0xXCI+4KSV4KWN4KSy4KS/4KSVIOCkleCksOClh+CkgiDgpK/gpL4g4KSr4KS84KS+4KSH4KSyIOCkluClgOCkguCkmuClh+CkgiDgpJTgpLAg4KSb4KWL4KSh4KS84KWH4KSCPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5QTkcsIEpQRywgUERGLCBNUDQg4KSG4KSm4KS/PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIiBcbiAgICAgICAgICAgICAgcmVmPXtmaWxlSW5wdXRSZWZ9IFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZEZpbGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0yIGJnLXByaW1hcnkgaG92ZXI6YmctcHJpbWFyeS85MCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VXBsb2FkIHNpemU9ezE2fSBjbGFzc05hbWU9XCJtci0yXCIgLz5cbiAgICAgICAgICAgICAg4KSr4KS84KS+4KSH4KSyIOCkheCkquCksuCli+CkoSDgpJXgpLDgpYfgpIJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMyBnYXAtNlwiPlxuICAgICAgICAgIHsvKiBCbG9iIGxpc3QgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0yIGJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj7gpLjgpY3gpJ/gpYvgpLDgpY3gpKEg4KSs4KWN4KSy4KWJ4KSs4KWN4KS4PC9oMj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1yLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4KSW4KWL4KSc4KWH4KSCLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMgcHktMSBwci04IGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCB0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4gZS5rZXkgPT09ICdFbnRlcicgJiYgaGFuZGxlU2VhcmNoKCl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFNlYXJjaCBzaXplPXsxNH0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMiB0b3AtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIHRleHQtZ3JheS00MDBcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvYWRCbG9ic31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBiZy1ncmF5LTEwMCBob3ZlcjpiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxSZWZyZXNoQ3cgc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC00OFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluIHJvdW5kZWQtZnVsbCBoLTEwIHctMTAgYm9yZGVyLXQtMiBib3JkZXItYi0yIGJvcmRlci1wcmltYXJ5XCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IGJsb2JzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS04XCI+XG4gICAgICAgICAgICAgICAgPEZpbGUgc2l6ZT17NDB9IGNsYXNzTmFtZT1cIm14LWF1dG8gdGV4dC1ncmF5LTMwMCBtYi0yXCIgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+4KSV4KWL4KSIIOCkrOCljeCksuClieCkrCDgpKjgpLngpYDgpIIg4KSu4KS/4KSy4KS+PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWdyYXktNTAgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOCkleClgeCkguCknOClgFxuICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ncmF5LTUwIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDgpKrgpY3gpLDgpJXgpL7gpLBcbiAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctZ3JheS01MCB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg4KSG4KSV4KS+4KSwXG4gICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWdyYXktNTAgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOCkrOCkqOCkvuCkr+CkviDgpJfgpK/gpL5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctZ3JheS01MCB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg4KSV4KS+4KSw4KWN4KSw4KS14KS+4KSIXG4gICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiYmctd2hpdGUgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtibG9icy5tYXAoKGJsb2IsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bob3ZlcjpiZy1ncmF5LTUwICR7c2VsZWN0ZWRCbG9iPy5rZXkgPT09IGJsb2Iua2V5ID8gJ2JnLWJsdWUtNTAnIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdEJsb2IoYmxvYil9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMiB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2Iua2V5Lmxlbmd0aCA+IDMwIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7YmxvYi5rZXkuc3Vic3RyaW5nKDAsIDE1KX0uLi4ke2Jsb2Iua2V5LnN1YnN0cmluZyhibG9iLmtleS5sZW5ndGggLSAxMCl9YCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGJsb2Iua2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTIgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9iLmNvbnRlbnRUeXBlLnNwbGl0KCcvJylbMV0gfHwgYmxvYi5jb250ZW50VHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yIHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0Qnl0ZXMoYmxvYi5zaXplKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yIHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0RGF0ZShibG9iLmNyZWF0ZWRBdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMiB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEgaG92ZXI6YmctZ3JheS0yMDAgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTZWxlY3RCbG9iKGJsb2IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFnIHNpemU9ezE2fSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xIGhvdmVyOmJnLWdyYXktMjAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG93bmxvYWQgd291bGQgYmUgaW1wbGVtZW50ZWQgaGVyZSBpbiBhIHJlYWwgYXBwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCfgpKHgpL7gpIngpKjgpLLgpYvgpKEg4KS44KWB4KS14KS/4KSn4KS+IOCkteCkvuCkuOCljeCkpOCkteCkv+CklSDgpJXgpL7gpLDgpY3gpK/gpL7gpKjgpY3gpLXgpK/gpKgg4KSu4KWH4KSCIOCknOCli+CkoeCkvOClgCDgpJzgpL7gpI/gpJfgpYAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERvd25sb2FkIHNpemU9ezE2fSBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSBob3ZlcjpiZy1ncmF5LTIwMCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZUJsb2IoYmxvYi5rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2gyIHNpemU9ezE2fSBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogU2VsZWN0ZWQgYmxvYiBkZXRhaWxzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC02IHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItNFwiPuCkrOCljeCksuClieCkrCDgpLXgpL/gpLXgpLDgpKM8L2gyPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7c2VsZWN0ZWRCbG9iID8gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPuCkleClgeCkguCknOClgDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtc20gdGV4dC1ncmF5LTkwMCBicmVhay1hbGxcIj57c2VsZWN0ZWRCbG9iLmtleX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00IG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj7gpKrgpY3gpLDgpJXgpL7gpLA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPntzZWxlY3RlZEJsb2IuY29udGVudFR5cGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj7gpIbgpJXgpL7gpLA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPntmb3JtYXRCeXRlcyhzZWxlY3RlZEJsb2Iuc2l6ZSl9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj7gpKzgpKjgpL7gpK/gpL4g4KSX4KSv4KS+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj57Zm9ybWF0RGF0ZShzZWxlY3RlZEJsb2IuY3JlYXRlZEF0KX08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPuCkhuCkluCkv+CksOClgCDgpI/gpJXgpY3gpLjgpYfgpLg8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtc20gdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEJsb2IubGFzdEFjY2Vzc2VkID8gZm9ybWF0RGF0ZShzZWxlY3RlZEJsb2IubGFzdEFjY2Vzc2VkKSA6ICdOL0EnfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgbWItMlwiPuCkn+CliOCkl+CljeCkuDwvaDM+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhuZXdUYWdzKS5tYXAoKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4KSf4KWI4KSXIOCkleClgeCkguCknOClgFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRUYWdzID0geyAuLi5uZXdUYWdzIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVwZGF0ZWRUYWdzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZFRhZ3NbZS50YXJnZXQudmFsdWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV3VGFncyh1cGRhdGVkVGFncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweC0yIHB5LTEgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4KSf4KWI4KSXIOCkruCkvuCkqFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV3VGFncyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZXdUYWdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2tleV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweC0yIHB5LTEgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlVGFnKGtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSBiZy1yZWQtNTAgdGV4dC1yZWQtNjAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2gyIHNpemU9ezE2fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkVGFnfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSB0ZXh0LXNtIGhvdmVyOnVuZGVybGluZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICDgpJ/gpYjgpJcg4KSc4KWL4KSh4KS84KWH4KSCXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwZGF0ZVRhZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0xIGJnLXByaW1hcnkgaG92ZXI6YmctcHJpbWFyeS85MCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgdGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICDgpIXgpKrgpKHgpYfgpJ8g4KSV4KSw4KWH4KSCXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAge3NlbGVjdGVkQmxvYi5pbmRleGVkRmllbGRzICYmIE9iamVjdC5rZXlzKHNlbGVjdGVkQmxvYi5pbmRleGVkRmllbGRzKS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgbWItMlwiPuCkh+CkguCkoeClh+CkleCljeCkuOCljeCkoSDgpKvgpYDgpLLgpY3gpKHgpY3gpLg8L2gzPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIHAtMyByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJ0ZXh0LXhzIG92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KHNlbGVjdGVkQmxvYi5pbmRleGVkRmllbGRzLCBudWxsLCAyKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktOFwiPlxuICAgICAgICAgICAgICAgIDxGaWxlIHNpemU9ezQwfSBjbGFzc05hbWU9XCJteC1hdXRvIHRleHQtZ3JheS0zMDAgbWItMlwiIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPuCkteCkv+CkteCksOCkoyDgpKbgpYfgpJbgpKjgpYcg4KSV4KWHIOCksuCkv+CkjyDgpI/gpJUg4KSs4KWN4KSy4KWJ4KSsIOCkmuClgeCkqOClh+CkgjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIHsvKiBBcmNoaXRlY3R1cmUgZGlhZ3JhbSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IGJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XCI+QmxvYnN0b3JlIOCkhuCksOCljeCkleCkv+Ckn+Clh+CkleCljeCkmuCksDwvaDI+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC02XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTUxMjg4MDQ5LWJlYmRhNGUzOGY3MT9peGlkPU0zdzNNalV6TkRoOE1Id3hmSE5sWVhKamFId3pmSHhpYVc1aGNua2xNakJrWVhSaEpUSXdjM1J2Y21GblpTVXlNSE41YzNSbGJTVXlNR1JoZEdGaVlYTmxKVEl3WW14dlluTWxNakJtYVd4bGMzeGxibnd3Zkh4OGZERTNORE15TlRJek56QjhNQSZpeGxpYj1yYi00LjAuM1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiQmxvYnN0b3JlIEFyY2hpdGVjdHVyZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtNjQgb2JqZWN0LWNvdmVyIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktODAwIG1iLTNcIj5CbG9ic3RvcmUg4KS44KS/4KS44KWN4KSf4KSuIOCkleCliOCkuOClhyDgpJXgpL7gpK4g4KSV4KSw4KSk4KS+IOCkueCliDwvaDM+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWItNFwiPlxuICAgICAgICAgICAgICAgIOCkueCkruCkvuCksOCkviBCbG9ic3RvcmUg4KS44KS/4KS44KWN4KSf4KSuIOCkrOCkoeCkvOClhyDgpKzgpL7gpIfgpKjgpLDgpYAg4KSh4KWH4KSf4KS+IOCkleClhyDgpJXgpYHgpLbgpLIg4KSt4KSC4KSh4KS+4KSw4KSjIOCklOCksCDgpKrgpYHgpKjgpLDgpY3gpKrgpY3gpLDgpL7gpKrgpY3gpKTgpL8g4KSV4KWHIOCksuCkv+CkjyDgpKbgpY3gpLXgpL8t4KS44KWN4KSk4KSw4KWA4KSvIOCkteCkvuCkuOCljeCkpOClgeCkleCksuCkviDgpJXgpL4g4KSJ4KSq4KSv4KWL4KSXIOCkleCksOCkpOCkviDgpLngpYg6XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwIHAtMyByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ibHVlLTgwMCBtYi0xXCI+4KSh4KWH4KSf4KS+IOCkuOCljeCkn+Cli+CksOClh+CknCDgpLLgpYfgpK/gpLA8L2g0PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIOCkrOCkoeCkvOClhyDgpKzgpL7gpIfgpKjgpLDgpYAg4KSR4KSs4KWN4KSc4KWH4KSV4KWN4KSf4KWN4KS4IOCkleCliyDgpJXgpYHgpLbgpLLgpKTgpL7gpKrgpYLgpLDgpY3gpLXgpJUg4KS44KSC4KSX4KWN4KSw4KS54KWA4KSkIOCkleCksOCkpOCkviDgpLngpYgsIOCkruClh+CkruCli+CksOClgCDgpJXgpL4g4KSH4KS34KWN4KSf4KSk4KSuIOCkieCkquCkr+Cli+CklyDgpLjgpYHgpKjgpL/gpLbgpY3gpJrgpL/gpKQg4KSV4KSw4KSk4KS+IOCkueCliCwg4KSU4KSwIOCkpOClh+CknOCkvCDgpKrgpYHgpKjgpLDgpY3gpKrgpY3gpLDgpL7gpKrgpY3gpKTgpL8g4KSq4KWN4KSw4KSm4KS+4KSoIOCkleCksOCkpOCkviDgpLngpYjgpaRcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwIHAtMyByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ncmVlbi04MDAgbWItMVwiPuCkruClh+Ckn+CkvuCkoeClh+Ckn+CkviDgpIfgpILgpKHgpYfgpJXgpY3gpLjgpL/gpILgpJcg4KSy4KWH4KSv4KSwPC9oND5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICBCaWd0YWJsZSDgpJXgpL4g4KSJ4KSq4KSv4KWL4KSXIOCkleCksOCkleClhyDgpKzgpY3gpLLgpYngpKwg4KSu4KWH4KSf4KS+4KSh4KWH4KSf4KS+IOCkleCliyDgpIfgpILgpKHgpYfgpJXgpY3gpLgg4KSV4KSw4KWH4KSCLCDgpJ/gpYjgpJcsIOCkleClgeCkguCknOClgCwg4KSv4KS+IOCkleCkuOCljeCkn+CkriDgpIfgpILgpKHgpYfgpJXgpY3gpLjgpY3gpKEg4KSr4KS84KWA4KSy4KWN4KShIOCkpuCljeCkteCkvuCksOCkviDgpKTgpYfgpJzgpLwg4KSW4KWL4KScIOCkleCliyDgpLjgpJXgpY3gpLfgpK4g4KSV4KSw4KWH4KSC4KWkXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wdXJwbGUtNTAgcC0zIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LXB1cnBsZS04MDAgbWItMVwiPuCkj+CkleClgOCkleClg+CkpCDgpIfgpILgpJ/gpLDgpKvgpYfgpLg8L2g0PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIOCkieCkquCkr+Cli+Ckl+CkleCksOCljeCkpOCkvuCkk+CkgiDgpJXgpYsg4KSF4KSo4KWB4KSV4KWN4KSw4KSu4KSj4KS/4KSV4KS+IOCkr+CkviDgpK3gpILgpKHgpL7gpLDgpKMg4KSq4KSw4KSkIOCkleClgCDgpJzgpJ/gpL/gpLLgpKTgpL7gpJPgpIIg4KS44KWHIOCkqOCkv+CkquCkn+CkqOClhyDgpJXgpYAg4KSG4KS14KS24KWN4KSv4KSV4KSk4KS+IOCkleClhyDgpKzgpL/gpKjgpL4g4KSP4KSVIOCkj+CkleClgOCkleClg+CkpCBBUEkg4KSq4KWN4KSw4KSm4KS+4KSoIOCkleCksOClh+CkguClpFxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgICBcbiAgICAgIHsvKiBVcGxvYWQgTW9kYWwgKi99XG4gICAgICB7c2hvd1VwbG9hZE1vZGFsICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IHotNTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgbWF4LXctbWQgdy1mdWxsIHAtNlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTRcIj7gpKvgpLzgpL7gpIfgpLIg4KSF4KSq4KSy4KWL4KShIOCkleCksOClh+CkgjwvaDI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICDgpKvgpLzgpL7gpIfgpLJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBiZy1ncmF5LTUwIHAtMiByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICAgICAgPEZpbGUgc2l6ZT17MTZ9IGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0cnVuY2F0ZVwiPnt1cGxvYWRGaWxlPy5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgIOCkuOCljeCkn+Cli+CksOClh+CknCDgpJXgpYHgpILgpJzgpYBcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt1cGxvYWRLZXl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVcGxvYWRLZXkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHRleHQtc21cIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXBsb2Fkcy9maWxlbmFtZS5qcGdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICDgpJ/gpYjgpJfgpY3gpLhcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIG1iLTJcIj5cbiAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXModXBsb2FkVGFncykubWFwKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4KSf4KWI4KSXIOCkleClgeCkguCknOClgFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRUYWdzID0geyAuLi51cGxvYWRUYWdzIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdXBkYXRlZFRhZ3Nba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRUYWdzW2UudGFyZ2V0LnZhbHVlXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXBsb2FkVGFncyh1cGRhdGVkVGFncyk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHgtMiBweS0xIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCB0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4KSf4KWI4KSXIOCkruCkvuCkqFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXBsb2FkVGFncyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnVwbG9hZFRhZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtrZXldOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHgtMiBweS0xIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCB0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZVVwbG9hZFRhZyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSBiZy1yZWQtNTAgdGV4dC1yZWQtNjAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYXNoMiBzaXplPXsxNn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17YWRkVXBsb2FkVGFnfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSB0ZXh0LXNtIGhvdmVyOnVuZGVybGluZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDgpJ/gpYjgpJcg4KSc4KWL4KSh4KS84KWH4KSCXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHt1cGxvYWRQcm9ncmVzcyA+IDAgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGwgaC0yLjUgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcHJpbWFyeSBoLTIuNSByb3VuZGVkLWZ1bGxcIiBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke3VwbG9hZFByb2dyZXNzfSVgIH19XG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcmlnaHRcIj57dXBsb2FkUHJvZ3Jlc3N9JTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHt1cGxvYWRFcnJvciAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBiZy1yZWQtNTAgcC0yIHRleHQtcmVkLTYwMCB0ZXh0LXNtIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgICAgICB7dXBsb2FkRXJyb3J9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93VXBsb2FkTW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ncmF5LTEwMCBob3ZlcjpiZy1ncmF5LTIwMCByb3VuZGVkLW1kIHRleHQtc21cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg4KSw4KSm4KWN4KSmIOCkleCksOClh+CkglxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctcHJpbWFyeSBob3ZlcjpiZy1wcmltYXJ5LzkwIHRleHQtd2hpdGUgcm91bmRlZC1tZCB0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIOCkheCkquCksuCli+CkoSDgpJXgpLDgpYfgpIJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvYnN0b3JlQWRtaW47XG4gXG4iXSwiZmlsZSI6Ii9ob21lL3Byb2plY3Qvc3JjL3BhZ2VzL0Jsb2JzdG9yZUFkbWluLnRzeCJ9
