import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ComboboxComponent} from '../combobox/combobox.component';
import {FormFieldModule} from '../../wrappers/form-field/form-field.module';
import {FormlyModule} from '@ngx-formly/core';
import {SelectComponent} from './select.component';


@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    ComboboxComponent,
    FormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'select',
          component: SelectComponent,
          wrappers: ['form-field'],
          defaultOptions: {
            props: {
              variant: 'default',
            },
          },
        },
      ],
    }),
  ]
})
export class SelectModule {
}
