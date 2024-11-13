import {Directive, inject, Input} from '@angular/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {ComboboxComponent} from '../combobox.component';
import {OPTION_LABEL_PROVIDER} from '../../../tokens/option-label-provider.token';
import {OPTION_HINT_PROVIDER} from '../../../tokens/option-hint-provider.token';
import {TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {
  OptionWithHintContentTemplateComponent
} from '../../../templates/option-with-hint-content-template/option-with-hint-content-template.component';
import {
  OptionWithHintValueTemplateComponent
} from '../../../templates/option-with-hint-value-template/option-with-hint-value-template.component';

@Directive({
  selector: 'aff-combobox[optionWithHint]',
  standalone: true,
  providers: [
    {
      provide: OPTION_LABEL_PROVIDER,
      useExisting: ComboboxWithHintVariantDirective,
    },
    {
      provide: OPTION_HINT_PROVIDER,
      useExisting: ComboboxWithHintVariantDirective,
    },
  ],
})
export class ComboboxWithHintVariantDirective<T> {
  @Input() labelFormatter: (TuiItemsHandlers<T>['stringify']) | null = null;
  @Input() hintFormatter: (TuiItemsHandlers<T>['stringify']) | null = null;
  comboboxComponenRef = inject(ComboboxComponent<T>);

  constructor() {
    this.comboboxComponenRef.itemContent = new PolymorpheusComponent(OptionWithHintContentTemplateComponent);
    this.comboboxComponenRef.valueContent = new PolymorpheusComponent(OptionWithHintValueTemplateComponent);
  }
}
