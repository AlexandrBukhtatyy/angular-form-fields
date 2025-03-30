import {Component} from '@angular/core';
import {FieldType, FieldTypeConfig, FormlyModule} from '@ngx-formly/core';
import {CheckboxListComponent as FCheckboxListComponent} from '@modules/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe, NgClass} from '@angular/common';

interface CheckboxListProps<T> {
  type: 'comboboxList';
  dictionary: Record<string, string>;
}

@Component({
  selector: 'fgen-checkbox-list',
  imports: [
    ReactiveFormsModule,
    FCheckboxListComponent,
    FormsModule,
    NgClass,
    FormlyModule,
    JsonPipe
  ],
  templateUrl: './checkbox-list.component.html',
  styleUrl: './checkbox-list.component.less',
  standalone: true
})
export class CheckboxListComponent extends FieldType<FieldTypeConfig<CheckboxListProps<any>>> {
}
