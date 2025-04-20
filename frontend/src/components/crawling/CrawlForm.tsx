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

//# sourceMappingURL=data:application/json;base64,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eEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFrRjtBQUFBLFdBRnBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFHQTtBQUFBLFNBVko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVlBO0FBQUEsSUFHRix1QkFBQyxTQUFJLFdBQVUsUUFDYjtBQUFBLDZCQUFDLFFBQUcsV0FBVSxvQkFBbUIsMENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBMkQ7QUFBQSxNQUMzRCx1QkFBQyxZQUFPLFdBQVUsbUZBQ2hCO0FBQUEsK0JBQUMsUUFBSyxNQUFNLElBQUksV0FBVSxVQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWdDO0FBQUE7QUFBQSxXQURsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBR0E7QUFBQSxTQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FNQTtBQUFBLE9BdkRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F3REE7QUFFSjtBQUFFaEIsR0F0R0lELFdBQVM7QUFBQThCLEtBQVQ5QjtBQXdHTixlQUFlQTtBQUFVLElBQUE4QjtBQUFBQyxhQUFBRCxJQUFBIiwibmFtZXMiOlsiU2VhcmNoIiwiUGx1cyIsImNyYXdsZXJBcGkiLCJDcmF3bEZvcm0iLCJfcyIsInVybCIsInNldFVybCIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiY3Jhd2xVcmwiLCJtZXNzYWdlIiwic3RhdHVzIiwic2V0VGltZW91dCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsImxhc3RDcmF3bGVkIiwiRGF0ZSIsIk1hdGgiLCJyYW5kb20iLCJlcnIiLCJ0YXJnZXQiLCJ2YWx1ZSIsImpvaW4iLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VzIjpbIkNyYXdsRm9ybS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VhcmNoLCBQbHVzIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IGNyYXdsZXJBcGkgfSBmcm9tICcuLi8uLi9hcGkvY3Jhd2xlckFwaSc7XG5cbmNvbnN0IENyYXdsRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHNldEVycm9yKCfgpJXgpYPgpKrgpK/gpL4g4KSP4KSVIOCkteCliOCkpyBVUkwg4KSm4KSw4KWN4KScIOCkleCksOClh+CkgicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB0cnkge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgc2V0RXJyb3IoJycpO1xuICAgICAgXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNyYXdsZXJBcGkuY3Jhd2xVcmwodXJsKTtcbiAgICAgIHNldFJlc3VsdCh7XG4gICAgICAgIHVybDogcmVzcG9uc2UudXJsLFxuICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5tZXNzYWdlLFxuICAgICAgICBzdGF0dXM6ICdwZW5kaW5nJ1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIC8vIFBvbGwgZm9yIHVwZGF0ZXMgKGluIGEgcmVhbCBhcHAsIHRoaXMgd291bGQgYmUgaGFuZGxlZCBieSBXZWJTb2NrZXRzIG9yIFNlcnZlci1TZW50IEV2ZW50cylcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRSZXN1bHQoe1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICB0aXRsZTogYCR7dXJsfSAtIFNhbXBsZSBQYWdlYCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBzYW1wbGUgZGVzY3JpcHRpb24gZXh0cmFjdGVkIGZyb20gdGhlIHBhZ2UuJyxcbiAgICAgICAgICBrZXl3b3JkczogWydzYW1wbGUnLCAndGVzdCcsICdjcmF3bGVyJ10sXG4gICAgICAgICAgbGFzdENyYXdsZWQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgc3RhdHVzOiBNYXRoLnJhbmRvbSgpID4gMC4yID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJ1xuICAgICAgICB9KTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RXJyb3IoJ+CkleCljeCksOClieCksuCkv+CkguCklyDgpJXgpYcg4KSm4KWM4KSw4KS+4KSoIOCkj+CklSDgpKTgpY3gpLDgpYHgpJ/gpL8g4KS54KWB4KSIJyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTYgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XCI+4KSo4KSIIOCkteClh+CkrOCkuOCkvuCkh+CknyDgpJXgpY3gpLDgpYngpLIg4KSV4KSw4KWH4KSCPC9oMj5cbiAgICAgIFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtYi00XCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidXJsXCJcbiAgICAgICAgICAgIHZhbHVlPXt1cmx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVybChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHBzOi8vZXhhbXBsZS5jb21cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHJpbWFyeVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtci1sZyBmbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzTG9hZGluZyA/ICfgpJXgpY3gpLDgpYngpLIg4KSV4KSwIOCksOCkueCkviDgpLngpYguLi4nIDogXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPFNlYXJjaCBzaXplPXsxNn0gY2xhc3NOYW1lPVwibXItMlwiIC8+XG4gICAgICAgICAgICAgICAg4KSV4KWN4KSw4KWJ4KSyIOCkleCksOClh+CkglxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICBcbiAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTUwIHRleHQtcmVkLTYwMCBwLTMgcm91bmRlZCBtYi00XCI+XG4gICAgICAgICAge2Vycm9yfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICBcbiAgICAgIHtyZXN1bHQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHAtNCByb3VuZGVkICR7cmVzdWx0LnN0YXR1cyA9PT0gJ3BlbmRpbmcnID8gJ2JnLXllbGxvdy01MCcgOiByZXN1bHQuc3RhdHVzID09PSAnc3VjY2VzcycgPyAnYmctZ3JlZW4tNTAnIDogJ2JnLXJlZC01MCd9YH0+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1sZyBtYi0yXCI+4KSV4KWN4KSw4KWJ4KSyIHtyZXN1bHQuc3RhdHVzID09PSAncGVuZGluZycgPyAn4KSq4KWN4KSw4KSX4KSk4KS/IOCkquCksCDgpLngpYgnIDogcmVzdWx0LnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnID8gJ+CkquCksOCkv+Cko+CkvuCkricgOiAn4KS14KS/4KSr4KSyJ308L2gzPlxuICAgICAgICAgIDxwPjxzdHJvbmc+VVJMOjwvc3Ryb25nPiB7cmVzdWx0LnVybH08L3A+XG4gICAgICAgICAge3Jlc3VsdC50aXRsZSAmJiA8cD48c3Ryb25nPuCktuClgOCksOCljeCkt+CklTo8L3N0cm9uZz4ge3Jlc3VsdC50aXRsZX08L3A+fVxuICAgICAgICAgIHtyZXN1bHQuZGVzY3JpcHRpb24gJiYgPHA+PHN0cm9uZz7gpLXgpL/gpLXgpLDgpKM6PC9zdHJvbmc+IHtyZXN1bHQuZGVzY3JpcHRpb259PC9wPn1cbiAgICAgICAgICB7cmVzdWx0LmtleXdvcmRzICYmIDxwPjxzdHJvbmc+4KSV4KWA4KS14KSw4KWN4KShOjwvc3Ryb25nPiB7cmVzdWx0LmtleXdvcmRzLmpvaW4oJywgJyl9PC9wPn1cbiAgICAgICAgICB7cmVzdWx0LnN0YXR1cyA9PT0gJ3BlbmRpbmcnICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtc3BpbiByb3VuZGVkLWZ1bGwgaC00IHctNCBib3JkZXItdC0yIGJvcmRlci1iLTIgYm9yZGVyLXByaW1hcnkgbXItMlwiPjwvZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj7gpKrgpY3gpLDgpKTgpYDgpJXgpY3gpLfgpL4g4KSV4KSw4KWH4KSCLCDgpLXgpYfgpKzgpLjgpL7gpIfgpJ8g4KSV4KWN4KSw4KWJ4KSyIOCkueCliyDgpLDgpLngpYAg4KS54KWILi4uPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIG1iLTJcIj7gpKzgpKHgpLzgpYAg4KSu4KS+4KSk4KWN4KSw4KS+IOCkruClh+CkgiDgpJXgpY3gpLDgpYngpLIg4KSV4KSw4KWH4KSCPC9oMz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBiZy1ncmF5LTEwMCBob3ZlcjpiZy1ncmF5LTIwMCB0ZXh0LWdyYXktODAwIHB4LTQgcHktMiByb3VuZGVkXCI+XG4gICAgICAgICAgPFBsdXMgc2l6ZT17MTZ9IGNsYXNzTmFtZT1cIm1yLTJcIiAvPlxuICAgICAgICAgIENTViDgpKvgpLzgpL7gpIfgpLIg4KSF4KSq4KSy4KWL4KShIOCkleCksOClh+CkglxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3Jhd2xGb3JtO1xuIFxuIl0sImZpbGUiOiIvaG9tZS9wcm9qZWN0L3NyYy9jb21wb25lbnRzL2NyYXdsaW5nL0NyYXdsRm9ybS50c3gifQ==
