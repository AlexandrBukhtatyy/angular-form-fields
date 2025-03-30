import {Component, inject} from '@angular/core';
import {TableLayoutPaginatedComponent,} from '@modules/tables';
import {TableFilterFormComponent} from '../../forms/table-filter-form/table-filter-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiButton} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TablePaginatedService} from './table-paginated.service';
import {JsonPipe, NgIf} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'aff-table-paginated',
  imports: [
    TableLayoutPaginatedComponent,
    TableFilterFormComponent,
    ReactiveFormsModule,
    TuiButton,
    PolymorpheusModule,
    NgIf,
  ],
  templateUrl: './table-paginated.component.html',
  styleUrl: './table-paginated.component.less',
  standalone: true
})
export class TablePaginatedComponent {
  route = inject(ActivatedRoute);
  tablePaginatedService = inject(TablePaginatedService);
  tableFilterForm = this.tablePaginatedService.tableFilterForm;
  tableRef = this.tablePaginatedService.tableRef;
  title = this.route?.snapshot?.data['title'];
}
