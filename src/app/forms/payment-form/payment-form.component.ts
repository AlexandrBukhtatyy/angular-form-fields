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
  selectIdentityMatcher = (paymentMethodOption1: any, paymentMethodOption2: any, ) => paymentMethodOption1.id === paymentMethodOption2.id;
}
