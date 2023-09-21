import {Directive, inject} from '@angular/core';
import {DropdownWithAddButtonComponent} from '../templates/dropdown-with-add-button/dropdown-with-add-button.component';
import {ComboboxComponent} from '../combobox.component';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

@Directive({
  selector: '[aff-combobox[withAddButton]]',
  standalone: true,
})
export class ComboboxWithAddButtonDirective<T> {
  comboboxComponenRef = inject(ComboboxComponent<T>);

  constructor() {
    this.comboboxComponenRef.dropdownContent = new PolymorpheusComponent(DropdownWithAddButtonComponent);
  }

}
