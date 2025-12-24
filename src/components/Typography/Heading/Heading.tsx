import React from 'react';

export interface HeadlineProps extends React.HTMLAttributes<HTMLHeadingElement> {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    headlineCss?: string;
}

const HeadingElement = ({ variant, children, headlineCss, ...props }: HeadlineProps) => 
    React.createElement(variant, { headlineCss, ...props }, children);

const Heading = (props: HeadlineProps) => {
    return <HeadingElement {...props} />;
};

export default Heading;
