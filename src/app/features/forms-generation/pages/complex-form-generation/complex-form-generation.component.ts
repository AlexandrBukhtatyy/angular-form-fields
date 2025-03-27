import { Component } from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {FormsGenerationModule} from '@modules/forms-generation';
import {FormlyModule} from '@ngx-formly/core';
import {TuiButton} from '@taiga-ui/core';
import {formConfig} from './complex-form.config';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'aff-complex-form-generation',
  imports: [
    ReactiveFormsModule,
    FormsGenerationModule,
    FormlyModule,
    TuiButton,
    JsonPipe,
  ],
  templateUrl: './complex-form-generation.component.html',
  styleUrl: './complex-form-generation.component.less',
  standalone: true
})
export class ComplexFormGenerationComponent {
  form = new FormGroup({});
  model = {
    entrance: 1
  };
  fields = formConfig();

  onSubmit(model: any) {
    console.log(model);
  }
}
