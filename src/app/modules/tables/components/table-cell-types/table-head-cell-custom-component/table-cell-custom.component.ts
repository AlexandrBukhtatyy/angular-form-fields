import {Component, inject} from '@angular/core';
import {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';
import {TableColumnSettings} from '../../../interfaces/teble-config';
import {JsonPipe} from '@angular/common';
import {TuiButton} from '@taiga-ui/core';

@Component({
  selector: 'aff-table-cell-custom-component',
  standalone: true,
  imports: [
    JsonPipe,
    TuiButton
  ],
  templateUrl: './table-cell-custom.component.html',
  styleUrl: './table-cell-custom.component.less'
})
export class TableCellCustomComponent<T> {
  context: Record<any, { $implicit: T, config: TableColumnSettings<T> }> | null = inject(POLYMORPHEUS_CONTEXT, {optional: true});

  clickHandler() {
    // TODO: Разобраться с тем почему ругается линтер
    // @ts-ignore
    this.context?.config?.cell?.componentEventCallback('TableCellCustomComponentComponent button click');
  }
}
