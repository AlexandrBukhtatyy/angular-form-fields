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
import {TableSettings} from '../../interfaces/teble-config';
import {TableCellComponent} from '../table-cell/table-cell.component';
import {TableHeaderCellComponent} from '../table-header-cell/table-header-cell.component';

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
    TableHeaderCellComponent,
    JsonPipe,
    AsyncPipe
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.less'
})
export class TableComponent {
  @Input() settings!: TableSettings<any>;

  get hideDefaultEmptyMessage(): boolean {
    return !!this.settings.hideDefaultEmptyMessage;
  };

  get columntsOrder() {
    return this.settings?.columns?.map((i) => i.key) ?? [];
  }
}
