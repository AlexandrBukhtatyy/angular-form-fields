import {Directive} from '@angular/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {
  OptionWithHintContentTemplateComponent
} from '../../../templates/option-with-hint-content-template/option-with-hint-content-template.component';
import {OptionWithHintValueTemplateComponent} from '../../../templates/option-with-hint-value-template/option-with-hint-value-template.component';
import {SelectComponent} from '../select.component';

@Directive({
  selector: 'aff-select[optionWithHint]',
  standalone: true
})
export class SelectWithHintVariantDirective {

  constructor(private formFieldSelectComponent: SelectComponent<any>) {
    formFieldSelectComponent.itemContent = new PolymorpheusComponent(OptionWithHintContentTemplateComponent);
    formFieldSelectComponent.valueContent = new PolymorpheusComponent(OptionWithHintValueTemplateComponent);
  }

}
