import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormGenerationComponent } from './simple-form-generation.component';

describe('SimpleFormGenerationComponent', () => {
  let component: SimpleFormGenerationComponent;
  let fixture: ComponentFixture<SimpleFormGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleFormGenerationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleFormGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
