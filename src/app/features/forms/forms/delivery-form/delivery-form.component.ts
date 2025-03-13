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
  OptionWithHint,
  TextareaComponent
} from '@modules/forms';
import {of} from 'rxjs';
import {ReactiveFormsModule} from '@angular/forms';
import {addressDataProvider} from '../../data-providers/address.provider';

@Component({
  selector: 'aff-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.less'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ComboboxComponent,
    ComboboxWithHintVariantDirective,
    ComboboxWithAddButtonDirective,
    ComboboxDataProviderDirective,
    InputComponent,
    TextareaComponent
  ]
})
export class DeliveryFormComponent extends FormGroupBase {

  addressStringify = labelStringify;

  addressDataProvider: ComboboxDataProvider<any> = addressDataProvider;

  addClicked() {
    console.log('addMore click!!!!');
  }
}
