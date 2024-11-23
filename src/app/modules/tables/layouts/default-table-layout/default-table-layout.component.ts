import {Component, Input} from '@angular/core';
import {TableComponent} from '../../components/table/table.component';
import {TableSettings} from '../../interfaces/teble-config';
import {TuiButton, TuiTextfieldDropdownDirective} from '@taiga-ui/core';
import {TuiButtonSelect, TuiDataListWrapperComponent, TuiPagination} from '@taiga-ui/kit';
import {FormsModule} from '@angular/forms';
import {TuiContext, TuiStringHandler} from '@taiga-ui/cdk';
import {TablePaginationComponent} from '../../components/table-pagination/table-pagination.component';
import {TableSizeComponent} from '../../components/table-size/table-size.component';
import {TableTotalComponent} from '../../components/table-total/table-total.component';

@Component({
  selector: 'aff-default-table-layout',
  standalone: true,
  imports: [
    TableComponent,
    TuiButton,
    TuiButtonSelect,
    FormsModule,
    TuiDataListWrapperComponent,
    TuiTextfieldDropdownDirective,
    TuiPagination,
    TablePaginationComponent,
    TableSizeComponent,
    TableTotalComponent
  ],
  templateUrl: './default-table-layout.component.html',
  styleUrl: './default-table-layout.component.less'
})
export class DefaultTableLayoutComponent {
  @Input() settings!: TableSettings<any>;

  protected index = 4;
  protected length = 10;
  protected size = 10;
  protected total = 100;

}
