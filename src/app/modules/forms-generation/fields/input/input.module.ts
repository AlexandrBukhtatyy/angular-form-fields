import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {InputComponent} from './input.component';
import {FormFieldModule} from '../../wrappers/form-field/form-field.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    FormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input',
          component: InputComponent,
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
export class InputModule {
}
