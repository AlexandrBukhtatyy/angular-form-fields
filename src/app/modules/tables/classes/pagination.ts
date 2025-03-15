export class Pagination {
  index: number = 0;
  length: number = 0;
  size: number = 10;
  total: number = 100;

  serialize() {
    return {
      page: this.index,
      size: this.size
    }
  }
}
