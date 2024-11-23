import {Component} from '@angular/core';
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

@Component({
  selector: 'aff-tables',
  standalone: true,
  imports: [
    TableComponent,
    PolymorpheusOutlet,
    JsonPipe,
    DefaultTableLayoutComponent
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.less'
})
export class TablesComponent {
  staticTableSettings: TableSettings<any> = {
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
      { key: 'id', title: 'Id' },
      { key: 'title', title: 'Title' },
      { key: 'component', title: 'Component',
        type: TableColumnTypes.Polymorpheus,
        component: new PolymorpheusComponent(TableCellCustomComponentComponent<any>),
        componentEventCallback: ($event: any) => {
          console.log('Component event callback: ', $event)
        },
      },
    ],
    hideDefaultEmptyMessage: true,
  };

}
