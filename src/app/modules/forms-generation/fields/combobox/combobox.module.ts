import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FormFieldModule} from '../../wrappers/form-field/form-field.module';
import {FormlyModule} from '@ngx-formly/core';
import {ComboboxComponent} from './combobox.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComboboxComponent,
    FormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'combobox',
          component: ComboboxComponent,
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
export class ComboboxModule {
}
