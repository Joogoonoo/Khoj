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
}

//# sourceMappingURL=data:application/json;base64,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QVcsNENBQ1RHLFlBQ0ksNEJBQ0EsdUJBQXVCO0FBQUEsTUFHNUJILHdCQUNDLG1DQUNFO0FBQUEsK0JBQUMsU0FBSSxXQUFVLCtFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBMkY7QUFBQSxRQUFLO0FBQUEsV0FEbEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUdBLElBQ0VHLFlBQ0YsbUNBQ0U7QUFBQSwrQkFBQyxTQUFNLE1BQU0sSUFBSSxXQUFVLFVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBaUM7QUFBQTtBQUFBLFdBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFHQSxJQUVBLG1DQUNFO0FBQUEsK0JBQUMsWUFBUyxNQUFNLElBQUksV0FBVSxVQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQW9DO0FBQUE7QUFBQSxXQUR0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBR0E7QUFBQTtBQUFBLElBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQXlCQSxLQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBMkJBO0FBRUo7QUFBRUosR0E1TUlELGlCQUFlO0FBQUErQyxLQUFmL0M7QUE4TU4sZUFBZUE7QUFBZ0IsSUFBQStDO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJEb3dubG9hZCIsIkNoZWNrIiwiSlNaaXAiLCJEb3dubG9hZFByb2plY3QiLCJfcyIsImRvd25sb2FkaW5nIiwic2V0RG93bmxvYWRpbmciLCJ1c2VTdGF0ZSIsImNvbXBsZXRlZCIsInNldENvbXBsZXRlZCIsImhhbmRsZURvd25sb2FkIiwiemlwIiwiZnJvbnRlbmRGb2xkZXIiLCJmb2xkZXIiLCJmaWxlIiwiZmV0Y2hGaWxlIiwic3JjRm9sZGVyIiwiYXBpRm9sZGVyIiwiYWRkRGlyZWN0b3J5VG9aaXAiLCJiYWNrZW5kRm9sZGVyIiwiSlNPTiIsInN0cmluZ2lmeSIsImJsb2IiLCJnZW5lcmF0ZUFzeW5jIiwidHlwZSIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwiZXJyb3IiLCJjb25zb2xlIiwiYWxlcnQiLCJwYXRoIiwicmVzcG9uc2UiLCJmZXRjaCIsInRleHQiLCJzb3VyY2VQYXRoIiwiemlwRm9sZGVyIiwiY3Jhd2xpbmdGb2xkZXIiLCJjb21tb25Gb2xkZXIiLCJiaWd0YWJsZUZvbGRlciIsImJsb2JzdG9yZUZvbGRlciIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZXMiOlsiRG93bmxvYWRQcm9qZWN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEb3dubG9hZCwgQ2hlY2sgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IEpTWmlwIGZyb20gJ2pzemlwJztcblxuY29uc3QgRG93bmxvYWRQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBbZG93bmxvYWRpbmcsIHNldERvd25sb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbXBsZXRlZCwgc2V0Q29tcGxldGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVEb3dubG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXREb3dubG9hZGluZyh0cnVlKTtcbiAgICBzZXRDb21wbGV0ZWQoZmFsc2UpO1xuICAgIFxuICAgIHRyeSB7XG4gICAgICAvLyBDcmVhdGUgYSBuZXcgSlNaaXAgaW5zdGFuY2VcbiAgICAgIGNvbnN0IHppcCA9IG5ldyBKU1ppcCgpO1xuICAgICAgXG4gICAgICAvLyBBZGQgZnJvbnRlbmQgZmlsZXNcbiAgICAgIGNvbnN0IGZyb250ZW5kRm9sZGVyID0gemlwLmZvbGRlcihcImZyb250ZW5kXCIpO1xuICAgICAgXG4gICAgICAvLyBBZGQga2V5IGZyb250ZW5kIGZpbGVzIGFuZCBkaXJlY3RvcmllcyAoc2ltcGxpZmllZCBmb3IgZGVtbylcbiAgICAgIGZyb250ZW5kRm9sZGVyLmZpbGUoXCJwYWNrYWdlLmpzb25cIiwgYXdhaXQgZmV0Y2hGaWxlKCcvcGFja2FnZS5qc29uJykpO1xuICAgICAgZnJvbnRlbmRGb2xkZXIuZmlsZShcImluZGV4Lmh0bWxcIiwgYXdhaXQgZmV0Y2hGaWxlKCcvaW5kZXguaHRtbCcpKTtcbiAgICAgIGZyb250ZW5kRm9sZGVyLmZpbGUoXCJ0YWlsd2luZC5jb25maWcuanNcIiwgYXdhaXQgZmV0Y2hGaWxlKCcvdGFpbHdpbmQuY29uZmlnLmpzJykpO1xuICAgICAgXG4gICAgICAvLyBBZGQgc3JjIGZvbGRlciBzdHJ1Y3R1cmVcbiAgICAgIGNvbnN0IHNyY0ZvbGRlciA9IGZyb250ZW5kRm9sZGVyLmZvbGRlcihcInNyY1wiKTtcbiAgICAgIHNyY0ZvbGRlci5maWxlKFwiaW5kZXguY3NzXCIsIGF3YWl0IGZldGNoRmlsZSgnL3NyYy9pbmRleC5jc3MnKSk7XG4gICAgICBzcmNGb2xkZXIuZmlsZShcIm1haW4udHN4XCIsIGF3YWl0IGZldGNoRmlsZSgnL3NyYy9tYWluLnRzeCcpKTtcbiAgICAgIHNyY0ZvbGRlci5maWxlKFwiQXBwLnRzeFwiLCBhd2FpdCBmZXRjaEZpbGUoJy9zcmMvQXBwLnRzeCcpKTtcbiAgICAgIFxuICAgICAgLy8gQWRkIEFQSSBmaWxlc1xuICAgICAgY29uc3QgYXBpRm9sZGVyID0gc3JjRm9sZGVyLmZvbGRlcihcImFwaVwiKTtcbiAgICAgIGFwaUZvbGRlci5maWxlKFwic2VhcmNoQXBpLnRzXCIsIGF3YWl0IGZldGNoRmlsZSgnL3NyYy9hcGkvc2VhcmNoQXBpLnRzJykpO1xuICAgICAgYXBpRm9sZGVyLmZpbGUoXCJjcmF3bGVyQXBpLnRzXCIsIGF3YWl0IGZldGNoRmlsZSgnL3NyYy9hcGkvY3Jhd2xlckFwaS50cycpKTtcbiAgICAgIFxuICAgICAgLy8gQWRkIGNvbXBvbmVudHMgZGlyZWN0b3J5XG4gICAgICBhd2FpdCBhZGREaXJlY3RvcnlUb1ppcCgnL3NyYy9jb21wb25lbnRzJywgc3JjRm9sZGVyLmZvbGRlcihcImNvbXBvbmVudHNcIikpO1xuICAgICAgXG4gICAgICAvLyBBZGQgcGFnZXMgZGlyZWN0b3J5XG4gICAgICBhd2FpdCBhZGREaXJlY3RvcnlUb1ppcCgnL3NyYy9wYWdlcycsIHNyY0ZvbGRlci5mb2xkZXIoXCJwYWdlc1wiKSk7XG4gICAgICBcbiAgICAgIC8vIEFkZCBzZXJ2aWNlcyBkaXJlY3RvcnlcbiAgICAgIGF3YWl0IGFkZERpcmVjdG9yeVRvWmlwKCcvc3JjL3NlcnZpY2VzJywgc3JjRm9sZGVyLmZvbGRlcihcInNlcnZpY2VzXCIpKTtcbiAgICAgIFxuICAgICAgLy8gQWRkIGJhY2tlbmQgZmlsZXNcbiAgICAgIGNvbnN0IGJhY2tlbmRGb2xkZXIgPSB6aXAuZm9sZGVyKFwiYmFja2VuZFwiKTtcbiAgICAgIGJhY2tlbmRGb2xkZXIuZmlsZShcImluZGV4LmpzXCIsIGF3YWl0IGZldGNoRmlsZSgnL3NlcnZlci9pbmRleC5qcycpKTtcbiAgICAgIGJhY2tlbmRGb2xkZXIuZmlsZShcInBhY2thZ2UuanNvblwiLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIFwibmFtZVwiOiBcImtob2otc2VhcmNoLWVuZ2luZS1iYWNrZW5kXCIsXG4gICAgICAgIFwidmVyc2lvblwiOiBcIjEuMC4wXCIsXG4gICAgICAgIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICAgICAgICBcIm1haW5cIjogXCJpbmRleC5qc1wiLFxuICAgICAgICBcInNjcmlwdHNcIjoge1xuICAgICAgICAgIFwic3RhcnRcIjogXCJub2RlIGluZGV4LmpzXCIsXG4gICAgICAgICAgXCJkZXZcIjogXCJub2RlbW9uIGluZGV4LmpzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgICAgICAgIFwiYm9keS1wYXJzZXJcIjogXCJeMS4yMC4yXCIsXG4gICAgICAgICAgXCJjb3JzXCI6IFwiXjIuOC41XCIsXG4gICAgICAgICAgXCJleHByZXNzXCI6IFwiXjQuMTguMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICAgICAgICBcIm5vZGVtb25cIjogXCJeMi4wLjIyXCJcbiAgICAgICAgfVxuICAgICAgfSwgbnVsbCwgMikpO1xuICAgICAgXG4gICAgICAvLyBBZGQgUkVBRE1FIHdpdGggc2V0dXAgaW5zdHJ1Y3Rpb25zXG4gICAgICB6aXAuZmlsZShcIlJFQURNRS5tZFwiLCBgIyDgpJbgpYvgpJwgLSBHb29nbGUg4KSc4KWI4KS44KS+IOCkluCli+CknCDgpIfgpILgpJzgpKggKEhpbmRpIFNlYXJjaCBFbmdpbmUpXG5cbkEgZnVsbC1zdGFjayBIaW5kaSBzZWFyY2ggZW5naW5lIHdpdGggd2ViIGNyYXdsaW5nIGFuZCBpbmRleGluZyBjYXBhYmlsaXRpZXMsIGJ1aWx0IHdpdGggUmVhY3QsIFR5cGVTY3JpcHQsIFRhaWx3aW5kIENTUywgYW5kIEV4cHJlc3MuanMuXG5cbiMjIFNldHVwIEluc3RydWN0aW9uc1xuXG4xLiBDbG9uZSB0aGlzIHJlcG9zaXRvcnlcbjIuIFNldHVwIGZyb250ZW5kOlxuICAgLSBcXGBjZCBmcm9udGVuZFxcYFxuICAgLSBcXGBucG0gaW5zdGFsbFxcYFxuICAgLSBcXGBucG0gcnVuIGRldlxcYFxuMy4gU2V0dXAgYmFja2VuZDpcbiAgIC0gXFxgY2QgYmFja2VuZFxcYFxuICAgLSBcXGBucG0gaW5zdGFsbFxcYFxuICAgLSBcXGBucG0gcnVuIGRldlxcYFxuXG4jIyBQcm9qZWN0IFN0cnVjdHVyZVxuXG4tIFxcYC9mcm9udGVuZFxcYDogRnJvbnRlbmQgUmVhY3QgYXBwbGljYXRpb25cbiAgLSBcXGAvc3JjXFxgOiBTb3VyY2UgY29kZVxuICAgIC0gXFxgL2NvbXBvbmVudHNcXGA6IFJldXNhYmxlIFVJIGNvbXBvbmVudHNcbiAgICAtIFxcYC9wYWdlc1xcYDogUGFnZSBjb21wb25lbnRzXG4gICAgLSBcXGAvYXBpXFxgOiBBUEkgY2xpZW50c1xuICAgIC0gXFxgL3NlcnZpY2VzXFxgOiBTZXJ2aWNlIGltcGxlbWVudGF0aW9uc1xuLSBcXGAvYmFja2VuZFxcYDogRXhwcmVzcy5qcyBiYWNrZW5kIHNlcnZlclxuICBcbiMjIEZlYXR1cmVzXG5cbi0gSGluZGktbGFuZ3VhZ2Ugc2VhcmNoIGludGVyZmFjZVxuLSBXZWIgY3Jhd2xlciB3aXRoIGFkbWluIGRhc2hib2FyZFxuLSBCaWd0YWJsZS1pbnNwaXJlZCBOb1NRTCBkYXRhYmFzZSBcbi0gQmxvYnN0b3JlIHN5c3RlbSBmb3IgYmluYXJ5IGZpbGUgc3RvcmFnZVxuLSBGdWxsLXN0YWNrIGltcGxlbWVudGF0aW9uIHdpdGggRXhwcmVzcy5qcyBiYWNrZW5kXG5gKTtcbiAgICAgIFxuICAgICAgLy8gR2VuZXJhdGUgdGhlIHppcCBmaWxlXG4gICAgICBjb25zdCBibG9iID0gYXdhaXQgemlwLmdlbmVyYXRlQXN5bmMoeyB0eXBlOiBcImJsb2JcIiB9KTtcbiAgICAgIFxuICAgICAgLy8gQ3JlYXRlIGEgZG93bmxvYWQgbGluayBhbmQgdHJpZ2dlciBpdFxuICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBhLmhyZWYgPSB1cmw7XG4gICAgICBhLmRvd25sb2FkID0gXCJraG9qLXNlYXJjaC1lbmdpbmUuemlwXCI7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgICAgYS5jbGljaygpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcbiAgICAgIFxuICAgICAgc2V0Q29tcGxldGVkKHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2VuZXJhdGluZyBaSVAgZmlsZTpcIiwgZXJyb3IpO1xuICAgICAgYWxlcnQoXCJaSVAg4KSr4KS84KS+4KSH4KSyIOCkrOCkqOCkvuCkqOClhyDgpK7gpYfgpIIg4KSk4KWN4KSw4KWB4KSf4KS/IOCkueClgeCkiOClpCDgpJXgpYPgpKrgpK/gpL4g4KSr4KS/4KSwIOCkuOClhyDgpKrgpY3gpLDgpK/gpL7gpLgg4KSV4KSw4KWH4KSC4KWkXCIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXREb3dubG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuICBcbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGZldGNoIGEgZmlsZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgY29uc3QgZmV0Y2hGaWxlID0gYXN5bmMgKHBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocGF0aCk7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBmZXRjaGluZyAke3BhdGh9OmAsIGVycm9yKTtcbiAgICAgIHJldHVybiBgLy8gRXJyb3IgbG9hZGluZyAke3BhdGh9YDtcbiAgICB9XG4gIH07XG4gIFxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gYWRkIGRpcmVjdG9yeSBjb250ZW50cyB0byB6aXBcbiAgY29uc3QgYWRkRGlyZWN0b3J5VG9aaXAgPSBhc3luYyAoc291cmNlUGF0aDogc3RyaW5nLCB6aXBGb2xkZXI6IEpTWmlwKSA9PiB7XG4gICAgLy8gSW4gYSByZWFsIGFwcCwgd2Ugd291bGQgdXNlIHRoZSBmaWxlc3lzdGVtIEFQSSBvciBmZXRjaCBkaXJlY3RvcnkgY29udGVudHNcbiAgICAvLyBGb3Igc2ltcGxpY2l0eSBpbiB0aGlzIGRlbW8sIHdlJ2xsIG1hbnVhbGx5IGFkZCB0eXBpY2FsIGZpbGVzXG4gICAgXG4gICAgaWYgKHNvdXJjZVBhdGggPT09ICcvc3JjL2NvbXBvbmVudHMnKSB7XG4gICAgICB6aXBGb2xkZXIuZmlsZShcIlNlYXJjaEJhci50c3hcIiwgYXdhaXQgZmV0Y2hGaWxlKCcvc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyLnRzeCcpKTtcbiAgICAgIHppcEZvbGRlci5maWxlKFwiSGVhZGVyLnRzeFwiLCBhd2FpdCBmZXRjaEZpbGUoJy9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4JykpO1xuICAgICAgemlwRm9sZGVyLmZpbGUoXCJGb290ZXIudHN4XCIsIGF3YWl0IGZldGNoRmlsZSgnL3NyYy9jb21wb25lbnRzL0Zvb3Rlci50c3gnKSk7XG4gICAgICB6aXBGb2xkZXIuZmlsZShcIkRvd25sb2FkUHJvamVjdC50c3hcIiwgYXdhaXQgZmV0Y2hGaWxlKCcvc3JjL2NvbXBvbmVudHMvRG93bmxvYWRQcm9qZWN0LnRzeCcpKTtcbiAgICAgIFxuICAgICAgLy8gQWRkIHN1YmRpcmVjdG9yaWVzXG4gICAgICBjb25zdCBjcmF3bGluZ0ZvbGRlciA9IHppcEZvbGRlci5mb2xkZXIoXCJjcmF3bGluZ1wiKTtcbiAgICAgIGNyYXdsaW5nRm9sZGVyLmZpbGUoXCJDcmF3bEZvcm0udHN4XCIsIGF3YWl0IGZldGNoRmlsZSgnL3NyYy9jb21wb25lbnRzL2NyYXdsaW5nL0NyYXdsRm9ybS50c3gnKSk7XG4gICAgICBjcmF3bGluZ0ZvbGRlci5maWxlKFwiQ3Jhd2xTdGF0cy50c3hcIiwgYXdhaXQgZmV0Y2hGaWxlKCcvc3JjL2NvbXBvbmVudHMvY3Jhd2xpbmcvQ3Jhd2xTdGF0cy50c3gnKSk7XG4gICAgICBjcmF3bGluZ0ZvbGRlci5maWxlKFwiQ3Jhd2xIaXN0b3J5LnRzeFwiLCBhd2FpdCBmZXRjaEZpbGUoJy9zcmMvY29tcG9uZW50cy9jcmF3bGluZy9DcmF3bEhpc3RvcnkudHN4JykpO1xuICAgICAgY3Jhd2xpbmdGb2xkZXIuZmlsZShcIlBlcmZvcm1hbmNlQ2hhcnRzLnRzeFwiLCBhd2FpdCBmZXRjaEZpbGUoJy9zcmMvY29tcG9uZW50cy9jcmF3bGluZy9QZXJmb3JtYW5jZUNoYXJ0cy50c3gnKSk7XG4gICAgICBcbiAgICAgIGNvbnN0IGNvbW1vbkZvbGRlciA9IHppcEZvbGRlci5mb2xkZXIoXCJjb21tb25cIik7XG4gICAgICBjb21tb25Gb2xkZXIuZmlsZShcIkltYWdlQ2FyZC50c3hcIiwgYXdhaXQgZmV0Y2hGaWxlKCcvc3JjL2NvbXBvbmVudHMvY29tbW9uL0ltYWdlQ2FyZC50c3gnKSk7XG4gICAgfVxuICAgIFxuICAgIGlmIChzb3VyY2VQYXRoID09PSAnL3NyYy9wYWdlcycpIHtcbiAgICAgIHppcEZvbGRlci5maWxlKFwiSG9tZVBhZ2UudHN4XCIsIGF3YWl0IGZldGNoRmlsZSgnL3NyYy9wYWdlcy9Ib21lUGFnZS50c3gnKSk7XG4gICAgICB6aXBGb2xkZXIuZmlsZShcIlNlYXJjaFJlc3VsdHNQYWdlLnRzeFwiLCBhd2FpdCBmZXRjaEZpbGUoJy9zcmMvcGFnZXMvU2VhcmNoUmVzdWx0c1BhZ2UudHN4JykpO1xuICAgICAgemlwRm9sZGVyLmZpbGUoXCJBZG1pblBhZ2UudHN4XCIsIGF3YWl0IGZldGNoRmlsZSgnL3NyYy9wYWdlcy9BZG1pblBhZ2UudHN4JykpO1xuICAgICAgemlwRm9sZGVyLmZpbGUoXCJDcmF3bGVyRGFzaGJvYXJkLnRzeFwiLCBhd2FpdCBmZXRjaEZpbGUoJy9zcmMvcGFnZXMvQ3Jhd2xlckRhc2hib2FyZC50c3gnKSk7XG4gICAgICB6aXBGb2xkZXIuZmlsZShcIkJpZ3RhYmxlQWRtaW4udHN4XCIsIGF3YWl0IGZldGNoRmlsZSgnL3NyYy9wYWdlcy9CaWd0YWJsZUFkbWluLnRzeCcpKTtcbiAgICAgIHppcEZvbGRlci5maWxlKFwiQmxvYnN0b3JlQWRtaW4udHN4XCIsIGF3YWl0IGZldGNoRmlsZSgnL3NyYy9wYWdlcy9CbG9ic3RvcmVBZG1pbi50c3gnKSk7XG4gICAgfVxuICAgIFxuICAgIGlmIChzb3VyY2VQYXRoID09PSAnL3NyYy9zZXJ2aWNlcycpIHtcbiAgICAgIHppcEZvbGRlci5maWxlKFwiY3Jhd2xlci50c1wiLCBhd2FpdCBmZXRjaEZpbGUoJy9zcmMvc2VydmljZXMvY3Jhd2xlci50cycpKTtcbiAgICAgIFxuICAgICAgY29uc3QgYmlndGFibGVGb2xkZXIgPSB6aXBGb2xkZXIuZm9sZGVyKFwiYmlndGFibGVcIik7XG4gICAgICBiaWd0YWJsZUZvbGRlci5maWxlKFwiQmlndGFibGVTZXJ2aWNlLnRzXCIsIGF3YWl0IGZldGNoRmlsZSgnL3NyYy9zZXJ2aWNlcy9iaWd0YWJsZS9CaWd0YWJsZVNlcnZpY2UudHMnKSk7XG4gICAgICBiaWd0YWJsZUZvbGRlci5maWxlKFwiSW5kZXhTZXJ2aWNlLnRzXCIsIGF3YWl0IGZldGNoRmlsZSgnL3NyYy9zZXJ2aWNlcy9iaWd0YWJsZS9JbmRleFNlcnZpY2UudHMnKSk7XG4gICAgICBcbiAgICAgIGNvbnN0IGJsb2JzdG9yZUZvbGRlciA9IHppcEZvbGRlci5mb2xkZXIoXCJibG9ic3RvcmVcIik7XG4gICAgICBibG9ic3RvcmVGb2xkZXIuZmlsZShcIkJsb2JzdG9yZVNlcnZpY2UudHNcIiwgYXdhaXQgZmV0Y2hGaWxlKCcvc3JjL3NlcnZpY2VzL2Jsb2JzdG9yZS9CbG9ic3RvcmVTZXJ2aWNlLnRzJykpO1xuICAgICAgYmxvYnN0b3JlRm9sZGVyLmZpbGUoXCJCbG9iSW5kZXhTZXJ2aWNlLnRzXCIsIGF3YWl0IGZldGNoRmlsZSgnL3NyYy9zZXJ2aWNlcy9ibG9ic3RvcmUvQmxvYkluZGV4U2VydmljZS50cycpKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS00IHJpZ2h0LTQgei01MFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZH1cbiAgICAgICAgZGlzYWJsZWQ9e2Rvd25sb2FkaW5nfVxuICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTMgcm91bmRlZC1mdWxsICR7XG4gICAgICAgICAgY29tcGxldGVkIFxuICAgICAgICAgICAgPyBcImJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlXCIgXG4gICAgICAgICAgICA6IFwiYmctcHJpbWFyeSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgfSBzaGFkb3ctbGcgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsYH1cbiAgICAgID5cbiAgICAgICAge2Rvd25sb2FkaW5nID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtc3BpbiByb3VuZGVkLWZ1bGwgaC01IHctNSBib3JkZXItdC0yIGJvcmRlci1iLTIgYm9yZGVyLXdoaXRlIG1yLTJcIj48L2Rpdj5cbiAgICAgICAgICAgIOCkoeCkvuCkieCkqOCksuCli+CkoSDgpLngpYsg4KSw4KS54KS+IOCkueCliC4uLlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogY29tcGxldGVkID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8Q2hlY2sgc2l6ZT17MjB9IGNsYXNzTmFtZT1cIm1yLTJcIiAvPlxuICAgICAgICAgICAg4KSh4KS+4KSJ4KSo4KSy4KWL4KShIOCkquClguCksOCkviDgpLngpYHgpIYhXG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxEb3dubG9hZCBzaXplPXsyMH0gY2xhc3NOYW1lPVwibXItMlwiIC8+XG4gICAgICAgICAgICDgpKvgpY3gpLDgpILgpJ/gpI/gpILgpKEg4KSU4KSwIOCkrOCliOCkleCkj+CkguCkoSBaSVAg4KSh4KS+4KSJ4KSo4KSy4KWL4KShIOCkleCksOClh+CkglxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb3dubG9hZFByb2plY3Q7XG4gXG4iXSwiZmlsZSI6Ii9ob21lL3Byb2plY3Qvc3JjL2NvbXBvbmVudHMvRG93bmxvYWRQcm9qZWN0LnRzeCJ9
