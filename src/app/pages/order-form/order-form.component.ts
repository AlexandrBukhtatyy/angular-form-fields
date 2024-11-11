import {Component, inject} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {OrderFormService, PizzaOptions} from './order-form.service';
import {TuiAppearance} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
  selector: 'aff-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.less'],
  providers: [
    OrderFormService,
    TuiAppearance,
    TuiCardLarge,
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
