import { ReactElement, ReactNode } from "react";
import { TableSortFunc } from "./TableSort";
import { ColorDefinitions } from "../../../lib/utils/definitions";
import { TableColumnFilterConfig } from "./TableColumnFilter";


export interface TableRowConfig<TData> {
    prop: string;
    title: string;
    sortable?: boolean;

    transformValue?: (value: any) => any;
    useItemOnly?: (item: TData) => string | ReactElement;
    wrapValue?: (item: TData, value: string) => ReactElement;

    sort?: TableSortFunc<TData>;

    cssClass?: string;
    textAlign?: 'left' | 'center' | 'right';
    textMute?: boolean;
    
    tooltipContent?: ReactNode | string;
    showTooltip?: boolean;
    tooltipColor?: ColorDefinitions;
    tooltipArrow?: boolean;
    overflow?: boolean;

    filter?: TableColumnFilterConfig;
}