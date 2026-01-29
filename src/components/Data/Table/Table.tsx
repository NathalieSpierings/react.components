import React, { ReactElement, useMemo } from 'react';
import { ColorDefinitions } from '../../../lib/utils/definitions';
import Checkbox from '../../Forms/Checkbox/Checkbox';
import { TableAction } from './TableAction';
import { TableHeader } from './TableHead';
import TableRow from './TableRow';
import { TableRowConfig } from './TableRowConfig';
import { TableSortConfig } from './TableSort';


export interface TableProps<TData> {
    data: TData[];
    total: number;
    loading: boolean;
    properties?: TableRowConfig<TData>[];
    enableCompactView?: boolean;
    rowActions?: TableAction<TData>[];

    enableCheckboxes?: boolean;
    checkedItems?: TData[];
    onRowsChecked?: (checkedItems: TData[]) => void;

    rowSingleClickAction?: (item: TData) => void;
    rowDoubleClickAction?: (item: TData) => void;
    sort?: TableSortConfig;
    setSort?: (sort: TableSortConfig) => void;


    tooltipColor?: ColorDefinitions;
    rowActionsCss?: string;

    collapsibleRowData?: (item: TData) => ReactElement;
    collapsibleRowIds?: Set<string | number>;
    toggleCollapsibleRow?: (id: string | number) => void;

    columnFilters?: Record<string, any>;
    setColumnFilters?: React.Dispatch<
        React.SetStateAction<Record<string, any>>
    >;
    tableCss?: string;
}

function Table<TData extends { id: string | number }>({
    data,
    properties,
    rowActions,
    enableCheckboxes,
    checkedItems = [],
    onRowsChecked,

    rowSingleClickAction,
    rowDoubleClickAction,
    enableCompactView = false,
    rowActionsCss = 'tw-10',
    sort,
    setSort,
    collapsibleRowData,
    collapsibleRowIds,
    toggleCollapsibleRow,
    columnFilters,
    setColumnFilters,
    tableCss = ''
}: Readonly<TableProps<TData>>): ReactElement {

    const useCheckboxes = enableCheckboxes && onRowsChecked !== undefined;
    const [selected, setSelected] = React.useState<string | number | null>(null);


    const columns = useMemo<TableRowConfig<TData>[]>(() => {
        if (properties) return properties;
        if (!data.length) return [];
        return Object.keys(data[0] as {}).map(
            (k) => ({ prop: k, title: k }) as TableRowConfig<TData>
        );
    }, [data, properties]);

    const handleSorting = (prop: string) => {
        if (!setSort) return;

        setSort(sort?.prop === prop 
            ? { prop, order: sort.order === 'asc' ? 'desc' : 'asc' } 
            : { prop, order: 'asc' }
        )
    };


    const handleCheckedItems = (items: TData[]) => {
        onRowsChecked?.(items);
    };

    const colSpan =
        columns.length +
        (useCheckboxes ? 1 : 0) +
        (rowActions ? 1 : 0) +
        (collapsibleRowData ? 1 : 0);

    return (
        <table className={`table sortable ${enableCompactView ? 'table--compact' : ''} ${tableCss}`}>
            <thead>
                <tr>
                    {collapsibleRowData && <th scope="col" className="tw-3 table-text-center"></th>}

                    {
                        useCheckboxes && (
                            <th scope="col" className="tw-3 table-text-center">
                                <Checkbox
                                    color={ColorDefinitions.Primary}
                                    checked={data.length > 0 && data.length === checkedItems.length}
                                    onChange={checked => onRowsChecked?.(checked ? data : [])}
                                />
                            </th>
                        )
                    }

                    {columns.map((col) => (
                        <TableHeader
                            key={col.prop}
                            item={col}
                            sortConfig={sort}
                            setSort={() => handleSorting(col.prop)}
                            cssClass={col.cssClass}
                        />
                    ))}

                    {rowActions && (<th scope="col" className={rowActionsCss}></th>)}
                </tr>
            </thead>
            <tbody>
                {data.length ? (
                    data.map((item) => (
                        <TableRow
                            key={item.id}
                            item={item}
                            columns={columns}
                            selected={selected === item.id}
                            actions={rowActions}
                            refresh={async () => { }}
                            handleSingleClick={(i) => {
                                setSelected(i.id);
                                rowSingleClickAction?.(i);
                            }}
                            handleDoubleClick={rowDoubleClickAction}
                            checked={checkedItems.some(x => x.id === item.id)}
                            onRowCheckedChanged={
                                useCheckboxes
                                    ? (checked) =>
                                        handleCheckedItems(
                                            checked
                                                ? [...checkedItems, item]
                                                : checkedItems.filter(x => x.id !== item.id)
                                        )
                                    : undefined
                            }
                            expanded={collapsibleRowIds?.has(item.id) ?? false}
                            onToggleCollapsibleRow={() => toggleCollapsibleRow?.(item.id)}
                            collapsibleRowData={collapsibleRowData}
                        />
                    ))
                ) : (
                    <tr className="datagrid__empty-row">
                        <td colSpan={colSpan}>
                            <div>Geen gegevens gevonden!</div>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Table;