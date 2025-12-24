import React from 'react';

const IconesFolderBinOpen: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg id="icones_folder_warning_open" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg" {...props}>
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
        <g id="icon" stroke="var(--icones-5)">
            <path
                d="M54.7,45.93H46.23m7.64,1.24-.23,3.44c-.09,1.32-.13,2-.56,2.39s-1.1.4-2.42.4h-.39c-1.32,0-2,0-2.42-.4s-.47-1.07-.56-2.39l-.23-3.44"
                fill="none"
                strokeLinecap="round"
            />
            <path d="M49.06,44.93a1.49,1.49,0,0,1,2.81,0" fill="none" strokeLinecap="round" opacity="0.5" />
        </g>
    </svg>
);

export default IconesFolderBinOpen;
