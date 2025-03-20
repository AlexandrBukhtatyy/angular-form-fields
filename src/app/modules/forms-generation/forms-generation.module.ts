import {importProvidersFrom, NgModule} from '@angular/core';
import {FormlyModule} from '@ngx-formly/core';
import {InputModule} from './fields/input/input.module';
import {FormFieldModule} from './wrappers/form-field/form-field.module';
import {ComboboxModule} from './fields/combobox/combobox.module';
import {SelectModule} from './fields/select/select.module';
import {RepeatModule} from './fields/repeat/repeat.module';


@NgModule({
  imports: [
    FormFieldModule,
    InputModule,
    ComboboxModule,
    SelectModule,
    RepeatModule
  ],
  providers: [importProvidersFrom(FormlyModule.forRoot())],
})
export class FormsGenerationModule { }
