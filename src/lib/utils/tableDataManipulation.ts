import moment from 'moment';
import { TableRowConfig } from '../../components/Data/Table/TableRowConfig';
import { TableSortConfig } from '../../components/Data/Table/TableSort';

const orderMap = {
    desc: -1,
    asc: 1,
};

const getPropConfig = <TData>(
    prop: string,
    propertyConfigs?: TableRowConfig<TData>[]
): TableRowConfig<TData> | undefined => {
    if (!propertyConfigs) {
        return;
    }

    const config = propertyConfigs.filter((x) => x.prop == prop);

    if (!config.length) {
        return;
    }

    return config[0];
};

const getValue = <TData>(val: any, prop: string, propertyConfigs?: TableRowConfig<TData>[]): any => {
    const retVal = val[prop];
    const config = getPropConfig(prop, propertyConfigs);

    if (!config) {
        return retVal;
    }

    const transform = config.transformValue ?? ((x: any) => x);

    return transform(retVal);
};

export function defaultSort<TData>(
    items: TData[],
    sortConfig: TableSortConfig,
    propertyConfigs?: TableRowConfig<TData>[]
): TData[] {

    const data = [...items];

    data.sort((a: TData, b: TData) => {
        const config = getPropConfig(sortConfig.prop, propertyConfigs);

        let result: number;

        if (config?.sort) {
            result = config.sort(a, b);
        } else {
            const valA = getValue(a, sortConfig.prop, propertyConfigs);
            const valB = getValue(b, sortConfig.prop, propertyConfigs);

            const aIsNull = valA === null || valA === undefined;
            const bIsNull = valB === null || valB === undefined;

            if (aIsNull && bIsNull) {
                result = 0;
            } else if (aIsNull) {
                result = 1;
            } else if (bIsNull) {
                result = -1;
            } else if (valA > valB) {
                result = 1;
            } else if (valA < valB) {
                result = -1;
            } else {
                result = 0;
            }
        }

        return result * orderMap[sortConfig.order];
    });

    return data;
}

export const getStringValue = (val: any): string => {
    if (val instanceof Date) {
        return moment(val).format('DD-MM-YYYY');
    }
    if (val === null || val === undefined) {
        return val;
    }

    return val + '';
};

const _defaultSearch = (val: string, searchTerm: string) => {
    if (!val || !searchTerm) {
        return false;
    }

    return val.toLowerCase().includes(searchTerm.toLowerCase());
};


export const debounce = (func: any, timeout = 300) => {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, timeout);
    };
};

export function defaultSearch<TData>(
    items: TData[],
    q: string,
    propertyConfigs?: TableRowConfig<TData>[]
): TData[] {

    if (!q) return items;

    return items.filter((item) => {
        if (!propertyConfigs) return false;

        return propertyConfigs.some((config) => {
            let val: any = (item as any)[config.prop];

            // gebruik transformValue als aanwezig
            if (config.transformValue) {
                val = config.transformValue(val);
            } else {
                val = getStringValue(val);
            }

            return _defaultSearch(val, q);
        });
    });
}