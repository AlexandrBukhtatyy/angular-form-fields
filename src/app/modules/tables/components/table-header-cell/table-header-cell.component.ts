import {Component, Input} from '@angular/core';
import {TableCellTypes, TableColumnSettings} from '@modules/tables';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
  selector: 'aff-table-header-cell',
  standalone: true,
  imports: [
    NgSwitchCase,
    PolymorpheusOutlet,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
  ],
  templateUrl: './table-header-cell.component.html',
  styleUrl: './table-header-cell.component.less'
})
export class TableHeaderCellComponent {
  TABLE_COLUMN_TYPES = TableCellTypes;

  @Input() config!: TableColumnSettings<any>;

}
