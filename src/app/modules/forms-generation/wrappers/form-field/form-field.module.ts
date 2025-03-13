import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormFieldComponent} from './form-field.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldComponent,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'form-field',
          component: FormFieldComponent,
        },
      ],
    }),
  ]
})
export class FormFieldModule { }
