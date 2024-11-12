import {Component, inject} from '@angular/core';
import {FormArray, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {OrderFormService, PizzaOptions} from './order-form.service';
import {TuiAppearance, TuiButton} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';
import {PizzaDetailsFormComponent} from '../../forms/pizza-details-form/pizza-details-form.component';
import {ContactsShortFormComponent} from '../../forms/contacts-short-form/contacts-short-form.component';
import {DeliveryFormComponent} from '../../forms/delivery-form/delivery-form.component';
import {PaymentFormComponent} from '../../forms/payment-form/payment-form.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'aff-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.less'],
  providers: [
    OrderFormService,
    TuiAppearance,
    TuiCardLarge
  ],
  standalone: true,
  imports: [
    ContactsShortFormComponent,
    DeliveryFormComponent,
    PaymentFormComponent,
    PizzaDetailsFormComponent,
    ReactiveFormsModule,
    TuiCardLarge,
    NgForOf,
    TuiAppearance,
    TuiButton
  ]
})
export class OrderFormComponent {
  orderFormService = inject(OrderFormService);
  formGroup: FormGroup;

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
}