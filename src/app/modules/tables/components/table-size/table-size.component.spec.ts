import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSizeComponent } from './table-size.component';

describe('TableSizeComponent', () => {
  let component: TableSizeComponent;
  let fixture: ComponentFixture<TableSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableSizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
