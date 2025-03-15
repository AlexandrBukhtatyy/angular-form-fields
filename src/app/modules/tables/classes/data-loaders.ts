export interface DataLoaderResponse<T> {
  items: T[];
  offset: number;
  size: number;
  total: number;
}

export interface DataLoaderParams {
  filters?: any;
  pagination?: {
    page: number;
    size: number;
  };
  sort?: any;
}

export type PreloadDataLoader<T> = (params?: DataLoaderParams) => Promise<DataLoaderResponse<T>>;
export type PartionalDataLoader<T> = (params: DataLoaderParams) => Promise<DataLoaderResponse<T>>;
