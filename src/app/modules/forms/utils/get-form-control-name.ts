import {AbstractControl, FormGroup} from '@angular/forms';

export function uid(): string {
  // TODO: реализовать
  return ''
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
