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
    // TODO: не смог получить доступ к текущей директиве из DropdownWithAddButtonComponent,
    //  поэтому патчим общий компонент что бы можно было вызывать событие из дирекивы
    //  нужно найти более подходящее решение (может просто делать компоненты - варианты а не композиции директив)
    //  возможно нужна шина событий на композиционной директиве ?
    // @ts-ignore
    this.comboboxComponenRef['_test'] = () => {
      this.addClick();
    };
  }

  addClick() {
    this.addClicked.emit();
  }

}
