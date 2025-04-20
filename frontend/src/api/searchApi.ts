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
  };
