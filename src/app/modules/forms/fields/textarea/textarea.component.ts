import {Component} from '@angular/core';
import {FormFieldBase} from '../../core/form-field.class';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiTextareaModule} from '@taiga-ui/legacy';
import {TuiError} from '@taiga-ui/core';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'aff-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.less'],
  imports: [
    ReactiveFormsModule,
    TuiTextareaModule,
    TuiError,
    TuiFieldErrorPipe,
    AsyncPipe
  ],
  standalone: true,
})
export class TextareaComponent extends FormFieldBase {
}
