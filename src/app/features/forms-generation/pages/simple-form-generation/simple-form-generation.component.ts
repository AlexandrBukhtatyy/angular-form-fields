import {Component} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {FormsGenerationModule} from '@modules/forms-generation';
import {FormlyFieldConfig, FormlyModule} from '@ngx-formly/core';
import {TuiButton} from '@taiga-ui/core';

@Component({
  selector: 'aff-simple-form-generation',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsGenerationModule,
    FormlyModule,
    TuiButton,
  ],
  templateUrl: './simple-form-generation.component.html',
  styleUrl: './simple-form-generation.component.less'
})
export class SimpleFormGenerationComponent {
  form = new FormGroup({});
  model = {email: 'email@gmail.com'};
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    }
  ];

  onSubmit(model: any) {
    console.log(model);
  }

}
