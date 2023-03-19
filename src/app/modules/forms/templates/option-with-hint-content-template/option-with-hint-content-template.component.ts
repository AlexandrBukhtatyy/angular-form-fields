import {Component, Inject, Input, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {OptionWithHintMapperDirective} from '../../mappers/option-with-hint-mapper.directive';

export type OptionWithHint<T> = T & {
  label: string;
  hint: string;
};

@Component({
  selector: 'aff-option-with-hint-content-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option-with-hint-content-template.component.html',
  styleUrls: ['./option-with-hint-content-template.component.scss'],
})
export class OptionWithHintContentTemplateComponent {
  @Input('label') inputLabel?: string;
  @Input('hint') inputHint?: string;

  get label(): string {
    return this.optionWithHintMapperDirectiveRef?.mapper?.label(this.context?.$implicit) || this.context?.$implicit?.label || this.inputLabel || '-';
  }

  get hint(): string {
    return this.optionWithHintMapperDirectiveRef?.mapper?.hint(this.context?.$implicit) || this.context?.$implicit?.hint || this.inputHint || '-';
  }

  constructor(
    @Optional() private optionWithHintMapperDirectiveRef: OptionWithHintMapperDirective,
    @Optional() @Inject(POLYMORPHEUS_CONTEXT) readonly context: { $implicit: OptionWithHint<any>, active: boolean }
  ) {
  }
}
