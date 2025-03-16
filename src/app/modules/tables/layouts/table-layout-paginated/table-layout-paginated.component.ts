import {Component, Input, OnInit} from '@angular/core';
import {TableComponent} from '../../components/table/table.component';
import {FormsModule} from '@angular/forms';
import {TablePaginationComponent} from '../../components/table-pagination/table-pagination.component';
import {TableSizeComponent} from '../../components/table-size/table-size.component';
import {TableTotalComponent} from '../../components/table-total/table-total.component';
import {AsyncPipe, NgIf} from '@angular/common';
import {PaginatedTable} from '../../classes/table-paginated';

@Component({
  selector: 'aff-table-layout-paginated',
  imports: [
    TableComponent,
    TablePaginationComponent,
    TableSizeComponent,
    TableTotalComponent,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './table-layout-paginated.component.html',
  styleUrl: './table-layout-paginated.component.less',
  standalone: true,
})
export class TableLayoutPaginatedComponent implements OnInit {
  @Input() table!: PaginatedTable<any>;

  ngOnInit() {
    this.table.update();
  }

}
