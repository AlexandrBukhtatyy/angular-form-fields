import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxComplexComponent } from './combobox-complex.component';

describe('ComboboxComplexComponent', () => {
  let component: ComboboxComplexComponent;
  let fixture: ComponentFixture<ComboboxComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboboxComplexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboboxComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
