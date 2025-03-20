import {Directive, inject, Input, OnInit} from '@angular/core';
import {ComboboxComponent} from '../combobox.component';
import {filter, Observable, startWith, Subscription, switchMap} from 'rxjs';

// TODO: добавить синхронный вариант для провайдера данных (Array<T> | null)
export type ComboboxDataProvider<T> = (term: string) => Observable<Array<T> | null>;

@Directive({
  selector: 'aff-combobox[dataProvider]',
  standalone: true
})
export class ComboboxDataProviderDirective<T> implements OnInit {
  @Input('dataProvider') dataFetchFn!: ComboboxDataProvider<T>;
  comboboxComponenRef = inject(ComboboxComponent<T>);
  private subscription!: Subscription;

  ngOnInit() {
    this.subscription = this.comboboxComponenRef.search$.pipe(
      startWith(''),
      filter((term: string | null) => term !== null),
      // @ts-ignore
      switchMap((term: string | null) => this.dataFetchFn(term))
    ).subscribe({
      next: (response) => this.comboboxComponenRef.items = response,
      error: (error) => this.comboboxComponenRef.items = [],
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
