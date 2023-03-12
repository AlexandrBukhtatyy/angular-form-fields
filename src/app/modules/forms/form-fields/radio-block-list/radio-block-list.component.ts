import {Component, Input} from '@angular/core';
import {FormFieldBase} from '../../core/form-field.class';

@Component({
  selector: 'aff-radio-block-list',
  templateUrl: './radio-block-list.component.html',
  styleUrls: ['./radio-block-list.component.less'],
})
export class RadioBlockListComponent extends FormFieldBase {
  @Input() options: any;
}
