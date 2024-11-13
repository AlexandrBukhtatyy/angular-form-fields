import {Component, inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiDataListWrapper, TuiFilterByInputPipe, TuiStringifyContentPipe,} from '@taiga-ui/kit';
import {TuiComboBoxModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';
import {JsonPipe} from '@angular/common';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiComboBoxModule,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiStringifyContentPipe,
    TuiTextfieldControllerModule,
  ],
  template: `+ {{ context?.['$implicit']?.label }} +`,
})
export default class ItemContentComponent {
  context = inject(POLYMORPHEUS_CONTEXT, {optional: true});
}
