import {Component, inject} from '@angular/core';
import {
  DefaultTableLayoutComponent,
  DataProviderFactory,
  TableCellCustomComponentComponent,
  TableColumnTypes,
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
      {key: 'id', title: 'Id'},
      {key: 'title', title: 'Title'},
      {
        key: 'component',
        title: 'Component',
        type: TableColumnTypes.Polymorpheus,
        component: new PolymorpheusComponent(
          TableCellCustomComponentComponent<any>
        ),
        componentEventCallback: ($event: any) => {
          console.log('Component event callback: ', $event);
        },
      },
    ],
    hideDefaultEmptyMessage: true,
  });
}
