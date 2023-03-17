import {tuiValidatorFn} from "../core/tui-validator.function";
import {ValidatorFn, Validators} from "@angular/forms";

export const emailValidator: ValidatorFn = tuiValidatorFn(
  Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
  'Incorrect email'
);
