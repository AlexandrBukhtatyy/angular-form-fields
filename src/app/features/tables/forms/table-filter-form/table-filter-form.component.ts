import {Component} from '@angular/core';
import {
  ComboboxComponent,
  ComboboxDataProvider,
  ComboboxDataProviderDirective,
  ComboboxWithAddButtonDirective,
  ComboboxWithHintVariantDirective,
  DateComponent,
  FormGroupBase,
  InputComponent,
  labelStringify,
  OptionWithHint,
  SelectComponent,
  TextareaComponent
} from '@modules/forms';
import {of} from 'rxjs';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiButton} from '@taiga-ui/core';
import {PaymentMethodOptions} from '../../../forms/models/payment-methods';

@Component({
  selector: 'aff-table-filter-form',
  templateUrl: './table-filter-form.component.html',
  styleUrls: ['./table-filter-form.component.less'],
  imports: [
    ReactiveFormsModule,
    InputComponent,
    DateComponent,
    ComboboxComponent,
    ComboboxDataProviderDirective,
    TuiButton
  ],
  standalone: true
})
export class TableFilterFormComponent extends FormGroupBase {

  comboboxStringify = labelStringify;

  comboboxDataProvider: ComboboxDataProvider<any> = (term: string) => {
    const selectItemsWithHints: Array<OptionWithHint<any>> = [
      {id: '1', label: 'Label 1', hint: 'Hint 1'},
      {id: '2', label: 'Label 2', hint: 'Hint 2'},
      {id: '3', label: 'Label 3', hint: 'Hint 3'},
      {id: '4', label: 'Label 4', hint: 'Hint 4'},
    ];
    const foundedItems = selectItemsWithHints.filter(
      (item) =>
        term == '' ||
        item.label.toLowerCase() == term.toLowerCase() ||
        item.label.toLowerCase().includes(term.toLowerCase())
    );
    return foundedItems && foundedItems.length ? of(foundedItems) : of(null);
  };
  protected readonly paymentMethodOptions = PaymentMethodOptions;
  selectIdentityMatcher = (option1: any, option2: any,) => option1.id === option2.id;

  addClicked() {

  }

  resetHandler() {
    this.formGroup.reset();
  }

  searchHandler() {
    // TODO: Добавить обраточик на форму - придумать сопосб каким буду обновлять таблицу (либо по подписке либо по изменению формы)
  }
}
