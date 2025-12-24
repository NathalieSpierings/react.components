import React, { ReactNode } from 'react';
import { ColorDefinitions } from '../../../lib/utils/definitions';

export interface DuoColumnProps {
    background?: ColorDefinitions;
    duoColumnCss?: string;
    children: ReactNode;
}

const DuoColumn: React.FC<DuoColumnProps> = ({ background = ColorDefinitions.Transparent, duoColumnCss, children }) => {
    return (
        <div className={`duo-column__item ${background ? "bg-" + background : ''} ${duoColumnCss} `}>{children}</div>
    );
};

export default DuoColumn;
