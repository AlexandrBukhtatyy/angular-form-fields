import {Component, Input, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlContainer, FormArray, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiCheckbox} from '@taiga-ui/kit';

@Component({
  selector: 'aff-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.less'],
  imports: [CommonModule, ReactiveFormsModule, TuiCheckbox],
  standalone: true
})
export class CheckboxListComponent {
  @Input() dictionary: any;

  get form(): FormGroup {
    debugger
    return this.controlContainerRef.control as FormGroup;
  }

  get list(): FormArray {
    debugger
    return this.controlContainerRef.control as FormArray;
  }

  constructor(@Optional() private controlContainerRef: ControlContainer) {
  debugger
  }
}
