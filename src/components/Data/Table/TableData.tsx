import { PaginationData } from '../Pagination/Pagination';
import { TableRowConfig } from './TableRowConfig';
import { TableSortConfig } from './TableSort';

export type ColumnFilterValue =
    | string
    | number
    | boolean
    | null
    | (string | number | boolean)[];

export type ColumnFilters = Record<string, ColumnFilterValue>;

export interface TableGetDataArguments<TData> {
    searchTerm: string;
    sort: TableSortConfig | undefined;
    propertyConfigs?: TableRowConfig<TData>[];
    pagination: PaginationData;
    columnFilters: ColumnFilters;
}

export type FilterUpdateFunc<TData> = (args: TableGetDataArguments<TData>) => void;
