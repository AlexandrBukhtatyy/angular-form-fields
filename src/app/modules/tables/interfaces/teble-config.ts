import {PolymorpheusContent} from '@taiga-ui/polymorpheus/types/content';
import {FormGroup} from '@angular/forms';
import {DataProvider} from '../classes/data-providers';

export enum TableCellTypes {
  String,
  TemplateRef,
  Polymorpheus,
  Function
}

export interface TableColumnSettings<T> {
  key: string;
  headCell: {
    type?: TableCellTypes;
    value?: string;
    component?: PolymorpheusContent<T>;
    componentEventCallback?: ($event: any) => void;
  }
  cell?: {
    type?: TableCellTypes;
    text?: string;
    component?: PolymorpheusContent<T>;
    componentEventCallback?: ($event: any) => void;
  }
}

export interface TableSettings<T> {
  filterProvider?: FormGroup;
  dataProvider: DataProvider<T>;
  columns: TableColumnSettings<T>[];
  hideDefaultEmptyMessage?: boolean;
}
