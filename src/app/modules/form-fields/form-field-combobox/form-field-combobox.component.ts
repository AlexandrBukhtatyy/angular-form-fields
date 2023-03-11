import {Component, inject, Input, Output} from '@angular/core';
import {FormFieldBase} from "../../core/form-field.class";
import {TUI_ITEMS_HANDLERS, TuiComboBoxModule, TuiDataListWrapperModule, TuiFieldErrorPipeModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {TuiErrorModule, TuiValueContentContext} from "@taiga-ui/core";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {TuiItemsHandlers} from "@taiga-ui/kit/tokens";
import {PolymorpheusComponent, PolymorpheusContent} from "@tinkoff/ng-polymorpheus";
import {
  DefaultOptionTemplateComponent
} from "../form-field-select/templates/default-option-template/default-option-template.component";
import {Observable, ReplaySubject, Subject} from "rxjs";

@Component({
  selector: 'ngnx-form-field-combobox',
  templateUrl: './form-field-combobox.component.html',
  styleUrls: ['./form-field-combobox.component.scss'],
  standalone: true,
  imports: [
    TuiComboBoxModule,
    ReactiveFormsModule,
    TuiDataListWrapperModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    AsyncPipe,
    JsonPipe
  ]
})
export class FormFieldComboboxComponent<T> extends FormFieldBase {
  private readonly itemsHandlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);

  @Input()
  items: any[] | null = null;

  @Input()
  identityMatcher: TuiItemsHandlers<T>['identityMatcher'] = this.itemsHandlers.identityMatcher;

  @Input()
  stringify: TuiItemsHandlers<T>['stringify'] = this.itemsHandlers.stringify;

  @Input()
  placeholder?: string = '';

  @Input()
  valueContent: PolymorpheusContent<TuiValueContentContext<T>> = new PolymorpheusComponent(DefaultOptionTemplateComponent);

  @Input()
  itemContent: PolymorpheusContent<TuiValueContentContext<T>> = new PolymorpheusComponent(DefaultOptionTemplateComponent);

  @Output()
  search$ = new ReplaySubject<string | null>();
}
