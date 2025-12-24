export type TableColumnFilterType = 'text' | 'select';

export interface TableColumnFilterConfig {
    type: TableColumnFilterType;
    options?: { label: string; value: string }[];
}