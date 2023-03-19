import {Directive, inject} from '@angular/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { OptionWithHintContentTemplateComponent } from '../../../templates/option-with-hint-content-template/option-with-hint-content-template.component';
import { OptionWithHintValueTemplateComponent } from '../../../templates/option-with-hint-value-template/option-with-hint-value-template.component';
import { ComboboxComponent } from '../combobox.component';

@Directive({
  selector: 'aff-combobox[optionWithHint]',
  standalone: true,
})
export class ComboboxWithHintVariantDirective<T> {
  comboboxComponenRef = inject(ComboboxComponent<T>);

  constructor() {
    this.comboboxComponenRef.itemContent = new PolymorpheusComponent(OptionWithHintContentTemplateComponent);
    this.comboboxComponenRef.valueContent = new PolymorpheusComponent(OptionWithHintValueTemplateComponent);
  }
}
