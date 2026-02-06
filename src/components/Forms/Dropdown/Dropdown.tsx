import React, { FC, ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import { ColorDefinitions, IconDefinitions } from "../../../lib/utils/definitions";
import Box, { BoxProps } from "../../Base/Box/Box";
import Icon from "../../UI/Icons/Icon/Icon";

export type DropdownDirection = "up" | "down";

export interface DropdownToggle {
    prefix?: ReactElement | string;
    label?: ReactElement | string;
    renderAsInput?: boolean;
    arrow?: boolean;
    ghost?: boolean;
    ghostColor?: ColorDefinitions;
}

export interface DropdownHeader {
    content?: ReactElement | string;
    borderColor?: ColorDefinitions;
}


export interface DropdownItem {
    content?: string | ReactElement;
    contentPositon?: 'center' | 'end';
    divider?: boolean;
    dividerColor?: ColorDefinitions;
    prefix?: string | ReactElement;
    postfix?: string | ReactElement;
    prefixPosition?: 'start' | 'end';
    postfixPosition?: 'start' | 'end';
    selected?: boolean;
    onClick?: () => void;
    keepOpen?: boolean;
}

interface DropdownProps extends BoxProps {
    dropdownToggle: DropdownToggle;
    direction?: DropdownDirection;
    minWidth?: string;
    dropdownHeader?: DropdownHeader;
    menuItems?: DropdownItem[];
    accentColor?: ColorDefinitions;
    children?: ReactNode;
}

export const Dropdown: FC<DropdownProps> = ({
    dropdownToggle,
    direction = "down",
    minWidth,
    dropdownHeader,
    menuItems,
    background,
    accentColor,
    children,
    ...boxProps
}) => {

    const dropdownToggleRef = useRef<HTMLButtonElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = useState(false);

    const positionDropdown = () => {
        const dropdownToggleEl = dropdownToggleRef.current;
        const menuEl = menuRef.current;
        if (!dropdownToggleEl || !menuEl) return;

        const dropdownToggleRect = dropdownToggleEl.getBoundingClientRect();
        const menuRect = menuEl.getBoundingClientRect();
        const verticalOffset = dropdownToggle.renderAsInput ? 8 : 0;
        const viewportOffset = 8;

        let top: number;
        if (direction === "up") {
            top = dropdownToggleRect.top - menuRect.height - verticalOffset;
        } else {
            top = dropdownToggleRect.bottom + verticalOffset;
            if (top + menuRect.height > window.innerHeight) {
                top = dropdownToggleRect.top - menuRect.height - verticalOffset;
            }
        }

        let left = dropdownToggleRect.right - menuRect.width;
        if (left < viewportOffset) {
            left = dropdownToggleRect.left;
            if (left + menuRect.width > window.innerWidth - viewportOffset) {
                left = window.innerWidth - menuRect.width - viewportOffset;
            }
        }

        menuEl.style.top = `${top}px`;
        menuEl.style.left = `${left}px`;
    };


    const toggleDropdown = (e: React.MouseEvent) => {
        e.stopPropagation();
        setOpen(prev => !prev);
    };

    const closeDropdown = () => setOpen(false);

    useEffect(() => {
        if (!open) return;

        positionDropdown();
        document.addEventListener("click", closeDropdown);
        window.addEventListener("resize", closeDropdown);
        window.addEventListener("scroll", closeDropdown);

        return () => {
            document.removeEventListener("click", closeDropdown);
            window.removeEventListener("resize", closeDropdown);
            window.removeEventListener("scroll", closeDropdown);
        };
    }, [open, direction, dropdownToggle.renderAsInput]);


    const renderToggleContent = () => (
        <>
            {dropdownToggle.prefix && <>{dropdownToggle.prefix}</>}
            {dropdownToggle.label && (
                <div className="dropdown__toggle__title">{dropdownToggle.label}</div>
            )}
            {dropdownToggle.arrow && <Icon icon={IconDefinitions.angle_down} />}
        </>
    );

    const renderContent = (item: DropdownItem) => (
        <div className="content-item">
            {item.prefix && (
                <div className={`actions ${item.prefixPosition ? 'actions--' + item.prefixPosition : ''}`}>
                    {item.prefix}
                </div>
            )}
            {item.content && (
                <div className={`meta ${item.contentPositon ? 'meta--' + item.contentPositon : ''}`}>
                    {item.content}
                </div>
            )}
            {item.postfix && (
                <div className={`actions ${item.postfixPosition ? 'actions--' + item.postfixPosition : ''}`}>
                    {item.postfix}
                </div>
            )}
        </div>
    );


    const toggleCss = [
        "dropdown__toggle",
        dropdownToggle.renderAsInput && "dropdown__toggle--input",
        dropdownToggle.ghost && "btn btn-ghost",
        dropdownToggle.ghost && dropdownToggle.ghostColor && `btn-${dropdownToggle.ghostColor}`,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={`dropdown ${accentColor ? 'dropdown-' + accentColor : ''}`}>
            <button
                ref={dropdownToggleRef}
                className={toggleCss}
                onClick={toggleDropdown}
            >
                {renderToggleContent()}
            </button>

            <Box
                {...boxProps}
                ref={menuRef}
                background={background}
                className={`dropdown__menu ${open ? "shown" : ""} ${direction === "up" ? "dropdown__menu--up" : ""}`}
                style={minWidth ? { minWidth } : {}}
            >
                {dropdownHeader && (
                    <div className={`dropdown__menu__header ${dropdownHeader.borderColor ? 'border-' + dropdownHeader.borderColor : ''}`}>
                        {dropdownHeader.content}
                    </div>
                )}

                {children ?? menuItems?.map((item, idx) => {
                    if (item.divider || item.dividerColor) {
                        return <div key={"ddl_divider_" + idx} className={`dropdown__menu__divider ${item.dividerColor ? 'border-' + item.dividerColor : ''}`} />;
                    }

                    // Gebruik div voor multi-select items om problemen met checkbox + button te vermijden
                    const Wrapper: any = item.keepOpen ? 'div' : 'button';

                    return (
                        <Wrapper
                            key={"ddl_item_" + idx}
                            className={`dropdown__menu__item ${item.selected ? "selected" : ""}`}
                            onClick={(e: React.MouseEvent) => {
                                if (!item.keepOpen) closeDropdown();
                                item.onClick?.();
                                e.stopPropagation();
                            }}
                        >
                            {renderContent(item)}
                        </Wrapper>
                    );
                })}
            </Box>
        </div>
    );
};

export default Dropdown;