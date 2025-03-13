import {Component} from '@angular/core';
import {FormFieldBase} from '../../core/form-field.class';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/legacy';
import {TuiError} from '@taiga-ui/core';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';
import {AsyncPipe} from '@angular/common';

@Component({
    selector: 'aff-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.less'],
    imports: [
        ReactiveFormsModule,
        TuiInputModule,
        TuiError,
        TuiFieldErrorPipe,
        AsyncPipe
    ]
})
export class InputComponent extends FormFieldBase {
}
