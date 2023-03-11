import {Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";

@Component({
  selector: 'ngnx-with-hint-option-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './with-hint-option-template.component.html',
  styleUrls: ['./with-hint-option-template.component.scss'],
})
export class WithHintOptionTemplateComponent {
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT) readonly context: { $implicit: any, active: boolean }
  ) {
  }
}
