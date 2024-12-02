import {inject, Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TableFilterFormService {

  formGroup!: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);

  constructor() {
    this.formGroup = this.fb.group({
      search: [null],
      date: [null],
      type: [null],
    });
  }
}
