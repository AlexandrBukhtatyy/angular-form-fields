import {Component, Inject, Input, Optional} from '@angular/core';
import { CommonModule } from '@angular/common';
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";
import {WithHintOptionItem} from '../with-hint-option-template/with-hint-option-template.component';
import {WithHintMapperDirective} from '../../mappers/with-hint-mapper.directive';

@Component({
  selector: 'aff-with-hint-value-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './with-hint-value-template.component.html',
  styleUrls: ['./with-hint-value-template.component.scss'],
})
export class WithHintValueTemplateComponent {
  @Input('label') inputLabel?: string;
  @Input('hint') inputHint?: string;

  get label(): string {
    return (this.context?.$implicit?.label && this.withHintMapperDirectiveRef?.mapper?.label && this.withHintMapperDirectiveRef?.mapper?.label(this.context?.$implicit))
      || this.context?.$implicit?.label
      || this.inputLabel
      || '';
  }

  get hint(): string {
    return (this.context?.$implicit?.hint && this.withHintMapperDirectiveRef?.mapper?.hint && this.withHintMapperDirectiveRef?.mapper?.hint(this.context?.$implicit))
      || this.context?.$implicit?.hint
      || this.inputHint
      || '';
  }

  constructor(
    @Optional() private withHintMapperDirectiveRef: WithHintMapperDirective,
    @Optional() @Inject(POLYMORPHEUS_CONTEXT) readonly context: { $implicit: WithHintOptionItem<any>, active: boolean }
  ) {
  }
}
