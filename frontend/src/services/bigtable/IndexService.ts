import { bigtableService } from "/src/services/bigtable/BigtableService.ts";
export class IndexService {
  // Index a webpage in the Bigtable database
  indexWebPage(page) {
    const rowKey = this.generateRowKey(page.url);
    const row = {
      rowKey,
      timestamp: Date.now(),
      columns: {
        "metadata:url": { value: page.url, timestamp: Date.now() },
        "metadata:title": { value: page.title, timestamp: Date.now() },
        "metadata:description": { value: page.description, timestamp: Date.now() },
        "metadata:lastCrawled": { value: page.lastCrawled.toISOString(), timestamp: Date.now() },
        "metadata:statusCode": { value: page.statusCode, timestamp: Date.now() },
        "metadata:contentType": { value: page.contentType, timestamp: Date.now() },
        "metadata:language": { value: page.language, timestamp: Date.now() },
        "metadata:size": { value: page.size, timestamp: Date.now() },
        "content:body": { value: page.content, timestamp: Date.now() },
        "content:keywords": { value: page.keywords.join(","), timestamp: Date.now() },
        "links:outbound": { value: page.links.join(","), timestamp: Date.now() },
        "ranking:pageRank": { value: 1, timestamp: Date.now() },
        // Initial page rank
        "ranking:relevanceScore": { value: 0, timestamp: Date.now() }
        // Will be calculated later
      }
    };
    bigtableService.upsertRow("webpages", row);
    this.updateKeywordsIndex(page);
  }
  // Create an inverted index for keywords
  updateKeywordsIndex(page) {
    const allKeywords = /* @__PURE__ */ new Set([
      ...page.keywords,
      ...page.title.toLowerCase().split(/\s+/),
      ...page.description.toLowerCase().split(/\s+/)
    ]);
    const filteredKeywords = Array.from(allKeywords).filter(
      (keyword) => keyword.length > 2 && !this.isCommonWord(keyword)
    );
    filteredKeywords.forEach((keyword) => {
      const rowKey = `${keyword}`;
      try {
        const existingRow = bigtableService.getRow("keywords", rowKey);
        if (existingRow) {
          const pagesValue = existingRow.columns["pages:urls"]?.value || "";
          const urls = new Set(pagesValue.split(",").filter(Boolean));
          urls.add(page.url);
          existingRow.columns["pages:urls"] = {
            value: Array.from(urls).join(","),
            timestamp: Date.now()
          };
          existingRow.columns["stats:count"] = {
            value: urls.size,
            timestamp: Date.now()
          };
          bigtableService.upsertRow("keywords", existingRow);
        } else {
          const newRow = {
            rowKey,
            timestamp: Date.now(),
            columns: {
              "pages:urls": { value: page.url, timestamp: Date.now() },
              "stats:count": { value: 1, timestamp: Date.now() }
            }
          };
          bigtableService.upsertRow("keywords", newRow);
        }
      } catch (error) {
        console.error(`Error updating keyword index for '${keyword}':`, error);
      }
    });
  }
  // Search for webpages containing specific keywords
  searchByKeywords(query) {
    const keywords = query.toLowerCase().split(/\s+/).filter((k) => k.length > 2 && !this.isCommonWord(k));
    if (keywords.length === 0) {
      return [];
    }
    const urlMatches = /* @__PURE__ */ new Map();
    keywords.forEach((keyword) => {
      try {
        const keywordRow = bigtableService.getRow("keywords", keyword);
        if (keywordRow && keywordRow.columns["pages:urls"]) {
          const urls = keywordRow.columns["pages:urls"].value.split(",");
          urls.forEach((url) => {
            const currentCount = urlMatches.get(url) || 0;
            urlMatches.set(url, currentCount + 1);
          });
        }
      } catch (error) {
        console.error(`Error searching for keyword '${keyword}':`, error);
      }
    });
    const results = [];
    for (const [url, matchCount] of urlMatches.entries()) {
      try {
        const rowKey = this.generateRowKey(url);
        const pageRow = bigtableService.getRow("webpages", rowKey);
        if (pageRow) {
          const page = {
            url: pageRow.columns["metadata:url"].value,
            title: pageRow.columns["metadata:title"].value,
            content: pageRow.columns["content:body"].value,
            description: pageRow.columns["metadata:description"].value,
            keywords: pageRow.columns["content:keywords"].value.split(","),
            lastCrawled: new Date(pageRow.columns["metadata:lastCrawled"].value),
            links: pageRow.columns["links:outbound"].value.split(","),
            statusCode: pageRow.columns["metadata:statusCode"].value,
            contentType: pageRow.columns["metadata:contentType"].value,
            language: pageRow.columns["metadata:language"].value,
            size: pageRow.columns["metadata:size"].value
          };
          const relevanceScore = matchCount / keywords.length;
          pageRow.columns["ranking:relevanceScore"] = {
            value: relevanceScore,
            timestamp: Date.now()
          };
          bigtableService.upsertRow("webpages", pageRow);
          results.push(page);
        }
      } catch (error) {
        console.error(`Error retrieving webpage data for URL '${url}':`, error);
      }
    }
    return results.sort((a, b) => {
      const aMatches = urlMatches.get(a.url) || 0;
      const bMatches = urlMatches.get(b.url) || 0;
      return bMatches - aMatches;
    });
  }
  // Check if a word is a common stop word (simplified)
  isCommonWord(word) {
    const commonWords = /* @__PURE__ */ new Set([
      "the",
      "of",
      "and",
      "a",
      "to",
      "in",
      "is",
      "you",
      "that",
      "it",
      "he",
      "was",
      "for",
      "on",
      "are",
      "as",
      "with",
      "his",
      "they",
      "at",
      "be",
      "this",
      "have",
      "from",
      "or",
      "one",
      "had",
      "by",
      "word",
      "but",
      "not",
      "what",
      "all",
      "were",
      "we",
      "when",
      "your",
      "can",
      "said",
      "there",
      "use",
      "an",
      "each",
      "which",
      "she",
      "do",
      "how",
      "their",
      "if",
      "will",
      "up",
      "other",
      "about",
      "out",
      "many",
      "then",
      "them",
      "these",
      "so",
      "some",
      "her",
      "would",
      "make",
      "like",
      "him",
      "into",
      "time",
      "has",
      "look",
      "two",
      "more",
      "write",
      "go",
      "see",
      "number",
      "no",
      "way",
      "could",
      "people",
      "my",
      "than",
      "first",
      "water",
      "been",
      "call",
      "who",
      "oil",
      "its",
      "now",
      "find",
      "long",
      "down",
      "day",
      "did",
      "get",
      "come",
      "made",
      "may",
      "part"
    ]);
    return commonWords.has(word.toLowerCase());
  }
  // Generate a deterministic row key from a URL
  generateRowKey(url) {
    try {
      const urlObj = new URL(url);
      const domain = urlObj.hostname;
      const domainParts = domain.split(".");
      const reversedDomain = domainParts.reverse().join(".");
      return `${reversedDomain}#${urlObj.pathname}#${Date.now()}`;
    } catch (error) {
      return `url_${url.replace(/[^a-zA-Z0-9]/g, "_")}`;
    }
  }
  // Get all indexed pages (with pagination)
  getIndexedPages(limit = 100, startKey) {
    const query = {
      limit,
      startKey
    };
    const rows = bigtableService.query("webpages", query);
    return rows.map((row) => {
      return {
        url: row.columns["metadata:url"].value,
        title: row.columns["metadata:title"].value,
        content: row.columns["content:body"].value,
        description: row.columns["metadata:description"].value,
        keywords: row.columns["content:keywords"].value.split(","),
        lastCrawled: new Date(row.columns["metadata:lastCrawled"].value),
        links: row.columns["links:outbound"].value.split(","),
        statusCode: row.columns["metadata:statusCode"].value,
        contentType: row.columns["metadata:contentType"].value,
        language: row.columns["metadata:language"].value,
        size: row.columns["metadata:size"].value
      };
    });
  }
  // Get table statistics
  getIndexStats() {
    const webpageStats = bigtableService.getTableStats("webpages");
    const keywordStats = bigtableService.getTableStats("keywords");
    return {
      webpages: webpageStats.rowCount,
      keywords: keywordStats.rowCount
    };
  }
}
export const indexService = new IndexService();
