import {Component, inject} from '@angular/core';
import {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';
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
export class TableCellCustomComponentComponent {
  context: Record<any, any> | null = inject(POLYMORPHEUS_CONTEXT, {optional: true});
}
