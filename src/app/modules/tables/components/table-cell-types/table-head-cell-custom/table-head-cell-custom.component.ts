import {Component, inject} from '@angular/core';
import {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';
import {TableColumnSettings} from '../../../interfaces/teble-config';
import {TuiButton} from '@taiga-ui/core';

@Component({
  selector: 'aff-table-cell-custom-component',
  imports: [
    TuiButton
  ],
  templateUrl: './table-head-cell-custom.component.html',
  styleUrl: './table-head-cell-custom.component.less',
  standalone: true,
})
export class TableHeadCellCustomComponent<T> {
  context: Record<any, { config: TableColumnSettings<T> }> | null = inject(POLYMORPHEUS_CONTEXT, {optional: true});

  clickHandler() {
    // TODO: Разобраться с тем почему ругается линтер
    // @ts-ignore
    this.context?.config?.headCell?.value.componentEventCallback('TableCellCustomComponentComponent button click');
  }
}
