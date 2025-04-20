import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/crawling/CrawlForm.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3859ff4e"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/home/project/src/components/crawling/CrawlForm.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=3859ff4e"; const useState = __vite__cjsImport3_react["useState"];
import { Search, Plus } from "/node_modules/.vite/deps/lucide-react.js?v=3859ff4e";
import { crawlerApi } from "/src/api/crawlerApi.ts";
const CrawlForm = () => {
  _s();
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) {
      setError("कृपया एक वैध URL दर्ज करें");
      return;
    }
    try {
      setIsLoading(true);
      setError("");
      const response = await crawlerApi.crawlUrl(url);
      setResult({
        url: response.url,
        message: response.message,
        status: "pending"
      });
      setTimeout(() => {
        setResult({
          url,
          title: `${url} - Sample Page`,
          description: "This is a sample description extracted from the page.",
          keywords: ["sample", "test", "crawler"],
          lastCrawled: /* @__PURE__ */ new Date(),
          status: Math.random() > 0.2 ? "success" : "error"
        });
      }, 2e3);
    } catch (err) {
      setError("क्रॉलिंग के दौरान एक त्रुटि हुई");
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
    /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold mb-4", children: "नई वेबसाइट क्रॉल करें" }, void 0, false, {
      fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxDEV("div", { className: "flex mb-4", children: [
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          type: "url",
          value: url,
          onChange: (e) => setUrl(e.target.value),
          placeholder: "https://example.com",
          className: "flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
        },
        void 0,
        false,
        {
          fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
          lineNumber: 54,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          type: "submit",
          disabled: isLoading,
          className: "bg-primary text-white px-4 py-2 rounded-r-lg flex items-center",
          children: isLoading ? "क्रॉल कर रहा है..." : /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV(Search, { size: 16, className: "mr-2" }, void 0, false, {
              fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
              lineNumber: 68,
              columnNumber: 17
            }, this),
            "क्रॉल करें"
          ] }, void 0, true, {
            fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
          lineNumber: 61,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    error && /* @__PURE__ */ jsxDEV("div", { className: "bg-red-50 text-red-600 p-3 rounded mb-4", children: error }, void 0, false, {
      fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    result && /* @__PURE__ */ jsxDEV("div", { className: `p-4 rounded ${result.status === "pending" ? "bg-yellow-50" : result.status === "success" ? "bg-green-50" : "bg-red-50"}`, children: [
      /* @__PURE__ */ jsxDEV("h3", { className: "font-semibold text-lg mb-2", children: [
        "क्रॉल ",
        result.status === "pending" ? "प्रगति पर है" : result.status === "success" ? "परिणाम" : "विफल"
      ] }, void 0, true, {
        fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: [
        /* @__PURE__ */ jsxDEV("strong", { children: "URL:" }, void 0, false, {
          fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
          lineNumber: 85,
          columnNumber: 14
        }, this),
        " ",
        result.url
      ] }, void 0, true, {
        fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this),
      result.title && /* @__PURE__ */ jsxDEV("p", { children: [
        /* @__PURE__ */ jsxDEV("strong", { children: "शीर्षक:" }, void 0, false, {
          fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
          lineNumber: 86,
          columnNumber: 31
        }, this),
        " ",
        result.title
      ] }, void 0, true, {
        fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
        lineNumber: 86,
        columnNumber: 28
      }, this),
      result.description && /* @__PURE__ */ jsxDEV("p", { children: [
        /* @__PURE__ */ jsxDEV("strong", { children: "विवरण:" }, void 0, false, {
          fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
          lineNumber: 87,
          columnNumber: 37
        }, this),
        " ",
        result.description
      ] }, void 0, true, {
        fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
        lineNumber: 87,
        columnNumber: 34
      }, this),
      result.keywords && /* @__PURE__ */ jsxDEV("p", { children: [
        /* @__PURE__ */ jsxDEV("strong", { children: "कीवर्ड:" }, void 0, false, {
          fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
          lineNumber: 88,
          columnNumber: 34
        }, this),
        " ",
        result.keywords.join(", ")
      ] }, void 0, true, {
        fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
        lineNumber: 88,
        columnNumber: 31
      }, this),
      result.status === "pending" && /* @__PURE__ */ jsxDEV("div", { className: "mt-2 flex items-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-primary mr-2" }, void 0, false, {
          fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
          lineNumber: 91,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-gray-600", children: "प्रतीक्षा करें, वेबसाइट क्रॉल हो रही है..." }, void 0, false, {
          fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
          lineNumber: 92,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsxDEV("h3", { className: "font-medium mb-2", children: "बड़ी मात्रा में क्रॉल करें" }, void 0, false, {
        fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded", children: [
        /* @__PURE__ */ jsxDEV(Plus, { size: 16, className: "mr-2" }, void 0, false, {
          fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this),
        "CSV फ़ाइल अपलोड करें"
      ] }, void 0, true, {
        fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/project/src/components/crawling/CrawlForm.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
};
_s(CrawlForm, "INf17Xxat9REWahkPzrGmUFtotA=");
_c = CrawlForm;
export default CrawlForm;
var _c;
$RefreshReg$(_c, "CrawlForm");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/components/crawling/CrawlForm.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/components/crawling/CrawlForm.tsx", currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
