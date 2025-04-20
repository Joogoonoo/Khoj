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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkluZGV4U2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIHsgYmlndGFibGVTZXJ2aWNlLCBCaWd0YWJsZVJvdyB9IGZyb20gJy4vQmlndGFibGVTZXJ2aWNlJztcblxuLy8gSW50ZXJmYWNlIGZvciBhIHdlYnBhZ2UgdG8gYmUgaW5kZXhlZFxuZXhwb3J0IGludGVyZmFjZSBXZWJQYWdlIHtcbiAgdXJsOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAga2V5d29yZHM6IHN0cmluZ1tdO1xuICBsYXN0Q3Jhd2xlZDogRGF0ZTtcbiAgbGlua3M6IHN0cmluZ1tdO1xuICBzdGF0dXNDb2RlOiBudW1iZXI7XG4gIGNvbnRlbnRUeXBlOiBzdHJpbmc7XG4gIGxhbmd1YWdlOiBzdHJpbmc7XG4gIHNpemU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEluZGV4U2VydmljZSB7XG4gIC8vIEluZGV4IGEgd2VicGFnZSBpbiB0aGUgQmlndGFibGUgZGF0YWJhc2VcbiAgcHVibGljIGluZGV4V2ViUGFnZShwYWdlOiBXZWJQYWdlKTogdm9pZCB7XG4gICAgY29uc3Qgcm93S2V5ID0gdGhpcy5nZW5lcmF0ZVJvd0tleShwYWdlLnVybCk7XG4gICAgXG4gICAgY29uc3Qgcm93OiBCaWd0YWJsZVJvdyA9IHtcbiAgICAgIHJvd0tleSxcbiAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgIGNvbHVtbnM6IHtcbiAgICAgICAgJ21ldGFkYXRhOnVybCc6IHsgdmFsdWU6IHBhZ2UudXJsLCB0aW1lc3RhbXA6IERhdGUubm93KCkgfSxcbiAgICAgICAgJ21ldGFkYXRhOnRpdGxlJzogeyB2YWx1ZTogcGFnZS50aXRsZSwgdGltZXN0YW1wOiBEYXRlLm5vdygpIH0sXG4gICAgICAgICdtZXRhZGF0YTpkZXNjcmlwdGlvbic6IHsgdmFsdWU6IHBhZ2UuZGVzY3JpcHRpb24sIHRpbWVzdGFtcDogRGF0ZS5ub3coKSB9LFxuICAgICAgICAnbWV0YWRhdGE6bGFzdENyYXdsZWQnOiB7IHZhbHVlOiBwYWdlLmxhc3RDcmF3bGVkLnRvSVNPU3RyaW5nKCksIHRpbWVzdGFtcDogRGF0ZS5ub3coKSB9LFxuICAgICAgICAnbWV0YWRhdGE6c3RhdHVzQ29kZSc6IHsgdmFsdWU6IHBhZ2Uuc3RhdHVzQ29kZSwgdGltZXN0YW1wOiBEYXRlLm5vdygpIH0sXG4gICAgICAgICdtZXRhZGF0YTpjb250ZW50VHlwZSc6IHsgdmFsdWU6IHBhZ2UuY29udGVudFR5cGUsIHRpbWVzdGFtcDogRGF0ZS5ub3coKSB9LFxuICAgICAgICAnbWV0YWRhdGE6bGFuZ3VhZ2UnOiB7IHZhbHVlOiBwYWdlLmxhbmd1YWdlLCB0aW1lc3RhbXA6IERhdGUubm93KCkgfSxcbiAgICAgICAgJ21ldGFkYXRhOnNpemUnOiB7IHZhbHVlOiBwYWdlLnNpemUsIHRpbWVzdGFtcDogRGF0ZS5ub3coKSB9LFxuICAgICAgICAnY29udGVudDpib2R5JzogeyB2YWx1ZTogcGFnZS5jb250ZW50LCB0aW1lc3RhbXA6IERhdGUubm93KCkgfSxcbiAgICAgICAgJ2NvbnRlbnQ6a2V5d29yZHMnOiB7IHZhbHVlOiBwYWdlLmtleXdvcmRzLmpvaW4oJywnKSwgdGltZXN0YW1wOiBEYXRlLm5vdygpIH0sXG4gICAgICAgICdsaW5rczpvdXRib3VuZCc6IHsgdmFsdWU6IHBhZ2UubGlua3Muam9pbignLCcpLCB0aW1lc3RhbXA6IERhdGUubm93KCkgfSxcbiAgICAgICAgJ3Jhbmtpbmc6cGFnZVJhbmsnOiB7IHZhbHVlOiAxLjAsIHRpbWVzdGFtcDogRGF0ZS5ub3coKSB9LCAvLyBJbml0aWFsIHBhZ2UgcmFua1xuICAgICAgICAncmFua2luZzpyZWxldmFuY2VTY29yZSc6IHsgdmFsdWU6IDAuMCwgdGltZXN0YW1wOiBEYXRlLm5vdygpIH0sIC8vIFdpbGwgYmUgY2FsY3VsYXRlZCBsYXRlclxuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLy8gQWRkIHRoZSB3ZWJwYWdlIHRvIHRoZSB3ZWJwYWdlcyB0YWJsZVxuICAgIGJpZ3RhYmxlU2VydmljZS51cHNlcnRSb3coJ3dlYnBhZ2VzJywgcm93KTtcbiAgICBcbiAgICAvLyBVcGRhdGUgdGhlIGtleXdvcmRzIGluZGV4XG4gICAgdGhpcy51cGRhdGVLZXl3b3Jkc0luZGV4KHBhZ2UpO1xuICB9XG4gIFxuICAvLyBDcmVhdGUgYW4gaW52ZXJ0ZWQgaW5kZXggZm9yIGtleXdvcmRzXG4gIHByaXZhdGUgdXBkYXRlS2V5d29yZHNJbmRleChwYWdlOiBXZWJQYWdlKTogdm9pZCB7XG4gICAgLy8gRXh0cmFjdCB1bmlxdWUga2V5d29yZHMgZnJvbSB0aXRsZSwgY29udGVudCwgYW5kIGtleXdvcmRzXG4gICAgY29uc3QgYWxsS2V5d29yZHMgPSBuZXcgU2V0PHN0cmluZz4oW1xuICAgICAgLi4ucGFnZS5rZXl3b3JkcyxcbiAgICAgIC4uLnBhZ2UudGl0bGUudG9Mb3dlckNhc2UoKS5zcGxpdCgvXFxzKy8pLFxuICAgICAgLi4ucGFnZS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLnNwbGl0KC9cXHMrLyksXG4gICAgXSk7XG4gICAgXG4gICAgLy8gRmlsdGVyIG91dCBjb21tb24gd29yZHMgYW5kIHNob3J0IHRlcm1zXG4gICAgY29uc3QgZmlsdGVyZWRLZXl3b3JkcyA9IEFycmF5LmZyb20oYWxsS2V5d29yZHMpLmZpbHRlcihrZXl3b3JkID0+IFxuICAgICAga2V5d29yZC5sZW5ndGggPiAyICYmICF0aGlzLmlzQ29tbW9uV29yZChrZXl3b3JkKVxuICAgICk7XG4gICAgXG4gICAgLy8gQWRkIGVhY2gga2V5d29yZCB0byB0aGUga2V5d29yZCBpbmRleFxuICAgIGZpbHRlcmVkS2V5d29yZHMuZm9yRWFjaChrZXl3b3JkID0+IHtcbiAgICAgIGNvbnN0IHJvd0tleSA9IGAke2tleXdvcmR9YDtcbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVHJ5IHRvIGdldCBleGlzdGluZyByb3dcbiAgICAgICAgY29uc3QgZXhpc3RpbmdSb3cgPSBiaWd0YWJsZVNlcnZpY2UuZ2V0Um93KCdrZXl3b3JkcycsIHJvd0tleSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoZXhpc3RpbmdSb3cpIHtcbiAgICAgICAgICAvLyBVcGRhdGUgZXhpc3Rpbmcgcm93IHdpdGggbmV3IHBhZ2UgVVJMXG4gICAgICAgICAgY29uc3QgcGFnZXNWYWx1ZSA9IGV4aXN0aW5nUm93LmNvbHVtbnNbJ3BhZ2VzOnVybHMnXT8udmFsdWUgYXMgc3RyaW5nIHx8ICcnO1xuICAgICAgICAgIGNvbnN0IHVybHMgPSBuZXcgU2V0KHBhZ2VzVmFsdWUuc3BsaXQoJywnKS5maWx0ZXIoQm9vbGVhbikpO1xuICAgICAgICAgIHVybHMuYWRkKHBhZ2UudXJsKTtcbiAgICAgICAgICBcbiAgICAgICAgICBleGlzdGluZ1Jvdy5jb2x1bW5zWydwYWdlczp1cmxzJ10gPSB7IFxuICAgICAgICAgICAgdmFsdWU6IEFycmF5LmZyb20odXJscykuam9pbignLCcpLCBcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSBcbiAgICAgICAgICB9O1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIFVwZGF0ZSBjb3VudFxuICAgICAgICAgIGV4aXN0aW5nUm93LmNvbHVtbnNbJ3N0YXRzOmNvdW50J10gPSB7IFxuICAgICAgICAgICAgdmFsdWU6IHVybHMuc2l6ZSwgXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCkgXG4gICAgICAgICAgfTtcbiAgICAgICAgICBcbiAgICAgICAgICBiaWd0YWJsZVNlcnZpY2UudXBzZXJ0Um93KCdrZXl3b3JkcycsIGV4aXN0aW5nUm93KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBDcmVhdGUgbmV3IGtleXdvcmQgcm93XG4gICAgICAgICAgY29uc3QgbmV3Um93OiBCaWd0YWJsZVJvdyA9IHtcbiAgICAgICAgICAgIHJvd0tleSxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIGNvbHVtbnM6IHtcbiAgICAgICAgICAgICAgJ3BhZ2VzOnVybHMnOiB7IHZhbHVlOiBwYWdlLnVybCwgdGltZXN0YW1wOiBEYXRlLm5vdygpIH0sXG4gICAgICAgICAgICAgICdzdGF0czpjb3VudCc6IHsgdmFsdWU6IDEsIHRpbWVzdGFtcDogRGF0ZS5ub3coKSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBcbiAgICAgICAgICBiaWd0YWJsZVNlcnZpY2UudXBzZXJ0Um93KCdrZXl3b3JkcycsIG5ld1Jvdyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHVwZGF0aW5nIGtleXdvcmQgaW5kZXggZm9yICcke2tleXdvcmR9JzpgLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIC8vIFNlYXJjaCBmb3Igd2VicGFnZXMgY29udGFpbmluZyBzcGVjaWZpYyBrZXl3b3Jkc1xuICBwdWJsaWMgc2VhcmNoQnlLZXl3b3JkcyhxdWVyeTogc3RyaW5nKTogV2ViUGFnZVtdIHtcbiAgICBjb25zdCBrZXl3b3JkcyA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCkuc3BsaXQoL1xccysvKS5maWx0ZXIoayA9PiBrLmxlbmd0aCA+IDIgJiYgIXRoaXMuaXNDb21tb25Xb3JkKGspKTtcbiAgICBcbiAgICBpZiAoa2V5d29yZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIFxuICAgIC8vIE1hcCBvZiBVUkwgdG8gbWF0Y2ggY291bnQgKGZvciByYW5raW5nIGJ5IHJlbGV2YW5jZSlcbiAgICBjb25zdCB1cmxNYXRjaGVzOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xuICAgIFxuICAgIC8vIEZvciBlYWNoIGtleXdvcmQsIGZpbmQgbWF0Y2hpbmcgcGFnZXNcbiAgICBrZXl3b3Jkcy5mb3JFYWNoKGtleXdvcmQgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qga2V5d29yZFJvdyA9IGJpZ3RhYmxlU2VydmljZS5nZXRSb3coJ2tleXdvcmRzJywga2V5d29yZCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoa2V5d29yZFJvdyAmJiBrZXl3b3JkUm93LmNvbHVtbnNbJ3BhZ2VzOnVybHMnXSkge1xuICAgICAgICAgIGNvbnN0IHVybHMgPSAoa2V5d29yZFJvdy5jb2x1bW5zWydwYWdlczp1cmxzJ10udmFsdWUgYXMgc3RyaW5nKS5zcGxpdCgnLCcpO1xuICAgICAgICAgIFxuICAgICAgICAgIHVybHMuZm9yRWFjaCh1cmwgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudENvdW50ID0gdXJsTWF0Y2hlcy5nZXQodXJsKSB8fCAwO1xuICAgICAgICAgICAgdXJsTWF0Y2hlcy5zZXQodXJsLCBjdXJyZW50Q291bnQgKyAxKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igc2VhcmNoaW5nIGZvciBrZXl3b3JkICcke2tleXdvcmR9JzpgLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLy8gQ29udmVydCBVUkxzIHRvIHBhZ2Ugb2JqZWN0cyBhbmQgc29ydCBieSByZWxldmFuY2VcbiAgICBjb25zdCByZXN1bHRzOiBXZWJQYWdlW10gPSBbXTtcbiAgICBcbiAgICBmb3IgKGNvbnN0IFt1cmwsIG1hdGNoQ291bnRdIG9mIHVybE1hdGNoZXMuZW50cmllcygpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByb3dLZXkgPSB0aGlzLmdlbmVyYXRlUm93S2V5KHVybCk7XG4gICAgICAgIGNvbnN0IHBhZ2VSb3cgPSBiaWd0YWJsZVNlcnZpY2UuZ2V0Um93KCd3ZWJwYWdlcycsIHJvd0tleSk7XG4gICAgICAgIFxuICAgICAgICBpZiAocGFnZVJvdykge1xuICAgICAgICAgIGNvbnN0IHBhZ2U6IFdlYlBhZ2UgPSB7XG4gICAgICAgICAgICB1cmw6IHBhZ2VSb3cuY29sdW1uc1snbWV0YWRhdGE6dXJsJ10udmFsdWUgYXMgc3RyaW5nLFxuICAgICAgICAgICAgdGl0bGU6IHBhZ2VSb3cuY29sdW1uc1snbWV0YWRhdGE6dGl0bGUnXS52YWx1ZSBhcyBzdHJpbmcsXG4gICAgICAgICAgICBjb250ZW50OiBwYWdlUm93LmNvbHVtbnNbJ2NvbnRlbnQ6Ym9keSddLnZhbHVlIGFzIHN0cmluZyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwYWdlUm93LmNvbHVtbnNbJ21ldGFkYXRhOmRlc2NyaXB0aW9uJ10udmFsdWUgYXMgc3RyaW5nLFxuICAgICAgICAgICAga2V5d29yZHM6IChwYWdlUm93LmNvbHVtbnNbJ2NvbnRlbnQ6a2V5d29yZHMnXS52YWx1ZSBhcyBzdHJpbmcpLnNwbGl0KCcsJyksXG4gICAgICAgICAgICBsYXN0Q3Jhd2xlZDogbmV3IERhdGUocGFnZVJvdy5jb2x1bW5zWydtZXRhZGF0YTpsYXN0Q3Jhd2xlZCddLnZhbHVlIGFzIHN0cmluZyksXG4gICAgICAgICAgICBsaW5rczogKHBhZ2VSb3cuY29sdW1uc1snbGlua3M6b3V0Ym91bmQnXS52YWx1ZSBhcyBzdHJpbmcpLnNwbGl0KCcsJyksXG4gICAgICAgICAgICBzdGF0dXNDb2RlOiBwYWdlUm93LmNvbHVtbnNbJ21ldGFkYXRhOnN0YXR1c0NvZGUnXS52YWx1ZSBhcyBudW1iZXIsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogcGFnZVJvdy5jb2x1bW5zWydtZXRhZGF0YTpjb250ZW50VHlwZSddLnZhbHVlIGFzIHN0cmluZyxcbiAgICAgICAgICAgIGxhbmd1YWdlOiBwYWdlUm93LmNvbHVtbnNbJ21ldGFkYXRhOmxhbmd1YWdlJ10udmFsdWUgYXMgc3RyaW5nLFxuICAgICAgICAgICAgc2l6ZTogcGFnZVJvdy5jb2x1bW5zWydtZXRhZGF0YTpzaXplJ10udmFsdWUgYXMgbnVtYmVyLFxuICAgICAgICAgIH07XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gVXBkYXRlIHJlbGV2YW5jZSBzY29yZSBiYXNlZCBvbiBtYXRjaCBjb3VudFxuICAgICAgICAgIGNvbnN0IHJlbGV2YW5jZVNjb3JlID0gbWF0Y2hDb3VudCAvIGtleXdvcmRzLmxlbmd0aDtcbiAgICAgICAgICBwYWdlUm93LmNvbHVtbnNbJ3Jhbmtpbmc6cmVsZXZhbmNlU2NvcmUnXSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiByZWxldmFuY2VTY29yZSxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxuICAgICAgICAgIH07XG4gICAgICAgICAgXG4gICAgICAgICAgYmlndGFibGVTZXJ2aWNlLnVwc2VydFJvdygnd2VicGFnZXMnLCBwYWdlUm93KTtcbiAgICAgICAgICByZXN1bHRzLnB1c2gocGFnZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHJldHJpZXZpbmcgd2VicGFnZSBkYXRhIGZvciBVUkwgJyR7dXJsfSc6YCwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBTb3J0IGJ5IHJlbGV2YW5jZSBzY29yZSAoaGlnaGVyIGlzIGJldHRlcilcbiAgICByZXR1cm4gcmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBhTWF0Y2hlcyA9IHVybE1hdGNoZXMuZ2V0KGEudXJsKSB8fCAwO1xuICAgICAgY29uc3QgYk1hdGNoZXMgPSB1cmxNYXRjaGVzLmdldChiLnVybCkgfHwgMDtcbiAgICAgIHJldHVybiBiTWF0Y2hlcyAtIGFNYXRjaGVzO1xuICAgIH0pO1xuICB9XG4gIFxuICAvLyBDaGVjayBpZiBhIHdvcmQgaXMgYSBjb21tb24gc3RvcCB3b3JkIChzaW1wbGlmaWVkKVxuICBwcml2YXRlIGlzQ29tbW9uV29yZCh3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBjb21tb25Xb3JkcyA9IG5ldyBTZXQoW1xuICAgICAgJ3RoZScsICdvZicsICdhbmQnLCAnYScsICd0bycsICdpbicsICdpcycsICd5b3UnLCAndGhhdCcsICdpdCcsICdoZScsICd3YXMnLCAnZm9yJywgJ29uJywgJ2FyZScsICdhcycsICd3aXRoJyxcbiAgICAgICdoaXMnLCAndGhleScsICdhdCcsICdiZScsICd0aGlzJywgJ2hhdmUnLCAnZnJvbScsICdvcicsICdvbmUnLCAnaGFkJywgJ2J5JywgJ3dvcmQnLCAnYnV0JywgJ25vdCcsICd3aGF0JyxcbiAgICAgICdhbGwnLCAnd2VyZScsICd3ZScsICd3aGVuJywgJ3lvdXInLCAnY2FuJywgJ3NhaWQnLCAndGhlcmUnLCAndXNlJywgJ2FuJywgJ2VhY2gnLCAnd2hpY2gnLCAnc2hlJywgJ2RvJywgJ2hvdycsXG4gICAgICAndGhlaXInLCAnaWYnLCAnd2lsbCcsICd1cCcsICdvdGhlcicsICdhYm91dCcsICdvdXQnLCAnbWFueScsICd0aGVuJywgJ3RoZW0nLCAndGhlc2UnLCAnc28nLCAnc29tZScsICdoZXInLCAnd291bGQnLFxuICAgICAgJ21ha2UnLCAnbGlrZScsICdoaW0nLCAnaW50bycsICd0aW1lJywgJ2hhcycsICdsb29rJywgJ3R3bycsICdtb3JlJywgJ3dyaXRlJywgJ2dvJywgJ3NlZScsICdudW1iZXInLCAnbm8nLCAnd2F5JyxcbiAgICAgICdjb3VsZCcsICdwZW9wbGUnLCAnbXknLCAndGhhbicsICdmaXJzdCcsICd3YXRlcicsICdiZWVuJywgJ2NhbGwnLCAnd2hvJywgJ29pbCcsICdpdHMnLCAnbm93JywgJ2ZpbmQnLCAnbG9uZycsXG4gICAgICAnZG93bicsICdkYXknLCAnZGlkJywgJ2dldCcsICdjb21lJywgJ21hZGUnLCAnbWF5JywgJ3BhcnQnXG4gICAgXSk7XG4gICAgXG4gICAgcmV0dXJuIGNvbW1vbldvcmRzLmhhcyh3b3JkLnRvTG93ZXJDYXNlKCkpO1xuICB9XG4gIFxuICAvLyBHZW5lcmF0ZSBhIGRldGVybWluaXN0aWMgcm93IGtleSBmcm9tIGEgVVJMXG4gIHByaXZhdGUgZ2VuZXJhdGVSb3dLZXkodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIFJldmVyc2UgdGhlIGRvbWFpbiBwYXJ0cyBmb3IgYmV0dGVyIHJvdyBkaXN0cmlidXRpb25cbiAgICB0cnkge1xuICAgICAgY29uc3QgdXJsT2JqID0gbmV3IFVSTCh1cmwpO1xuICAgICAgY29uc3QgZG9tYWluID0gdXJsT2JqLmhvc3RuYW1lO1xuICAgICAgY29uc3QgZG9tYWluUGFydHMgPSBkb21haW4uc3BsaXQoJy4nKTtcbiAgICAgIGNvbnN0IHJldmVyc2VkRG9tYWluID0gZG9tYWluUGFydHMucmV2ZXJzZSgpLmpvaW4oJy4nKTtcbiAgICAgIFxuICAgICAgLy8gRm9ybWF0OiBcInJldmVyc2VkX2RvbWFpbiNwYXRoI3RpbWVzdGFtcFwiXG4gICAgICByZXR1cm4gYCR7cmV2ZXJzZWREb21haW59IyR7dXJsT2JqLnBhdGhuYW1lfSMke0RhdGUubm93KCl9YDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSWYgVVJMIHBhcnNpbmcgZmFpbHMsIHVzZSBhIHNpbXBsZSBoYXNoXG4gICAgICByZXR1cm4gYHVybF8ke3VybC5yZXBsYWNlKC9bXmEtekEtWjAtOV0vZywgJ18nKX1gO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gR2V0IGFsbCBpbmRleGVkIHBhZ2VzICh3aXRoIHBhZ2luYXRpb24pXG4gIHB1YmxpYyBnZXRJbmRleGVkUGFnZXMobGltaXQ6IG51bWJlciA9IDEwMCwgc3RhcnRLZXk/OiBzdHJpbmcpOiBXZWJQYWdlW10ge1xuICAgIGNvbnN0IHF1ZXJ5ID0ge1xuICAgICAgbGltaXQsXG4gICAgICBzdGFydEtleVxuICAgIH07XG4gICAgXG4gICAgY29uc3Qgcm93cyA9IGJpZ3RhYmxlU2VydmljZS5xdWVyeSgnd2VicGFnZXMnLCBxdWVyeSk7XG4gICAgXG4gICAgcmV0dXJuIHJvd3MubWFwKHJvdyA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHJvdy5jb2x1bW5zWydtZXRhZGF0YTp1cmwnXS52YWx1ZSBhcyBzdHJpbmcsXG4gICAgICAgIHRpdGxlOiByb3cuY29sdW1uc1snbWV0YWRhdGE6dGl0bGUnXS52YWx1ZSBhcyBzdHJpbmcsXG4gICAgICAgIGNvbnRlbnQ6IHJvdy5jb2x1bW5zWydjb250ZW50OmJvZHknXS52YWx1ZSBhcyBzdHJpbmcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiByb3cuY29sdW1uc1snbWV0YWRhdGE6ZGVzY3JpcHRpb24nXS52YWx1ZSBhcyBzdHJpbmcsXG4gICAgICAgIGtleXdvcmRzOiAocm93LmNvbHVtbnNbJ2NvbnRlbnQ6a2V5d29yZHMnXS52YWx1ZSBhcyBzdHJpbmcpLnNwbGl0KCcsJyksXG4gICAgICAgIGxhc3RDcmF3bGVkOiBuZXcgRGF0ZShyb3cuY29sdW1uc1snbWV0YWRhdGE6bGFzdENyYXdsZWQnXS52YWx1ZSBhcyBzdHJpbmcpLFxuICAgICAgICBsaW5rczogKHJvdy5jb2x1bW5zWydsaW5rczpvdXRib3VuZCddLnZhbHVlIGFzIHN0cmluZykuc3BsaXQoJywnKSxcbiAgICAgICAgc3RhdHVzQ29kZTogcm93LmNvbHVtbnNbJ21ldGFkYXRhOnN0YXR1c0NvZGUnXS52YWx1ZSBhcyBudW1iZXIsXG4gICAgICAgIGNvbnRlbnRUeXBlOiByb3cuY29sdW1uc1snbWV0YWRhdGE6Y29udGVudFR5cGUnXS52YWx1ZSBhcyBzdHJpbmcsXG4gICAgICAgIGxhbmd1YWdlOiByb3cuY29sdW1uc1snbWV0YWRhdGE6bGFuZ3VhZ2UnXS52YWx1ZSBhcyBzdHJpbmcsXG4gICAgICAgIHNpemU6IHJvdy5jb2x1bW5zWydtZXRhZGF0YTpzaXplJ10udmFsdWUgYXMgbnVtYmVyLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICBcbiAgLy8gR2V0IHRhYmxlIHN0YXRpc3RpY3NcbiAgcHVibGljIGdldEluZGV4U3RhdHMoKTogeyB3ZWJwYWdlczogbnVtYmVyLCBrZXl3b3JkczogbnVtYmVyIH0ge1xuICAgIGNvbnN0IHdlYnBhZ2VTdGF0cyA9IGJpZ3RhYmxlU2VydmljZS5nZXRUYWJsZVN0YXRzKCd3ZWJwYWdlcycpO1xuICAgIGNvbnN0IGtleXdvcmRTdGF0cyA9IGJpZ3RhYmxlU2VydmljZS5nZXRUYWJsZVN0YXRzKCdrZXl3b3JkcycpO1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICB3ZWJwYWdlczogd2VicGFnZVN0YXRzLnJvd0NvdW50LFxuICAgICAga2V5d29yZHM6IGtleXdvcmRTdGF0cy5yb3dDb3VudFxuICAgIH07XG4gIH1cbn1cblxuLy8gRXhwb3J0IHNpbmdsZXRvbiBpbnN0YW5jZVxuZXhwb3J0IGNvbnN0IGluZGV4U2VydmljZSA9IG5ldyBJbmRleFNlcnZpY2UoKTtcbiBcbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBVSx1QkFBb0M7QUFpQnZDLGFBQU0sYUFBYTtBQUFBO0FBQUEsRUFFakIsYUFBYSxNQUFxQjtBQUN2QyxVQUFNLFNBQVMsS0FBSyxlQUFlLEtBQUssR0FBRztBQUUzQyxVQUFNLE1BQW1CO0FBQUEsTUFDdkI7QUFBQSxNQUNBLFdBQVcsS0FBSyxJQUFJO0FBQUEsTUFDcEIsU0FBUztBQUFBLFFBQ1AsZ0JBQWdCLEVBQUUsT0FBTyxLQUFLLEtBQUssV0FBVyxLQUFLLElBQUksRUFBRTtBQUFBLFFBQ3pELGtCQUFrQixFQUFFLE9BQU8sS0FBSyxPQUFPLFdBQVcsS0FBSyxJQUFJLEVBQUU7QUFBQSxRQUM3RCx3QkFBd0IsRUFBRSxPQUFPLEtBQUssYUFBYSxXQUFXLEtBQUssSUFBSSxFQUFFO0FBQUEsUUFDekUsd0JBQXdCLEVBQUUsT0FBTyxLQUFLLFlBQVksWUFBWSxHQUFHLFdBQVcsS0FBSyxJQUFJLEVBQUU7QUFBQSxRQUN2Rix1QkFBdUIsRUFBRSxPQUFPLEtBQUssWUFBWSxXQUFXLEtBQUssSUFBSSxFQUFFO0FBQUEsUUFDdkUsd0JBQXdCLEVBQUUsT0FBTyxLQUFLLGFBQWEsV0FBVyxLQUFLLElBQUksRUFBRTtB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
