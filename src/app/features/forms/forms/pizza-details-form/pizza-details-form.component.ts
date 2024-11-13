import {Component, inject} from '@angular/core';
import {ToppingsDictionary} from '../../models/toppings';
import {BorderSizeOptions} from '../../models/border-sizes';
import {PizzaSizeOptions} from '../../models/pizza-sizes';
import {CheckboxListComponent, FormGroupBase, RadioBlockListComponent} from '@modules/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {PizzaOrderFormService} from '../../pages/composite-form/pizza-order-form.service';

@Component({
  selector: 'aff-pizza-details-form',
  templateUrl: './pizza-details-form.component.html',
  styleUrls: ['./pizza-details-form.component.less'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RadioBlockListComponent,
    CheckboxListComponent
  ]
})
export class PizzaDetailsFormComponent extends FormGroupBase {
  orderFormService = inject(PizzaOrderFormService);
  toppingsDictionary = ToppingsDictionary;
  pizzaSizeOptions = PizzaSizeOptions;
  borderSizeOptions = BorderSizeOptions;
}
