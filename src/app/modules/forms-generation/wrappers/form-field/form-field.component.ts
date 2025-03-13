import { Component } from '@angular/core';
import {FieldWrapper, FormlyFieldConfig, FormlyFieldProps as CoreFormlyFieldProps} from '@ngx-formly/core';

export interface FormlyFieldProps extends CoreFormlyFieldProps {
  hideLabel?: boolean;
  hideRequiredMarker?: boolean;
  labelPosition?: 'floating';
}

@Component({
    selector: 'fgen-form-field',
    imports: [],
    templateUrl: './form-field.component.html',
    styleUrl: './form-field.component.less'
})
export class FormFieldComponent extends FieldWrapper<FormlyFieldConfig<FormlyFieldProps>> {

}
