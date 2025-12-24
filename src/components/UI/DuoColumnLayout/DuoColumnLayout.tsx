import React, { ReactNode } from 'react';

export interface DuoColumnLayoutProps {
    columnDivider?: boolean;
    gap?: string;
    css?: string;
    children: ReactNode;
}

const DuoColumnLayout: React.FC<DuoColumnLayoutProps> = ({ columnDivider, gap, css = '', children }) => {
    return (
        <div className={`duo-column ${columnDivider ? 'duo-column__border' : ''} ${css}`} style={{ columnGap: gap }}>
            {children}
        </div>
    );
};

export default DuoColumnLayout;
