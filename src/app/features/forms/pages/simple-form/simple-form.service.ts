import {inject, Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SimpleFormService {
  formGroup!: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);
  constructor() { }

  initForm() {
    this.formGroup = this.fb.group({
      address: [null, Validators.required],
      entrance: [null, Validators.required],
      floor: [null, Validators.required],
      appartament: [null, Validators.required],
      code: [null],
      comment: [null],
    });
    this.initFormBehaviour();
  }

  private initFormBehaviour() {

  }
}
