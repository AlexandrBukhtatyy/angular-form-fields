import {Component} from '@angular/core';
import {FormFieldBase} from '../../core/form-field.class';
import {TuiFieldErrorPipeModule, TuiInputDateModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe} from "@angular/common";
import {TuiErrorModule} from "@taiga-ui/core";

@Component({
  selector: 'ngnx-form-field-date',
  templateUrl: './form-field-date.component.html',
  styleUrls: ['./form-field-date.component.css'],
  imports: [
    TuiInputDateModule,
    ReactiveFormsModule,
    TuiFieldErrorPipeModule,
    AsyncPipe,
    TuiErrorModule
  ],
  standalone: true
})
export class FormFieldDateComponent extends FormFieldBase {
}
