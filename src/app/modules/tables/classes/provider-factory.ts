import {BehaviorSubject, Observable, Subject} from 'rxjs';

export abstract class DataProvider<T> {
  protected data$$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  public data$: Observable<T[]> = this.data$$.asObservable();
  abstract update(): T[];
}
class StaticTableDataProvider<T> extends DataProvider<T> {
  constructor(data: Array<T>) {
    super();
    this.data$$.next(data);
  }

  override update(): any[] {
    return [];
  }
}
class PreloadTableDataProvider extends DataProvider<any> {
  override update(): any[] {
    return [];
  }
}
class PaginatedTableDataProvider extends DataProvider<any> {
  override update(): any[] {
    return [];
  }
}
class InfiniteTableDataProvider extends DataProvider<any> {
  override update(): any[] {
    return [];
  }
}

export class ProviderFactory {
  static makeStatic(data: any[]) {
    return new StaticTableDataProvider(data);
  }
  static makePreload() {
    return new PreloadTableDataProvider();
  }
  static makePaginated() {
    return new PaginatedTableDataProvider();
  }
  static makeInfinite() {
    return new InfiniteTableDataProvider();
  }
}
