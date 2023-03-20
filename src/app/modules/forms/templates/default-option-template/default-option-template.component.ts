import {Component, Inject, Input, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {OPTION_LABEL_PROVIDER} from '../../tokens/option-label-provider.token';
import {TuiItemsHandlers} from '@taiga-ui/kit/tokens';

export type DefaultOptionItem<T> = T & {
  label: string;
};

@Component({
  selector: 'aff-default-option-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default-option-template.component.html',
  styleUrls: ['./default-option-template.component.scss'],
})
export class DefaultOptionTemplateComponent<T> {
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
