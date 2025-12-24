// Icones.tsx
import React from 'react';
import { IconesColorDefinitions, IconesDefinitions, SizeDefinitions } from '../../../../lib/utils/definitions';
import { IconesMap } from './IconesMap';

type IconesProps = {
    icon: IconesDefinitions;
    color?: IconesColorDefinitions;
    iconesCss?: string;
    svgCss?: string;
    size?: SizeDefinitions;
};

const Icones: React.FC<IconesProps> = ({ icon, color, size, iconesCss = '', svgCss = '', ...rest }) => {
    const IconesComponent = IconesMap[icon];

    if (!IconesComponent) {
        console.warn(`Icon "${icon}" not found in IconesMap`);
        return null;
    }

    return (
        <div className={`icones icones-${color} ${size ? "icones-" + size : null} ${iconesCss}`}>
            <IconesComponent className={svgCss} {...rest} />
        </div>
    );
};

export default Icones;
