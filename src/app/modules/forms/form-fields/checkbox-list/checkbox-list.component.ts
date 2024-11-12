import {Component, Input, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlContainer, FormArray, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiCheckbox} from '@taiga-ui/kit';

@Component({
  selector: 'aff-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.less'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TuiCheckbox],
})
export class CheckboxListComponent {
  @Input() dictionary: any;

  get form(): FormGroup {
    return this.controlContainerRef.control as FormGroup;
  }

  get list(): FormArray {
    return this.controlContainerRef.control as FormArray;
  }

  constructor(@Optional() private controlContainerRef: ControlContainer) {
  }
}
