import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { defaultSearch, defaultSort } from '../utils/tableDataManipulation';
import { TableGetDataArguments } from '../../components/Data/Table/TableData';

export interface UseTableQueryProps<TData> {
    queryFn: UseQueryOptions<TData[], unknown, TData[], any[]>;
    filters: TableGetDataArguments<TData> | null;
}

export type Status = 'error' | 'success' | 'pending';

// const filterData: <TData>(data: TData[] | undefined, filters: TableGetDataArguments<TData> | null) => [TData[], number] = (data, filters) => {

//     if (!filters) {
//         return [data || [], data?.length || 0];
//     }

//     const { searchTerm, sort, propertyConfigs, pagination, columnFilters } = filters;

//     let data_ = data || [];

//     // 1. Search
//     if (searchTerm) {
//         data_ = defaultSearch(data_, searchTerm, propertyConfigs);
//     }

//     // 2. Column filters
//   if (columnFilters) {
//   for (const [key, value] of Object.entries(columnFilters)) {
//     if (value != null && value !== '') {
//       const colConfig = propertyConfigs?.find(p => p.prop === key);
//       if (colConfig?.filter?.type === 'text') {
//         // partial match voor tekst
//         data_ = data_.filter(item => {
//           const val = (item as any)[key];
//           return val?.toString().toLowerCase().includes(value.toString().toLowerCase());
//         });
//       } else {
//         // exact match voor select/other types
//         data_ = data_.filter(item => {
//           const val = (item as any)[key];
//           return val?.toString().toLowerCase() === value.toString().toLowerCase();
//         });
//       }
//     }
//   }
// }

//   // 3. Sorting
//     if (sort) {
//         data_ = defaultSort(data_, sort, propertyConfigs);
//     }


//     // 4. Pagination
//     const total = data_.length;  
//     let start = (pagination.page - 1) * pagination.perPage;
//     let end = pagination.page * pagination.perPage;

//     return [data_.slice(start, Math.min(total, end)), data_.length || 0];
// };

const filterData = <TData>(data: TData[] | undefined, filters: TableGetDataArguments<TData> | null): [TData[], number] => {

    if (!filters) {
        return [data || [], data?.length || 0];
    }

    const { searchTerm, sort, propertyConfigs, pagination, columnFilters } = filters;

    let data_ = data || [];

    // 1. Search
    if (searchTerm) {
        data_ = defaultSearch(data_, searchTerm, propertyConfigs);
    }

    // 2. Column filters (single + multi)
    if (columnFilters) {
        for (const [key, value] of Object.entries(columnFilters)) {
            if (value == null || value === '' || (Array.isArray(value) && value.length === 0))
                continue;

            const colConfig = propertyConfigs?.find(p => p.prop === key);
            const isText = colConfig?.filter?.type === 'text';

            data_ = data_.filter(item => {
                const val = (item as any)[key];
                if (val == null) return false;

                // text filter
                if (isText) {
                    return val.toString().toLowerCase().includes(
                        value.toString().toLowerCase()
                    );
                }

                // multi-select
                if (Array.isArray(value)) {
                    return value.some(v =>
                        val.toString().toLowerCase() === v.toString().toLowerCase()
                    );
                }

                // single select
                return val.toString().toLowerCase() === value.toString().toLowerCase();
            });
        }
    }

    // 3. Sorting
    if (sort) {
        data_ = defaultSort(data_, sort, propertyConfigs);
    }

    // 4. Pagination
    const total = data_.length;
    const start = (pagination.page - 1) * pagination.perPage;
    const end = pagination.page * pagination.perPage;

    return [data_.slice(start, Math.min(total, end)), total];
};

function useTableQueryClientFilter<TData>({ queryFn, filters }: UseTableQueryProps<TData>): [TData[], number, Status] {
    const { data, status } = useQuery(queryFn);

    const [filteredData, setFilteredData] = useState<TData[]>(filterData(data, filters)[0]);
    const [total, setTotal] = useState(filterData(data, filters)[1]);

    useEffect(() => {
        const [fd, t] = filterData(data, filters);
        setFilteredData(fd);
        setTotal(t);
    }, [data, filters]);

    return [filteredData, total, status as Status];
}

export default useTableQueryClientFilter;
