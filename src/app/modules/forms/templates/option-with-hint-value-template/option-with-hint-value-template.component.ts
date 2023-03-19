import {Component, Inject, Input, Optional} from '@angular/core';
import { CommonModule } from '@angular/common';
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";
import {OptionWithHint} from '../option-with-hint-content-template/option-with-hint-content-template.component';
import {OptionWithHintMapperDirective} from '../../mappers/option-with-hint-mapper.directive';

@Component({
  selector: 'aff-option-option-with-hint-value-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option-with-hint-value-template.component.html',
  styleUrls: ['./option-with-hint-value-template.component.scss'],
})
export class OptionWithHintValueTemplateComponent {
  @Input('label') inputLabel?: string;
  @Input('hint') inputHint?: string;

  get label(): string {
    return (this.context?.$implicit?.label && this.optionWithHintMapperDirectiveRef?.mapper?.label && this.optionWithHintMapperDirectiveRef?.mapper?.label(this.context?.$implicit))
      || this.context?.$implicit?.label
      || this.inputLabel
      || '';
  }

  get hint(): string {
    return (this.context?.$implicit?.hint && this.optionWithHintMapperDirectiveRef?.mapper?.hint && this.optionWithHintMapperDirectiveRef?.mapper?.hint(this.context?.$implicit))
      || this.context?.$implicit?.hint
      || this.inputHint
      || '';
  }

  constructor(
    @Optional() private optionWithHintMapperDirectiveRef: OptionWithHintMapperDirective,
    @Optional() @Inject(POLYMORPHEUS_CONTEXT) readonly context: { $implicit: OptionWithHint<any>, active: boolean }
  ) {
  }
}
