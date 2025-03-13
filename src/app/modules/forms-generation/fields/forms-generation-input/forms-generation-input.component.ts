import { Component } from '@angular/core';
import {FieldType, FieldTypeConfig} from '@ngx-formly/core';

interface InputProps {
  type: 'input';
}

@Component({
  selector: 'aff-forms-generation-input',
  standalone: true,
  imports: [],
  templateUrl: './forms-generation-input.component.html',
  styleUrl: './forms-generation-input.component.less'
})
export class FormsGenerationInputComponent extends FieldType<FieldTypeConfig<InputProps>> {
  get type() {
    return this.props.type || 'text';
  }
}
