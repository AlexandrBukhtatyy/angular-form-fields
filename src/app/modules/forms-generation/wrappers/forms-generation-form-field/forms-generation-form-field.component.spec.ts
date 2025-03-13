import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsGenerationFormFieldComponent } from './forms-generation-form-field.component';

describe('FormsGenerationFormFieldComponent', () => {
  let component: FormsGenerationFormFieldComponent;
  let fixture: ComponentFixture<FormsGenerationFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsGenerationFormFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsGenerationFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
