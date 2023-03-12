import { Directive } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Directive()
export class FormGroupBase {
  get formGroup(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }

  constructor(private controlContainer: ControlContainer) {}
}
