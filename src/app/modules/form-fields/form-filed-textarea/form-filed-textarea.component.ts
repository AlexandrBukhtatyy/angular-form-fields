import { Component, Input } from '@angular/core';
import { FormFieldBase } from '../../core/form-field.class';
import {TuiFieldErrorPipeModule, TuiTextAreaModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe} from "@angular/common";
import {TuiErrorModule} from "@taiga-ui/core";

@Component({
  selector: 'ngnx-form-filed-textarea',
  templateUrl: './form-filed-textarea.component.html',
  styleUrls: ['./form-filed-textarea.component.css'],
  imports: [
    TuiTextAreaModule,
    ReactiveFormsModule,
    TuiFieldErrorPipeModule,
    AsyncPipe,
    TuiErrorModule
  ],
  standalone: true
})
export class FormFiledTextareaComponent extends FormFieldBase {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() expandable: boolean = false;
}
