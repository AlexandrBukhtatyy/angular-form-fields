import {Component} from '@angular/core';
import {FieldType, FieldTypeConfig} from '@ngx-formly/core';
import {RadioBlockListComponent as FRadioBlockListComponent} from '@modules/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

interface RadioBlockListProps<T> {
  type: 'radioBlockList';
  options: Array<T>;
}

@Component({
  selector: 'fgen-radio-block-list',
  imports: [
    FRadioBlockListComponent,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './radio-block-list.component.html',
  styleUrl: './radio-block-list.component.less',
  standalone: true
})
export class RadioBlockListComponent extends FieldType<FieldTypeConfig<RadioBlockListProps<any>>> {

}
