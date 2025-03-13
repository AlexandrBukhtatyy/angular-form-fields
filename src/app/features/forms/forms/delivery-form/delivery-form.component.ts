import {Component} from '@angular/core';
import {
  ComboboxComponent,
  ComboboxDataProvider,
  ComboboxDataProviderDirective,
  ComboboxWithAddButtonDirective,
  ComboboxWithHintVariantDirective,
  FormGroupBase,
  InputComponent,
  labelStringify,
  TextareaComponent
} from '@modules/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {addressDataProvider} from '../../data-providers/address.provider';

@Component({
  selector: 'aff-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.less'],
  imports: [
    ReactiveFormsModule,
    ComboboxComponent,
    ComboboxWithHintVariantDirective,
    ComboboxWithAddButtonDirective,
    ComboboxDataProviderDirective,
    InputComponent,
    TextareaComponent
  ],
  standalone: true
})
export class DeliveryFormComponent extends FormGroupBase {

  addressStringify = labelStringify;

  addressDataProvider: ComboboxDataProvider<any> = addressDataProvider;

  addClicked() {
    console.log('addMore click!!!!');
  }
}
