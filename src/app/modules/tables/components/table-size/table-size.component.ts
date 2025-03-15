import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TuiButton, TuiTextfieldDropdownDirective} from '@taiga-ui/core';
import {TuiButtonSelect, TuiDataListWrapperComponent} from '@taiga-ui/kit';
import {FormsModule} from '@angular/forms';
import {TuiContext, TuiStringHandler} from '@taiga-ui/cdk';

@Component({
  selector: 'aff-table-size',
  imports: [
    TuiButton,
    TuiButtonSelect,
    TuiDataListWrapperComponent,
    FormsModule,
    TuiTextfieldDropdownDirective
  ],
  templateUrl: './table-size.component.html',
  styleUrl: './table-size.component.less',
  standalone: true,
})
export class TableSizeComponent {
  @Input() index!: number;
  @Input() size!: number;
  @Output()
  sizeChanged = new EventEmitter();

  protected readonly items = [10, 50, 100];
  protected readonly content: TuiStringHandler<TuiContext<number>> = ({$implicit}) =>
    `${$implicit} items per page`;

  sizeChangedHandler(index: number) {
    this.size = index;
    this.sizeChanged.emit(this.size);
  }
}
