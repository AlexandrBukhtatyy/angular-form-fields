import {Component, inject} from '@angular/core';
import {ComboboxComponent, ComboboxDataProviderDirective} from '@modules/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {ComboboxComponent as ComboboxComponentRef} from '../../combobox.component';

@Component({
  selector: 'fgen-combobox-default',
  imports: [
    ComboboxComponent,
    ReactiveFormsModule,
    FormlyModule,
    ComboboxDataProviderDirective
  ],
  templateUrl: './combobox-default.component.html',
  styleUrl: './combobox-default.component.less',
  standalone: true
})
export class ComboboxDefaultComponent {
  public comboboxComponentRef = inject(ComboboxComponentRef);
}
