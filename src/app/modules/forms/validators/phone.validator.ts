import {tuiValidatorFn} from "../core/tui-validator.function";
import {ValidatorFn} from "@angular/forms";

export const fixedLength = (length: number): ValidatorFn => {
  return (control) =>
    control.value && control.value.length !== length
      ? { fixedLength: `Should be fixed length ${length}` }
      : null;
};

export const phoneValidator = tuiValidatorFn(
  fixedLength(12),
  'Incorrect phone format +7 (XXX) XXX-XX-XX'
);
