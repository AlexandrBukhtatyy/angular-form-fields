import {Component, Input} from '@angular/core';
import {FormFieldBase} from '../../core/form-field.class';
import {TuiGroup, TuiLabel} from '@taiga-ui/core';
import {TuiRadio} from '@taiga-ui/kit';
import {ReactiveFormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'aff-radio-block-list',
  templateUrl: './radio-block-list.component.html',
  styleUrls: ['./radio-block-list.component.less'],
  standalone: true,
  imports: [
    TuiGroup,
    TuiLabel,
    TuiRadio,
    ReactiveFormsModule,
    NgForOf
  ]
})
export class RadioBlockListComponent extends FormFieldBase {
  @Input() options: any;
}
