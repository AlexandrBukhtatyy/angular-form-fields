import {inject, Injectable} from '@angular/core';
import {TableFilterFormService} from '../../forms/table-filter-form/table-filter-form.service';
import {
  DataProviderFactory,
  FunctionParamsTableCell,
  TableCellCustomComponent,
  TableCellTypes,
  TableFactory,
  TableHeadCellCustomComponent
} from '@modules/tables';
import {TABLE_TYPES} from '../../../../modules/tables/classes/table';
import {preloadDataLoader} from './data-loaders';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {PaginatedTable} from '../../../../modules/tables/classes/table-paginated';

@Injectable()
export class TablePaginatedService {
  tableFilterForm = inject(TableFilterFormService, {optional: true})?.formGroup;
  tableRef!: PaginatedTable<any>;

  constructor() {
    this.initTable();
  }

  tableCellClickHandler($event: any) {
    console.log('TablesComponent.tableCellClickHandler: ', $event);
  }

  private initTable() {
    this.tableRef = TableFactory.make({
      type: TABLE_TYPES.Paginated,
      filterProvider: this.tableFilterForm,
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
            value: (context: FunctionParamsTableCell<any>) => `${context.row.title} (modified)`
          }
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
                this.tableCellClickHandler($event);
              }
            }
          }
        },
      ],
      hideDefaultEmptyMessage: true,
    });
  }
}
