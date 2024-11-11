import {Component} from '@angular/core';
import {FormFieldBase} from '../../core/form-field.class';
import {TuiFieldErrorPipe} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe} from "@angular/common";
import {TuiInputDateModule} from '@taiga-ui/legacy';
import {TuiError} from '@taiga-ui/core';

@Component({
  selector: 'aff-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.less'],
  imports: [
    TuiInputDateModule,
    ReactiveFormsModule,
    TuiFieldErrorPipe,
    AsyncPipe,
    TuiError
  ],
  standalone: true
})
export class DateComponent extends FormFieldBase {
}
