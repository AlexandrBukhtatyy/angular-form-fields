import {TableSettings} from '../interfaces/teble-config';

class Filters {
  constructor(private table: Table<any>) {}

  reset() {
    this.table.settings.filterProvider?.reset()
  }
}

class Pagination {
  index: number = 0;
  length: number = 0;
  size: number = 10;
  total: number = 100;

  constructor(private table: Table<any>) {}

  goToPage(page: number) {
    this.table.settings.dataProvider
  }

}

export class Table<T> {
  settings: TableSettings<T>;
  pagination: Pagination;
  filters: Filters;

  constructor(settings: TableSettings<T>) {
    this.settings = settings
    this.pagination = new Pagination(this)
    this.filters = new Filters(this)
  }
}

export class StaticTable<T> extends Table<T> {
  constructor(settings: TableSettings<T>) {
    super(settings);
  }
}

export class PreloadTable<T> extends Table<T> {
  constructor(settings: TableSettings<T>) {
    super(settings);
  }
}

export class PaginatedTable<T> extends Table<T> {
  constructor(settings: TableSettings<T>) {
    super(settings);
  }
}

export class InfiniteTable<T> extends Table<T> {
  constructor(settings: TableSettings<T>) {
    super(settings);
  }
}

export class TableFactory {
  static makeStatic<T>(settings: TableSettings<T>) {
    return new StaticTable(settings);
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
