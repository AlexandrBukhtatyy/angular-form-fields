import {DataProvider, ProviderFactory} from './provider-factory';

export class Table {}

export class StaticTable<T> extends Table {
  constructor(dataProvider: DataProvider<T>) {
    super();
  }
}

export class PreloadTable<T> extends Table {
  constructor(dataProvider: DataProvider<T>) {
    super();
  }
}

export class PaginatedTable<T> extends Table {
  constructor(dataProvider: DataProvider<T>) {
    super();
  }
}

export class InfiniteTable<T> extends Table {
  constructor(dataProvider: DataProvider<T>) {
    super();
  }
}

export class TableFactory {
  static makeStatic<T>(data: Array<T>) {
    return new StaticTable(ProviderFactory.makeStatic(data));
  }
  // static makePreload() {
  //   return new PreloadTable(new PreloadTableDataProvider());
  // }
  // static makePaginated() {
  //   return new PaginatedTable(new PaginatedTableDataProvider());
  // }
  // static makeInfinite() {
  //   return new InfiniteTable(new InfiniteTableDataProvider());
  // }
}
