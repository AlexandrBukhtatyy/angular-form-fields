import {Component, Inject, Input, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';
import {OPTION_LABEL_PROVIDER} from '../../tokens/option-label-provider.token';
import {OPTION_HINT_PROVIDER} from '../../tokens/option-hint-provider.token';
import {TuiItemsHandlers} from '@taiga-ui/kit/tokens';

export type OptionWithHint<T> = T & {
  label: string;
  hint: string;
};

@Component({
    selector: 'aff-option-with-hint-content-template',
    imports: [CommonModule],
    templateUrl: './option-with-hint-content-template.component.html',
    styleUrls: ['./option-with-hint-content-template.component.less']
})
export class OptionWithHintContentTemplateComponent<T> {
  @Input('label') inputLabel?: string;
  @Input('hint') inputHint?: string;

  get label(): string {
    return (
      (this.optionLabelProviderRef &&
        this.optionLabelProviderRef.labelFormatter &&
        this.optionLabelProviderRef.labelFormatter(this.context?.$implicit)) ||
      this.context?.$implicit?.label ||
      this.inputLabel ||
      '-'
    );
  }

  get hint(): string {
    return (
      (this.optionHintProviderRef &&
        this.optionHintProviderRef.hintFormatter &&
        this.optionHintProviderRef.hintFormatter(this.context?.$implicit)) ||
      this.context?.$implicit?.hint ||
      this.inputHint ||
      '-'
    );
  }

  constructor(
    @Optional()
    @Inject(OPTION_LABEL_PROVIDER)
    readonly optionLabelProviderRef: {
      labelFormatter: TuiItemsHandlers<T>['stringify'];
    },
    @Optional()
    @Inject(OPTION_HINT_PROVIDER)
    readonly optionHintProviderRef: {
      hintFormatter: TuiItemsHandlers<T>['stringify'];
    },
    @Optional()
    @Inject(POLYMORPHEUS_CONTEXT)
    readonly context: { $implicit: OptionWithHint<any>; active: boolean }
  ) {
  }
}
