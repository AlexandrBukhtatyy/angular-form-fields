import {Table} from './table';

export class Filters {
  constructor(private table: Table<any>) {
  }

  reset() {
    this.table.settings.filterProvider?.reset();
  }
}
