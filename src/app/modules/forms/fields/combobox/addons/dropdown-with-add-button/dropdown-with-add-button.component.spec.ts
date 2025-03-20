import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownWithAddButtonComponent } from './dropdown-with-add-button.component';

describe('DropdownWithAddButtonComponent', () => {
  let component: DropdownWithAddButtonComponent;
  let fixture: ComponentFixture<DropdownWithAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownWithAddButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownWithAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
