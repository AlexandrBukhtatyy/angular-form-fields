import {Component, inject} from '@angular/core';
import {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';
import {TableColumnSettings} from '../../../interfaces/teble-config';
import {TuiButton} from '@taiga-ui/core';

@Component({
  selector: 'aff-table-cell-custom-component',
  imports: [
    TuiButton
  ],
  templateUrl: './table-cell-custom.component.html',
  styleUrl: './table-cell-custom.component.less',
  standalone: true,
})
export class TableCellCustomComponent<T> {
  context: Record<any, {
    row: T,
    config: TableColumnSettings<T>
  }> | null = inject(POLYMORPHEUS_CONTEXT, {optional: true});

  clickHandler() {
    // TODO: Разобраться с тем почему ругается линтер
    // @ts-ignore
    this.context?.config?.cell?.value.componentEventCallback('TableCellCustomComponentComponent button click');
  }
}
