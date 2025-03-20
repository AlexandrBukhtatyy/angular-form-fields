import {Component} from '@angular/core';
import {FieldArrayType, FormlyModule} from '@ngx-formly/core';
import {NgClass, NgForOf} from '@angular/common';
import {TuiAppearance, TuiButton} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
  selector: 'fgen-repeat',
  imports: [
    NgForOf,
    FormlyModule,
    TuiAppearance,
    TuiButton,
    TuiCardLarge,
    NgClass
  ],
  templateUrl: './repeat.component.html',
  styleUrl: './repeat.component.less',
  standalone: true
})
export class RepeatComponent extends FieldArrayType {
  // TODO: разобраться prePopulate(field: FormlyFieldConfig) {}
}
