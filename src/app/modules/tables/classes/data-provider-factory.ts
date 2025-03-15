import {PartionalTableDataProvider, PreloadTableDataProvider, StaticTableDataProvider} from './data-providers';
import {PartionalDataLoader, PreloadDataLoader} from './data-loaders';

export class DataProviderFactory {
  static makeStatic<T>(data: Array<T>) {
    return new StaticTableDataProvider<T>(data);
  }

  static makePreload<T>(dataLoader: PreloadDataLoader<T>) {
    return new PreloadTableDataProvider(dataLoader);
  }

  static makePartional<T>(dataLoader: PartionalDataLoader<T>) {
    return new PartionalTableDataProvider(dataLoader);
  }

}
