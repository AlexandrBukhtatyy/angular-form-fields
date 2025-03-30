import { TestBed } from '@angular/core/testing';

import { TablePaginatedService } from './table-paginated.service';

describe('TablePaginatedService', () => {
  let service: TablePaginatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablePaginatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
