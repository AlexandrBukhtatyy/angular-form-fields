import {Component, Input, OnInit} from '@angular/core';
import {TableComponent} from '../../components/table/table.component';
import {TuiButton, TuiTextfieldDropdownDirective} from '@taiga-ui/core';
import {TuiButtonSelect, TuiDataListWrapperComponent, TuiPagination} from '@taiga-ui/kit';
import {FormsModule} from '@angular/forms';
import {TablePaginationComponent} from '../../components/table-pagination/table-pagination.component';
import {TableSizeComponent} from '../../components/table-size/table-size.component';
import {TableTotalComponent} from '../../components/table-total/table-total.component';
import {Table} from '../../classes/table';

@Component({
  selector: 'aff-default-table-layout',
  imports: [
    TableComponent,
    FormsModule,
    TablePaginationComponent,
    TableSizeComponent,
    TableTotalComponent
  ],
  templateUrl: './table-layout-paginated.component.html',
  styleUrl: './table-layout-paginated.component.less',
  standalone: true,
})
export class TableLayoutPaginatedComponent implements OnInit {
  @Input() table!: Table<any>;

  ngOnInit() {
    // TODO: Завести сервис который будет отвечать за поведение формы?
  }

}
