import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { ColorDefinitions } from '../../../lib/utils/definitions';
import Tooltip from '../../UI/Tooltip/Tooltip';

export interface TableCellProps {
    textAlign?: 'left' | 'center' | 'right';
    textMute?: boolean;
    showTooltip?: boolean;
    tooltipContent?: ReactNode | string;
    tooltipArrow?: boolean;
    tooltipColor?: ColorDefinitions;
    overflow?: boolean;
    children?: ReactNode;
}

const TableCell = ({
    textAlign = 'left',
    textMute,
    showTooltip = true,
    tooltipContent,
    tooltipArrow = false,
    tooltipColor = ColorDefinitions.Surface,
    overflow = true,
    children,
}: TableCellProps) => {

    const ref = useRef<HTMLDivElement>(null);
    const [isTruncated, setIsTruncated] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const lines = 1;
            const element = ref.current;
            if (!element) return;

            const containerWidth = element.clientWidth;
            const contentWidth = element.scrollWidth;
            const maxlines = Math.ceil(contentWidth / containerWidth);

            setIsTruncated(maxlines > lines);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const css = [
        overflow && 'tdata',
        isTruncated && 'truncate',
        textMute && 'text-mute',
        `table-text-${textAlign}`,
    ]
        .filter(Boolean)
        .join(' ');


    const content = (
        <div ref={ref} className={css}>
            {children}
        </div>
    );


    return isTruncated && showTooltip ? (
        <Tooltip
            overflowTooltip
            arrow={tooltipArrow}
            background={tooltipColor}
            content={tooltipContent ?? children}
            direction="bottom"
        >
            {content}
        </Tooltip>
    ) : (
        content
    );
};

export default TableCell;