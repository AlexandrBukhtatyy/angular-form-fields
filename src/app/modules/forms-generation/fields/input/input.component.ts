import {Component} from '@angular/core';
import {FieldType, FieldTypeConfig, FormlyModule} from '@ngx-formly/core';
import {InputComponent as FInputComponent} from '@modules/forms';
import {ReactiveFormsModule} from '@angular/forms';

interface InputProps {
  type: 'input';
  label: string;
}

@Component({
  selector: 'fgen-input',
  imports: [
    FInputComponent,
    ReactiveFormsModule,
    FormlyModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.less',
  standalone: true
})
export class InputComponent extends FieldType<FieldTypeConfig<InputProps>> {
  get type() {
    return this.props.type || 'text';
  }
}
