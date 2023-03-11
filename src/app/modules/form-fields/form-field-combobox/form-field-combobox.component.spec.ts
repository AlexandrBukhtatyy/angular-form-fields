import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldComboboxComponent } from './form-field-combobox.component';

describe('FormFieldComboboxComponent', () => {
  let component: FormFieldComboboxComponent;
  let fixture: ComponentFixture<FormFieldComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormFieldComboboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFieldComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
