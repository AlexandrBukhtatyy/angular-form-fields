import { Component } from '@angular/core';
import { FormGroupBase } from '../../modules/forms';
import { PaymentMethodOptions } from '../../models/payment-methods';

@Component({
  selector: 'aff-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.less'],
})
export class PaymentFormComponent extends FormGroupBase {
  paymentMethodOptions = PaymentMethodOptions;
  selectIdentityMatcher = (option1: any, option2: any, ) => option1.id === option2.id;
}
