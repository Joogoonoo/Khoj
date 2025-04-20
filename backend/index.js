import __vite__cjsImport0_express from "/node_modules/.vite/deps/express.js?v=efaecb53"; const express = __vite__cjsImport0_express.__esModule ? __vite__cjsImport0_express.default : __vite__cjsImport0_express;
import __vite__cjsImport1_cors from "/node_modules/.vite/deps/cors.js?v=0b413971"; const cors = __vite__cjsImport1_cors.__esModule ? __vite__cjsImport1_cors.default : __vite__cjsImport1_cors;
import __vite__cjsImport2_bodyParser from "/node_modules/.vite/deps/body-parser.js?v=57576748"; const bodyParser = __vite__cjsImport2_bodyParser.__esModule ? __vite__cjsImport2_bodyParser.default : __vite__cjsImport2_bodyParser;
import __vite__cjsImport3_url from "/@id/__vite-browser-external:url"; const fileURLToPath = __vite__cjsImport3_url["fileURLToPath"];
import __vite__cjsImport4_path from "/@id/__vite-browser-external:path"; const dirname = __vite__cjsImport4_path["dirname"]; const join = __vite__cjsImport4_path["join"];

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Data storage (in-memory for now)
const searchResults = [];
const crawledPages = [];
const crawlQueue = [];

// Create Express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app after build
app.use(express.static(join(__dirname, '../dist')));

// API Routes
app.get('/api/search', (req, res) => {
  const query = req.query.q || '';
  
  // Simple search function that filters mock data
  const results = getMockResults(query);
  
  // Add to search history
  if (query) {
    searchResults.push({
      query,
      timestamp: new Date(),
      resultCount: results.length
    });
  }
  
  res.json({ results });
});

app.get('/api/search/suggestions', (req, res) => {
  const query = req.query.q || '';
  
  if (query.length < 2) {
    return res.json({ suggestions: [] });
  }
  
  // Generate mock suggestions
  const suggestions = [
    `${query} समाचार`,
    `${query} विकिपीडिया`,
    `${query} का अर्थ क्या है`,
    `${query} 2023`,
    `${query} हिंदी में`
  ];
  
  res.json({ suggestions });
});

app.get('/api/crawler/stats', (req, res) => {
  res.json({
    totalUrls: 15487,
    crawledUrls: 12356,
    pendingUrls: 2845,
    failedUrls: 286,
    lastCrawlTime: new Date(),
    averageCrawlTimeMs: 457
  });
});

app.post('/api/crawler/crawl', (req, res) => {
  const { url } = req.body;
  
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }
  
  // Add to crawl queue
  const crawlRequest = {
    url,
    timestamp: new Date(),
    status: 'pending'
  };
  
  crawlQueue.push(crawlRequest);
  
  // Simulate crawling process
  setTimeout(() => {
    const crawlResult = {
      url,
      title: `${url} - Sample Page`,
      description: 'This is a sample description extracted from the page.',
      keywords: ['sample', 'test', 'crawler'],
      lastCrawled: new Date(),
      status: Math.random() > 0.2 ? 'success' : 'error'
    };
    
    crawledPages.push(crawlResult);
    
    // Update status in queue
    const queueItem = crawlQueue.find(item => item.url === url);
    if (queueItem) {
      queueItem.status = crawlResult.status;
    }
  }, 2000);
  
  res.json({ message: 'URL added to crawl queue', url });
});

app.get('/api/crawler/recent', (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  res.json(crawledPages.slice(0, limit));
});

app.get('/api/analytics/search-history', (req, res) => {
  const limit = parseInt(req.query.limit) || 100;
  res.json(searchResults.slice(0, limit));
});

app.get('/api/crawler/visualization', (req, res) => {
  // Simulated data for visualizations
  const timeseriesData = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    
    return {
      date: date.toISOString().split('T')[0],
      crawledPages: Math.floor(300 + Math.random() * 200),
      indexedPages: Math.floor(250 + Math.random() * 180),
      errors: Math.floor(Math.random() * 30)
    };
  });
  
  const contentTypeData = [
    { name: 'HTML', value: 65 },
    { name: 'PDF', value: 15 },
    { name: 'Images', value: 12 },
    { name: 'Video', value: 5 },
    { name: 'Other', value: 3 }
  ];
  
  const domainDistribution = [
    { name: 'example.com', value: 1245 },
    { name: 'test.org', value: 834 },
    { name: 'sample-site.net', value: 762 },
    { name: 'demo.co.in', value: 621 },
    { name: 'other domains', value: 2134 }
  ];
  
  res.json({
    timeseriesData,
    contentTypeData,
    domainDistribution
  });
});

