import React, { FC } from 'react';
import { ColorDefinitions } from '../../../../lib/utils/definitions';
import Dropdown, { DropdownDirection, DropdownHeader, DropdownItem, DropdownToggle } from '../../../Forms/Dropdown/Dropdown';

export interface SidebarAccountProps {
    direction?: DropdownDirection;
    dropdownToggle: DropdownToggle;
    dropdownHeader?: DropdownHeader;
    menuItems?: DropdownItem[];
    accentColor?: ColorDefinitions;
}

const SidebarAccount: FC<SidebarAccountProps> = ({
    direction = 'up',
    dropdownHeader,
    dropdownToggle,
    accentColor,
    menuItems = [],
}) => {
    return (
        <div className="sidebar-account">
            <Dropdown
                dropdownToggle={dropdownToggle}
                dropdownHeader={dropdownHeader}
                menuItems={menuItems}
                direction={direction}
                color={accentColor}
            />
        </div>
    );
};

export default SidebarAccount;
