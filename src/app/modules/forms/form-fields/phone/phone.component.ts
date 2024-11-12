import { Component } from '@angular/core';
import {FormFieldBase} from '../../core/form-field.class';
import {TuiInputPhoneModule} from '@taiga-ui/legacy';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiError} from '@taiga-ui/core';
import {AsyncPipe} from '@angular/common';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';

@Component({
  selector: 'aff-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.less'],
  standalone: true,
  imports: [
    TuiInputPhoneModule,
    ReactiveFormsModule,
    TuiError,
    AsyncPipe,
    TuiFieldErrorPipe
  ]
})
export class PhoneComponent extends FormFieldBase {}
