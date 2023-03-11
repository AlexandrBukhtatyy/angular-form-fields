import {Component, inject} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ComboboxDataProvider} from "./modules/form-fields/form-field-combobox";
import {of} from "rxjs";

@Component({
  selector: 'aff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private fb = inject(FormBuilder)
  formGroup = this.fb.group({
    selectExample: this.fb.control(null),
    comboboxExample: this.fb.control(null),
  })
  selectItems = [
    {id: '1', label: 'Label 1'},
    {id: '2', label: 'Label 2'},
    {id: '3', label: 'Label 3'},
    {id: '4', label: 'Label 4'},
  ];

  selectItemsWithHints = [
    {id: '1', label: 'Label 1'},
    {id: '2', label: 'Label 2'},
    {id: '3', label: 'Label 3'},
    {id: '4', label: 'Label 4'},
  ];

  comboboxStringify(item: {label: string}): string {
    return item.label;
  }

  comboboxDataProvider: ComboboxDataProvider<any> = (term: string) => {
    const foundedItems = this.selectItemsWithHints.filter((item) => term == '' || item.label.toLowerCase() == term.toLowerCase() || item.label.toLowerCase().includes(term.toLowerCase()));
    return foundedItems && foundedItems.length ? of(foundedItems) : of(null);
  }
}
