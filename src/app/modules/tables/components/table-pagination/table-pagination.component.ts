import {Component, Input} from '@angular/core';
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
  @Input() length!: number;
}
