import {Component} from '@angular/core';
import {
  ComboboxComponent,
  ComboboxDataProvider,
  ComboboxDataProviderDirective,
  ComboboxWithAddButtonDirective,
  ComboboxWithHintVariantDirective,
  FormGroupBase,
  InputComponent,
  labelStringify,
  OptionWithHint, TextareaComponent
} from '@modules/forms';
import {of} from 'rxjs';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'aff-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.less'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ComboboxComponent,
    ComboboxWithHintVariantDirective,
    ComboboxWithAddButtonDirective,
    ComboboxDataProviderDirective,
    InputComponent,
    TextareaComponent
  ]
})
export class DeliveryFormComponent extends FormGroupBase {
  selectItemsWithHints: Array<OptionWithHint<any>> = [
    {id: '1', label: 'Label 1', hint: 'Hint 1'},
    {id: '2', label: 'Label 2', hint: 'Hint 2'},
    {id: '3', label: 'Label 3', hint: 'Hint 3'},
    {id: '4', label: 'Label 4', hint: 'Hint 4'},
  ];

  comboboxStringify = labelStringify;

  comboboxDataProvider: ComboboxDataProvider<any> = (term: string) => {
    const foundedItems = this.selectItemsWithHints.filter(
      (item) =>
        term == '' ||
        item.label.toLowerCase() == term.toLowerCase() ||
        item.label.toLowerCase().includes(term.toLowerCase())
    );
    return foundedItems && foundedItems.length ? of(foundedItems) : of(null);
  };

  addClicked() {
    console.log('addMore click!!!!');
  }
}
