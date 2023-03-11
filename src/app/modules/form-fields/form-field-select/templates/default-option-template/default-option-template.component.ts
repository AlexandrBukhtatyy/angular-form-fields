import {Component, Inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";

@Component({
  selector: 'ngnx-default-option-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default-option-template.component.html',
  styleUrls: ['./default-option-template.component.scss'],
})
export class DefaultOptionTemplateComponent {
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT) readonly context: { $implicit: any, active: boolean }
  ) {
  }
}
