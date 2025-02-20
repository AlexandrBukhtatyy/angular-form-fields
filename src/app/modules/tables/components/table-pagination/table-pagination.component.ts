import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TuiPagination} from '@taiga-ui/kit';

@Component({
  selector: 'aff-table-pagination',
  standalone: true,
  imports: [
    TuiPagination
  ],
  templateUrl: './table-pagination.component.html',
  styleUrl: './table-pagination.component.less'
})
export class TablePaginationComponent {
  @Input() index!: number;
  @Output()
  indexChanged = new EventEmitter();
  @Input() size!: number;
  @Input() total!: number;

  get length(): number {
    return Math.ceil(this.total/this.size)
  }

  indexChangedHandler(index: number) {
    this.index = index
    this.indexChanged.emit(this.index)
  }
}
