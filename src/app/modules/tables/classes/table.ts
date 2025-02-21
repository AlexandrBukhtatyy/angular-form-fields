import {TableSettings} from '@modules/tables';
import {Pagination} from './pagination';
import {Filters} from './filters';

export enum TABLE_TYPES {
  Paginated,
  Infinite
}

export abstract class Table<T> {
  type!: TABLE_TYPES;
  settings: TableSettings<T>;
  pagination: Pagination;
  filters: Filters;

  constructor(settings: TableSettings<T>) {
    this.settings = settings;
    this.pagination = new Pagination(this);
    this.filters = new Filters(this);
  }
}

export class PaginatedTable<T> extends Table<T> {
  override type = TABLE_TYPES.Paginated
  constructor(settings: TableSettings<T>) {
    super(settings);
  }
}

export class InfiniteTable<T> extends Table<T> {
  override type = TABLE_TYPES.Infinite
  constructor(settings: TableSettings<T>) {
    super(settings);
  }
}
