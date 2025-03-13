import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsGenerationInputComponent } from './forms-generation-input.component';

describe('FormsGenerationInputComponent', () => {
  let component: FormsGenerationInputComponent;
  let fixture: ComponentFixture<FormsGenerationInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsGenerationInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsGenerationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
