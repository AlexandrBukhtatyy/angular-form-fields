import {Component, inject} from '@angular/core';
import {TableLayoutPaginatedComponent,} from '@modules/tables';
import {TableFilterFormComponent} from '../../forms/table-filter-form/table-filter-form.component';
import {TableFilterFormService} from '../../forms/table-filter-form/table-filter-form.service';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiButton} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {tableConfig} from './table.config';

@Component({
  selector: 'aff-tables',
  imports: [
    TableLayoutPaginatedComponent,
    TableFilterFormComponent,
    ReactiveFormsModule,
    TuiButton,
    PolymorpheusModule,
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.less',
  providers: [TableFilterFormService],
  standalone: true
})
export class TablesComponent {
  tableFilterForm = inject(TableFilterFormService).formGroup;
  tableRef = tableConfig(this);

  tableCellClickHandler($event: any) {
    console.log('TablesComponent.tableCellClickHandler: ', $event);
  }
}
