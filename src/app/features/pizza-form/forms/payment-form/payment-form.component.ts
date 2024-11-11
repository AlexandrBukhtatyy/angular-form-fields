import {Component} from '@angular/core';
import {FormGroupBase, NumberComponent, SelectComponent} from '@modules/forms';
import {PaymentMethodOptions} from '../../models/payment-methods';
import {ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'aff-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.less'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SelectComponent,
    NumberComponent,
    NgIf
  ]
})
export class PaymentFormComponent extends FormGroupBase {
  paymentMethodOptions = PaymentMethodOptions;
  selectIdentityMatcher = (option1: any, option2: any,) => option1.id === option2.id;
}
