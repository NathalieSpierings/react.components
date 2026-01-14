export type TableColumnFilterType = 'text' | 'select';

export interface TableColumnFilterConfig<TData = any> {
    type: TableColumnFilterType;
    options?: { label: string; value: string }[];
    optionsSource?: (data: TData[]) => any[];
    mapOption?: (value: any) => { label: string; value: string };
}