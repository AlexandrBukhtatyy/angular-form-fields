import {DataLoaderResponse, TableSettings} from '@modules/tables';
import {DATA_PROVIDERS} from './data-providers';
import {Table, TABLE_TYPES} from './table';

export class PaginatedTable<T> extends Table<T> {
  override type = TABLE_TYPES.Paginated;

  constructor(settings: TableSettings<T>) {
    super(settings);
  }

  override update(): void {
    if (!this.settings.dataProvider.type || ![
      DATA_PROVIDERS.Static,
      DATA_PROVIDERS.Preload,
      DATA_PROVIDERS.Partional
    ].includes(this.settings.dataProvider.type)
    ) {
      // TODO: Error
    }

    if (this.settings.dataProvider.type === DATA_PROVIDERS.Static) {
      const params = {
        filters: this.filters,
        pagination: this.pagination.serialize(),
        // TODO:  sort
      };
      const {items, size} = this.settings.dataProvider.get(params) as DataLoaderResponse<any>;
      this.state$$.next({...this.state$$.value, items, limit: size});
    }

    if (this.settings.dataProvider.type === DATA_PROVIDERS.Preload) {
      const dataPromise = this.settings.dataProvider.get({
        filters: this.filters,
        pagination: this.pagination.serialize(),
        // TODO:  sort
      }) as Promise<DataLoaderResponse<T>>;
      dataPromise
        .then(({items, size}) => this.state$$.next({...this.state$$.value, items, limit: size}))
        .catch(() => {
          // TODO: Error
        });
    }

    if (this.settings.dataProvider.type === DATA_PROVIDERS.Partional) {
      const dataPromise = this.settings.dataProvider.get({
        filters: this.filters,
        pagination: this.pagination.serialize(),
        // TODO:  sort
      }) as Promise<DataLoaderResponse<T>>;
      dataPromise
        .then(({items, size}) => this.state$$.next({...this.state$$.value, items, limit: size}))
        .catch(() => {
          // TODO: Error
        });
    }
  }
}
