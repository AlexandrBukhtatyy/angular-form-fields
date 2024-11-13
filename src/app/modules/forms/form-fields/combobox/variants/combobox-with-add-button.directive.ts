import {Directive, EventEmitter, inject, Output} from '@angular/core';
import {DropdownWithAddButtonComponent} from '../templates/dropdown-with-add-button/dropdown-with-add-button.component';
import {ComboboxComponent} from '../combobox.component';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Directive({
  selector: '[aff-combobox[withAddButton]]',
  standalone: true,
})
export class ComboboxWithAddButtonDirective<T> {
  comboboxComponenRef = inject(ComboboxComponent<T>);

  @Output()
  addClicked = new EventEmitter();

  constructor() {
    this.comboboxComponenRef.dropdownContent = new PolymorpheusComponent(DropdownWithAddButtonComponent);
  }

  addClick() {

    this.addClicked.emit();
  }

}
