import {Component, inject} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {
  ComboboxComponent,
  ComboboxDataProvider,
  ComboboxDataProviderDirective,
  ComboboxWithAddButtonDirective,
  ComboboxWithHintVariantDirective,
  InputComponent,
  labelStringify, TextareaComponent
} from '@modules/forms';
import {addressDataProvider} from '../../data-providers/address.provider';
import {SimpleFormService} from './simple-form.service';
import {TuiButton} from '@taiga-ui/core';

@Component({
  selector: 'aff-simple-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ComboboxWithAddButtonDirective,
    ComboboxWithHintVariantDirective,
    ComboboxDataProviderDirective,
    ComboboxComponent,
    InputComponent,
    TextareaComponent,
    TuiButton
  ],
  providers: [
    SimpleFormService
  ],
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.less'
})
export class SimpleFormComponent {
  simpleFormService = inject(SimpleFormService);
  formGroup: FormGroup;

  constructor() {
    this.simpleFormService.initForm();
    this.formGroup = this.simpleFormService.formGroup;
  }

  addressStringify = labelStringify;

  addressDataProvider: ComboboxDataProvider<any> = addressDataProvider;

  addClicked() {
    console.log('addMore click!!!!');
  }

  submitForm() {
    alert(this.formGroup.value);
  }
}
