import {Component, Input} from '@angular/core';
import {TableCellTypes, TableColumnSettings} from '@modules/tables';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
  selector: 'aff-table-header-cell',
  imports: [
    NgSwitchCase,
    PolymorpheusOutlet,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
  ],
  templateUrl: './table-cell-header.component.html',
  styleUrl: './table-cell-header.component.less',
  standalone: true
})
export class TableCellHeaderComponent {
  TABLE_COLUMN_TYPES = TableCellTypes;

  @Input() config!: TableColumnSettings<any>;

}
