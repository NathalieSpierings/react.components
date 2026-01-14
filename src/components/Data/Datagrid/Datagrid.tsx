import React, { ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from '../../../lib/utils/definitions';
import Icon from '../../UI/Icons/Icon/Icon';
import Toolbar from '../../UI/Toolbar/Toolbar';
import Tooltip from '../../UI/Tooltip/Tooltip';
import Pagination, { PaginationData } from '../Pagination/Pagination';
import Table from '../Table/Table';
import { TableAction } from '../Table/TableAction';
import { FilterUpdateFunc } from '../Table/TableData';
import TableInfo from '../Table/TableInfo';
import { TableRowConfig } from '../Table/TableRowConfig';
import { TableSortConfig } from '../Table/TableSort';
import DatagridSearch from '../DatagridSearch/DatagridSearch';
import { Loader } from '../../UI/Loader';
import { DatagridFilterToolbar } from '../DatagridFilterToolbar';

export type TableColumnFilters = Record<string, any>;

export interface DatagridProps<TData> {
    data: TData[];
    total: number;
    loading: boolean;
    onFilterUpdate: FilterUpdateFunc<TData>;
    properties?: TableRowConfig<TData>[];
    initialSortConfig?: TableSortConfig;
    enableSearch?: boolean;
    enableCompactView?: boolean;
    enablePagination?: boolean;
    rowActions?: TableAction<TData>[];
    rowSingleClickAction?: (item: TData) => void;
    rowDoubleClickAction?: (item: TData) => void;
    tableInfoContent?: ReactElement;
    tooltipColor?: ColorDefinitions;
    enableCheckboxes?: boolean;
    onRowsChecked?: (checkedItems: TData[]) => void;
    collapsibleRowData?: (item: TData) => ReactElement;
    toolbarTitle?: string | ReactElement;
    toolbarNavItems?: ReactNode;
    toolbarPrefixItems?: ReactNode[];
    toolbarPostfixItems?: ReactNode[];
    toolbarSeparator?: boolean;
    toolbarBorderBottom?: boolean;
    tableCss?: string;
    footerContent?: ReactNode;
    loaderDuration?: number;
    loaderLoading?: boolean;
    loaderBackground?: ColorDefinitions;
    loaderLabels?: string[];
    loaderShowLabels?: boolean;
    loaderLabelColor?: ColorDefinitions;
    loaderShowOverlay?: boolean;
    loaderTableOverlay?: boolean;
    loaderCentered?: boolean;
    loaderShowAnimation?: boolean;
    loaderAnimationColor?: ColorDefinitions;
}

function Datagrid<TData extends { id: string | number }>({
    data,
    total,
    loading,
    onFilterUpdate,
    properties,
    initialSortConfig,
    enableSearch = false,
    enablePagination = true,
    enableCompactView = false,
    rowActions,
    tooltipColor,
    enableCheckboxes = false,
    rowSingleClickAction,
    rowDoubleClickAction,
    tableInfoContent,
    collapsibleRowData,
    toolbarTitle,
    toolbarNavItems,
    toolbarPrefixItems = [],
    toolbarPostfixItems = [],
    toolbarSeparator,
    toolbarBorderBottom,
    tableCss = '',
    footerContent,
    loaderDuration,
    loaderBackground,
    loaderLabels,
    loaderShowLabels = false,
    loaderLabelColor,
    loaderShowOverlay,
    loaderTableOverlay = true,
    loaderCentered = true,
    loaderShowAnimation,
    loaderAnimationColor,
}: Readonly<DatagridProps<TData>>): ReactElement {

    const [showCompact, setShowCompact] = useState(false);

    const [showSearch, setShowSearch] = useState(false);
    const searchInput = useRef<HTMLInputElement>(null!);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const [pagination, setPagination] = useState<PaginationData>({ page: 1, perPage: 25, });

    const [sort, setSort] = useState<TableSortConfig | undefined>(initialSortConfig);

    const [collapsibleRowIds, setCollapsibleRowIds] = useState<Set<string | number>>(new Set());

    const [checkedItems, setCheckedItems] = React.useState<TData[]>([]);


    const [columnFilters, setColumnFilters] = useState<Record<string, string | number | boolean | null>>({});

    const toggleCollapsibleRow = (id: string | number) => {
        setCollapsibleRowIds(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) newSet.delete(id);
            else newSet.add(id);
            return newSet;
        });
    };


    const updateQ = (q: string) => {
        setSearchTerm(q);
        setPagination((p) => ({ ...p, page: 1 }));
    };

    useEffect(() => {
        onFilterUpdate({
            searchTerm,
            sort,
            propertyConfigs: properties,
            pagination,
            columnFilters,
        });
    }, [searchTerm, pagination.page, pagination.perPage, sort, columnFilters]);


    // Toolbar
    const postfixElements: ReactNode[] = [];

    if (toolbarPostfixItems) {
        postfixElements.push(...toolbarPostfixItems);
    }

    if (enableCompactView) {
        postfixElements.push(
            <Tooltip key="compact" content="Compacte weergave" direction="top-left">
                <Icon
                    icon={IconDefinitions.vertical_spacing}
                    duotone={true}
                    variant="circle"
                    size={SizeDefinitions.Small}
                    onClick={() => setShowCompact(!showCompact)}
                />
            </Tooltip>
        );
    }

    const hasFilterableColumns = properties?.some(p => p.filter) ?? false;

    return (
        <div className="datagrid">

            {(toolbarPostfixItems || postfixElements.length > 0) && (
                <Toolbar
                    title={toolbarTitle}
                    navItems={toolbarNavItems}
                    showSeparator={toolbarSeparator}
                    prefixItems={toolbarPrefixItems}
                    postfixItems={postfixElements}
                    borderBottom={toolbarBorderBottom}
                />
            )}

            {hasFilterableColumns && (
                <DatagridFilterToolbar
                    data={data}
                    properties={properties}
                    searchTerm={searchTerm}
                    onSearchChange={updateQ}
                    columnFilters={columnFilters}
                    setColumnFilters={setColumnFilters}
                />
            )}


            {(tableInfoContent || checkedItems.length > 0) && (
                <TableInfo>
                    {checkedItems.length > 0 ? (
                        <div>U heeft <strong className="text-primary-30">{checkedItems.length}</strong> {checkedItems.length === 1 ? 'rij' : 'rijen'} geselecteerd</div>
                    ) : (
                        tableInfoContent
                    )}
                </TableInfo>
            )}

            {showSearch && <DatagridSearch
                enableSearch={showSearch}
                inputRef={searchInput}
                searchTerm={searchTerm}
                onSearchChange={updateQ}
            />}

            {loading ? (

                <Loader
                    tableOverlay={loaderTableOverlay}
                    duration={loaderDuration}
                    loading={loading}
                    background={loaderBackground}
                    labels={loaderLabels}
                    showLabels={loaderShowLabels}
                    labelColor={loaderLabelColor}
                    showOverlay={loaderShowOverlay}
                    centered={loaderCentered}
                    showAnimation={loaderShowAnimation}
                    animationColor={loaderAnimationColor}
                />

            ) : null}


            <Table
                data={data}
                loading={loading}
                properties={properties}
                total={total}
                rowActions={rowActions}
                enableCheckboxes={enableCheckboxes}
                checkedItems={enableCheckboxes ? checkedItems : []}
                onRowsChecked={enableCheckboxes ? setCheckedItems : undefined}
                rowSingleClickAction={rowSingleClickAction}
                rowDoubleClickAction={rowDoubleClickAction}
                sort={sort}
                setSort={setSort}
                enableCompactView={showCompact}
                tooltipColor={tooltipColor}
                collapsibleRowData={collapsibleRowData}
                collapsibleRowIds={collapsibleRowIds}
                toggleCollapsibleRow={toggleCollapsibleRow}
                columnFilters={columnFilters}
                setColumnFilters={setColumnFilters}
                tableCss={tableCss}
            />

            {enablePagination &&
                <Pagination total={total} pagination={pagination} setPagination={setPagination} />
            }

            {footerContent && (
                <div className="datagrid__content__footer">
                    {footerContent}
                </div>
            )}


        </div>
    )

}

export default Datagrid;