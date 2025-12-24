export type TableSortOrder = 'asc' | 'desc';

export interface TableSortConfig {
    prop: string;
    order: TableSortOrder;
}

export interface TableSortIconProps {
    order: TableSortOrder;
}

export type TableSortFunc<TData> = (a: TData, b: TData) => number;
