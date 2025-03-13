import {Component, Inject, Input, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';
import {OPTION_LABEL_PROVIDER} from '../../tokens/option-label-provider.token';
import {TuiItemsHandlers} from '@taiga-ui/kit/tokens';

export type DefaultOptionItem<T> = T & {
  label: string;
};

@Component({
    selector: 'aff-option-default-template',
    imports: [CommonModule],
    templateUrl: './option-default-template.component.html',
    styleUrls: ['./option-default-template.component.less']
})
export class OptionDefaultTemplateComponent<T> {
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

  constructor(
    @Optional()
    @Inject(OPTION_LABEL_PROVIDER)
    readonly optionLabelProviderRef: {
      labelFormatter: TuiItemsHandlers<T>['stringify'];
    },
    @Optional()
    @Inject(POLYMORPHEUS_CONTEXT)
    readonly context: { $implicit: DefaultOptionItem<any>; active: boolean }
  ) {
  }
}
