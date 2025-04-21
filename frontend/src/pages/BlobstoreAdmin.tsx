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
