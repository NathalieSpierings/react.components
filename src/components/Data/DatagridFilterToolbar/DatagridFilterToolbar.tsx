import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { IconDefinitions, SizeDefinitions } from "../../../lib/utils/definitions";
import { Dropdown } from "../../Forms/Dropdown";
import Icon from "../../UI/Icons/Icon/Icon";
import { TableRowConfig } from "../Table/TableRowConfig";
import { Checkbox } from "../../Forms/Checkbox";

export interface DatagridFilterToolbarProps<TData> {
    data: TData[];
    properties?: TableRowConfig<TData>[];
    searchTerm: string;
    onSearchChange: (value: string) => void;
    columnFilters: Record<string, any>;
    setColumnFilters: React.Dispatch<React.SetStateAction<Record<string, any>>>;
}

function DatagridFilterToolbar<TData>({
    data,
    properties,
    searchTerm,
    onSearchChange,
    columnFilters,
    setColumnFilters,
}: Readonly<DatagridFilterToolbarProps<TData>>) {

    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [isScrollable, setIsScrollable] = useState(false);


    useLayoutEffect(() => {
        updateScrollButtons();

        const el = scrollRef.current;
        if (!el) return;

        el.addEventListener('scroll', updateScrollButtons);
        window.addEventListener('resize', updateScrollButtons);

        return () => {
            el.removeEventListener('scroll', updateScrollButtons);
            window.removeEventListener('resize', updateScrollButtons);
        };
    }, [properties, columnFilters]);

    const resolvedOptions = useMemo(() => {

        if (!properties) return {};

        return Object.fromEntries(
            properties
                .filter(p => p.filter?.type === 'select')
                .map(col => {
                    const filter = col.filter!;
                    if (filter.options) {
                        return [col.prop, filter.options];
                    }

                    if (filter.optionsSource) {
                        const values = filter.optionsSource(data);
                        const map =
                            filter.mapOption ??
                            ((v: any) => ({
                                label: String(v),
                                value: String(v)
                            }));
                        return [col.prop, values.map(map)];
                    }
                    return [col.prop, []];
                })
        );
    }, [properties, data]);


    if (!properties) return null;


    const selectFilters = properties.filter(p => p.filter?.type === 'select');

    const hasFilters =
        searchTerm.trim().length > 0 ||
        Object.values(columnFilters).some(v => v != null && v !== '');


    const clearAll = () => {
        onSearchChange('');
        setColumnFilters({});
    };

    const updateScrollButtons = () => {
        const el = scrollRef.current;
        if (!el) return;

        const scrollable = el.scrollWidth > el.clientWidth;

        setIsScrollable(scrollable);
        setCanScrollLeft(scrollable && el.scrollLeft > 0);
        setCanScrollRight(
            scrollable &&
            el.scrollWidth > el.clientWidth + el.scrollLeft
        );
    };


    const scrollBy = (direction: 'prev' | 'next') => {
        const el = scrollRef.current;
        if (!el) return;

        el.scrollBy({
            left: direction === 'next' ? 200 : -200,
            behavior: 'smooth',
        });
    };

    const setFilterValue = (prop: string, value: any) => {
        setColumnFilters(prev => ({ ...prev, [prop]: value }));
    };

    return (
        <div className="filterbar">
            <div className="filterbar__container">
                <div
                    className="filterbar__left"
                    ref={scrollRef}
                    onScroll={updateScrollButtons}
                >

                    <div className="filterbar__item filterbar__item--keyword">
                        <Icon icon={IconDefinitions.filter} size={SizeDefinitions.Small} />
                        <input
                            type="text"
                            className="filterbar__input"
                            placeholder="Filteren..."
                            value={searchTerm}
                            onChange={e => onSearchChange(e.target.value)}
                        />
                    </div>

                    {selectFilters.map(col => {

                        const isMultiSelect = col.filter?.multiSelect;
                        const rawSelectedValue = columnFilters[col.prop];
                        const selectedValue = isMultiSelect
                            ? (Array.isArray(rawSelectedValue) ? rawSelectedValue.map(String) : [])
                            : rawSelectedValue ?? '';
                        const options: { label: string; value: string }[] = resolvedOptions[col.prop] ?? [];
const dropdownItems = useMemo(() => {
                            const items: any[] = [
                                {
                                    content: `${col.title}:`,
                                    selected: isMultiSelect && selectedValue.length === 0,
                                    onClick: isMultiSelect ? () => setFilterValue(col.prop, []) : undefined,
                                    keepOpen: isMultiSelect,
                                },
                                ...options.map(opt => {
                                    const isChecked = isMultiSelect && selectedValue.includes(opt.value);
                                    if (isMultiSelect) {
                                        return {
                                            content: (
                                                <Checkbox
                                                    key={opt.value}
                                                    checked={isChecked}
                                                    label={opt.label}
                                                    onChange={() => {
                                                        const newValue = isChecked
                                                            ? selectedValue.filter(v => v !== opt.value)
                                                            : [...selectedValue, opt.value];
                                                        setFilterValue(col.prop, newValue);
                                                    }}
                                                />
                                            ),
                                            keepOpen: true,
                                            onClick: undefined,
                                            selected: isChecked,
                                        };
                                    } else {
                                        return {
                                            content: opt.label,
                                            onClick: () => setFilterValue(col.prop, opt.value),
                                            keepOpen: false,
                                            selected: opt.value === selectedValue,
                                        };
                                    }
                                }),
                            ];
                            return items;
                        }, [options, selectedValue, col.prop, isMultiSelect]);

                        return (
                            <div key={col.prop} className="filterbar__item filterbar__item--dropdown">
                                <Dropdown
                                    dropdownToggle={{
                                        label: (
                                            <>
                                                <span>{col.title}: </span>
                                                <strong>
                                                    {isMultiSelect
                                                        ? options
                                                            .filter(o => selectedValue.includes(o.value))
                                                            .map(o => o.label)
                                                            .join(', ')
                                                        : options.find(o => o.value === selectedValue)?.label ?? ''}
                                                </strong>
                                            </>
                                        ),
                                        arrow: true,
                                    }}
                                    menuItems={dropdownItems}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="filterbar__right">

                    {isScrollable && (
                        <>
                            <button className="filterbar__control filterbar__control--prev"
                                onClick={() => scrollBy('prev')}
                                disabled={!canScrollLeft}
                                aria-disabled={!canScrollLeft}
                            >
                                <Icon icon={IconDefinitions.angle_left} />
                            </button>

                            <button className="filterbar__control filterbar__control--next"
                                onClick={() => scrollBy('next')}
                                disabled={!canScrollRight}
                                aria-disabled={!canScrollRight}
                            >
                                <Icon icon={IconDefinitions.angle_right} />
                            </button>
                        </>
                    )}

                    {hasFilters && (
                        <button className="filterbar__control filterbar__control--dismiss"
                            onClick={clearAll}
                            title="Filters wissen"
                        >
                            <Icon icon={IconDefinitions.cross} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DatagridFilterToolbar;