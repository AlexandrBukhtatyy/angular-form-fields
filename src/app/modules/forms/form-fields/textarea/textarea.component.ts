import { Component } from '@angular/core';
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
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiTextareaModule,
    TuiError,
    TuiFieldErrorPipe,
    AsyncPipe
  ]
})
export class TextareaComponent extends FormFieldBase {}
