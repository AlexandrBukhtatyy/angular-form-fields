import {AbstractControl, FormGroup} from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

export function uid(): string {
  // TODO: реализовать
  return uuidv4();
}

export function getFormControlName(control: AbstractControl): string | null {
  var controlName = null;
  var parent = control['_parent'];

  if (parent instanceof FormGroup) {
    Object.keys(parent.controls).forEach((name) => {
      if (control === parent.controls[name]) {
        controlName = name;
      }
    });
  }
  return controlName;
}
