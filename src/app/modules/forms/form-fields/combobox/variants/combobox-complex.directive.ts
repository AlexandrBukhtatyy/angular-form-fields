import {Directive} from '@angular/core';
import {ComboboxWithAddButtonDirective, ComboboxWithHintDirective} from '@modules/forms';

// TODO: - разобраться почему не работает Composition API
@Directive({
  selector: '[affComboboxComplex]',
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
