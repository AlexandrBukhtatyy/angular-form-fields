import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexFormGenerationComponent } from './complex-form-generation.component';

describe('ComplexFormGenerationComponent', () => {
  let component: ComplexFormGenerationComponent;
  let fixture: ComponentFixture<ComplexFormGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplexFormGenerationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexFormGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
