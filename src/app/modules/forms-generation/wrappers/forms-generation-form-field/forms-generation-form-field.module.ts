import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormsGenerationFormFieldComponent} from './forms-generation-form-field.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsGenerationFormFieldComponent,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'form-field',
          component: FormsGenerationFormFieldComponent,
        },
      ],
    }),
  ]
})
export class FormsGenerationFormFieldModule { }
