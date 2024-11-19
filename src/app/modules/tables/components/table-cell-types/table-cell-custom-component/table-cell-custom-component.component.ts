import {Component, inject} from '@angular/core';
import {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';
import {TableColumnSettings} from '../../../interfaces/teble-config';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'aff-table-cell-custom-component',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './table-cell-custom-component.component.html',
  styleUrl: './table-cell-custom-component.component.less'
})
export class TableCellCustomComponentComponent<T> {
  context: Record<any, { $implicit: T, config: TableColumnSettings<T> }> | null = inject(POLYMORPHEUS_CONTEXT, {optional: true});

  clickHandler() {
    // TODO: Разобраться с тем почему ругается линтер
    // @ts-ignore
    this.context?.config?.componentEventCallback('TableCellCustomComponentComponent button click');
  }
}
