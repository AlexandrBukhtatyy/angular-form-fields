import {PolymorpheusContent} from '@taiga-ui/polymorpheus/types/content';
import {FormGroup} from '@angular/forms';
import {DataProvider} from '../classes/data-providers';
import {TemplateRef} from '@angular/core';

export enum TableCellTypes {
  String,
  TemplateRef,
  Polymorpheus,
  Function
}

export type FunctionParamsTableCell<T> = {row: any, config: TableCellSettings<T>};
export type FunctionTableCell<T> = (context: FunctionParamsTableCell<T>) => string;

export type ComponentTableCell<T> = {
  component?: PolymorpheusContent<T>;
  componentEventCallback?: ($event: any) => void;
};

export interface TableCellSettings<T> {
  type?: TableCellTypes;
  value?: string | FunctionTableCell<T> | ComponentTableCell<T> | TemplateRef<T>;
}

export interface TableColumnSettings<T> {
  key: string;
  headCell: TableCellSettings<T>;
  cell: TableCellSettings<T>;
}

export interface TableSettings<T> {
  filterProvider?: FormGroup;
  dataProvider: DataProvider<T>;
  columns: TableColumnSettings<T>[];
  hideDefaultEmptyMessage?: boolean;
}
