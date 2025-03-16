import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLayoutInfiniteComponent } from './table-layout-infinite.component';

describe('TableLayoutInfiniteComponent', () => {
  let component: TableLayoutInfiniteComponent;
  let fixture: ComponentFixture<TableLayoutInfiniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableLayoutInfiniteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableLayoutInfiniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
