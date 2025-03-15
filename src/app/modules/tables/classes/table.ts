import {TableSettings} from '@modules/tables';
import {Pagination} from './pagination';
import {Filters} from './filters';
import {BehaviorSubject, Observable} from 'rxjs';

export enum TABLE_TYPES {
  Paginated,
  Infinite
}

export enum TABLE_STATE_STATUS {
  PENDING,
  READY,
  ERROR,
}

export interface TableState<T> {
  status: TABLE_STATE_STATUS,
  items: T[],
  offset: number,
  limit: number,
  total: number,
}

export const INITIAL_TABLE_STATE = {
  status: TABLE_STATE_STATUS.PENDING,
  items: [],
  offset: 0,
  limit: 10,
  total: 20,
};

export abstract class Table<T> {
  type!: TABLE_TYPES;
  settings: TableSettings<T>;
  pagination: Pagination;
  filters: Filters;

  protected state$$: BehaviorSubject<TableState<T>> = new BehaviorSubject<TableState<T>>(INITIAL_TABLE_STATE);
  public state$: Observable<TableState<T>> = this.state$$.asObservable();

  constructor(settings: TableSettings<T>) {
    this.settings = settings;
    this.pagination = new Pagination();
    this.filters = new Filters(this);
  }

  setPage(index: number) {
    this.pagination.index = index;
    this.update();
  }

  setSize(size: number) {
    this.pagination.size = size;
    this.update();
  }

  abstract update(): void;
}

