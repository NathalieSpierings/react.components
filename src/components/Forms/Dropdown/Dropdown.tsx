import React, { FC, MouseEventHandler, ReactNode, useState, useRef, useEffect, ReactElement } from 'react';
import { ColorDefinitions } from '../../../lib/utils/definitions';
import Box, { BoxProps } from '../../Base/Box/Box';

export type DropdownDirection = 'default' | 'up' | 'right';

export interface DropdownToggle {
    prefix?: ReactElement | string;
    label?: ReactElement | string;
    renderAsInput?: boolean;
}

export interface DropdownHeader {
    content?: ReactElement | string;
    borderColor?: ColorDefinitions;
}

export interface DropdownItem {
    content?: string | ReactElement;
    contentPositon?: 'center' | 'end';
    dividerColor?: ColorDefinitions;
    prefix?: string | ReactElement;
    postfix?: string | ReactElement;
    prefixPosition?: 'start' | 'end';
    postfixPosition?: 'start' | 'end';
    selected?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

export interface DropdownProps extends BoxProps {
    dropdownToggle: DropdownToggle;
    direction?: DropdownDirection;
    minWidth?: string;
    dropdownHeader?: DropdownHeader;
    menuItems?: DropdownItem[];
    children?: ReactNode;
}

const Dropdown: FC<DropdownProps> = ({
    dropdownToggle,
    direction,
    minWidth,
    dropdownHeader,
    menuItems,
    background,
    children,
    ...styledDivProps
}) => {
    const [shown, setShown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdownMenu = () => {
        setShown(!shown);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setShown(false);
        }
    };

    useEffect(() => {
        if (shown) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [shown]);

    return (
        <div ref={dropdownRef} className={`dropdown ${direction ? "dropdown--" + direction : ''}`}>
            {dropdownToggle.renderAsInput ? (
                <div className="dropdown__toggle dropdown__toggle__input" onClick={toggleDropdownMenu} role="button" tabIndex={0}>
                    <div className="dropdown__toggle__title">{dropdownToggle.label}</div>
                </div>
            ) : (
                <a
                    className="dropdown__toggle"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={shown}
                    onClick={toggleDropdownMenu}
                >
                    {dropdownToggle.prefix && <>{dropdownToggle.prefix}</>}
                    {dropdownToggle.label && <div className="dropdown__toggle__title">{dropdownToggle.label}</div>}
                </a>
            )}

            <Box
                {...styledDivProps}
                background={background}
                css={`dropdown__menu ${shown ? 'shown' : ''}`}
                style={minWidth ? { minWidth } : {}}
            >
                {dropdownHeader && (
                    <div
                        className={`dropdown__menu__header ${dropdownHeader.borderColor ? `border-${dropdownHeader.borderColor}` : ''
                            }`}
                    >
                        {dropdownHeader.content}
                    </div>
                )}

                {children
                    ? children
                    : menuItems?.map((item, idx) =>
                        item.dividerColor ? (
                            <div key={idx} className={`dropdown__menu__divider border-${item.dividerColor}`}></div>
                        ) : (
                            <div
                                key={idx}
                                className={`dropdown__menu__item ${item.selected ? 'selected' : ''}`}
                                onClick={item.onClick}
                            >
                                <div className="content-item">
                                    {item.prefix && (
                                        <div
                                            className={`actions ${item.prefixPosition ? `actions--${item.prefixPosition}` : ''
                                                }`}
                                        >
                                            {item.prefix}
                                        </div>
                                    )}
                                    {item.content && (
                                        <div
                                            className={`meta ${item.contentPositon ? `meta--${item.contentPositon}` : ''
                                                }`}
                                        >
                                            {item.content}
                                        </div>
                                    )}
                                    {item.postfix && (
                                        <div
                                            className={`actions ${item.postfixPosition ? `actions--${item.postfixPosition}` : ''
                                                }`}
                                        >
                                            {item.postfix}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    )}
            </Box>
        </div>
    );
};

export default Dropdown;
