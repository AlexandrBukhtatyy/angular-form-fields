import {Component, inject} from '@angular/core';
import {ComboboxComponent as ComboboxComponentRef} from '../../combobox.component';
import {
  ComboboxComponent,
  ComboboxDataProviderDirective,
  ComboboxWithAddButtonDirective,
  ComboboxWithHintDirective
} from '@modules/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {TuiTextfieldOptionsDirective} from '@taiga-ui/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'fgen-combobox-complex',
  imports: [
    ComboboxComponent,
    ReactiveFormsModule,
    FormlyModule,
    ComboboxDataProviderDirective,
    ComboboxWithHintDirective,
    ComboboxWithAddButtonDirective,
    TuiTextfieldOptionsDirective,
    NgClass,
  ],
  templateUrl: './combobox-complex.component.html',
  styleUrl: './combobox-complex.component.less',
  standalone: true
})
export class ComboboxComplexComponent {
  public comboboxComponentRef = inject(ComboboxComponentRef);

  addClicked($event: any) {
    this.comboboxComponentRef.field.props.variantProps.addClickCallback($event);
  }
}
