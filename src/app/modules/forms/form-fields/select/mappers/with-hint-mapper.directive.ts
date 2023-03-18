import {Directive, Input} from '@angular/core';

export interface WithHintMapper {
  label: (item: any) => string,
  hint: (item: any) => string,
};

@Directive({
  selector: 'aff-select[withHint][mapper]',
  standalone: true
})
export class WithHintMapperDirective {
  @Input('mapper') mapper!: WithHintMapper;

  constructor() { }

}
