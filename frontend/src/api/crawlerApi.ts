const PROXY_URL = "https://hooks.jdoodle.net/proxy";
const API_BASE_URL = "http://localhost:5000/api";
const getMockStats = () => {
  return {
    totalUrls: 15487,
    crawledUrls: 12356,
    pendingUrls: 2845,
    failedUrls: 286,
    lastCrawlTime: /* @__PURE__ */ new Date(),
    averageCrawlTimeMs: 457
  };
};
const getMockCrawlResult = (url) => {
  return {
    url,
    title: `${url} - Sample Page`,
    description: "This is a sample description extracted from the page.",
    keywords: ["sample", "test", "crawler"],
    lastCrawled: /* @__PURE__ */ new Date(),
    status: Math.random() > 0.2 ? "success" : "error"
  };
};
const getMockRecentCrawls = (limit) => {
  const domains = [
    "example.com",
    "test.org",
    "sample-site.net",
    "demo.co.in",
    "testdata.com"
  ];
  return Array.from({ length: limit }, (_, i) => ({
    url: `https://www.${domains[i % domains.length]}/page-${i + 1}`,
    title: `Sample Page ${i + 1}`,
    description: `This is a description for sample page ${i + 1}. It would contain text extracted from the webpage.`,
    keywords: ["sample", "test", `keyword-${i}`],
    lastCrawled: new Date(Date.now() - Math.random() * 864e5),
    status: Math.random() > 0.15 ? "success" : "error"
  }));
};
const getMockVisualizationData = () => {
  const timeseriesData = Array.from({ length: 30 }, (_, i) => {
    const date = /* @__PURE__ */ new Date();
    date.setDate(date.getDate() - (29 - i));
    return {
      date: date.toISOString().split("T")[0],
      crawledPages: Math.floor(300 + Math.random() * 200),
      indexedPages: Math.floor(250 + Math.random() * 180),
      errors: Math.floor(Math.random() * 30)
    };
  });
  const contentTypeData = [
    { name: "HTML", value: 65 },
    { name: "PDF", value: 15 },
    { name: "Images", value: 12 },
    { name: "Video", value: 5 },
    { name: "Other", value: 3 }
  ];
  const domainDistribution = [
    { name: "example.com", value: 1245 },
    { name: "test.org", value: 834 },
    { name: "sample-site.net", value: 762 },
    { name: "demo.co.in", value: 621 },
    { name: "other domains", value: 2134 }
  ];
  return {
    timeseriesData,
    contentTypeData,
    domainDistribution
  };
};
export const crawlerApi = {
  getStats: async () => {
    try {
      return getMockStats();
    } catch (error) {
      console.error("Crawler stats API error:", error);
      throw error;
    }
  },
  crawlUrl: async (url) => {
    try {
      return {
        url,
        message: "URL added to crawl queue"
      };
    } catch (error) {
      console.error("Crawl URL API error:", error);
      throw error;
    }
  },
  getRecentCrawls: async (limit = 10) => {
    try {
      return getMockRecentCrawls(limit);
    } catch (error) {
      console.error("Recent crawls API error:", error);
      return [];
    }
  },
  getVisualizationData: async () => {
    try {
      return getMockVisualizationData();
    } catch (error) {
      console.error("Visualization data API error:", error);
      throw error;
    }
  }
};
