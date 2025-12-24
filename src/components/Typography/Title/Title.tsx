import React, { ReactElement } from 'react';

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    muted?: boolean; 
    size?: 'xs' |'sm' | 'default'| 'md' | 'lg';
}

function Title({ size = 'default', muted = false, children, ...props }: Readonly<TitleProps>): ReactElement {
    return (
        <div className={`${size ? 'title-' + size : 'title'} ${muted ? 'text-mute' : ''} `} {...props}>
            {children}
        </div>
    );
}

export default Title;
