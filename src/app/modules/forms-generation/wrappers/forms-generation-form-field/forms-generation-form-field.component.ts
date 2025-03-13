import { Component } from '@angular/core';
import {FieldWrapper, FormlyFieldConfig, FormlyFieldProps as CoreFormlyFieldProps} from '@ngx-formly/core';

export interface FormlyFieldProps extends CoreFormlyFieldProps {
  hideLabel?: boolean;
  hideRequiredMarker?: boolean;
  labelPosition?: 'floating';
}

@Component({
  selector: 'aff-forms-generation-form-field',
  standalone: true,
  imports: [],
  templateUrl: './forms-generation-form-field.component.html',
  styleUrl: './forms-generation-form-field.component.less'
})
export class FormsGenerationFormFieldComponent extends FieldWrapper<FormlyFieldConfig<FormlyFieldProps>> {

}
