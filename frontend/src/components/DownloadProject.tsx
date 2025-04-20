import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/DownloadProject.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3859ff4e"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/project/src/components/DownloadProject.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=3859ff4e"; const useState = __vite__cjsImport3_react["useState"];
import { Download, Check } from "/node_modules/.vite/deps/lucide-react.js?v=3859ff4e";
import __vite__cjsImport5_jszip from "/node_modules/.vite/deps/jszip.js?v=3859ff4e"; const JSZip = __vite__cjsImport5_jszip.__esModule ? __vite__cjsImport5_jszip.default : __vite__cjsImport5_jszip;
const DownloadProject = () => {
  _s();
  const [downloading, setDownloading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const handleDownload = async () => {
    setDownloading(true);
    setCompleted(false);
    try {
      const zip = new JSZip();
      const frontendFolder = zip.folder("frontend");
      frontendFolder.file("package.json", await fetchFile("/package.json"));
      frontendFolder.file("index.html", await fetchFile("/index.html"));
      frontendFolder.file("tailwind.config.js", await fetchFile("/tailwind.config.js"));
      const srcFolder = frontendFolder.folder("src");
      srcFolder.file("index.css", await fetchFile("/src/index.css"));
      srcFolder.file("main.tsx", await fetchFile("/src/main.tsx"));
      srcFolder.file("App.tsx", await fetchFile("/src/App.tsx"));
      const apiFolder = srcFolder.folder("api");
      apiFolder.file("searchApi.ts", await fetchFile("/src/api/searchApi.ts"));
      apiFolder.file("crawlerApi.ts", await fetchFile("/src/api/crawlerApi.ts"));
      await addDirectoryToZip("/src/components", srcFolder.folder("components"));
      await addDirectoryToZip("/src/pages", srcFolder.folder("pages"));
      await addDirectoryToZip("/src/services", srcFolder.folder("services"));
      const backendFolder = zip.folder("backend");
      backendFolder.file("index.js", await fetchFile("/server/index.js"));
      backendFolder.file("package.json", JSON.stringify({
        "name": "khoj-search-engine-backend",
        "version": "1.0.0",
        "type": "module",
        "main": "index.js",
        "scripts": {
          "start": "node index.js",
          "dev": "nodemon index.js"
        },
        "dependencies": {
          "body-parser": "^1.20.2",
          "cors": "^2.8.5",
          "express": "^4.18.2"
        },
        "devDependencies": {
          "nodemon": "^2.0.22"
        }
      }, null, 2));
      zip.file("README.md", `# खोज - Google जैसा खोज इंजन (Hindi Search Engine)

A full-stack Hindi search engine with web crawling and indexing capabilities, built with React, TypeScript, Tailwind CSS, and Express.js.

## Setup Instructions

1. Clone this repository
2. Setup frontend:
   - \`cd frontend\`
   - \`npm install\`
   - \`npm run dev\`
3. Setup backend:
   - \`cd backend\`
   - \`npm install\`
   - \`npm run dev\`

## Project Structure

- \`/frontend\`: Frontend React application
  - \`/src\`: Source code
    - \`/components\`: Reusable UI components
    - \`/pages\`: Page components
    - \`/api\`: API clients
    - \`/services\`: Service implementations
- \`/backend\`: Express.js backend server
  
## Features

- Hindi-language search interface
- Web crawler with admin dashboard
- Bigtable-inspired NoSQL database 
- Blobstore system for binary file storage
- Full-stack implementation with Express.js backend
`);
      const blob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "khoj-search-engine.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setCompleted(true);
    } catch (error) {
      console.error("Error generating ZIP file:", error);
      alert("ZIP फ़ाइल बनाने में त्रुटि हुई। कृपया फिर से प्रयास करें।");
    } finally {
      setDownloading(false);
    }
  };
  const fetchFile = async (path) => {
    try {
      const response = await fetch(path);
      return await response.text();
    } catch (error) {
      console.error(`Error fetching ${path}:`, error);
      return `// Error loading ${path}`;
    }
  };
  const addDirectoryToZip = async (sourcePath, zipFolder) => {
    if (sourcePath === "/src/components") {
      zipFolder.file("SearchBar.tsx", await fetchFile("/src/components/SearchBar.tsx"));
      zipFolder.file("Header.tsx", await fetchFile("/src/components/Header.tsx"));
      zipFolder.file("Footer.tsx", await fetchFile("/src/components/Footer.tsx"));
      zipFolder.file("DownloadProject.tsx", await fetchFile("/src/components/DownloadProject.tsx"));
      const crawlingFolder = zipFolder.folder("crawling");
      crawlingFolder.file("CrawlForm.tsx", await fetchFile("/src/components/crawling/CrawlForm.tsx"));
      crawlingFolder.file("CrawlStats.tsx", await fetchFile("/src/components/crawling/CrawlStats.tsx"));
      crawlingFolder.file("CrawlHistory.tsx", await fetchFile("/src/components/crawling/CrawlHistory.tsx"));
      crawlingFolder.file("PerformanceCharts.tsx", await fetchFile("/src/components/crawling/PerformanceCharts.tsx"));
      const commonFolder = zipFolder.folder("common");
      commonFolder.file("ImageCard.tsx", await fetchFile("/src/components/common/ImageCard.tsx"));
    }
    if (sourcePath === "/src/pages") {
      zipFolder.file("HomePage.tsx", await fetchFile("/src/pages/HomePage.tsx"));
      zipFolder.file("SearchResultsPage.tsx", await fetchFile("/src/pages/SearchResultsPage.tsx"));
      zipFolder.file("AdminPage.tsx", await fetchFile("/src/pages/AdminPage.tsx"));
      zipFolder.file("CrawlerDashboard.tsx", await fetchFile("/src/pages/CrawlerDashboard.tsx"));
      zipFolder.file("BigtableAdmin.tsx", await fetchFile("/src/pages/BigtableAdmin.tsx"));
      zipFolder.file("BlobstoreAdmin.tsx", await fetchFile("/src/pages/BlobstoreAdmin.tsx"));
    }
    if (sourcePath === "/src/services") {
      zipFolder.file("crawler.ts", await fetchFile("/src/services/crawler.ts"));
      const bigtableFolder = zipFolder.folder("bigtable");
      bigtableFolder.file("BigtableService.ts", await fetchFile("/src/services/bigtable/BigtableService.ts"));
      bigtableFolder.file("IndexService.ts", await fetchFile("/src/services/bigtable/IndexService.ts"));
      const blobstoreFolder = zipFolder.folder("blobstore");
      blobstoreFolder.file("BlobstoreService.ts", await fetchFile("/src/services/blobstore/BlobstoreService.ts"));
      blobstoreFolder.file("BlobIndexService.ts", await fetchFile("/src/services/blobstore/BlobIndexService.ts"));
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "fixed bottom-4 right-4 z-50", children: /* @__PURE__ */ jsxDEV(
    "button",
    {
      onClick: handleDownload,
      disabled: downloading,
      className: `flex items-center px-4 py-3 rounded-full ${completed ? "bg-green-500 text-white" : "bg-primary text-white"} shadow-lg hover:shadow-xl transition-all`,
      children: downloading ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV("div", { className: "animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2" }, void 0, false, {
          fileName: "/home/project/src/components/DownloadProject.tsx",
          lineNumber: 192,
          columnNumber: 13
        }, this),
        "डाउनलोड हो रहा है..."
      ] }, void 0, true, {
        fileName: "/home/project/src/components/DownloadProject.tsx",
        lineNumber: 191,
        columnNumber: 9
      }, this) : completed ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV(Check, { size: 20, className: "mr-2" }, void 0, false, {
          fileName: "/home/project/src/components/DownloadProject.tsx",
          lineNumber: 197,
          columnNumber: 13
        }, this),
        "डाउनलोड पूरा हुआ!"
      ] }, void 0, true, {
        fileName: "/home/project/src/components/DownloadProject.tsx",
        lineNumber: 196,
        columnNumber: 9
      }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV(Download, { size: 20, className: "mr-2" }, void 0, false, {
          fileName: "/home/project/src/components/DownloadProject.tsx",
          lineNumber: 202,
          columnNumber: 13
        }, this),
        "फ्रंटएंड और बैकएंड ZIP डाउनलोड करें"
      ] }, void 0, true, {
        fileName: "/home/project/src/components/DownloadProject.tsx",
        lineNumber: 201,
        columnNumber: 9
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/home/project/src/components/DownloadProject.tsx",
      lineNumber: 181,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "/home/project/src/components/DownloadProject.tsx",
    lineNumber: 180,
    columnNumber: 5
  }, this);
};
_s(DownloadProject, "AXxHHE/pJDMTnGf7b03Gksl+Whs=");
_c = DownloadProject;
export default DownloadProject;
var _c;
$RefreshReg$(_c, "DownloadProject");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/components/DownloadProject.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/components/DownloadProject.tsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
