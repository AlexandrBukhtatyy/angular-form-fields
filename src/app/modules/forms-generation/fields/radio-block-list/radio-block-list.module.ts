import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormFieldModule} from '../../wrappers/form-field/form-field.module';
import {FormlyModule} from '@ngx-formly/core';
import {RadioBlockListComponent} from './radio-block-list.component';


@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    RadioBlockListComponent,
    FormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'radioBlockList',
          component: RadioBlockListComponent,
          wrappers: ['form-field'],
          defaultOptions: {},
        },
      ],
    }),
  ]
})
export class RadioBlockListModule {
}
