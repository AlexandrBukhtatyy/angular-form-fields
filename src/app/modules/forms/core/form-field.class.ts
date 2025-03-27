import {Directive, OnDestroy, OnInit, Optional, Self} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  NgControl,
  NgModel,
} from '@angular/forms';
import {Subscription} from "rxjs";
import {uid} from '../utils/get-form-control-name';

@Directive()
export class FormFieldBase implements OnInit, OnDestroy, ControlValueAccessor {
  private subscription!: Subscription;
  public id: string;

  constructor(
    @Optional() @Self() public ngControl: NgControl
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
    this.id = uid();
  }

  control!: FormControl;

  writeValue(obj: any): void {
  }

  registerOnChange(fn: (_: any) => void): void {
  }

  registerOnTouched(fn: any): void {
  }

  ngOnInit() {
    if (!this.ngControl) throw new Error('ngControl is undefined');

    if (this.ngControl instanceof FormControlName || this.ngControl instanceof FormControlDirective) {
      this.control = this.ngControl.control;
    } else if (this.ngControl instanceof NgModel) {
      this.control = this.ngControl.control;
      this.subscription = this.control.valueChanges.subscribe((value) => {
        if ((this.ngControl.control as unknown as { _pendingChange: boolean })._pendingChange) {
          this.ngControl.viewToModelUpdate(value);
        }
      });
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
