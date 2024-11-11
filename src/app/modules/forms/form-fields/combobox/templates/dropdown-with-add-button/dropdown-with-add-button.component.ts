import {Component, Inject, Input, OnInit, Optional} from '@angular/core';
import {POLYMORPHEUS_CONTEXT, PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {ComboboxComponent} from '../../combobox.component';
import {TuiDataList, TuiIcon, TuiValueContentContext} from '@taiga-ui/core';
import {
  OptionDefaultTemplateComponent
} from '../../../../templates/option-default-template/option-default-template.component';
import {ComboboxWithAddButtonDirective} from '../../variants/combobox-with-add-button.directive';
import {TuiDataListWrapper} from '@taiga-ui/kit';

export type ComboboxWithAddButtonContext<T> = {
  items: any[] | null;
  itemContent: PolymorpheusContent<TuiValueContentContext<T>>;
};

@Component({
  selector: 'aff-dropdown-with-add-button',
  templateUrl: './dropdown-with-add-button.component.html',
  styleUrls: ['./dropdown-with-add-button.component.less'],
  standalone: true,
  imports: [
    TuiDataList,
    TuiIcon,
    TuiDataListWrapper
  ]
})
export class DropdownWithAddButtonComponent<T> implements OnInit {
  @Input('items')
  inputItems: any[] | null = null;

  @Input('itemContent')
  inputItemContent: PolymorpheusContent<TuiValueContentContext<T>> =
    new PolymorpheusComponent(OptionDefaultTemplateComponent);

  get items(): any[] | null {
    return this.comboboxComponent?.items || this.inputItems || null;
  }

  get itemContent(): PolymorpheusContent<TuiValueContentContext<T>> {
    return this.comboboxComponent?.itemContent || this.itemContent;
  }

  constructor(
    private comboboxWithAddButtonDirective: ComboboxWithAddButtonDirective<T>,
    @Optional()
    @Inject(POLYMORPHEUS_CONTEXT)
    readonly context: {
      $implicit: ComboboxWithAddButtonContext<T>;
      active: boolean;
    },
    // INFO: из за последовательности рендеринга у нас нету доступа к дерективе со списком, из за чего не рендерится список
    // TODO: найти способ обходится без инжекта родителя (ComboboxComponent)
    private comboboxComponent: ComboboxComponent<T>
  ) {
  }

  ngOnInit() {
  }

  addMore() {
    this.comboboxWithAddButtonDirective.addClick();
  }
}
