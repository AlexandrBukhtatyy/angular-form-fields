import {Component, Input} from '@angular/core';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {TableCellTypes, TableColumnSettings} from '@modules/tables';

@Component({
  selector: 'aff-table-cell',
  standalone: true,
  imports: [
    PolymorpheusOutlet,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
  ],
  templateUrl: './table-cell.component.html',
  styleUrl: './table-cell.component.less'
})
export class TableCellComponent {
  TABLE_COLUMN_TYPES = TableCellTypes;

  @Input() value!: any;
  @Input() config!: TableColumnSettings<any>;

}
