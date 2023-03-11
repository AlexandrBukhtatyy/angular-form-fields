import {Directive, OnDestroy, OnInit, Optional, Self} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective, FormGroupName,
  NgControl,
  NgModel,
} from '@angular/forms';
import {Subscription} from "rxjs";

@Directive()
export class FormFieldBase implements OnInit, OnDestroy, ControlValueAccessor {
  private subscription!: Subscription;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    @Optional() public parentFormGroupName: FormGroupName
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  control!: FormControl;

  writeValue(obj: any): void {}
  registerOnChange(fn: (_: any) => void): void {}
  registerOnTouched(fn: any): void {}

  ngOnInit() {
    if (!this.ngControl) throw new Error('ngControl is undefined');
    // FormGroupName
    if (this.ngControl instanceof FormControlName) {
      if (!this.ngControl.name) {
        throw new Error('Control name doesnt exist');
      }
      // TODO: перепроверить
      const controls = this.parentFormGroupName?.control?.controls
        ? this.parentFormGroupName.control.controls
        : (this.ngControl.formDirective as FormGroupDirective).form.controls;
      if (controls) {
        this.control = controls[this.ngControl.name] as FormControl;
      }
      // FormControlName
    } else if (this.ngControl instanceof FormControlDirective) {
      this.control = this.ngControl.control;
    } else if (this.ngControl instanceof NgModel) {
      this.control = this.ngControl.control;
      this.subscription = this.control.valueChanges.subscribe((x) =>
        this.ngControl.viewToModelUpdate(this.control.value)
      );
    } else if (!this.ngControl) {
      this.control = new FormControl();
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
