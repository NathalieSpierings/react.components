import React from 'react';

const IconesFolderOpen: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg id="svg_icones_folder_open" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g id="folder">
            <path
                fill="var(--icones-20)"
                d="M2.73,24.7V55.59a3.09,3.09,0,0,0,3.09,3.09H59.37a3.09,3.09,0,0,0,3.09-3.09V24.7a3.09,3.09,0,0,0-3.09-3.09H5.82A3.09,3.09,0,0,0,2.73,24.7"
            />
            <path
                fill="var(--icones-10)"
                d="M57.31,21.61a4.11,4.11,0,0,0-4.12-4.12H36.71l-5.14-6.18H8.91A3.09,3.09,0,0,0,5.82,14.4v7.21Z"
            />
            <path fill="var(--icones-30)" d="M3,56.65c1,2.4,2.49,2,6.54,2H56.61c4.87.28,5.15-1,5.5-2Z" />
            <path fill="var(--icones-30)" d="M63.43,26.13a3.91,3.91,0,0,1,3.77,4.64l-4.74,22.4v-27Z" />
        </g>
        <g id="txt" fill="var(--icones-5)">
            <path d="M21.27,28.29H8.91a1,1,0,0,1,0-2.06H21.27a1,1,0,0,1,0,2.06" />
            <path d="M21.27,32.41H8.91a1,1,0,0,1,0-2.06H21.27a1,1,0,1,1,0,2.06" />
        </g>
    </svg>
);

export default IconesFolderOpen;
