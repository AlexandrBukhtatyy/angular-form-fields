import {DataLoaderParams, PartionalDataLoader, PreloadDataLoader} from '@modules/tables';

const ITEMS = [
  {
    id: '1',
    title: 'title 1',
    template: 'template 1',
    component: 'component 1',
  },
  {
    id: '2',
    title: 'title 2',
    template: 'template 2',
    component: 'component 2',
  },
  {
    id: '3',
    title: 'title 3',
    template: 'template 3',
    component: 'component 3',
  },
  {
    id: '4',
    title: 'title 4',
    template: 'template 4',
    component: 'component 4',
  },
  {
    id: '5',
    title: 'title 5',
    template: 'template 5',
    component: 'component 5',
  },
  {
    id: '6',
    title: 'title 6',
    template: 'template 6',
    component: 'component 6',
  },
  {
    id: '7',
    title: 'title 7',
    template: 'template 7',
    component: 'component 7',
  },
  {
    id: '8',
    title: 'title 8',
    template: 'template 8',
    component: 'component 8',
  },
  {
    id: '9',
    title: 'title 9',
    template: 'template 9',
    component: 'component 9',
  },
  {
    id: '10',
    title: 'title 10',
    template: 'template 10',
    component: 'component 10',
  },
  {
    id: '11',
    title: 'title 11',
    template: 'template 11',
    component: 'component 11',
  },
  {
    id: '12',
    title: 'title 12',
    template: 'template 12',
    component: 'component 12',
  },
  {
    id: '13',
    title: 'title 13',
    template: 'template 13',
    component: 'component 13',
  },
  {
    id: '14',
    title: 'title 14',
    template: 'template 14',
    component: 'component 14',
  },
  {
    id: '15',
    title: 'title 15',
    template: 'template 15',
    component: 'component 15',
  },
];

export const preloadDataLoader: PreloadDataLoader<any> = (params?: DataLoaderParams) => {
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

  const items = ITEMS
    .filter((_, index) => (index >= offset && index < (offset * limit) + limit))
    .map((item: any) => ({...item, titleTwo: `titleTwo: ${item.id}`}));

  return Promise.resolve({
    items,
    offset,
    size: limit,
    total: ITEMS.length,
  });
};

export const partionalDataLoader: PartionalDataLoader<any> = (params: DataLoaderParams) => {
  return Promise.resolve({
    items: ITEMS,
    offset: 0,
    size: 2,
    total: ITEMS.length,
  });
};
