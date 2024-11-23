import {Component, Input} from '@angular/core';

@Component({
  selector: 'aff-table-total',
  standalone: true,
  imports: [],
  templateUrl: './table-total.component.html',
  styleUrl: './table-total.component.less'
})
export class TableTotalComponent {
  @Input() total!: number;
}
