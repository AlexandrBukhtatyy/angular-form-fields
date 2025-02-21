import {TableSettings} from '../interfaces/teble-config';
import {InfiniteTable, PaginatedTable} from './table';

export class TableFactory {
  static makePaginated<T>(settings: TableSettings<T>) {
    return new PaginatedTable(settings);
  }

  static makeInfinite<T>(settings: TableSettings<T>) {
    return new InfiniteTable(settings);
  }
}
