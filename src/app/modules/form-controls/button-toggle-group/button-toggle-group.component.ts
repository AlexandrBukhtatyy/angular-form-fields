import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {TuiGroupModule} from "@taiga-ui/core";
import {TuiRadioBlockModule} from "@taiga-ui/kit";
import {CommonModule} from "@angular/common";

export interface BtnPickerOption {
  id: string | number;
  label: string;
}

@Component({
  selector: 'ngnx-button-toggle-group',
  templateUrl: './button-toggle-group.component.html',
  styleUrls: ['./button-toggle-group.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonToggleGroupComponent),
      multi: true,
    },
  ],
  imports: [
    CommonModule,
    TuiGroupModule,
    FormsModule,
    TuiRadioBlockModule
  ],
  standalone: true
})
export class ButtonToggleGroupComponent implements OnInit, ControlValueAccessor {
  @Input() options!: BtnPickerOption[];

  selectedOption!: BtnPickerOption;

  isDisabled!: boolean;

  onChange = (_: any) => {};

  onBlur = (_: any) => {};

  constructor() {}

  ngOnInit() {}

  writeValue(value: BtnPickerOption) {
    this.selectedOption = value;
  }

  registerOnChange(fn: (_: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: (_: any) => void) {
    this.onBlur = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  changeOption(option: BtnPickerOption) {
    this.selectedOption = option;
    this.onChange(option);
  }
}
