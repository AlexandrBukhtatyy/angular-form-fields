export interface DataLoaderResponse<T> {
  items: T[];
  offset: number;
  size: number;
  total: number;
}

export interface DataLoaderParams {
  filters?: any;
  pagination?: any;
  sort?: any;
}

export type PreloadDataLoader<T> = (params?: DataLoaderParams) => Promise<DataLoaderResponse<T>>;
export type PaginatedDataLoader<T> = (params: DataLoaderParams) => Promise<DataLoaderResponse<T>>;
export type InfiniteDataLoader<T> = (params: DataLoaderParams) => Promise<DataLoaderResponse<T>>;
