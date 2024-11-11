import {Component, inject, Input, Output} from '@angular/core';
import {FormFieldBase} from '../../core/form-field.class';
import {TUI_ITEMS_HANDLERS, TuiDataListWrapper, TuiFieldErrorPipe,} from '@taiga-ui/kit';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiError, TuiValueContentContext} from '@taiga-ui/core';
import {AsyncPipe, JsonPipe, NgIf} from '@angular/common';
import {TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {PolymorpheusComponent, PolymorpheusContent, PolymorpheusModule,} from '@tinkoff/ng-polymorpheus';
import {
  OptionDefaultTemplateComponent
} from '../../templates/option-default-template/option-default-template.component';
import {ReplaySubject} from 'rxjs';
import {
  ComboboxWithAddButtonContext,
  DropdownWithAddButtonComponent,
} from './templates/dropdown-with-add-button/dropdown-with-add-button.component';
import {TuiComboBoxModule, TuiTextfieldComponent} from '@taiga-ui/legacy';

@Component({
  selector: 'aff-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.less'],
  standalone: true,
  imports: [
    TuiComboBoxModule,
    ReactiveFormsModule,
    TuiDataListWrapper,
    TuiError,
    TuiFieldErrorPipe,
    AsyncPipe,
    JsonPipe,
    DropdownWithAddButtonComponent,
    PolymorpheusModule,
    NgIf,
  ],
})
export class ComboboxComponent<T> extends FormFieldBase {
  private readonly itemsHandlers: TuiItemsHandlers<T> =
    inject(TUI_ITEMS_HANDLERS);

  @Input()
  items: any[] | null = null;

  @Input()
  identityMatcher: TuiItemsHandlers<T>['identityMatcher'] =
    this.itemsHandlers.identityMatcher;

  @Input()
  stringify: TuiItemsHandlers<T>['stringify'] = this.itemsHandlers.stringify;

  @Input()
  placeholder?: string = '';

  @Input()
  valueContent: PolymorpheusContent<TuiValueContentContext<T>> =
    new PolymorpheusComponent(OptionDefaultTemplateComponent);

  @Input()
  itemContent: PolymorpheusContent<TuiValueContentContext<T>> =
    new PolymorpheusComponent(OptionDefaultTemplateComponent);

  @Input()
  dropdownContent: PolymorpheusContent<ComboboxWithAddButtonContext<T>> | null =
    null;

  @Output()
  search$ = new ReplaySubject<string | null>();

  get context() {
    return {
      items: this.items,
      itemContent: this.itemContent,
    };
  }
}
