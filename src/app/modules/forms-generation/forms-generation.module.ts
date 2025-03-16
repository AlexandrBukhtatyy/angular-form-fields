import {importProvidersFrom, NgModule} from '@angular/core';
import {FormlyModule} from '@ngx-formly/core';
import {InputModule} from './fields/input/input.module';
import {FormFieldModule} from './wrappers/form-field/form-field.module';
import {ComboboxModule} from './fields/combobox/combobox.module';


@NgModule({
  imports: [
    FormFieldModule,
    InputModule,
    ComboboxModule,
  ],
  providers: [importProvidersFrom(FormlyModule.forRoot())],
})
export class FormsGenerationModule { }
