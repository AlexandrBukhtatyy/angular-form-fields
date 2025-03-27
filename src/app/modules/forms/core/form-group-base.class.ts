import { Directive } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Directive()
export class FormGroupBase {
  get formGroup(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }
  get formGroupName() {
    return this.controlContainer.name;
  }

  constructor(private controlContainer: ControlContainer) {}
}
