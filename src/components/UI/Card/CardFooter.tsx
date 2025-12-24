import React, { forwardRef, ReactElement } from 'react';
import Box, { BoxProps } from '../../Base/Box/Box';

export interface CardFooterProps extends Omit<BoxProps, 'title'> {
    title?: string | ReactElement;
    leftContent?: ReactElement;
    rightContent?: ReactElement;
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
    ({ title, leftContent, rightContent, children, ...styledDivProps }, ref) => {
        return (
            <Box {...styledDivProps} css="card__footer" ref={ref}>
                <div className="content-item">
                    {leftContent ? <div className="actions">{leftContent}</div> : null}

                    {rightContent ? <div className="actions">{rightContent}</div> : null}
                </div>
            </Box>
        );
    }
);

export default CardFooter;
