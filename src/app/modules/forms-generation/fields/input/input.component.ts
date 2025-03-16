import {Component} from '@angular/core';
import {FieldType, FieldTypeConfig, FormlyModule} from '@ngx-formly/core';
import {InputComponent as FInputComponent} from '@modules/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy';

interface InputProps {
  type: 'input';
  label: string;
  resetable: boolean;
}

@Component({
  selector: 'fgen-input',
  imports: [
    FInputComponent,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
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
