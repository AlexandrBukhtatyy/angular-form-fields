import {Component, Inject, Input, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {OptionWithHint} from '../option-with-hint-content-template/option-with-hint-content-template.component';
import {OPTION_LABEL_PROVIDER} from '../../tokens/option-label-provider.token';
import {OPTION_HINT_PROVIDER} from '../../tokens/option-hint-provider.token';
import {TuiItemsHandlers} from '@taiga-ui/kit/tokens';

@Component({
  selector: 'aff-option-option-with-hint-value-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option-with-hint-value-template.component.html',
  styleUrls: ['./option-with-hint-value-template.component.scss'],
})
export class OptionWithHintValueTemplateComponent<T> {
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
