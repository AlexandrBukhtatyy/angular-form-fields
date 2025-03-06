import {
  DataProviderFactory,
  FunctionParamsTableCell,
  TableCellCustomComponent,
  TableCellTypes,
  TableFactory,
  TableHeadCellCustomComponent
} from '@modules/tables';
import {preloadDataLoader} from './data-loaders';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {inject} from '@angular/core';
import {TableFilterFormService} from '../../forms/table-filter-form/table-filter-form.service';

// Table settings
export function tableConfig() {
  const tableFilterForm = inject(TableFilterFormService).formGroup;
  return TableFactory.makePaginated({
    filterProvider: tableFilterForm,
    // TODO: you can use ONE OF THIS DataProviders: ProviderFactory.[makeStatic(ITEMS)|makePaginated(paginatedDataLoader)|makePreload(infiniteDataLoader)]
    dataProvider: DataProviderFactory.makePreload(preloadDataLoader),
    columns: [
      {
        key: 'id',
        headCell: {
          type: TableCellTypes.String,
          value: 'Id (String)'
        },
        cell: {
          type: TableCellTypes.String,
        }
      },
      {
        key: 'title',
        headCell: {
          type: TableCellTypes.Function,
          value: (context: FunctionParamsTableCell<any>) => `Title (Function)`
        },
        cell: {
          type: TableCellTypes.Function,
          value: (context: FunctionParamsTableCell<any>) => {
            return `${context.row.title} (modified)`;
          }
        }
      },
      {
        key: 'component',
        headCell: {
          type: TableCellTypes.Polymorpheus,
          value: {
            component: new PolymorpheusComponent(TableHeadCellCustomComponent<any>),
            componentEventCallback: ($event: any) => {
              console.log('Cell event callback: ', $event);
            }
          }
        },
        cell: {
          type: TableCellTypes.Polymorpheus,
          value: {
            component: new PolymorpheusComponent(TableCellCustomComponent<any>),
            componentEventCallback: ($event: any) => {
              console.log('Header cell event callback: ', $event);
            }
          }
        }
      },
    ],
    hideDefaultEmptyMessage: true,
  });
}
