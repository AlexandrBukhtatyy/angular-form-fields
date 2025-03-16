import {Component} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {COMBOBOX_VARIANTS, FormsGenerationModule} from '@modules/forms-generation';
import {FormlyFieldConfig, FormlyModule} from '@ngx-formly/core';
import {TuiButton} from '@taiga-ui/core';
import {addressDataProvider} from '../../../forms/data-providers/address.provider';
import {labelStringify} from '@modules/forms';
import {formConfig} from './simple-form.config';

@Component({
  selector: 'aff-simple-form-generation',
  imports: [
    ReactiveFormsModule,
    FormsGenerationModule,
    FormlyModule,
    TuiButton,
  ],
  templateUrl: './simple-form-generation.component.html',
  styleUrl: './simple-form-generation.component.less',
  standalone: true
})
export class SimpleFormGenerationComponent {
  form = new FormGroup({});
  model = {
    entrance: 1
  };
  fields = formConfig();

  onSubmit(model: any) {
    console.log(model);
  }

}
