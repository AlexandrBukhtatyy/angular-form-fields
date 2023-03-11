import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithHintValueTemplateComponent } from './with-hint-value-template.component';

describe('ValueTemplateWithHintComponent', () => {
  let component: WithHintValueTemplateComponent;
  let fixture: ComponentFixture<WithHintValueTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithHintValueTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WithHintValueTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
