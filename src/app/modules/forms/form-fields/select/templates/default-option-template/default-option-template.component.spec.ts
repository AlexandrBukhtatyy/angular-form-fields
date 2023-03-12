import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultOptionTemplateComponent } from './default-option-template.component';

describe('OptionTemplateDefaultComponent', () => {
  let component: DefaultOptionTemplateComponent;
  let fixture: ComponentFixture<DefaultOptionTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultOptionTemplateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultOptionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
