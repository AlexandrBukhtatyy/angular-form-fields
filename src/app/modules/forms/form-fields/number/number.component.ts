import {Component} from '@angular/core';
import {FormFieldBase} from '../../core/form-field.class';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputNumberModule} from '@taiga-ui/legacy';
import {TuiError} from '@taiga-ui/core';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'aff-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.less'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiInputNumberModule,
    TuiError,
    TuiFieldErrorPipe,
    AsyncPipe
  ]
})
export class NumberComponent extends FormFieldBase {
}
