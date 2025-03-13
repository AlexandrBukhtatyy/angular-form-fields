import {Component, Input} from '@angular/core';

@Component({
  selector: 'aff-table-total',
  imports: [],
  templateUrl: './table-total.component.html',
  styleUrl: './table-total.component.less',
  standalone: true,
})
export class TableTotalComponent {
  @Input() total!: number;
}
