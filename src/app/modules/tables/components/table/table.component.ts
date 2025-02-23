import {Component, Input} from '@angular/core';
import {
  CdkCell,
  CdkCellDef,
  CdkColumnDef,
  CdkHeaderCell,
  CdkHeaderCellDef,
  CdkHeaderRow,
  CdkHeaderRowDef,
  CdkNoDataRow,
  CdkRow,
  CdkRowDef,
  CdkTable
} from '@angular/cdk/table';
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from '@angular/common';
import {TableCellComponent} from '../table-cell/table-cell.component';
import {Table} from '../../classes/table';
import {TableCellHeaderComponent} from '../table-cell-header/table-cell-header.component';

@Component({
  selector: 'aff-table',
  standalone: true,
  imports: [
    CdkTable,
    NgForOf,
    CdkColumnDef,
    CdkHeaderCell,
    CdkHeaderCellDef,
    CdkCell,
    CdkCellDef,
    NgIf,
    CdkNoDataRow,
    CdkHeaderRow,
    CdkHeaderRowDef,
    CdkRowDef,
    CdkRow,
    TableCellComponent,
    TableCellHeaderComponent,
    JsonPipe,
    AsyncPipe
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.less'
})
export class TableComponent {
  @Input() table!: Table<any>;

  get hideDefaultEmptyMessage(): boolean {
    return !!this.table.settings.hideDefaultEmptyMessage;
  };

  get columntsOrder() {
    return this.table.settings?.columns?.map((i) => i.key) ?? [];
  }
}