// Mock function to generate search results
function getMockResults(searchQuery) {
  return [
    {
      url: 'https://hi.wikipedia.org',
      title: `${searchQuery} - विकिपीडिया`,
      content: `यह पेज ${searchQuery} के बारे में विस्तृत जानकारी प्रदान करता है।`,
      description: `${searchQuery} के बारे में विस्तृत जानकारी। ${searchQuery} एक महत्वपूर्ण विषय है जिसके बारे में इस पृष्ठ पर विस्तार से बताया गया है।`,
      keywords: searchQuery.toLowerCase().split(/\s+/),
      lastCrawled: new Date(),
      links: ['https://example.com'],
      statusCode: 200,
      contentType: 'text/html',
      language: 'hi',
      size: 15240
    },
    {
      url: 'https://news.khoj.com',
      title: `${searchQuery} के बारे में जानिए - खोज न्यूज़`,
      content: `${searchQuery} से जुड़ी ताज़ा खबरें और अपडेट। ${searchQuery} से संबंधित सभी महत्वपूर्ण जानकारी।`,
      description: `${searchQuery} से जुड़ी ताज़ा खबरें और अपडेट। ${searchQuery} से संबंधित सभी महत्वपूर्ण जानकारी यहां उपलब्ध है।`,
      keywords: [...searchQuery.toLowerCase().split(/\s+/), 'news', 'updates'],
      lastCrawled: new Date(),
      links: ['https://example.com'],
      statusCode: 200,
      contentType: 'text/html',
      language: 'hi',
      size: 25600
    },
    {
      url: `https://${searchQuery.toLowerCase().replace(/\s+/g, '')}.com`,
      title: `${searchQuery} - आधिकारिक वेबसाइट`,
      content: `${searchQuery} की आधिकारिक वेबसाइट पर आपका स्वागत है। हम ${searchQuery} के क्षेत्र में अग्रणी हैं।`,
      description: `${searchQuery} की आधिकारिक वेबसाइट पर आपका स्वागत है। हम ${searchQuery} के क्षेत्र में अग्रणी हैं।`,
      keywords: [...searchQuery.toLowerCase().split(/\s+/), 'official', 'website'],
      lastCrawled: new Date(),
      links: ['https://example.com'],
      statusCode: 200,
      contentType: 'text/html',
      language: 'hi',
      size: 35840
    },
    {
      url: 'https://dictionary.khoj.com',
      title: `${searchQuery} - खोज शब्दकोश`,
      content: `${searchQuery} का अर्थ और परिभाषा जानें। ${searchQuery} शब्द का अर्थ, उच्चारण और प्रयोग के उदाहरण।`,
      description: `${searchQuery} का अर्थ और परिभाषा जानें। ${searchQuery} शब्द का अर्थ, उच्चारण और प्रयोग के उदाहरण।`,
      keywords: [...searchQuery.toLowerCase().split(/\s+/), 'meaning', 'definition'],
      lastCrawled: new Date(),
      links: ['https://example.com'],
      statusCode: 200,
      contentType: 'text/html',
      language: 'hi',
      size: 12800
    },
    {
      url: 'https://videos.khoj.com',
      title: `${searchQuery} - वीडियो और ट्यूटोरियल`,
      content: `${searchQuery} से संबंधित वीडियो और ट्यूटोरियल देखें। सीखने के लिए सरल और प्रभावी तरीके।`,
      description: `${searchQuery} से संबंधित वीडियो और ट्यूटोरियल देखें। सीखने के लिए सरल और प्रभावी तरीके।`,
      keywords: [...searchQuery.toLowerCase().split(/\s+/), 'videos', 'tutorials'],
      lastCrawled: new Date(),
      links: ['https://example.com'],
      statusCode: 200,
      contentType: 'text/html',
      language: 'hi',
      size: 45000
    }
  ];
}

// Catch-all handler to return the React app
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../dist/index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 
