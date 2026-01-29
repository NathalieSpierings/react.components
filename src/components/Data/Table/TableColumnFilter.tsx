export type TableColumnFilterType = 'text' | 'select' | 'date';

export interface TableColumnFilterConfig<TData = any> {
    type: TableColumnFilterType;
    multiSelect?: boolean;

    // statisch
    options?: { label: string; value: string }[];

     // dynamisch
    optionsSource?: (data: TData[]) => any[];
    mapOption?: (value: any) => { label: string; value: string };
}