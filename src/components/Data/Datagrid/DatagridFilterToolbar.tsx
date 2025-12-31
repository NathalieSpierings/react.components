import React, { useLayoutEffect, useRef, useState } from "react";
import { IconDefinitions, SizeDefinitions } from "../../../lib/utils/definitions";
import { Dropdown } from "../../Forms/Dropdown";
import Icon from "../../UI/Icons/Icon/Icon";
import { TableRowConfig } from "../Table/TableRowConfig";

export interface DatagridFilterToolbarProps<TData> {
    properties?: TableRowConfig<TData>[];
    searchTerm: string;
    onSearchChange: (value: string) => void;
    columnFilters: Record<string, any>;
    setColumnFilters: React.Dispatch<React.SetStateAction<Record<string, any>>
    >;
}

function DatagridFilterToolbar<TData>({
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


    if (!properties)
        return null;


    const selectFilters = properties.filter(
        p => p.filter?.type === 'select'
    );

    const hasFilters = searchTerm.trim().length > 0 || Object.values(columnFilters).some(v => v != null && v !== '');


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
        setColumnFilters(prev => ({
            ...prev,
            [prop]: value,
        }));
    };

    return (
        <div className="filterbar">
            <div className="filterbar__container">
                <div className="filterbar__left" ref={scrollRef} onScroll={updateScrollButtons}>

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
                        const selectedValue = columnFilters[col.prop];

                        return (
                            <div key={col.prop} className="filterbar__item filterbar__item--dropdown">
                                <Dropdown
                                    dropdownToggle={{
                                        label: (
                                            <>
                                                <span> {col.title}:{" "}</span>
                                                <strong>{col.filter?.options?.find(o => o.value === selectedValue)?.label ?? ""}</strong>
                                            </>
                                        )
                                    }}
                                    menuItems={[
                                        {
                                            content: `${col.title}: `,
                                            selected: selectedValue == null,
                                            onClick: () => setFilterValue(col.prop, null),
                                        },
                                        ...(col.filter?.options?.map(opt => ({
                                            content: opt.label,
                                            selected: opt.value === selectedValue,
                                            onClick: () => setFilterValue(col.prop, opt.value),
                                        })) ?? []),
                                    ]}
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
                            <Icon icon={IconDefinitions.cross} size={SizeDefinitions.Medium} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DatagridFilterToolbar;