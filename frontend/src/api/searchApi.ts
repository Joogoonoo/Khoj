const PROXY_URL = "https://hooks.jdoodle.net/proxy";
const API_BASE_URL = "http://localhost:5000/api";
const mockSuggestions = (query) => {
  return [
    `${query} समाचार`,
    `${query} विकिपीडिया`,
    `${query} का अर्थ क्या है`,
    `${query} 2023`,
    `${query} हिंदी में`
  ];
};
export const searchApi = {
  search: async (query) => {
    try {
      const results = [
        {
          url: "https://hi.wikipedia.org",
          title: `${query} - विकिपीडिया`,
          content: `यह पेज ${query} के बारे में विस्तृत जानकारी प्रदान करता है।`,
          description: `${query} के बारे में विस्तृत जानकारी। ${query} एक महत्वपूर्ण विषय है जिसके बारे में इस पृष्ठ पर विस्तार से बताया गया है।`,
          keywords: query.toLowerCase().split(/\s+/),
          lastCrawled: /* @__PURE__ */ new Date(),
          links: ["https://example.com"],
          statusCode: 200,
          contentType: "text/html",
          language: "hi",
          size: 15240
        },
        {
          url: "https://news.khoj.com",
          title: `${query} के बारे में जानिए - खोज न्यूज़`,
          content: `${query} से जुड़ी ताज़ा खबरें और अपडेट। ${query} से संबंधित सभी महत्वपूर्ण जानकारी।`,
          description: `${query} से जुड़ी ताज़ा खबरें और अपडेट। ${query} से संबंधित सभी महत्वपूर्ण जानकारी यहां उपलब्ध है।`,
          keywords: [...query.toLowerCase().split(/\s+/), "news", "updates"],
          lastCrawled: /* @__PURE__ */ new Date(),
          links: ["https://example.com"],
          statusCode: 200,
          contentType: "text/html",
          language: "hi",
          size: 25600
        },
        {
          url: `https://${query.toLowerCase().replace(/\s+/g, "")}.com`,
          title: `${query} - आधिकारिक वेबसाइट`,
          content: `${query} की आधिकारिक वेबसाइट पर आपका स्वागत है। हम ${query} के क्षेत्र में अग्रणी हैं।`,
          description: `${query} की आधिकारिक वेबसाइट पर आपका स्वागत है। हम ${query} के क्षेत्र में अग्रणी हैं।`,
          keywords: [...query.toLowerCase().split(/\s+/), "official", "website"],
          lastCrawled: /* @__PURE__ */ new Date(),
          links: ["https://example.com"],
          statusCode: 200,
          contentType: "text/html",
          language: "hi",
          size: 35840
        },
        {
          url: "https://dictionary.khoj.com",
          title: `${query} - खोज शब्दकोश`,
          content: `${query} का अर्थ और परिभाषा जानें। ${query} शब्द का अर्थ, उच्चारण और प्रयोग के उदाहरण।`,
          description: `${query} का अर्थ और परिभाषा जानें। ${query} शब्द का अर्थ, उच्चारण और प्रयोग के उदाहरण।`,
          keywords: [...query.toLowerCase().split(/\s+/), "meaning", "definition"],
          lastCrawled: /* @__PURE__ */ new Date(),
          links: ["https://example.com"],
          statusCode: 200,
          contentType: "text/html",
          language: "hi",
          size: 12800
        },
        {
          url: "https://videos.khoj.com",
          title: `${query} - वीडियो और ट्यूटोरियल`,
          content: `${query} से संबंधित वीडियो और ट्यूटोरियल देखें। सीखने के लिए सरल और प्रभावी तरीके।`,
          description: `${query} से संबंधित वीडियो और ट्यूटोरियल देखें। सीखने के लिए सरल और प्रभावी तरीके।`,
          keywords: [...query.toLowerCase().split(/\s+/), "videos", "tutorials"],
          lastCrawled: /* @__PURE__ */ new Date(),
          links: ["https://example.com"],
          statusCode: 200,
          contentType: "text/html",
          language: "hi",
          size: 45e3
        }
      ];
      return { results };
    } catch (error) {
      console.error("Search API error:", error);
      return { results: [] };
    }
  },
  getSuggestions: async (query) => {
    try {
      if (query.length < 2) {
        return { suggestions: [] };
      }
      const suggestions = mockSuggestions(query);
      return { suggestions };
    } catch (error) {
      console.error("Suggestions API error:", error);
      return { suggestions: [] };
    }
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaEFwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gVXNlIHRoZSBwcm94eSBzZXJ2ZXIgZm9yIGV4dGVybmFsIEFQSSByZXF1ZXN0c1xuY29uc3QgUFJPWFlfVVJMID0gJ2h0dHBzOi8vaG9va3MuamRvb2RsZS5uZXQvcHJveHknO1xuY29uc3QgQVBJX0JBU0VfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFJlc3VsdCB7XG4gIHVybDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGtleXdvcmRzOiBzdHJpbmdbXTtcbiAgbGFzdENyYXdsZWQ6IERhdGU7XG4gIGxpbmtzOiBzdHJpbmdbXTtcbiAgc3RhdHVzQ29kZTogbnVtYmVyO1xuICBjb250ZW50VHlwZTogc3RyaW5nO1xuICBsYW5ndWFnZTogc3RyaW5nO1xuICBzaXplOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoUmVzcG9uc2Uge1xuICByZXN1bHRzOiBTZWFyY2hSZXN1bHRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hTdWdnZXN0aW9uc1Jlc3BvbnNlIHtcbiAgc3VnZ2VzdGlvbnM6IHN0cmluZ1tdO1xufVxuXG4vLyBNb2NrIHN1Z2dlc3Rpb25zIGZvciBkaWZmZXJlbnQgcXVlcmllc1xuY29uc3QgbW9ja1N1Z2dlc3Rpb25zID0gKHF1ZXJ5OiBzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gIHJldHVybiBbXG4gICAgYCR7cXVlcnl9IOCkuOCkruCkvuCkmuCkvuCksGAsXG4gICAgYCR7cXVlcnl9IOCkteCkv+CkleCkv+CkquClgOCkoeCkv+Ckr+CkvmAsXG4gICAgYCR7cXVlcnl9IOCkleCkviDgpIXgpLDgpY3gpKUg4KSV4KWN4KSv4KS+IOCkueCliGAsXG4gICAgYCR7cXVlcnl9IDIwMjNgLFxuICAgIGAke3F1ZXJ5fSDgpLngpL/gpILgpKbgpYAg4KSu4KWH4KSCYFxuICBdO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlYXJjaEFwaSA9IHtcbiAgc2VhcmNoOiBhc3luYyAocXVlcnk6IHN0cmluZyk6IFByb21pc2U8U2VhcmNoUmVzcG9uc2U+ID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gRm9yIHNlYXJjaCwgaW1wbGVtZW50IGEgbG9jYWwgbW9jayB0byBhdm9pZCBwcm94eSBlcnJvcnNcbiAgICAgIC8vIEluIGEgcmVhbCBhcHAsIHRoaXMgd291bGQgdXNlIHByb3BlciBiYWNrZW5kIGludGVncmF0aW9uXG4gICAgICBcbiAgICAgIC8vIE1vY2sgc2VhcmNoIHJlc3VsdHNcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL2hpLndpa2lwZWRpYS5vcmcnLFxuICAgICAgICAgIHRpdGxlOiBgJHtxdWVyeX0gLSDgpLXgpL/gpJXgpL/gpKrgpYDgpKHgpL/gpK/gpL5gLFxuICAgICAgICAgIGNvbnRlbnQ6IGDgpK/gpLkg4KSq4KWH4KScICR7cXVlcnl9IOCkleClhyDgpKzgpL7gpLDgpYcg4KSu4KWH4KSCIOCkteCkv+CkuOCljeCkpOClg+CkpCDgpJzgpL7gpKjgpJXgpL7gpLDgpYAg4KSq4KWN4KSw4KSm4KS+4KSoIOCkleCksOCkpOCkviDgpLngpYjgpaRgLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBgJHtxdWVyeX0g4KSV4KWHIOCkrOCkvuCksOClhyDgpK7gpYfgpIIg4KS14KS/4KS44KWN4KSk4KWD4KSkIOCknOCkvuCkqOCkleCkvuCksOClgOClpCAke3F1ZXJ5fSDgpI/gpJUg4KSu4KS54KSk4KWN4KS14KSq4KWC4KSw4KWN4KSjIOCkteCkv+Ckt+CkryDgpLngpYgg4KSc4KS/4KS44KSV4KWHIOCkrOCkvuCksOClhyDgpK7gpYfgpIIg4KSH4KS4IOCkquClg+Ckt+CljeCkoCDgpKrgpLAg4KS14KS/4KS44KWN4KSk4KS+4KSwIOCkuOClhyDgpKzgpKTgpL7gpK/gpL4g4KSX4KSv4KS+IOCkueCliOClpGAsXG4gICAgICAgICAga2V5d29yZHM6IHF1ZXJ5LnRvTG93ZXJDYXNlKCkuc3BsaXQoL1xccysvKSxcbiAgICAgICAgICBsYXN0Q3Jhd2xlZDogbmV3IERhdGUoKSxcbiAgICAgICAgICBsaW5rczogWydodHRwczovL2V4YW1wbGUuY29tJ10sXG4gICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICAgIGNvbnRlbnRUeXBlOiAndGV4dC9odG1sJyxcbiAgICAgICAgICBsYW5ndWFnZTogJ2hpJyxcbiAgICAgICAgICBzaXplOiAxNTI0MFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9uZXdzLmtob2ouY29tJyxcbiAgICAgICAgICB0aXRsZTogYCR7cXVlcnl9IOCkleClhyDgpKzgpL7gpLDgpYcg4KSu4KWH4KSCIOCknOCkvuCkqOCkv+CkjyAtIOCkluCli+CknCDgpKjgpY3gpK/gpYLgpJzgpLxgLFxuICAgICAgICAgIGNvbnRlbnQ6IGAke3F1ZXJ5fSDgpLjgpYcg4KSc4KWB4KSh4KS84KWAIOCkpOCkvuCknOCkvOCkviDgpJbgpKzgpLDgpYfgpIIg4KSU4KSwIOCkheCkquCkoeClh+Ckn+ClpCAke3F1ZXJ5fSDgpLjgpYcg4KS44KSC4KSs4KSC4KSn4KS/4KSkIOCkuOCkreClgCDgpK7gpLngpKTgpY3gpLXgpKrgpYLgpLDgpY3gpKMg4KSc4KS+4KSo4KSV4KS+4KSw4KWA4KWkYCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogYCR7cXVlcnl9IOCkuOClhyDgpJzgpYHgpKHgpLzgpYAg4KSk4KS+4KSc4KS84KS+IOCkluCkrOCksOClh+CkgiDgpJTgpLAg4KSF4KSq4KSh4KWH4KSf4KWkICR7cXVlcnl9IOCkuOClhyDgpLjgpILgpKzgpILgpKfgpL/gpKQg4KS44KSt4KWAIOCkruCkueCkpOCljeCkteCkquClguCksOCljeCkoyDgpJzgpL7gpKjgpJXgpL7gpLDgpYAg4KSv4KS54KS+4KSCIOCkieCkquCksuCkrOCljeCkpyDgpLngpYjgpaRgLFxuICAgICAgICAgIGtleXdvcmRzOiBbLi4ucXVlcnkudG9Mb3dlckNhc2UoKS5zcGxpdCgvXFxzKy8pLCAnbmV3cycsICd1cGRhdGVzJ10sXG4gICAgICAgICAgbGFzdENyYXdsZWQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgbGlua3M6IFsnaHR0cHM6Ly9leGFtcGxlLmNvbSddLFxuICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgICBjb250ZW50VHlwZTogJ3RleHQvaHRtbCcsXG4gICAgICAgICAgbGFuZ3VhZ2U6ICdoaScsXG4gICAgICAgICAgc2l6ZTogMjU2MDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHVybDogYGh0dHBzOi8vJHtxdWVyeS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJycpfS5jb21gLFxuICAgICAgICAgIHRpdGxlOiBgJHtxdWVyeX0gLSDgpIbgpKfgpL/gpJXgpL7gpLDgpL/gpJUg4KS14KWH4KSs4KS44KS+4KSH4KSfYCxcbiAgICAgICAgICBjb250ZW50OiBgJHtxdWVyeX0g4KSV4KWAIOCkhuCkp+Ckv+CkleCkvuCksOCkv+CklSDgpLXgpYfgpKzgpLjgpL7gpIfgpJ8g4KSq4KSwIOCkhuCkquCkleCkviDgpLjgpY3gpLXgpL7gpJfgpKQg4KS54KWI4KWkIOCkueCkriAke3F1ZXJ5fSDgpJXgpYcg4KSV4KWN4KS34KWH4KSk4KWN4KSwIOCkruClh+CkgiDgpIXgpJfgpY3gpLDgpKPgpYAg4KS54KWI4KSC4KWkYCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogYCR7cXVlcnl9IOCkleClgCDgpIbgpKfgpL/gpJXgpL7gpLDgpL/gpJUg4KS14KWH4KSs4KS44KS+4KSH4KSfIOCkquCksCDgpIbgpKrgpJXgpL4g4KS44KWN4KS14KS+4KSX4KSkIOCkueCliOClpCDgpLngpK4gJHtxdWVyeX0g4KSV4KWHIOCkleCljeCkt+Clh+CkpOCljeCksCDgpK7gpYfgpIIg4KSF4KSX4KWN4KSw4KSj4KWAIOCkueCliOCkguClpGAsXG4gICAgICAgICAga2V5d29yZHM6IFsuLi5xdWVyeS50b0xvd2VyQ2FzZSgpLnNwbGl0KC9cXHMrLyksICdvZmZpY2lhbCcsICd3ZWJzaXRlJ10sXG4gICAgICAgICAgbGFzdENyYXdsZWQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgbGlua3M6IFsnaHR0cHM6Ly9leGFtcGxlLmNvbSddLFxuICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgICBjb250ZW50VHlwZTogJ3RleHQvaHRtbCcsXG4gICAgICAgICAgbGFuZ3VhZ2U6ICdoaScsXG4gICAgICAgICAgc2l6ZTogMzU4NDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vZGljdGlvbmFyeS5raG9qLmNvbScsXG4gICAgICAgICAgdGl0bGU6IGAke3F1ZXJ5fSAtIOCkluCli+CknCDgpLbgpKzgpY3gpKbgpJXgpYvgpLZgLFxuICAgICAgICAgIGNvbnRlbnQ6IGAke3F1ZXJ5fSDgpJXgpL4g4KSF4KSw4KWN4KSlIOCklOCksCDgpKrgpLDgpL/gpK3gpL7gpLfgpL4g4KSc4KS+4KSo4KWH4KSC4KWkICR7cXVlcnl9IOCktuCkrOCljeCkpiDgpJXgpL4g4KSF4KSw4KWN4KSlLCDgpIngpJrgpY3gpJrgpL7gpLDgpKMg4KSU4KSwIOCkquCljeCksOCkr+Cli+CklyDgpJXgpYcg4KSJ4KSm4KS+4KS54KSw4KSj4KWkYCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogYCR7cXVlcnl9IOCkleCkviDgpIXgpLDgpY3gpKUg4KSU4KSwIOCkquCksOCkv+CkreCkvuCkt+CkviDgpJzgpL7gpKjgpYfgpILgpaQgJHtxdWVyeX0g4KS24KSs4KWN4KSmIOCkleCkviDgpIXgpLDgpY3gpKUsIOCkieCkmuCljeCkmuCkvuCksOCkoyDgpJTgpLAg4KSq4KWN4KSw4KSv4KWL4KSXIOCkleClhyDgpIngpKbgpL7gpLngpLDgpKPgpaRgLFxuICAgICAgICAgIGtleXdvcmRzOiBbLi4ucXVlcnkudG9Mb3dlckNhc2UoKS5zcGxpdCgvXFxzKy8pLCAnbWVhbmluZycsICdkZWZpbml0aW9uJ10sXG4gICAgICAgICAgbGFzdENyYXdsZWQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgbGlua3M6IFsnaHR0cHM6Ly9leGFtcGxlLmNvbSddLFxuICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgICBjb250ZW50VHlwZTogJ3RleHQvaHRtbCcsXG4gICAgICAgICAgbGFuZ3VhZ2U6ICdoaScsXG4gICAgICAgICAgc2l6ZTogMTI4MDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vdmlkZW9zLmtob2ouY29tJyxcbiAgICAgICAgICB0aXRsZTogYCR7cXVlcnl9IC0g4KS14KWA4KSh4KS/4KSv4KWLIOCklOCksCDgpJ/gpY3gpK/gpYLgpJ/gpYvgpLDgpL/gpK/gpLJgLFxuICAgICAgICAgIGNvbnRlbnQ6IGAke3F1ZXJ5fSDgpLjgpYcg4KS44KSC4KSs4KSC4KSn4KS/4KSkIOCkteClgOCkoeCkv+Ckr+CliyDgpJTgpLAg4KSf4KWN4KSv4KWC4KSf4KWL4KSw4KS/4KSv4KSyIOCkpuClh+CkluClh+CkguClpCDgpLjgpYDgpJbgpKjgpYcg4KSV4KWHIOCksuCkv+CkjyDgpLjgpLDgpLIg4KSU4KSwIOCkquCljeCksOCkreCkvuCkteClgCDgpKTgpLDgpYDgpJXgpYfgpaRgLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBgJHtxdWVyeX0g4KS44KWHIOCkuOCkguCkrOCkguCkp+Ckv+CkpCDgpLXgpYDgpKHgpL/gpK/gpYsg4KSU4KSwIOCkn+CljeCkr+ClguCkn+Cli+CksOCkv+Ckr+CksiDgpKbgpYfgpJbgpYfgpILgpaQg4KS44KWA4KSW4KSo4KWHIOCkleClhyDgpLLgpL/gpI8g4KS44KSw4KSyIOCklOCksCDgpKrgpY3gpLDgpK3gpL7gpLXgpYAg4KSk4KSw4KWA4KSV4KWH4KWkYCxcbiAgICAgICAgICBrZXl3b3JkczogWy4uLnF1ZXJ5LnRvTG93ZXJDYXNlKCkuc3BsaXQoL1xccysvKSwgJ3ZpZGVvcycsICd0dXRvcmlhbHMnXSxcbiAgICAgICAgICBsYXN0Q3Jhd2xlZDogbmV3IERhdGUoKSxcbiAgICAgICAgICBsaW5rczogWydodHRwczovL2V4YW1wbGUuY29tJ10sXG4gICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICAgIGNvbnRlbnRUeXBlOiAndGV4dC9odG1sJyxcbiAgICAgICAgICBsYW5ndWFnZTogJ2hpJyxcbiAgICAgICAgICBzaXplOiA0NTAwMFxuICAgICAgICB9XG4gICAgICBdO1xuICAgICAgXG4gICAgICByZXR1cm4geyByZXN1bHRzIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1NlYXJjaCBBUEkgZXJyb3I6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgcmVzdWx0czogW10gfTtcbiAgICB9XG4gIH0sXG4gIFxuICBnZXRTdWdnZXN0aW9uczogYXN5bmMgKHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPFNlYXJjaFN1Z2dlc3Rpb25zUmVzcG9uc2U+ID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHF1ZXJ5Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VnZ2VzdGlvbnM6IFtdIH07XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIFVzZSBsb2NhbCBtb2NrIGZ1bmN0aW9uIGluc3RlYWQgb2YgQVBJIGNhbGxcbiAgICAgIC8vIFRoaXMgYXZvaWRzIHRoZSBEYXRhQ2xvbmVFcnJvciB3aXRoIHBvc3RNZXNzYWdlXG4gICAgICBjb25zdCBzdWdnZXN0aW9ucyA9IG1vY2tTdWdnZXN0aW9ucyhxdWVyeSk7XG4gICAgICByZXR1cm4geyBzdWdnZXN0aW9ucyB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdTdWdnZXN0aW9ucyBBUEkgZXJyb3I6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VnZ2VzdGlvbnM6IFtdIH07XG4gICAgfVxuICB9XG59O1xuIFxuIl0sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLFlBQVk7QUFDbEIsTUFBTSxlQUFlO0FBeUJyQixNQUFNLGtCQUFrQixDQUFDLFVBQTRCO0FBQ25ELFNBQU87QUFBQSxJQUNMLEdBQUcsS0FBSztBQUFBLElBQ1IsR0FBRyxLQUFLO0FBQUEsSUFDUixHQUFHLEtBQUs7QUFBQSxJQUNSLEdBQUcsS0FBSztBQUFBLElBQ1IsR0FBRyxLQUFLO0FBQUEsRUFDVjtBQUNGO0FBRU8sYUFBTSxZQUFZO0FBQUEsRUFDdkIsUUFBUSxPQUFPLFVBQTJDO0FBQ3hELFFBQUk7QUFLRixZQUFNLFVBQVU7QUFBQSxRQUNkO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxPQUFPLEdBQUcsS0FBSztBQUFBLFVBQ2YsU0FBUyxVQUFVLEtBQUs7QUFBQSxVQUN4QixhQUFhLEdBQUcsS0FBSyxpQ0FBaUMsS0FBSztBQUFBLFVBQzNELFVBQVUsTUFBTSxZQUFZLEVBQUUsTUFBTSxLQUFLO0FBQUEsVUFDekMsYUFBYSxvQkFBSSxLQUFLO0FBQUEsVUFDdEIsT0FBTyxDQUFDLHFCQUFxQjtBQUFBLFVBQzdCLFlBQVk7QUFBQSxVQUNaLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxVQUNWLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsS0FBSztBQUFBLFVBQ0wsT0FBTyxHQUFHLEtBQUs7QUFBQSxVQUNmLFNBQVMsR0FBRyxLQUFLLG1DQUFtQyxLQUFLO0FBQUEsVUFDekQsYUFBYSxHQUFHLEtBQUssbUNBQW1DLEtBQUs7QUFBQSxVQUM3RCxVQUFVLENBQUMsR0FBRyxNQUFNLFlBQVksRUFBRSxNQUFNLEtBQUssR0FBRyxRQUFRLFNBQVM7QUFBQSxVQUNqRSxhQUFhLG9CQUFJLEtBQUs7QUFBQSxVQUN0QixPQUFPLENBQUMscUJBQXFCO0FBQUEsVUFDN0IsWUFBWTtBQUFBLFVBQ1osYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFVBQ1YsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxLQUFLLFdBQVcsTUFBTSxZQUFZLEVBQUUsUUFBUSxRQUFRLEVBQUUsQ0FBQztBQUFBLFVBQ3ZELE9BQU8sR0FBRyxLQUFLO0FBQUEsVUFDZixTQUFTLEdBQUcsS0FBSyw4Q0FBOEMsS0FBSztBQUFBLFVBQ3BFLGFBQWEsR0FBRyxLQUFLLDhDQUE4QyxLQUFLO0FBQUEsVUFDeEUsVUFBVSxDQUFDLEdBQUcsTUFBTSxZQUFZLEVBQUUsTUFBTSxLQUFLLEdBQUcsWUFBWSxTQUFTO0FBQUEsVUFDckUsYUFBYSxvQkFBSSxLQUFLO0FBQUEsVUFDdEIsT0FBTyxDQUFDLHFCQUFxQjtBQUFBLFVBQzdCLFlBQVk7QUFBQSxVQUNaLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxVQUNWLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsS0FBSztBQUFBLFVBQ0wsT0FBTyxHQUFHLEtBQUs7QUFBQSxVQUNmLFNBQVMsR0FBRyxLQUFLLDhCQUE4QixLQUFLO0FBQUEsVUFDcEQsYUFBYSxHQUFHLEtBQUssOEJBQThCLEtBQUs7QUFBQSxVQUN4RCxVQUFVLENBQUMsR0FBRyxNQUFNLFlBQVksRUFBRSxNQUFNLEtBQUssR0FBRyxXQUFXLFlBQVk7QUFBQSxVQUN2RSxhQUFhLG9CQUFJLEtBQUs7QUFBQSxVQUN0QixPQUFPLENBQUMscUJBQXFCO0FBQUEsVUFDN0IsWUFBWTtBQUFBLFVBQ1osYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFVBQ1YsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxPQUFPLEdBQUcsS0FBSztBQUFBLFVBQ2YsU0FBUyxHQUFHLEtBQUs7QUFBQSxVQUNqQixhQUFhLEdBQUcsS0FBSztBQUFBLFVBQ3JCLFVBQVUsQ0FBQyxHQUFHLE1BQU0sWUFBWSxFQUFFLE1BQU0sS0FBSyxHQUFHLFVBQVUsV0FBVztBQUFBLFVBQ3JFLGFBQWEsb0JBQUksS0FBSztBQUFBLFVBQ3RCLE9BQU8sQ0FBQyxxQkFBcUI7QUFBQSxVQUM3QixZQUFZO0FBQUEsVUFDWixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsVUFDVixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFFQSxhQUFPLEVBQUUsUUFBUTtBQUFBLElBQ25CLFNBQVMsT0FBTztBQUNkLGNBQVEsTUFBTSxxQkFBcUIsS0FBSztBQUN4QyxhQUFPLEVBQUUsU0FBUyxDQUFDLEVBQUU7QUFBQSxJQUN2QjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLGdCQUFnQixPQUFPLFVBQXNEO0FBQzNFLFFBQUk7QUFDRixVQUFJLE1BQU0sU0FBUyxHQUFHO0FBQ3BCLGVBQU8sRUFBRSxhQUFhLENBQUMsRUFBRTtBQUFBLE1BQzNCO0FBSUEsWUFBTSxjQUFjLGdCQUFnQixLQUFLO0FBQ3pDLGFBQU8sRUFBRSxZQUFZO0FBQUEsSUFDdkIsU0FBUyxPQUFPO0FBQ2QsY0FBUSxNQUFNLDBCQUEwQixLQUFLO0FBQzdDLGFBQU8sRUFBRSxhQUFhLENBQUMsRUFBRTtBQUFBLElBQzNCO0FBQUEsRUFDRjtBQUNGOyIsIm5hbWVzIjpbXX0=