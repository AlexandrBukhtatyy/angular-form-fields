import {PolymorpheusContent} from '@taiga-ui/polymorpheus/types/content';
import {FormGroup} from '@angular/forms';
import {DataProvider} from '../classes/data-providers';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';

export enum TableCellTypes {
  String,
  Polymorpheus,
  Function
}

export type ComponentTableCell<T> = {
  component?: PolymorpheusContent<T>;
  componentEventCallback?: ($event: any) => void;
};

export interface TableCellSettings<T> {
  type?: TableCellTypes;
  value?: string | FunctionTableCell<T> | ComponentTableCell<T> | PolymorpheusTemplate<T>;
}

export interface TableColumnSettings<T> {
  key: string;
  headCell: TableCellSettings<T>;
  cell: TableCellSettings<T>;
}

export type FunctionParamsTableCell<T> = { row: any, config: TableCellSettings<T> };
export type FunctionTableCell<T> = (context: FunctionParamsTableCell<T>) => string;

export interface TableSettings<T> {
  filterProvider?: FormGroup;
  dataProvider: DataProvider<T>;
  columns: TableColumnSettings<T>[];
  hideDefaultEmptyMessage?: boolean;
}
