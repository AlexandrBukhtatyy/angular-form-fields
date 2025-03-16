import {Component, Input, OnInit} from '@angular/core';
import {PaginatedTable} from '../../classes/table-paginated';
import {AsyncPipe, JsonPipe, NgIf} from '@angular/common';

@Component({
  selector: 'aff-table-layout-infinite',
  imports: [
    AsyncPipe,
    JsonPipe,
    NgIf
  ],
  templateUrl: './table-layout-infinite.component.html',
  styleUrl: './table-layout-infinite.component.less',
  standalone: true
})
export class TableLayoutInfiniteComponent implements OnInit {
  @Input() table!: PaginatedTable<any>;

  ngOnInit() {
    this.table.update();
  }
}
