import {BehaviorSubject, Observable} from 'rxjs';
import {DataLoaderResponse, InfiniteDataLoader, PaginatedDataLoader, PreloadDataLoader} from './data-loaders';

export enum DATA_PROVIDERS {
  Static,
  Preload,
  Paginated,
  Infinite,
}

export abstract class DataProvider<T> {
  public type?: DATA_PROVIDERS;
  protected data$$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  public data$: Observable<T[]> = this.data$$.asObservable();

  abstract update(): T[];
}

export class StaticTableDataProvider<T> extends DataProvider<T> {
  override type = DATA_PROVIDERS.Static;

  constructor(data: Array<T>) {
    super();
    this.data$$.next(data);
  }

  override update(): any[] {
    return [];
  }
}

export class PreloadTableDataProvider extends DataProvider<any> {
  override type = DATA_PROVIDERS.Preload;

  constructor(dataLoader: PreloadDataLoader<any>) {
    super();
    // TODO: возможно не тут надо работать с методами DataProvider
    // TODO: обработать крайнии случаи
    dataLoader({}).then((response: DataLoaderResponse<any>) => {
      this.data$$.next(response.items);
    });
  }

  override update(): any[] {
    return [];
  }
}

export class PaginatedTableDataProvider extends DataProvider<any> {
  override type = DATA_PROVIDERS.Paginated;

  constructor(dataLoader: PaginatedDataLoader<any>) {
    super();
  }

  override update(): any[] {
    return [];
  }
}

export class InfiniteTableDataProvider extends DataProvider<any> {
  override type = DATA_PROVIDERS.Infinite;

  constructor(dataLoader: InfiniteDataLoader<any>) {
    super();
  }

  override update(): any[] {
    return [];
  }
}
