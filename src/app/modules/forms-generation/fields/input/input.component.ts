import { Component } from '@angular/core';
import {FieldType, FieldTypeConfig} from '@ngx-formly/core';

interface InputProps {
  type: 'input';
}

@Component({
    selector: 'fgen-input',
    imports: [],
    templateUrl: './input.component.html',
    styleUrl: './input.component.less'
})
export class InputComponent extends FieldType<FieldTypeConfig<InputProps>> {
  get type() {
    return this.props.type || 'text';
  }
}
