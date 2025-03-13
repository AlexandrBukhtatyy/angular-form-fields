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
import {TablesComponent} from '@features/tables';

// Table settings
export function tableConfig(componentRef: TablesComponent) {
  const tableFilterForm = inject(TableFilterFormService).formGroup;
  return TableFactory.makePaginated({
    filterProvider: tableFilterForm,
    // TODO: you can use ONE OF THIS DataProviders:
    //  - DataProviderFactory.makeStatic(ITEMS)
    //  - DataProviderFactory.makePreload(preloadDataLoader)
    //  - DataProviderFactory.makePaginated(paginatedDataLoader)
    //  - DataProviderFactory.makeInfinite(infiniteDataLoader)
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
          value: (context: FunctionParamsTableCell<any>) => `${context.row.title} (modified)`        }
      },
      {
        key: 'titleTwo',
        headCell: {
          type: TableCellTypes.Function,
          value: 'Title (modified by DataProvider)'
        },
        cell: {
          type: TableCellTypes.String,
        }
      },
      {
        key: 'component',
        headCell: {
          type: TableCellTypes.Polymorpheus,
          value: {
            component: new PolymorpheusComponent(TableHeadCellCustomComponent<any>),
            componentEventCallback: ($event: any) => {
              console.log('Header cell event callback: ', $event);
            }
          }
        },
        cell: {
          type: TableCellTypes.Polymorpheus,
          value: {
            component: new PolymorpheusComponent(TableCellCustomComponent<any>),
            componentEventCallback: ($event: any) => {
              console.log('Cell event callback: ', $event);
              componentRef.tableCellClickHandler($event);
            }
          }
        }
      },
    ],
    hideDefaultEmptyMessage: true,
  });
}
