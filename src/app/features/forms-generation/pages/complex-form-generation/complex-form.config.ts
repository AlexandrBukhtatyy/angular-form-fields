import {FormlyFieldConfig} from '@ngx-formly/core';
import {addressDataProvider} from '../../../forms/data-providers/address.provider';
import {labelStringify} from '@modules/forms';
import {COMBOBOX_VARIANTS} from '@modules/forms-generation';
import {PaymentMethodOptions} from '../../../forms/models/payment-methods';
import {PizzaSizeOptions} from '../../../forms/models/pizza-sizes';
import {BorderSizeOptions} from '../../../forms/models/border-sizes';
import {ToppingsDictionary} from '../../../forms/models/toppings';

export const formConfig = (): FormlyFieldConfig[] => [
  {
    template: '<h2 class="tui-space_top-8 tui-space_bottom-4 tui-text_h3">Order details</h2>'
  },
  {
    key: 'orderDetails',
    type: 'repeat',
    props: {
      addText: 'Add Task',
      label: 'TODO LIST',
    },
    fieldArray: {
      fieldGroup: [
        {
          key: 'size',
          type: 'radioBlockList',
          className: 'tui-form__row',
          props: {
            options: PizzaSizeOptions,
            required: true,
          }
        },
        {
          key: 'borderSize',
          type: 'radioBlockList',
          className: 'tui-form__row',
          props: {
            options: BorderSizeOptions,
            required: true,
          }
        },
        {
          template: '<h3 class="tui-text_h5 tui-space_top-4 tui-space_bottom-2">Toppings</h3>'
        },
        {
          key: 'toppings',
          type: 'checkboxList',
          props: {
            dictionary: ToppingsDictionary,
            required: true,
          }
        },
      ]
    },
  },
  {
    template: '<h2 class="tui-space_top-8 tui-space_bottom-4 tui-text_h3">Contacts</h2>'
  },
  {
    fieldGroup: [
      {
        className: 'tui-form__row',
        fieldGroupClassName: 'tui-form__row_multi-fields',
        fieldGroup: [
          {
            key: 'name',
            type: 'input',
            className: 'tui-form__multi-field',
            props: {
              label: 'Name',
              placeholder: 'Name',
              resetable: true,
              required: true,
            }
          },
          {
            key: 'phone',
            type: 'input',
            className: 'tui-form__multi-field',
            props: {
              label: 'Phone',
              placeholder: 'Phone',
              resetable: true,
              required: true,
            }
          },
          {
            key: 'email',
            type: 'input',
            className: 'tui-form__multi-field',
            props: {
              label: 'Email',
              placeholder: 'Email',
              resetable: true,
              required: true,
            }
          },
        ]
      },
    ]
  },
  {
    template: '<h2 class="tui-space_top-8 tui-space_bottom-4 tui-text_h3">Delivery details</h2>'
  },
  {
    fieldGroup: [
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
    ]
  },
  {
    template: '<h2 class="tui-space_top-8 tui-space_bottom-4 tui-text_h3">Payment method</h2>'
  },
  {
    key: 'paymentMethod',
    type: 'select',
    className: 'tui-form__row',
    props: {
      label: 'Payment method',
      placeholder: 'Select payment method',
      options: PaymentMethodOptions,
      resetable: true,
      required: true,
    }
  },
  {
    key: 'cashCount',
    type: 'input',
    className: 'tui-form__row',
    props: {
      label: 'Cash count',
      placeholder: 'Enter cash count',
      resetable: true,
      required: true,
    }
  },
];
