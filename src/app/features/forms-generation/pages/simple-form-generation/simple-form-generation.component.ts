import {Component} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {COMBOBOX_VARIANTS, FormsGenerationModule} from '@modules/forms-generation';
import {FormlyFieldConfig, FormlyModule} from '@ngx-formly/core';
import {TuiButton} from '@taiga-ui/core';
import {addressDataProvider} from '../../../forms/data-providers/address.provider';
import {labelStringify} from '@modules/forms';

@Component({
  selector: 'aff-simple-form-generation',
  imports: [
    ReactiveFormsModule,
    FormsGenerationModule,
    FormlyModule,
    TuiButton,
  ],
  templateUrl: './simple-form-generation.component.html',
  styleUrl: './simple-form-generation.component.less',
  standalone: true
})
export class SimpleFormGenerationComponent {
  form = new FormGroup({});
  model = {email: 'email@gmail.com'};
  fields: FormlyFieldConfig[] = [
    {
      className: 'tui-form__row',
      fieldGroupClassName: 'tui-form__row_multi-fields',
      fieldGroup: [
        {
          key: 'address',
          type: 'combobox',
          className: 'tui-form__multi-field',
          props: {
            label: 'Address',
            placeholder: 'Address',
            required: true,
            dataProvider: addressDataProvider,
            stringify: labelStringify,
            variant: COMBOBOX_VARIANTS.COMPLEX,
            variantProps: {
              addClickCallback: (value: any) => console.log('addClickCallback: ', value)
            }
          }
        },
        {
          key: 'entrance',
          type: 'input',
          className: 'tui-form__multi-field',
          props: {
            label: 'Entrance',
            placeholder: 'Entrance',
            required: true,
          }
        },
      ]
    },
    {
      className: 'tui-form__row',
      fieldGroupClassName: 'tui-form__row_multi-fields',
      fieldGroup: [
        {
          key: 'floor',
          type: 'input',
          className: 'tui-form__multi-field',
          props: {
            label: 'Floor',
            placeholder: 'Floor',
            required: true,
          }
        },
        {
          key: 'appartament',
          type: 'input',
          className: 'tui-form__multi-field',
          props: {
            label: 'Email Appartament',
            placeholder: 'Appartament',
            required: true,
          }
        },
        {
          key: 'code',
          type: 'input',
          className: 'tui-form__multi-field',
          props: {
            label: 'Code',
            placeholder: 'Code',
            required: true,
          }
        },
      ]
    },
    {
      className: 'tui-form__row',
      fieldGroupClassName: 'tui-form__row_multi-fields',
      fieldGroup: [
        {
          key: 'comment',
          type: 'input',
          className: 'tui-form__multi-field',
          props: {
            label: 'Comment',
            placeholder: 'Comment',
            required: true,
          }
        },
      ]
    }
  ];

  onSubmit(model: any) {
    console.log(model);
  }

}
