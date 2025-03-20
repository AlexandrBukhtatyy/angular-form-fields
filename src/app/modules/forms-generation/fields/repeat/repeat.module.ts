import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {RepeatComponent} from './repeat.component';


@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [{name: 'repeat', component: RepeatComponent}],
      // validationMessages: [{name: 'required', message: 'This field is required'}],
    }),
  ]
})
export class RepeatModule {
}
