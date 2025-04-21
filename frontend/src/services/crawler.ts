export const crawlUrl = async (url) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        url,
        title: `${url} - Sample Page`,
        description: "This is a sample description extracted from the page.",
        keywords: ["sample", "test", "crawler"],
        lastCrawled: /* @__PURE__ */ new Date(),
        status: Math.random() > 0.2 ? "success" : "error"
      });
    }, 1500);
  });
};
export const getCrawlStats = async () => {
  return {
    totalUrls: 15487,
    crawledUrls: 12356,
    pendingUrls: 2845,
    failedUrls: 286,
    lastCrawlTime: /* @__PURE__ */ new Date(),
    averageCrawlTimeMs: 457
  };
};
export const getRecentCrawls = async (limit = 10) => {
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
export const getCrawlDataForVisualization = async () => {
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
