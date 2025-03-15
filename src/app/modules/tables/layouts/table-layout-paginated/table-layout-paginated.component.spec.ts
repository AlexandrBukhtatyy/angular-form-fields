import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLayoutPaginatedComponent } from './table-layout-paginated.component';

describe('DefaultTableLayoutComponent', () => {
  let component: TableLayoutPaginatedComponent;
  let fixture: ComponentFixture<TableLayoutPaginatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableLayoutPaginatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableLayoutPaginatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
