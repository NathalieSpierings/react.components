import React, { ReactNode } from 'react';

export interface DatagridTableInfoProps {
    children: ReactNode;
}

const DatagridTableInfo = ({ children }: DatagridTableInfoProps) => (
    <div className="datagrid__info">
        <div className="datagrid__info__container">
            {children}
        </div>
    </div>
);

export default DatagridTableInfo;