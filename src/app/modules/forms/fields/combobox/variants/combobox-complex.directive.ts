import {Directive, Injectable} from '@angular/core';
import {ComboboxWithAddButtonDirective, ComboboxWithHintDirective} from '@modules/forms';

@Directive({
  selector: 'aff-combobox[variant="complex"]',
  hostDirectives: [
    {
      directive: ComboboxWithAddButtonDirective,
      outputs: [
        'addClicked'
      ]
    },
    {
      directive: ComboboxWithHintDirective,
      inputs: [
        'labelFormatter',
        'hintFormatter',
      ],
    }
  ],
  standalone: true
})
export class ComboboxComplexDirective {
}
