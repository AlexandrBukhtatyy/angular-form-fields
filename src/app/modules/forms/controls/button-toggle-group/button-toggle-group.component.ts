import {Component, forwardRef, Input, OnInit, Optional} from '@angular/core';
import {ControlContainer, ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {TuiRadio} from '@taiga-ui/kit';
import {CommonModule} from '@angular/common';
import {TuiGroup, TuiLabel} from '@taiga-ui/core';
import {getFormControlName, uid} from '../../utils/get-form-control-name';

export interface BtnPickerOption {
  id: string | number;
  label: string;
}

@Component({
  selector: 'aff-button-toggle-group',
  templateUrl: './button-toggle-group.component.html',
  styleUrls: ['./button-toggle-group.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonToggleGroupComponent),
      multi: true,
    },
  ],
  imports: [
    CommonModule,
    TuiGroup,
    FormsModule,
    TuiRadio,
    TuiLabel
  ],
  standalone: true
})
export class ButtonToggleGroupComponent implements OnInit, ControlValueAccessor {
  @Input() options!: BtnPickerOption[];

  selectedOption!: BtnPickerOption;

  isDisabled!: boolean;

  onChange = (_: any) => {
  };

  onBlur = (_: any) => {
  };

  get name(): string {
    return this.controlContainerRef.control && getFormControlName(this.controlContainerRef.control) || uid();
  }

  constructor(
    @Optional() private controlContainerRef: ControlContainer
  ) {
  }

  ngOnInit() {
  }

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
