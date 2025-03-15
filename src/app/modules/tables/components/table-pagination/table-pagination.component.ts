import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TuiPagination} from '@taiga-ui/kit';

@Component({
  selector: 'aff-table-pagination',
  imports: [
    TuiPagination
  ],
  templateUrl: './table-pagination.component.html',
  styleUrl: './table-pagination.component.less',
  standalone: true,
})
export class TablePaginationComponent {
  @Input() index!: number;
  @Input() size!: number;
  @Input() total!: number;
  @Output()
  indexChanged = new EventEmitter();

  get length(): number {
    return Math.ceil(this.total / this.size);
  }

  indexChangedHandler(index: number) {
    this.index = index;
    this.indexChanged.emit(this.index);
  }
}
