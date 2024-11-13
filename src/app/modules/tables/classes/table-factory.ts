export interface DataProvider<T> {
  update(): T[];
}
export class StaticTableDataProvider implements DataProvider<any> {
  update(): any[] {
    return [];
  }
}
export class PreloadTableDataProvider implements DataProvider<any> {
  update(): any[] {
    return [];
  }
}
export class PaginatedTableDataProvider implements DataProvider<any> {
  update(): any[] {
    return [];
  }
}
export class InfiniteTableDataProvider implements DataProvider<any> {
  update(): any[] {
    return [];
  }
}

export class StaticTable<T> {
  constructor(dataProvider: DataProvider<T>) {
  }
}

export class PreloadTable<T> {
  constructor(dataProvider: DataProvider<T>) {
  }
}

export class PaginatedTable<T> {
  constructor(dataProvider: DataProvider<T>) {
  }
}

export class InfiniteTable<T> {
  constructor(dataProvider: DataProvider<T>) {
  }
}

export class TableFactory {
  static makeStatic() {
    return new StaticTable(new StaticTableDataProvider());
  }
  static makePreload() {
    return new PreloadTable(new PreloadTableDataProvider());
  }
  static makePaginated() {
    return new PaginatedTable(new PaginatedTableDataProvider());
  }
  static makeInfinite() {
    return new InfiniteTable(new InfiniteTableDataProvider());
  }
}
