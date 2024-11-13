import {Component, inject} from '@angular/core';
import {ContactsShortFormComponent} from '../../forms/contacts-short-form/contacts-short-form.component';
import {DeliveryFormComponent} from '../../forms/delivery-form/delivery-form.component';
import {FormArray, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf, NgSwitch, NgSwitchCase} from '@angular/common';
import {PaymentFormComponent} from '../../forms/payment-form/payment-form.component';
import {PizzaDetailsFormComponent} from '../../forms/pizza-details-form/pizza-details-form.component';
import {TuiAppearance, TuiButton} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';
import {PizzaOrderFormService, PizzaOptions} from '../composite-form/pizza-order-form.service';
import {TuiConnected, TuiStep, TuiStepperComponent} from '@taiga-ui/kit';

@Component({
  selector: 'aff-step-by-step-form',
  standalone: true,
  imports: [
    ContactsShortFormComponent,
    DeliveryFormComponent,
    FormsModule,
    NgForOf,
    PaymentFormComponent,
    PizzaDetailsFormComponent,
    ReactiveFormsModule,
    TuiAppearance,
    TuiButton,
    TuiCardLarge,
    TuiStepperComponent,
    TuiConnected,
    TuiStep,
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './step-by-step-form.component.html',
  providers: [PizzaOrderFormService]
})
export class StepByStepFormComponent {
  orderFormService = inject(PizzaOrderFormService);
  formGroup: FormGroup;
  activeStepIndex = 0;

  constructor() {
    this.orderFormService.initForm();
    this.formGroup = this.orderFormService.formGroup;
  }

  get orderDetails(): FormArray {
    return this.orderFormService.orderDetails;
  }

  addPizza(options?: PizzaOptions) {
    this.orderFormService.addPizza(options);
  }

  removePizza(index: number) {
    this.orderFormService.removePizza(index);
  }

  submitForm() {
    alert(this.formGroup.value);
  }

  prevStep() {
    this.activeStepIndex = this.activeStepIndex > 0 ? this.activeStepIndex - 1 : this.activeStepIndex;
  }

  nextStep() {
    this.activeStepIndex = this.activeStepIndex < 3 ? this.activeStepIndex + 1 : this.activeStepIndex;
  }
}
