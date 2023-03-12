import { Component } from '@angular/core';
import {FormFieldBase} from '../../core/form-field.class';

@Component({
  selector: 'aff-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less'],
})
export class InputComponent extends FormFieldBase {}
