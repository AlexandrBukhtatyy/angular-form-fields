import {Directive, EventEmitter, inject, Output} from '@angular/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {ComboboxComponent} from '../../combobox.component';
import {DropdownWithAddButtonComponent} from './dropdown-with-add-button.component';

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
