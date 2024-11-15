import {Directive, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Directive({
  selector: '[affFormStepper]',
  standalone: true,
  exportAs: 'formStepper'
})
export class FormStepperDirective implements OnInit {
  currentStep = 0;
  maxStep = 4;
  previousIsDisabled = false;
  nextIsDisabled = false;

  @Input('affFormStepper') steps!: string[];
  @Input('affFormStepperIn') formGroup!: FormGroup<any>;

  constructor() { }

  ngOnInit() {
    this.updateState();
  }

  next() {
    if(!this.currentStepIsValid) {
      return;
    }
    if(this.currentStep < this.maxStep - 1) {
      this.currentStep+=1;
    }
    this.updateState();
  }

  previous() {
    if(this.currentStep > 0) {
      this.currentStep-=1;
    }
    this.updateState();
  }

  setStep(step: number) {
    if(step >= 0 && step < this.maxStep) {
      this.currentStep = step;
    }
    this.updateState();
  }

  updateState() {
    if(this.currentStep >= this.maxStep - 1) {
      this.nextIsDisabled = true;
    } else {
      this.nextIsDisabled = false;
    }
    if(this.currentStep <= 0) {
      this.previousIsDisabled = true;
    } else {
      this.previousIsDisabled = false;
    }
  }

  get currentStepIsValid(): boolean {
    return this.isValid(this.currentStep);
  }

  isValid(step: number): boolean {
    return !!this.formGroup.get(this.steps[step])?.valid
  }

  stepIsActive(index: number) {
    return  this.currentStep > index;
  }
}
