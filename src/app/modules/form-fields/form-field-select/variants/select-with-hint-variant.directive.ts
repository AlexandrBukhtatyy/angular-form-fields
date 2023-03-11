import {Directive} from '@angular/core';
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {
  WithHintOptionTemplateComponent
} from "../templates/with-hint-option-template/with-hint-option-template.component";
import {WithHintValueTemplateComponent} from "../templates/with-hint-value-template/with-hint-value-template.component";
import {FormFieldSelectComponent} from "../form-field-select.component";

@Directive({
  selector: 'ngnx-form-field-select[withHint]',
  standalone: true
})
export class SelectWithHintVariantDirective {

  constructor(private formFieldSelectComponent: FormFieldSelectComponent<any>) {
    formFieldSelectComponent.itemContent = new PolymorpheusComponent(WithHintOptionTemplateComponent);
    formFieldSelectComponent.valueContent = new PolymorpheusComponent(WithHintValueTemplateComponent);
  }

}
