import {Component} from '@angular/core';
import {FieldType, FieldTypeConfig, FormlyModule} from '@ngx-formly/core';
import {ComboboxDataProvider} from '@modules/forms';
import {ReactiveFormsModule} from '@angular/forms';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {ComboboxDefaultComponent} from './variants/combobox-default/combobox-default.component';
import {ComboboxComplexComponent} from './variants/combobox-complex/combobox-complex.component';

interface ComboboxProps<T> {
  type: 'combobox';
  label: string;
  stringify: TuiStringHandler<T>;
  dataProvider: ComboboxDataProvider<T>;
  variant: string;
  variantProps: any;
}

@Component({
  selector: 'fgen-combobox',
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    ComboboxDefaultComponent,
    ComboboxComplexComponent
  ],
  templateUrl: './combobox.component.html',
  styleUrl: './combobox.component.less',
  standalone: true
})
export class ComboboxComponent extends FieldType<FieldTypeConfig<ComboboxProps<any>>> {
}
