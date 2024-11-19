import {Component, Input} from '@angular/core';
import {JsonPipe, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {TableColumnTypes} from '@modules/tables';

@Component({
  selector: 'aff-table-cell',
  standalone: true,
  imports: [
    JsonPipe,
    PolymorpheusOutlet,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
  ],
  templateUrl: './table-cell.component.html',
  styleUrl: './table-cell.component.less'
})
export class TableCellComponent {
  @Input() config!: any;
  @Input() value!: any;
  TABLE_COLUMN_TYPES = TableColumnTypes;

}
