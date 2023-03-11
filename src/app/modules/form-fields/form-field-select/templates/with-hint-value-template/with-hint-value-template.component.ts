import {Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {POLYMORPHEUS_CONTEXT} from "@tinkoff/ng-polymorpheus";

@Component({
  selector: 'ngnx-with-hint-value-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './with-hint-value-template.component.html',
  styleUrls: ['./with-hint-value-template.component.scss'],
})
export class WithHintValueTemplateComponent {
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT) readonly context: { $implicit: any, active: boolean }
  ) {
  }
}
