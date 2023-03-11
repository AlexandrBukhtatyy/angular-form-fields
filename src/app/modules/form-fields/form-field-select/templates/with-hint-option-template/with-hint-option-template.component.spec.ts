import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithHintOptionTemplateComponent } from './with-hint-option-template.component';

describe('OptionTemplateWithHintComponent', () => {
  let component: WithHintOptionTemplateComponent;
  let fixture: ComponentFixture<WithHintOptionTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithHintOptionTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WithHintOptionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
