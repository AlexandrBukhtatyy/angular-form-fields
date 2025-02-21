import {Component, inject} from '@angular/core';
import {
  DataProviderFactory,
  DefaultTableLayoutComponent,
  TableHeadCellCustomComponent,
  TableCellTypes,
  TableComponent,
  TableFactory,
} from '@modules/tables';
import {PolymorpheusComponent, PolymorpheusOutlet,} from '@taiga-ui/polymorpheus';
import {JsonPipe} from '@angular/common';
import {TableFilterFormComponent} from '../../forms/table-filter-form/table-filter-form.component';
import {TableFilterFormService} from '../../forms/table-filter-form/table-filter-form.service';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiButton} from '@taiga-ui/core';
import {preloadDataLoader} from './data-loaders';
import {
  TableCellCustomComponent
} from '../../../../modules/tables/components/table-cell-types/table-head-cell-custom-component/table-cell-custom.component';

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
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.less',
  providers: [TableFilterFormService],
})
export class TablesComponent {
  tableFilterFormService = inject(TableFilterFormService);
  tableFilterForm = this.tableFilterFormService.formGroup;
  staticTableRef = TableFactory.makePaginated({
    filterProvider: this.tableFilterFormService.formGroup,
    // TODO: you can use ONE OF THIS DataProviders
    // dataProvider: ProviderFactory.makeStatic(ITEMS),
    dataProvider: DataProviderFactory.makePreload(preloadDataLoader),
    // dataProvider: ProviderFactory.makePaginated(paginatedDataLoader),
    // dataProvider: ProviderFactory.makePreload(infiniteDataLoader),
    columns: [
      {
        key: 'id',
        headCell: {
          type: TableCellTypes.String,
          value: 'Id'
        }
      },
      {
        key: 'title',
        headCell: {
          type: TableCellTypes.String,
          value: 'Title'
        }
      },
      {
        key: 'component',
        headCell: {
          type: TableCellTypes.Polymorpheus,
          value: 'Component',
          component: new PolymorpheusComponent(TableHeadCellCustomComponent<any>),
          componentEventCallback: ($event: any) => {
            console.log('Header cell event callback: ', $event);
          },
        },
        cell: {
          type: TableCellTypes.Polymorpheus,
          component: new PolymorpheusComponent(TableCellCustomComponent<any>),
          componentEventCallback: ($event: any) => {
            console.log('Cell event callback: ', $event);
          },
        }
      },
    ],
    hideDefaultEmptyMessage: true,
  });
}
