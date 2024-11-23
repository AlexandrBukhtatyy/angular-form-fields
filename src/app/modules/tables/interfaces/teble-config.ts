import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {PolymorpheusContent} from '@taiga-ui/polymorpheus/types/content';
import {DataProvider} from '../classes/provider-factory';

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
  componentEventCallback?: ($event: any) => void
}

export interface TableSettings<T> {
  dataProvider: DataProvider<T>
  columns: TableColumnSettings<T>[];
  hideDefaultEmptyMessage?: boolean;
}
