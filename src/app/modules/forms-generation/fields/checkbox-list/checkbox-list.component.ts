import {Component} from '@angular/core';
import {FieldType, FieldTypeConfig} from '@ngx-formly/core';
import {CheckboxListComponent as FCheckboxListComponent} from '@modules/forms';
import {ReactiveFormsModule} from '@angular/forms';

interface CheckboxListProps<T> {
  type: 'comboboxList';
  dictionary: Record<string, string>;
}

@Component({
  selector: 'fgen-checkbox-list',
  imports: [
    ReactiveFormsModule,
    FCheckboxListComponent
  ],
  templateUrl: './checkbox-list.component.html',
  styleUrl: './checkbox-list.component.less',
  standalone: true
})
export class CheckboxListComponent extends FieldType<FieldTypeConfig<CheckboxListProps<any>>> {
}
