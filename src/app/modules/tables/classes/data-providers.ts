import {BehaviorSubject, Observable} from 'rxjs';
import {
  DataLoaderParams,
  DataLoaderResponse,
  InfiniteDataLoader,
  PaginatedDataLoader,
  PreloadDataLoader
} from './data-loaders';

export enum DATA_PROVIDERS {
  Static,
  Preload,
  Paginated,
  Infinite,
}

// TODO: Переименовать в State и хранить тут состояние таблицы
export abstract class DataProvider<T> {
  public type?: DATA_PROVIDERS;
  protected data$$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  public data$: Observable<T[]> = this.data$$.asObservable();

  abstract update(params: DataLoaderParams): void;
}

export class StaticTableDataProvider<T> extends DataProvider<T> {
  override type = DATA_PROVIDERS.Static;

  constructor(data: Array<T>) {
    super();
    this.data$$.next(data);
  }

  override update(params: DataLoaderParams) {}
}

export class PreloadTableDataProvider extends DataProvider<any> {
  override type = DATA_PROVIDERS.Preload;

  constructor(private dataLoader: PreloadDataLoader<any>) {
    super();
    // TODO: возможно не тут надо работать с методами DataProvider
    // TODO: обработать крайнии случаи
    const initialParams: DataLoaderParams = {
      pagination: {
        page: 0,
        size: 10,
      }
    }
    this.load(initialParams)
  }

  override update(params: DataLoaderParams) {
    this.load(params)
  }

  load(params: DataLoaderParams) {
    this.dataLoader(params).then((response: DataLoaderResponse<any>) => {
      this.data$$.next(response.items);
    });
  }
}

export class PaginatedTableDataProvider extends DataProvider<any> {
  override type = DATA_PROVIDERS.Paginated;

  constructor(dataLoader: PaginatedDataLoader<any>) {
    super();
  }

  override update(params: DataLoaderParams) {
  }
}

export class InfiniteTableDataProvider extends DataProvider<any> {
  override type = DATA_PROVIDERS.Infinite;

  constructor(dataLoader: InfiniteDataLoader<any>) {
    super();
  }

  override update(params: DataLoaderParams) {
  }
}
