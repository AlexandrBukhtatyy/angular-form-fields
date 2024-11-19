import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {PolymorpheusContent} from '@taiga-ui/polymorpheus/types/content';

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
  columns: TableColumnSettings<T>[];
  hideDefaultEmptyMessage?: boolean;
}
