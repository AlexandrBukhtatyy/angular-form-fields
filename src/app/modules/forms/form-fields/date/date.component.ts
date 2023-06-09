import {Component} from '@angular/core';
import {FormFieldBase} from '../../core/form-field.class';
import {TuiFieldErrorPipeModule, TuiInputDateModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe} from "@angular/common";
import {TuiErrorModule} from "@taiga-ui/core";

@Component({
  selector: 'aff-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.less'],
  imports: [
    TuiInputDateModule,
    ReactiveFormsModule,
    TuiFieldErrorPipeModule,
    AsyncPipe,
    TuiErrorModule
  ],
  standalone: true
})
export class DateComponent extends FormFieldBase {
}
