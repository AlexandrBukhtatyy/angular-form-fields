import {Component, inject, Input} from '@angular/core';
import {FormFieldBase} from "../../core/form-field.class";
import {TUI_ITEMS_HANDLERS, TuiDataListWrapperModule, TuiFieldErrorPipeModule, TuiSelectModule} from "@taiga-ui/kit";
import {TuiErrorModule, TuiTextfieldControllerModule, TuiValueContentContext} from "@taiga-ui/core";
import {ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe} from "@angular/common";
import {PolymorpheusComponent, PolymorpheusContent} from "@tinkoff/ng-polymorpheus";
import {OptionDefaultTemplateComponent} from "../../templates/option-default-template/option-default-template.component";
import {TuiItemsHandlers} from "@taiga-ui/kit/tokens";

@Component({
  selector: 'aff-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less'],
  standalone: true,
  imports: [
    TuiSelectModule,
    TuiTextfieldControllerModule,
    ReactiveFormsModule,
    TuiDataListWrapperModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    AsyncPipe
  ]
})
export class SelectComponent<T> extends FormFieldBase {
  private readonly itemsHandlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);

  @Input()
  items: any[] | null = null;

  @Input()
  identityMatcher: TuiItemsHandlers<T>['identityMatcher'] = this.itemsHandlers.identityMatcher;

  @Input()
  placeholder?: string = '';

  @Input()
  valueContent: PolymorpheusContent<TuiValueContentContext<T>> = new PolymorpheusComponent(OptionDefaultTemplateComponent);

  @Input()
  itemContent: PolymorpheusContent<TuiValueContentContext<T>> = new PolymorpheusComponent(OptionDefaultTemplateComponent);
}
