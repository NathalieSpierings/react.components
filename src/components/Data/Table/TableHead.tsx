import React, { ReactElement } from 'react';
import { TableSortConfig } from './TableSort';
import { TableRowConfig } from './TableRowConfig';

export interface TableHeaderProps<TData> {
    item: TableRowConfig<TData>;
    sortConfig?: TableSortConfig;
    setSort: (prop: string) => void;
    cssClass?: string;

    filterValue?: string | number | boolean | null;
    onFilterChange?: (value: string | null) => void;
}

export function TableHeader<TData>({
    item,
    sortConfig,
    setSort,
    cssClass = '',
    filterValue,
    onFilterChange,
}: Readonly<TableHeaderProps<TData>>): ReactElement {

    const filter = item.filter;

    const sortable = item.sortable !== false;

    const sortOrder =
        sortable && sortConfig?.prop === item.prop
            ? sortConfig.order
            : null;



    const handleSortClick = (e: React.MouseEvent<HTMLTableCellElement>) => {
        if (!sortable) return;
        setSort(item.prop);
    };

    const cls = [
        cssClass,
        item.textMute ? 'text-mute' : '',
        item.textAlign ? `text-${item.textAlign}` : 'text-left',
        sortOrder === 'asc' && 'ascending',
        sortOrder === 'desc' && 'descending',
    ].filter(Boolean).join(' ');


    return (
        <th className={cls}
            scope="col"
            data-label={item.title}
            data-sort={item.title}
        >
            <div className="table-header">
                <span onClick={handleSortClick}>{item.title}</span>

                {filter && onFilterChange && (
                    <div className="table-header__filter">
                        {filter.type === 'text' && (
                            <input
                                type="text"
                                className="form-control form-control--xs"
                                value={(filterValue ?? '') as string}
                                onClick={(e) => e.stopPropagation()}
                                onChange={(e) =>
                                    onFilterChange(
                                        e.target.value || null
                                    )
                                }
                                placeholder="Filter…"
                            />
                        )}

                        {filter.type === 'select' && (
                            <select
                                className="form-control form-control--xs"
                                value={(filterValue ?? '') as string}
                                onClick={(e) => e.stopPropagation()}
                                onChange={(e) =>
                                    onFilterChange(
                                        e.target.value || null
                                    )
                                }
                            >
                                <option value="">Alles</option>
                                {filter.options?.map((opt) => (
                                    <option
                                        key={opt.value}
                                        value={opt.value}
                                    >
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        )}
                    </div>
                )}
            </div>
        </th>
    );
}