import {inject, Injectable} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Toppings} from '../models/toppings';
import {emailValidator, phoneValidator} from '@modules/forms';
import {PaymentMethodOptions} from '../models/payment-methods';

export type ToppingType = { id: string, selected: boolean };
export type PizzaOptions = { size?: string, borderSize?: string, toppings?: ToppingType[] }

const DEFAULT_TOPPINGS = [
  {id: Toppings.onion, selected: false},
  {id: Toppings.pickle, selected: false}
];

const DEFAULT_PIZZA_OPTIONS: PizzaOptions = {
  size: 'medium',
  borderSize: 'traditional',
  toppings: DEFAULT_TOPPINGS,
};

@Injectable()
export class PizzaOrderFormService {
  formGroup!: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);

  get orderDetails(): FormArray {
    return this.formGroup.get('orderDetails') as FormArray;
  }

  addPizza(options: PizzaOptions = {toppings: DEFAULT_TOPPINGS}) {
    this.orderDetails.push(
      this.makePizzaFormGroup(options)
    );
  }

  removePizza(index: number) {
    if (this.orderDetails.length === 1) {
      this.orderDetails.at(0).setValue(DEFAULT_PIZZA_OPTIONS);
    } else {
      this.orderDetails.removeAt(index);
    }
  }

  initForm() {
    this.formGroup = this.fb.group({
      orderDetails: this.fb.array([
        this.makePizzaFormGroup({toppings: DEFAULT_TOPPINGS})
      ]),
      delivaryDetails: this.fb.group({
        address: [null, Validators.required],
        entrance: [null, Validators.required],
        floor: [null, Validators.required],
        appartament: [null, Validators.required],
        code: [null],
        comment: [null],
      }),
      contacts: this.fb.group({
        name: [null, Validators.required],
        phone: [null, Validators.required],
        email: [null, [Validators.required, emailValidator]],
      }),
      paymentDetails: this.fb.group({
        paymentMethod: [PaymentMethodOptions[0]],
        cashCount: [null]
      })
    });
    this.initFormBehaviour();
  }

  private initFormBehaviour() {
    // TODO: переполняет стек и не дает эффекти во вложенном компоненте
    // Блокировка поля в зависимости от значения в другом поле
    this.formGroup.get('paymentDetails')?.get('cashCount')?.disable({emitEvent: false});
    this.formGroup.get('paymentDetails')?.get('paymentMethod')?.valueChanges.subscribe((value) => {
      if (value.id === 'cashToCourier') {
        this.formGroup.get('paymentDetails')?.get('cashCount')?.enable();
      } else {
        this.formGroup.get('paymentDetails')?.get('cashCount')?.disable();
      }
    });
  }

  /**
   * Формируем FormGroup для конкретной пиццы
   */
  private makePizzaFormGroup(options: PizzaOptions): FormGroup {
    return this.fb.group({
      size: [options.size ?? 'medium'],
      borderSize: [options.borderSize ?? 'traditional'],
      toppings: options.toppings
        ? this.makeToppingFormGroup(options.toppings)
        : [],
    });
  }

  /**
   * Формируем FormGroup для наполнителей (Toppings)
   */
  private makeToppingFormGroup(toppings: ToppingType[] = []) {
    if (!toppings || toppings.length === 0) {
      return this.fb.array([]);
    }

    const value = toppings.map((topping) => {
      return this.fb.group({
        id: [topping.id || 'cheese'],
        selected: [!!topping.selected],
      });
    });

    return this.fb.array(value);
  }
}
