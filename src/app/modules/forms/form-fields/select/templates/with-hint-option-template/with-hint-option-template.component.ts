import {Component, Inject, Input, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {WithHintMapperDirective} from '../../mappers/with-hint-mapper.directive';

export type WithHintOptionItem<T> = T & {
  label: string;
  hint: string;
};

@Component({
  selector: 'aff-with-hint-option-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './with-hint-option-template.component.html',
  styleUrls: ['./with-hint-option-template.component.scss'],
})
export class WithHintOptionTemplateComponent {
  @Input('label') inputLabel?: string;
  @Input('hint') inputHint?: string;

  get label(): string {
    return this.withHintMapperDirectiveRef?.mapper?.label(this.context?.$implicit) || this.context?.$implicit?.label || this.inputLabel || '-';
  }

  get hint(): string {
    return this.withHintMapperDirectiveRef?.mapper?.hint(this.context?.$implicit) || this.context?.$implicit?.hint || this.inputHint || '-';
  }

  constructor(
    @Optional() private withHintMapperDirectiveRef: WithHintMapperDirective,
    @Optional() @Inject(POLYMORPHEUS_CONTEXT) readonly context: { $implicit: WithHintOptionItem<any>, active: boolean }
  ) {
  }
}
