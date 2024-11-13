import { Component } from '@angular/core';
import {TableComponent, TableFactory, TableSettings} from '@modules/tables';

@Component({
  selector: 'aff-tables',
  standalone: true,
  imports: [
    TableComponent
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.less'
})
export class TablesComponent {
  staticTableDataProvider = [
    {id: '1', title: 'title 1', desc: 'description 1'},
    {id: '2', title: 'title 2', desc: 'description 2'},
    {id: '3', title: 'title 3', desc: 'description 3'},
    {id: '4', title: 'title 4', desc: 'description 4'},
  ];

  staticTableSettings: TableSettings = {
    columns: [
      { key: 'id', title: 'Id', },
      { key: 'title', title: 'Title' },
      { key: 'desc', title: 'Description' },
    ],
  };

  newStaticTableRef = TableFactory.makeStatic();
}
