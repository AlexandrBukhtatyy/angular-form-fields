import {PolymorpheusContent} from '@taiga-ui/polymorpheus/types/content';
import {DataProvider} from '../classes/provider-factory';
import {FormGroup} from '@angular/forms';

export enum TableColumnTypes {
  String,
  TemplateRef,
  Polymorpheus,
  Function
}

export interface TableColumnSettings<T> {
  key: string;
  title: string;
  type?: TableColumnTypes;
  component?: PolymorpheusContent<T>;
  componentEventCallback?: ($event: any) => void;
}

export interface TableSettings<T> {
  filterProvider?: FormGroup;
  dataProvider: DataProvider<T>;
  columns: TableColumnSettings<T>[];
  hideDefaultEmptyMessage?: boolean;
}
