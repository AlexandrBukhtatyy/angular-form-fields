import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormFieldModule} from '../../wrappers/form-field/form-field.module';
import {FormlyModule} from '@ngx-formly/core';
import {CheckboxListComponent} from './checkbox-list.component';


@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    CheckboxListComponent,
    FormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'checkboxList',
          component: CheckboxListComponent,
          wrappers: ['form-field'],
          defaultOptions: {},
        },
      ],
    }),
  ]
})
export class CheckboxListModule {
}
