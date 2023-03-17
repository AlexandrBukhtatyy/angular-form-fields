import {Directive, inject} from '@angular/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { WithHintOptionTemplateComponent } from '../../select/templates/with-hint-option-template/with-hint-option-template.component';
import { WithHintValueTemplateComponent } from '../../select/templates/with-hint-value-template/with-hint-value-template.component';
import { ComboboxComponent } from '../combobox.component';

@Directive({
  selector: 'aff-combobox[withHint]',
  standalone: true,
})
export class ComboboxWithHintVariantDirective<T> {
  comboboxComponenRef = inject(ComboboxComponent<T>);

  constructor() {
    this.comboboxComponenRef.itemContent = new PolymorpheusComponent(WithHintOptionTemplateComponent);
    this.comboboxComponenRef.valueContent = new PolymorpheusComponent(WithHintValueTemplateComponent);
  }
}
