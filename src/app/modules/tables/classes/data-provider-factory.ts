import {
  InfiniteTableDataProvider,
  PaginatedTableDataProvider,
  PreloadTableDataProvider,
  StaticTableDataProvider
} from './data-providers';
import {InfiniteDataLoader, PaginatedDataLoader, PreloadDataLoader} from './data-loaders';

export class DataProviderFactory {
  static makeStatic<T>(data: Array<T>) {
    return new StaticTableDataProvider<T>(data);
  }

  static makePreload<T>(dataLoader: PreloadDataLoader<T>) {
    return new PreloadTableDataProvider(dataLoader);
  }

  static makePaginated<T>(dataLoader: PaginatedDataLoader<T>) {
    return new PaginatedTableDataProvider(dataLoader);
  }

  static makeInfinite<T>(dataLoader: InfiniteDataLoader<T>) {
    return new InfiniteTableDataProvider(dataLoader);
  }
}
