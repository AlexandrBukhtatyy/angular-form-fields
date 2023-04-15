import {Directive, inject, Input} from '@angular/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {SelectComponent} from '../select.component';
import {OPTION_LABEL_PROVIDER} from '../../../tokens/option-label-provider.token';
import {TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {
  OptionWithTooltipContentTemplateComponent
} from '../../../templates/option-with-tooltip-content-template/option-with-tooltip-content-template.component';
import {OPTION_TOOLTIP_PROVIDER} from '../../../tokens/option-tooltip-provider.token';

@Directive({
  selector: 'aff-select[optionWithTooltip]',
  standalone: true,
  providers: [
    {
      provide: OPTION_LABEL_PROVIDER,
      useExisting: SelectWithTooltipVariantDirective,
    },
    {
      provide: OPTION_TOOLTIP_PROVIDER,
      useExisting: SelectWithTooltipVariantDirective,
    },
  ],
})
export class SelectWithTooltipVariantDirective<T> {
  @Input() labelFormatter: (TuiItemsHandlers<T>['stringify']) | null = null;
  @Input() tooltipFormatter: (TuiItemsHandlers<T>['stringify']) | null = null;
  selectComponentRef = inject(SelectComponent<T>);

  constructor() {
    this.selectComponentRef.itemContent = new PolymorpheusComponent(OptionWithTooltipContentTemplateComponent);
  }

}
