import { Component } from '@angular/core';
import {FormFieldBase} from '../../core/form-field.class';

@Component({
  selector: 'aff-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.less'],
})
export class TextareaComponent extends FormFieldBase {}
