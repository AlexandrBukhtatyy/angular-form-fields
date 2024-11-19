import {Component, Input} from '@angular/core';
import {TableColumnSettings} from '@modules/tables';

@Component({
  selector: 'aff-table-header-cell',
  standalone: true,
  imports: [],
  templateUrl: './table-header-cell.component.html',
  styleUrl: './table-header-cell.component.less'
})
export class TableHeaderCellComponent {
  @Input() config!: TableColumnSettings<any>;

}
