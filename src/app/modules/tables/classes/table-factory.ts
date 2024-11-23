import {DataProvider} from './provider-factory';

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
  // static makeStatic() {
  //   return new StaticTable(new StaticTableDataProvider());
  // }
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
