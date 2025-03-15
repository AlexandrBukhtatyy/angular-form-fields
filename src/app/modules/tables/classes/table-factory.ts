import {TableSettings} from '../interfaces/teble-config';
import {PaginatedTable} from './table-paginated';
import {InfiniteTable} from './table-infinite';
import {TABLE_TYPES} from './table';

export class TableFactory {
  static make<T>(settings: TableSettings<T>) {
    switch (settings.type) {
      case TABLE_TYPES.Paginated: return new PaginatedTable(settings);
      case TABLE_TYPES.Infinite: return new InfiniteTable(settings);
    }
  }
}
