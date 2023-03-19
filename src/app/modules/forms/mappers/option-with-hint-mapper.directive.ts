import {Directive, Input} from '@angular/core';

export interface OptionWithHintMapper {
  label: (item: any) => string,
  hint: (item: any) => string,
};

@Directive({
  selector: '[optionWithHint][mapper]',
  standalone: true
})
export class OptionWithHintMapperDirective {
  @Input('mapper') mapper!: OptionWithHintMapper;

  constructor() { }

}
