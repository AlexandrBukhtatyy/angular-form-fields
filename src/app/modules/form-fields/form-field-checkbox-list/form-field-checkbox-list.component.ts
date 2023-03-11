import { Component, Input, Optional } from '@angular/core';
import {ControlContainer, FormArray, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiCheckboxLabeledModule} from "@taiga-ui/kit";

@Component({
  selector: 'ngnx-form-field-checkbox-list',
  templateUrl: './form-field-checkbox-list.component.html',
  styleUrls: ['./form-field-checkbox-list.component.css'],
  imports: [
    ReactiveFormsModule,
    TuiCheckboxLabeledModule
  ],
  standalone: true
})
export class FormFieldCheckboxListComponent {
  @Input() dictionary: any;

  get form(): FormGroup {
    return this.controlContainerRef.control as FormGroup;
  }

  get list(): FormArray {
    return this.controlContainerRef.control as FormArray;
  }

  constructor(@Optional() private controlContainerRef: ControlContainer) {}
}
