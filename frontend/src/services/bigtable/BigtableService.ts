class BigtableService {
  // Maximum number of rows per table
  constructor() {
    this.MAX_TABLE_SIZE = 1e4;
    this.tables = /* @__PURE__ */ new Map();
    this.initializeDefaultTables();
  }
  initializeDefaultTables() {
    this.createTable("webpages", ["metadata", "content", "links", "ranking"]);
    this.createTable("keywords", ["pages", "stats"]);
    this.createTable("crawl_queue", ["status", "metadata"]);
    this.createTable("user_data", ["search_history", "preferences"]);
  }
  // Table operations
  createTable(name, columnFamilies) {
    if (this.tables.has(name)) {
      throw new Error(`Table ${name} already exists`);
    }
    const table = {
      name,
      rows: /* @__PURE__ */ new Map(),
      columnFamilies
    };
    this.tables.set(name, table);
    console.log(`Table ${name} created with column families: ${columnFamilies.join(", ")}`);
    return table;
  }
  getTable(name) {
    const table = this.tables.get(name);
    if (!table) {
      throw new Error(`Table ${name} does not exist`);
    }
    return table;
  }
  deleteTable(name) {
    return this.tables.delete(name);
  }
  listTables() {
    return Array.from(this.tables.keys());
  }
  // Row operations
  upsertRow(tableName, row) {
    const table = this.getTable(tableName);
    if (table.rows.size >= this.MAX_TABLE_SIZE && !table.rows.has(row.rowKey)) {
      throw new Error(`Table ${tableName} has reached maximum capacity`);
    }
    for (const column in row.columns) {
      const columnFamily = column.split(":")[0];
      if (!table.columnFamilies.includes(columnFamily)) {
        throw new Error(`Column family ${columnFamily} does not exist in table ${tableName}`);
      }
    }
    table.rows.set(row.rowKey, {
      ...row,
      timestamp: row.timestamp || Date.now()
    });
  }
  getRow(tableName, rowKey) {
    const table = this.getTable(tableName);
    return table.rows.get(rowKey);
  }
  deleteRow(tableName, rowKey) {
    const table = this.getTable(tableName);
    return table.rows.delete(rowKey);
  }
  // Query operations
  query(tableName, query) {
    const table = this.getTable(tableName);
    let result = [];
    for (const [rowKey, row] of table.rows.entries()) {
      if (query.prefix && !rowKey.startsWith(query.prefix))
        continue;
      if (query.startKey && rowKey < query.startKey)
        continue;
      if (query.endKey && rowKey > query.endKey)
        continue;
      if (query.columnFamilies || query.columns) {
        const filteredRow = this.filterRowColumns(row, query);
        if (Object.keys(filteredRow.columns).length > 0) {
          result.push(filteredRow);
        }
      } else {
        result.push(row);
      }
      if (query.limit && result.length >= query.limit) {
        break;
      }
    }
    return result;
  }
  filterRowColumns(row, query) {
    const filteredColumns = {};
    for (const [column, cell] of Object.entries(row.columns)) {
      const [columnFamily, columnName] = column.split(":");
      if (query.columnFamilies && !query.columnFamilies.includes(columnFamily)) {
        continue;
      }
      if (query.columns && !query.columns.includes(column)) {
        continue;
      }
      filteredColumns[column] = cell;
    }
    return {
      rowKey: row.rowKey,
      columns: filteredColumns,
      timestamp: row.timestamp
    };
  }
  // Batch operations
  batchUpsert(tableName, rows) {
    rows.forEach((row) => this.upsertRow(tableName, row));
  }
  batchGet(tableName, rowKeys) {
    return rowKeys.map((rowKey) => this.getRow(tableName, rowKey));
  }
  // Statistics
  getTableStats(tableName) {
    const table = this.getTable(tableName);
    let size = 0;
    for (const row of table.rows.values()) {
      size += row.rowKey.length * 2;
      for (const [column, cell] of Object.entries(row.columns)) {
        size += column.length * 2;
        size += JSON.stringify(cell.value).length * 2;
        size += 8;
      }
    }
    return {
      rowCount: table.rows.size,
      size
    };
  }
  // Utility method to clear all data (for testing)
  clearAllData() {
    this.tables.clear();
    this.initializeDefaultTables();
  }
}
export const bigtableService = new BigtableService();
