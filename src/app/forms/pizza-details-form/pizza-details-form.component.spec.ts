import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDetailsFormComponent } from './pizza-details-form.component';

describe('PizzaDetailsFormComponent', () => {
  let component: PizzaDetailsFormComponent;
  let fixture: ComponentFixture<PizzaDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PizzaDetailsFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
