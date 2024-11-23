import {Component, Input} from '@angular/core';
import {TuiButton, TuiTextfieldDropdownDirective} from '@taiga-ui/core';
import {TuiButtonSelect, TuiDataListWrapperComponent} from '@taiga-ui/kit';
import {FormsModule} from '@angular/forms';
import {TuiContext, TuiStringHandler} from '@taiga-ui/cdk';

@Component({
  selector: 'aff-table-size',
  standalone: true,
  imports: [
    TuiButton,
    TuiButtonSelect,
    TuiDataListWrapperComponent,
    FormsModule,
    TuiTextfieldDropdownDirective
  ],
  templateUrl: './table-size.component.html',
  styleUrl: './table-size.component.less'
})
export class TableSizeComponent {
  @Input() index!: number;
  @Input() size!: number;
  protected readonly items = [10, 50, 100];
  protected readonly content: TuiStringHandler<TuiContext<number>> = ({$implicit}) =>
    `${$implicit} items per page`;
}
