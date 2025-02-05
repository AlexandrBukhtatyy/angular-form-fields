import {Component, inject} from '@angular/core';
import {
  DefaultTableLayoutComponent,
  ProviderFactory,
  TableCellCustomComponentComponent,
  TableColumnTypes,
  TableComponent,
  TableSettings,
} from '@modules/tables';
import {PolymorpheusComponent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {JsonPipe} from '@angular/common';
import {TableFilterFormComponent} from '../../forms/table-filter-form/table-filter-form.component';
import {TableFilterFormService} from '../../forms/table-filter-form/table-filter-form.service';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'aff-tables',
  standalone: true,
  imports: [
    TableComponent,
    PolymorpheusOutlet,
    JsonPipe,
    DefaultTableLayoutComponent,
    TableFilterFormComponent,
    ReactiveFormsModule
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.less',
  providers: [
    TableFilterFormService
  ]
})
export class TablesComponent {
  tableFilterFormService = inject(TableFilterFormService);
  tableFilterForm = this.tableFilterFormService.formGroup;
  staticTableSettings: TableSettings<any> = {
    filterProvider: this.tableFilterFormService.formGroup,
    dataProvider: ProviderFactory.makeStatic([
      {
        id: '1',
        title: 'title 1',
        component: 'component 1'
      },
      {
        id: '2',
        title: 'title 2',
        component: 'component 2'
      },
      {
        id: '3',
        title: 'title 3',
        component: 'component 3'
      },
      {
        id: '4',
        title: 'title 4',
        component: 'component 4'
      },
    ]),
    columns: [
      {key: 'id', title: 'Id'},
      {key: 'title', title: 'Title'},
      {
        key: 'component', title: 'Component',
        type: TableColumnTypes.Polymorpheus,
        component: new PolymorpheusComponent(TableCellCustomComponentComponent<any>),
        componentEventCallback: ($event: any) => {
          console.log('Component event callback: ', $event);
        },
      },
    ],
    hideDefaultEmptyMessage: true,
  };

}
