import {Directive, Input, OnInit} from '@angular/core';
import {FormFieldComboboxComponent} from "../form-field-combobox.component";
import {filter, Observable, startWith, switchMap} from "rxjs";

// TODO: добавить синхронный вариант для провайдера данных (Array<T> | null)
export type ComboboxDataProvider<T> = (term: string) => Observable<Array<T> | null>;

@Directive({
  selector: '[ngnxComboboxDataProvider]',
  standalone: true
})
export class ComboboxDataProviderDirective<T> implements OnInit {
  @Input('ngnxComboboxDataProvider') dataFetchFn!: ComboboxDataProvider<T>;

  constructor(private formFieldComboboxComponent: FormFieldComboboxComponent<T>) {
  }

  ngOnInit() {
    this.formFieldComboboxComponent.search$.pipe(
      startWith(''),
      filter((term: string | null) => term !== null),
      // @ts-ignore
      switchMap((term: string | null) => this.dataFetchFn(term))
    ).subscribe({
      next: (response) => this.formFieldComboboxComponent.items = response,
      error: (error) => this.formFieldComboboxComponent.items = [],
    })
  }
}
