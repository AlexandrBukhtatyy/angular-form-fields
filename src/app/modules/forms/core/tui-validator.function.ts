import { ValidatorFn } from '@angular/forms';
import { TuiValidationError } from '@taiga-ui/cdk';

export const tuiValidatorFn = (
  validatorFn: ValidatorFn,
  message: string
): ValidatorFn => {
  return (control) => {
    const validationResult = validatorFn(control);
    return validationResult
      ? { tuiError: new TuiValidationError(message) }
      : null;
  };
};
