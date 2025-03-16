import {Component, inject} from '@angular/core';
import {TableLayoutPaginatedComponent,} from '@modules/tables';
import {TableFilterFormComponent} from '../../forms/table-filter-form/table-filter-form.component';
import {TableFilterFormService} from '../../forms/table-filter-form/table-filter-form.service';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiButton} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {tableConfig} from './table.config';

@Component({
  selector: 'aff-table-paginated',
  imports: [
    TableLayoutPaginatedComponent,
    TableFilterFormComponent,
    ReactiveFormsModule,
    TuiButton,
    PolymorpheusModule,
  ],
  templateUrl: './table-paginated.component.html',
  styleUrl: './table-paginated.component.less',
  providers: [TableFilterFormService],
  standalone: true
})
export class TablePaginatedComponent {
  tableFilterForm = inject(TableFilterFormService).formGroup;
  tableRef = tableConfig(this);

  tableCellClickHandler($event: any) {
    console.log('TablesComponent.tableCellClickHandler: ', $event);
  }
}
