import React, { ReactElement, ReactNode } from 'react';
import Toolbar from '../../UI/Toolbar/Toolbar';

export interface DatagridToolbarProps {
    title?: string | ReactElement;
    navItems?: ReactNode;
    showSeparator?: boolean;
    prefixItems?: ReactNode[];
    postfixItems?: ReactNode[];
    borderBottom?: boolean;
}

const DatagridToolbar: React.FC<DatagridToolbarProps> = ({
    title,
    navItems,
    showSeparator = false,
    prefixItems = [],
    postfixItems = [],
    borderBottom = false,
}) => {

    return (
        <Toolbar
            title={title}
            navItems={navItems}
            showSeparator={showSeparator}
            prefixItems={prefixItems}
            postfixItems={postfixItems} 
            borderBottom={borderBottom}
            />
    );
};

export default DatagridToolbar;