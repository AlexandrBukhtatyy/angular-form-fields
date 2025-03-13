import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {
  FormsGenerationFormFieldModule
} from '../../wrappers/forms-generation-form-field/forms-generation-form-field.module';
import {FormlyModule} from '@ngx-formly/core';
import {FormsGenerationInputComponent} from './forms-generation-input.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsGenerationInputComponent,
    FormsGenerationFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input',
          component: FormsGenerationInputComponent,
          wrappers: ['form-field'],
        },
        {name: 'string', extends: 'input'},
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            props: {
              type: 'number',
            },
          },
        },
        {
          name: 'integer',
          extends: 'input',
          defaultOptions: {
            props: {
              type: 'number',
            },
          },
        },
      ],
    }),
  ]
})
export class FormsGenerationInputModule {
}
