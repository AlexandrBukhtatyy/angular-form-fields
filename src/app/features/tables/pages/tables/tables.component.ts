import {Component} from '@angular/core';
import {
  TableCellCustomComponentComponent,
  TableColumnTypes,
  TableComponent,
  TableFactory,
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
    JsonPipe
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.less'
})
export class TablesComponent {
  staticTableDataProvider = [
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
  ];

  staticTableSettings: TableSettings<any> = {
    columns: [
      { key: 'id', title: 'Id' },
      { key: 'title', title: 'Title' },
      { key: 'component', title: 'Component',
        type: TableColumnTypes.Polymorpheus,
        component: new PolymorpheusComponent(TableCellCustomComponentComponent)
      },
    ],
  };
}
