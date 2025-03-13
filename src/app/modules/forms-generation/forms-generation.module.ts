import {importProvidersFrom, NgModule} from '@angular/core';
import {FormsGenerationInputModule} from './fields/forms-generation-input/forms-generation-input.module';
import {FormlyModule} from '@ngx-formly/core';


@NgModule({
  imports: [
    FormsGenerationInputModule,
  ],
  providers: [importProvidersFrom(FormlyModule.forRoot())],
})
export class FormsGenerationModule { }
