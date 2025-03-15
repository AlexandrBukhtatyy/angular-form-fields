import {TableSettings} from '@modules/tables';
import {Pagination} from './pagination';
import {Filters} from './filters';

export enum TABLE_TYPES {
  Paginated,
  Infinite
}

export abstract class Table<T> {
  type!: TABLE_TYPES;
  settings: TableSettings<T>;
  pagination: Pagination;
  filters: Filters;

  constructor(settings: TableSettings<T>) {
    this.settings = settings;
    this.pagination = new Pagination();
    this.filters = new Filters(this);
  }

  setPage(index: number) {
    this.pagination.index = index
    this.update()
  }

  setSize(size: number) {
    this.pagination.size = size
    this.update()
  }

  update() {
    // TODO: Асинхронщина ? + нужно обновлять данные после ответа
    //  (это точно нужно делать тут или в лэйауте? - так как там с отображением работаем а тут с поведением =))
    this.settings.dataProvider.update({
      filters: this.filters,
      pagination: this.pagination.getParams(),
      // TODO:  sort
    })
  }
}

export class PaginatedTable<T> extends Table<T> {
  override type = TABLE_TYPES.Paginated
  constructor(settings: TableSettings<T>) {
    super(settings);
  }
}

export class InfiniteTable<T> extends Table<T> {
  override type = TABLE_TYPES.Infinite
  constructor(settings: TableSettings<T>) {
    super(settings);
  }
}
