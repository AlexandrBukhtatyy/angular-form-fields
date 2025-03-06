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
import {tableConfig} from './table.config';

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
  tableFilterForm = inject(TableFilterFormService).formGroup;
  tableRef = tableConfig();
}
