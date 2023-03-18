import {Component, Inject, Input, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

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
export class DefaultOptionTemplateComponent {
  @Input('label') inputLabel?: string;

  get label(): string {
    return this.context?.$implicit?.label || this.inputLabel || '';
  }

  constructor(
    @Optional() @Inject(POLYMORPHEUS_CONTEXT) readonly context: { $implicit: DefaultOptionItem<any>, active: boolean }
  ) {
  }
}
