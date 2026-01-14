import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import { defaultSearch, defaultSort } from '../utils/tableDataManipulation';
import { TableGetDataArguments } from '../../components/Data/Table/TableData';

export interface UseTableQueryProps<TData> {
    queryFn: UseQueryOptions<TData[], unknown, TData[], any[]>;
    filters: TableGetDataArguments<TData> | null;
}

export type Status = 'error' | 'success' | 'pending';


const filterData = <TData>(
    data: TData[] | undefined,
    filters: TableGetDataArguments<TData> | null): [TData[], number] => {

    if (!filters) {
        return [data || [], data?.length || 0];
    }

    const { searchTerm, sort, propertyConfigs, pagination, columnFilters } = filters;

    let filtered = data || [];


    // 1. Search
    if (searchTerm) {
        filtered = defaultSearch(filtered, searchTerm, propertyConfigs);
    }

    // 2. Column filters (single + multi)
    if (columnFilters) {
        for (const [key, value] of Object.entries(columnFilters)) {

            if (value == null || value === '' || (Array.isArray(value) && value.length === 0))
                continue;


            const colConfig = propertyConfigs?.find(p => p.prop === key);
            const isText = colConfig?.filter?.type === 'text';

            filtered = filtered.filter(item => {

                const val = (item as any)[key];
                if (val == null) return false;


                const filterValues = Array.isArray(value) ? value : [value];


                // text filter
                if (isText) {
                    return filterValues.some(v =>
                        val.toString().toLowerCase().includes(v.toString().toLowerCase())
                    );
                }

                // exact match for select / other types
                return filterValues.some(v =>
                    val.toString().toLowerCase() === v.toString().toLowerCase()
                );
            });
        }
    }

    // 3. Sorting
    if (sort) {
        filtered = defaultSort(filtered, sort, propertyConfigs);
    }

    // 4. Pagination
    const total = filtered.length;
    const start = (pagination.page - 1) * pagination.perPage;
    const end = pagination.page * pagination.perPage;
    const paged = filtered.slice(start, Math.min(total, end));

    return [paged, total];
};

function useTableQueryClientFilter<TData>({
    queryFn,
    filters
}: UseTableQueryProps<TData>): [TData[], TData[], number, Status] {

    const { data: rawData, status } = useQuery(queryFn);
    const [data, total] = useMemo(() => filterData(rawData, filters), [rawData, filters]);

    return [rawData ?? [], data, total, status as Status];
}

export default useTableQueryClientFilter;
