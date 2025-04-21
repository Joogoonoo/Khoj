class BlobstoreService {
  // 100MB limit for demo purposes
  constructor() {
    this.MAX_STORAGE_SIZE = 100 * 1024 * 1024;
    this.blobs = /* @__PURE__ */ new Map();
    this.totalSize = 0;
  }
  // Store a new blob
  async storeBlob(key, data, contentType, tags = {}) {
    const buffer = await this.ensureArrayBuffer(data);
    const checksum = await this.calculateChecksum(buffer);
    if (this.totalSize + buffer.byteLength > this.MAX_STORAGE_SIZE) {
      throw new Error("बड़ा स्टोरेज सीमा पार कर गया है");
    }
    const metadata = {
      key,
      contentType,
      size: buffer.byteLength,
      createdAt: Date.now(),
      lastAccessed: Date.now(),
      checksum,
      tags
    };
    this.blobs.set(key, {
      metadata,
      data: buffer
    });
    this.totalSize += buffer.byteLength;
    return metadata;
  }
  // Retrieve a blob by key
  getBlob(key) {
    const blob = this.blobs.get(key);
    if (blob) {
      blob.metadata.lastAccessed = Date.now();
      return blob;
    }
    return null;
  }
  // Delete a blob
  deleteBlob(key) {
    const blob = this.blobs.get(key);
    if (blob) {
      this.totalSize -= blob.metadata.size;
      return this.blobs.delete(key);
    }
    return false;
  }
  // List blobs with optional filtering
  listBlobs(options = {}) {
    let results = Array.from(this.blobs.values()).map((blob) => blob.metadata);
    if (options.prefix) {
      results = results.filter((meta) => meta.key.startsWith(options.prefix));
    }
    if (options.contentType) {
      results = results.filter((meta) => meta.contentType === options.contentType);
    }
    if (options.minSize !== void 0) {
      results = results.filter((meta) => meta.size >= options.minSize);
    }
    if (options.maxSize !== void 0) {
      results = results.filter((meta) => meta.size <= options.maxSize);
    }
    if (options.tags) {
      results = results.filter((meta) => {
        for (const [key, value] of Object.entries(options.tags)) {
          if (meta.tags[key] !== value) {
            return false;
          }
        }
        return true;
      });
    }
    results.sort((a, b) => b.createdAt - a.createdAt);
    if (options.offset !== void 0 || options.limit !== void 0) {
      const start = options.offset || 0;
      const end = options.limit ? start + options.limit : void 0;
      results = results.slice(start, end);
    }
    return results;
  }
  // Update blob metadata
  updateBlobMetadata(key, updates) {
    const blob = this.blobs.get(key);
    if (!blob) {
      return null;
    }
    delete updates.key;
    delete updates.size;
    delete updates.createdAt;
    delete updates.checksum;
    blob.metadata = {
      ...blob.metadata,
      ...updates
    };
    return blob.metadata;
  }
  // Get storage statistics
  getStats() {
    return {
      count: this.blobs.size,
      totalSize: this.totalSize,
      availableSize: this.MAX_STORAGE_SIZE - this.totalSize
    };
  }
  // Helpers
  async ensureArrayBuffer(data) {
    if (data instanceof ArrayBuffer) {
      return data;
    }
    return await data.arrayBuffer();
  }
  async calculateChecksum(buffer) {
    const view = new Uint8Array(buffer);
    let hash = 0;
    const step = Math.max(1, Math.floor(view.length / 1e3));
    for (let i = 0; i < view.length; i += step) {
      hash = (hash << 5) - hash + view[i];
      hash |= 0;
    }
    return hash.toString(16).padStart(8, "0");
  }
}
export const blobstoreService = new BlobstoreService();
