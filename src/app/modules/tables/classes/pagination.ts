import {Table} from './table';

export class Pagination {
  index: number = 0;
  length: number = 0;
  size: number = 10;
  total: number = 100;

  constructor(private table: Table<any>) {
  }

  goToPage(page: number) {
    this.table.settings.dataProvider;
  }

}
