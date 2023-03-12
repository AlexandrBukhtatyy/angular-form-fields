import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryFormComponent } from './delivery-form.component';

describe('DeliveryFormComponent', () => {
  let component: DeliveryFormComponent;
  let fixture: ComponentFixture<DeliveryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeliveryFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
