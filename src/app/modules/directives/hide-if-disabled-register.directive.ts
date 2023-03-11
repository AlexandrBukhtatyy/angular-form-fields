import { ChangeDetectorRef, Directive } from '@angular/core';
import { NgControl } from '@angular/forms';
import { HideIfDisabledDirective } from './hide-if-disabled.directive';

@Directive({
  selector: '[hideIfDisabledRegister]',
})
export class FormFieldRegistratorDirective {
  constructor(
    formControl: NgControl,
    changeDetectorRef: ChangeDetectorRef,
    hideIfDisabledDirectiveRef: HideIfDisabledDirective
  ) {
    // @ts-ignore
    hideIfDisabledDirectiveRef._formControl = changeDetectorRef[
      '_view'
    ].context.host._formControl = formControl;
  }
}
