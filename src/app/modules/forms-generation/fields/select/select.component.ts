import {Component} from '@angular/core';
import {FieldType, FieldTypeConfig} from '@ngx-formly/core';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {PaymentMethodOptions} from '../../../../features/forms/models/payment-methods';
import {ReactiveFormsModule} from '@angular/forms';
import {SelectComponent as FSelectComponent} from '@modules/forms';
import {TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {NgClass} from '@angular/common';

interface SelectProps<T> {
  type: 'select';
  label: string;
  resetable: boolean;
  stringify?: TuiStringHandler<T>;
  identityMatcher: TuiItemsHandlers<T>['identityMatcher'];
  options: Array<T>;
  variant: string;
  variantProps: any;
}

@Component({
  selector: 'fgen-select',
  imports: [
    ReactiveFormsModule,
    FSelectComponent,
    NgClass,
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.less',
  standalone: true
})
export class SelectComponent extends FieldType<FieldTypeConfig<SelectProps<any>>> {

  protected readonly paymentMethodOptions = PaymentMethodOptions;
}
