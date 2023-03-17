import {Component} from '@angular/core';
import {ComboboxDataProvider, FormGroupBase} from '../../modules/forms';
import {of} from 'rxjs';
import {
  WithHintOptionItem
} from '../../modules/forms/form-fields/select/templates/with-hint-option-template/with-hint-option-template.component';

@Component({
  selector: 'aff-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.less'],
})
export class DeliveryFormComponent extends FormGroupBase {
  selectItemsWithHints: Array<WithHintOptionItem<any>> = [
    {id: '1', label: 'Label 1', hint: 'Hint 1'},
    {id: '2', label: 'Label 2', hint: 'Hint 2'},
    {id: '3', label: 'Label 3', hint: 'Hint 3'},
    {id: '4', label: 'Label 4', hint: 'Hint 4'},
  ];

  comboboxStringify(item: { label: string }): string {
    return item.label;
  }

  comboboxDataProvider: ComboboxDataProvider<any> = (term: string) => {
    const foundedItems = this.selectItemsWithHints.filter((item) => term == '' || item.label.toLowerCase() == term.toLowerCase() || item.label.toLowerCase().includes(term.toLowerCase()));
    return foundedItems && foundedItems.length ? of(foundedItems) : of(null);
  };
}
