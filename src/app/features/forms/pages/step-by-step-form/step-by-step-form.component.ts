import {Component, inject} from '@angular/core';
import {ContactsShortFormComponent} from '../../forms/contacts-short-form/contacts-short-form.component';
import {DeliveryFormComponent} from '../../forms/delivery-form/delivery-form.component';
import {FormArray, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass, NgForOf, NgSwitch, NgSwitchCase} from '@angular/common';
import {PaymentFormComponent} from '../../forms/payment-form/payment-form.component';
import {PizzaDetailsFormComponent} from '../../forms/pizza-details-form/pizza-details-form.component';
import {TuiAppearance, TuiButton} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';
import {PizzaOptions, PizzaOrderFormService} from '../../common/pizza-order-form.service';
import {TuiConnected, TuiStep, TuiStepperComponent} from '@taiga-ui/kit';
import {fadeInAnimation} from '@modules/animations';
import {FormStepperDirective} from '../../../../modules/forms/directives/form-stepper.directive';

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
    NgSwitchCase,
    NgClass,
    FormStepperDirective
  ],
  templateUrl: './step-by-step-form.component.html',
  providers: [
    PizzaOrderFormService
  ],
  animations: [
    fadeInAnimation
  ]
})
export class StepByStepFormComponent {
  orderFormService = inject(PizzaOrderFormService);
  formGroup: FormGroup;
  formSteps = [
    'orderDetails',
    'contacts',
    'delivaryDetails',
    'paymentDetails',
  ];
  formStepsLabels = [
    'Order details',
    'Contacts',
    'Delivery details',
    'Payment method',
  ];

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

  protected readonly FormGroup = FormGroup;
}
