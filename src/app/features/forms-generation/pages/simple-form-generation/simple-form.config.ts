import {FormlyFieldConfig} from '@ngx-formly/core';
import {addressDataProvider} from '../../../forms/data-providers/address.provider';
import {labelStringify} from '@modules/forms';
import {COMBOBOX_VARIANTS} from '@modules/forms-generation';

export const formConfig = (): FormlyFieldConfig[] => [
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
          resetable: true,
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
          resetable: true,
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
          resetable: true,
          required: true,
        }
      },
      {
        key: 'appartament',
        type: 'input',
        className: 'tui-form__multi-field',
        props: {
          label: 'Appartament',
          placeholder: 'Appartament',
          resetable: true,
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
          resetable: true,
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
          resetable: true,
          required: true,
        }
      },
    ]
  }
];
