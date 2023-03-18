import {Directive} from '@angular/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {
  WithHintOptionTemplateComponent
} from '../templates/with-hint-option-template/with-hint-option-template.component';
import {WithHintValueTemplateComponent} from '../templates/with-hint-value-template/with-hint-value-template.component';
import {SelectComponent} from '../select.component';

@Directive({
  selector: 'aff-select[withHint]',
  standalone: true
})
export class SelectWithHintVariantDirective {

  constructor(private formFieldSelectComponent: SelectComponent<any>) {
    formFieldSelectComponent.itemContent = new PolymorpheusComponent(WithHintOptionTemplateComponent);
    formFieldSelectComponent.valueContent = new PolymorpheusComponent(WithHintValueTemplateComponent);
  }

}
