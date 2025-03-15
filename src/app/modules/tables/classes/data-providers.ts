import {DataLoaderParams, DataLoaderResponse, PartionalDataLoader, PreloadDataLoader} from './data-loaders';

export enum DATA_PROVIDERS {
  Static,
  Preload,
  Partional,
}

// TODO: Переименовать в State и хранить тут состояние таблицы
export abstract class DataProvider<T> {
  public type?: DATA_PROVIDERS;

  abstract get(params: DataLoaderParams): DataLoaderResponse<T> | Promise<DataLoaderResponse<T>>;
}

export class StaticTableDataProvider<T> extends DataProvider<T> {
  override type = DATA_PROVIDERS.Static;

  constructor(private items: Array<T>) {
    super();
  }

  override get(params: DataLoaderParams): DataLoaderResponse<T> {
    return {
      items: this.getFilteredItems(params),
      offset: Number(params.pagination?.page),
      size: Number(params.pagination?.size),
      total: this.items.length,
    };
  }

  private getFilteredItems(params: DataLoaderParams): Array<T> {
    const page = Number(params?.pagination?.page);
    const size = Number(params?.pagination?.size);
    const offset = page * size;
    const limit = size;

    if (
      !isFinite(page)
      || !isFinite(size)
    ) {
      throw new Error('Invalid ppagination params');
    }

    return this.items
      .filter((_, index) => (index >= offset && index < (offset * limit) + limit))
      .map((item: any) => ({...item, titleTwo: `titleTwo: ${item.id}`}));
  }
}

export class PreloadTableDataProvider<T> extends DataProvider<T> {
  override type = DATA_PROVIDERS.Preload;

  constructor(private dataLoader: PreloadDataLoader<any>) {
    super();
  }

  override get(params: DataLoaderParams): Promise<DataLoaderResponse<T>> {
    return this.dataLoader(params);
  }
}

export class PartionalTableDataProvider<T> extends DataProvider<T> {
  override type = DATA_PROVIDERS.Partional;

  constructor(private dataLoader: PartionalDataLoader<any>) {
    super();
  }

  override get(params: DataLoaderParams): Promise<DataLoaderResponse<T>> {
    return this.dataLoader(params);
  }
}
