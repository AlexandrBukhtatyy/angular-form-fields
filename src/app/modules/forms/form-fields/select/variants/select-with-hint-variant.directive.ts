import {Directive, inject, Input} from '@angular/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {SelectComponent} from '../select.component';
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
  selector: 'aff-select[optionWithHint]',
  standalone: true,
  providers: [
    {
      provide: OPTION_LABEL_PROVIDER,
      useExisting: SelectWithHintVariantDirective,
    },
    {
      provide: OPTION_HINT_PROVIDER,
      useExisting: SelectWithHintVariantDirective,
    },
  ],
})
export class SelectWithHintVariantDirective<T> {
  @Input() labelFormatter: (TuiItemsHandlers<T>['stringify']) | null = null;
  @Input() hintFormatter: (TuiItemsHandlers<T>['stringify']) | null = null;
  selectComponentRef = inject(SelectComponent<T>);

  constructor() {
    this.selectComponentRef.itemContent = new PolymorpheusComponent(OptionWithHintContentTemplateComponent);
    this.selectComponentRef.valueContent = new PolymorpheusComponent(OptionWithHintValueTemplateComponent);
  }

}
