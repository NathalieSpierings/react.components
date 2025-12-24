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
import DatagridSearch from './DatagridSearch';

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
    rowActions?: TableAction<TData>[];
    onRowsChecked?: (checkedItems: TData[]) => void;
    rowSingleClickAction?: (item: TData) => void;
    rowDoubleClickAction?: (item: TData) => void;
    tableInfoContent?: ReactElement;
    tooltipColor?: ColorDefinitions;

    collapsibleRowData?: (item: TData) => ReactElement;

    toolbarTitle?: string | ReactElement;
    toolbarNavItems?: ReactNode;
    toolbarPrefixItems?: ReactNode[];
    toolbarPostfixItems?: ReactNode[];
    toolbarSeparator?: boolean;
    toolbarBorderBottom?: boolean;

    
}

function Datagrid<TData extends { id: string | number }>({
    data,
    total,
    loading,
    onFilterUpdate,
    properties,
    initialSortConfig,
    enableSearch = false,
    enableCompactView = false,
    rowActions,
    onRowsChecked,
    tooltipColor,
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

    if (enableSearch) {
        postfixElements.push(
            <Tooltip key="search" content="Zoeken" direction="top-left">
                <Icon
                    icon={IconDefinitions.search}
                    variant="circle"
                    duotone={true}
                    size={SizeDefinitions.Small}
                    onClick={() => setShowSearch(!showSearch)}
                />
            </Tooltip>
        );
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

            <Table
                data={data}
                loading={loading}
                properties={properties}
                total={total}
                rowActions={rowActions}
                checkedItems={checkedItems}
                onCheckedItemsChange={setCheckedItems}
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
            />

            <Pagination total={total} pagination={pagination} setPagination={setPagination} />
        </div>
    )

}

export default Datagrid;