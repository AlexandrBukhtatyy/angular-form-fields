import {
  DataLoaderParams, InfiniteDataLoader,
  PaginatedDataLoader,
  PreloadDataLoader
} from '../../../../modules/tables/classes/data-loaders';

const ITEMS = [
  {
    id: '1',
    title: 'title 1',
    component: 'component 1',
  },
  {
    id: '2',
    title: 'title 2',
    component: 'component 2',
  },
  {
    id: '3',
    title: 'title 3',
    component: 'component 3',
  },
  {
    id: '4',
    title: 'title 4',
    component: 'component 4',
  },
];

export const preloadDataLoader: PreloadDataLoader<any> = (params?: DataLoaderParams) => {
  return Promise.resolve({
    items: ITEMS,
    offset: 0,
    size: 2,
    total: ITEMS.length,
  });
};

export const paginatedDataLoader: PaginatedDataLoader<any> = (params: DataLoaderParams) => {
  return Promise.resolve({
    items: ITEMS,
    offset: 0,
    size: 2,
    total: ITEMS.length,
  });
};

export const infiniteDataLoader: InfiniteDataLoader<any> = (params: DataLoaderParams) => {
  return Promise.resolve({
    items: ITEMS,
    offset: 0,
    size: 2,
    total: ITEMS.length,
  });
};
