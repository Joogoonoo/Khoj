import { blobstoreService } from "/src/services/blobstore/BlobstoreService.ts";
import { bigtableService } from "/src/services/bigtable/BigtableService.ts";
export class BlobIndexService {
  constructor() {
    this.BLOB_INDEX_TABLE = "blob_index";
    this.MAX_KEY_SIZE = 256;
    this.initializeIndexTable();
  }
  initializeIndexTable() {
    try {
      bigtableService.getTable(this.BLOB_INDEX_TABLE);
    } catch (error) {
      bigtableService.createTable(this.BLOB_INDEX_TABLE, ["metadata", "index", "content"]);
    }
  }
  // Store and index a blob
  async storeBlob(key, data, contentType, tags = {}, indexedFields = {}) {
    if (key.length > this.MAX_KEY_SIZE) {
      throw new Error(`कुंजी बहुत लंबी है। अधिकतम आकार: ${this.MAX_KEY_SIZE}`);
    }
    const metadata = await blobstoreService.storeBlob(key, data, contentType, tags);
    const indexedMetadata = {
      ...metadata,
      indexedFields
    };
    this.indexBlobMetadata(indexedMetadata);
    return indexedMetadata;
  }
  // Index blob metadata in Bigtable
  indexBlobMetadata(metadata) {
    const rowKey = metadata.key;
    const row = {
      rowKey,
      timestamp: Date.now(),
      columns: {
        "metadata:contentType": { value: metadata.contentType, timestamp: Date.now() },
        "metadata:size": { value: metadata.size, timestamp: Date.now() },
        "metadata:createdAt": { value: metadata.createdAt, timestamp: Date.now() },
        "metadata:checksum": { value: metadata.checksum || "", timestamp: Date.now() }
      }
    };
    Object.entries(metadata.tags).forEach(([tagName, tagValue]) => {
      row.columns[`metadata:tag_${tagName}`] = { value: tagValue, timestamp: Date.now() };
    });
    if (metadata.indexedFields) {
      Object.entries(metadata.indexedFields).forEach(([fieldName, fieldValue]) => {
        row.columns[`index:${fieldName}`] = {
          value: typeof fieldValue === "object" ? JSON.stringify(fieldValue) : fieldValue,
          timestamp: Date.now()
        };
      });
    }
    if (metadata.indexedFields?.keywords) {
      const keywords = metadata.indexedFields.keywords;
      if (Array.isArray(keywords)) {
        row.columns["content:keywords"] = { value: keywords.join(","), timestamp: Date.now() };
      }
    }
    bigtableService.upsertRow(this.BLOB_INDEX_TABLE, row);
  }
  // Search for blobs using Bigtable for efficient queries
  searchBlobs(query, options = {}) {
    try {
      const rows = bigtableService.query(this.BLOB_INDEX_TABLE, {
        limit: options.limit || 100
      });
      const results = rows.filter((row) => {
        for (const [field, value] of Object.entries(query)) {
          const columnKey = `index:${field}`;
          if (!row.columns[columnKey]) {
            return false;
          }
          const indexedValue = row.columns[columnKey].value;
          if (typeof value === "object" && value !== null) {
            if (value.$gt !== void 0 && indexedValue <= value.$gt)
              return false;
            if (value.$lt !== void 0 && indexedValue >= value.$lt)
              return false;
            if (value.$eq !== void 0 && indexedValue !== value.$eq)
              return false;
            if (value.$ne !== void 0 && indexedValue === value.$ne)
              return false;
            if (value.$in !== void 0 && !value.$in.includes(indexedValue))
              return false;
          } else if (indexedValue !== value) {
            return false;
          }
        }
        return true;
      });
      return results.map((row) => this.rowToIndexedMetadata(row));
    } catch (error) {
      console.error("Error searching blobs:", error);
      return [];
    }
  }
  // Get a blob with its indexed metadata
  getBlob(key) {
    const blob = blobstoreService.getBlob(key);
    if (!blob) {
      return null;
    }
    try {
      const row = bigtableService.getRow(this.BLOB_INDEX_TABLE, key);
      if (row) {
        const indexedMetadata = this.rowToIndexedMetadata(row);
        return {
          metadata: indexedMetadata,
          data: blob.data
        };
      }
    } catch (error) {
      console.error(`Error getting indexed metadata for blob ${key}:`, error);
    }
    return {
      metadata: blob.metadata,
      data: blob.data
    };
  }
  // Delete a blob and its index
  deleteBlob(key) {
    try {
      bigtableService.deleteRow(this.BLOB_INDEX_TABLE, key);
      return blobstoreService.deleteBlob(key);
    } catch (error) {
      console.error(`Error deleting blob ${key}:`, error);
      return false;
    }
  }
  // Update indexed metadata
  updateIndexedMetadata(key, tags, indexedFields) {
    try {
      const row = bigtableService.getRow(this.BLOB_INDEX_TABLE, key);
      if (!row) {
        return null;
      }
      const existingMetadata = this.rowToIndexedMetadata(row);
      if (tags) {
        blobstoreService.updateBlobMetadata(key, { tags });
      }
      const updatedMetadata = {
        ...existingMetadata,
        tags: tags || existingMetadata.tags,
        indexedFields: {
          ...existingMetadata.indexedFields,
          ...indexedFields
        }
      };
      this.indexBlobMetadata(updatedMetadata);
      return updatedMetadata;
    } catch (error) {
      console.error(`Error updating indexed metadata for blob ${key}:`, error);
      return null;
    }
  }
  // Convert a Bigtable row to IndexedBlobMetadata
  rowToIndexedMetadata(row) {
    const metadata = {
      key: row.rowKey,
      contentType: row.columns["metadata:contentType"]?.value || "application/octet-stream",
      size: Number(row.columns["metadata:size"]?.value) || 0,
      createdAt: Number(row.columns["metadata:createdAt"]?.value) || Date.now(),
      checksum: row.columns["metadata:checksum"]?.value,
      tags: {},
      indexedFields: {}
    };
    for (const [column, cell] of Object.entries(row.columns)) {
      if (column.startsWith("metadata:tag_")) {
        const tagName = column.substring("metadata:tag_".length);
        metadata.tags[tagName] = cell.value;
      }
    }
    for (const [column, cell] of Object.entries(row.columns)) {
      if (column.startsWith("index:")) {
        const fieldName = column.substring("index:".length);
        let value = cell.value;
        if (typeof value === "string" && (value.startsWith("{") && value.endsWith("}") || value.startsWith("[") && value.endsWith("]"))) {
          try {
            value = JSON.parse(value);
          } catch (e) {
          }
        }
        metadata.indexedFields[fieldName] = value;
      }
    }
    return metadata;
  }
  // Get statistics
  getStats() {
    const blobStats = blobstoreService.getStats();
    let indexStats = { rowCount: 0, size: 0 };
    try {
      indexStats = bigtableService.getTableStats(this.BLOB_INDEX_TABLE);
    } catch (error) {
      console.error("Error getting index stats:", error);
    }
    return {
      blobCount: blobStats.count,
      totalSize: blobStats.totalSize,
      availableSize: blobStats.availableSize,
      indexedCount: indexStats.rowCount
    };
  }
}
export const blobIndexService = new BlobIndexService();
