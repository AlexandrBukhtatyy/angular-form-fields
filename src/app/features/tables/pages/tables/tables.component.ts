import {Component, inject} from '@angular/core';
import {
  DataProviderFactory,
  DefaultTableLayoutComponent,
  FunctionParamsTableCell,
  TableCellCustomComponent,
  TableCellTypes,
  TableComponent,
  TableFactory,
  TableHeadCellCustomComponent,
} from '@modules/tables';
import {PolymorpheusComponent, PolymorpheusOutlet,} from '@taiga-ui/polymorpheus';
import {JsonPipe} from '@angular/common';
import {TableFilterFormComponent} from '../../forms/table-filter-form/table-filter-form.component';
import {TableFilterFormService} from '../../forms/table-filter-form/table-filter-form.service';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiButton} from '@taiga-ui/core';
import {preloadDataLoader} from './data-loaders';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'aff-tables',
  standalone: true,
  imports: [
    TableComponent,
    PolymorpheusOutlet,
    JsonPipe,
    DefaultTableLayoutComponent,
    TableFilterFormComponent,
    ReactiveFormsModule,
    TuiButton,
    PolymorpheusModule,
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.less',
  providers: [TableFilterFormService],
})
export class TablesComponent {
  // Table settings
  tableFilterFormService = inject(TableFilterFormService);
  tableFilterForm = this.tableFilterFormService.formGroup;
  staticTableRef = TableFactory.makePaginated({
    filterProvider: this.tableFilterFormService.formGroup,
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
              console.log('Header cell event callback: ', $event);
            },
          }
        },
        cell: {
          type: TableCellTypes.Polymorpheus,
          value: {
            component: new PolymorpheusComponent(TableCellCustomComponent<any>),
            componentEventCallback: ($event: any) => {
              console.log('Cell event callback: ', $event);
            },
          }
        }
      },
    ],
    hideDefaultEmptyMessage: true,
  });
}
