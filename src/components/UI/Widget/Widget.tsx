import React, { ReactElement } from 'react';
import { SizeDefinitions } from '../../../lib/utils/definitions';
import { BoxProps } from '../../Base/Box';
import Box from '../../Base/Box/Box';
import ContentItem from '../ContentItem/ContentItem';

export interface WidgetProps extends BoxProps {
    onClick?: () => void;
    horizontal?: boolean;
    image?: string | ReactElement;
    imageSize?: SizeDefinitions;
    imageBackground?: string;
    imageCss?: string;
    widgetPrefix?: string | ReactElement;
    prefixPosition?: 'start' | 'end';
    widgetContent?: string | ReactElement;
    contentPositon?: 'center' | 'end';
    widgetPostfix?: string | ReactElement;
    postfixPosition?: 'start' | 'end';
}

const Widget: React.FC<WidgetProps> = ({
    onClick,
    horizontal,
    image,
    imageSize,
    imageBackground,
    imageCss = '',
    widgetPrefix,
    prefixPosition,
    widgetContent,
    contentPositon,
    widgetPostfix,
    postfixPosition,
    children,
    ...boxProps
}) => {

    const imgCss = [
        'widget__image',
        imageSize ? "widget__image-" + imageSize : '',
        imageBackground ? "bg-" + imageBackground : '',
        imageCss,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <Box {...boxProps} css={`widget ${horizontal ? 'widget--horizontal' : ''}`} onClick={onClick}>
            <div className="widget__container">
                {image ? (
                    <div className={imgCss}>
                        {image}
                    </div>
                ) : null}

                {widgetPrefix || widgetContent || widgetPostfix ? (
                    <ContentItem item={{
                        id: 'widget-content',
                        prefix: widgetPrefix,
                        prefixPosition: prefixPosition,
                        postfix: widgetPostfix,
                        postfixPosition: postfixPosition,
                        content: widgetContent,
                        contentPositon: contentPositon,
                    }} />
                ) : (
                    <div className="widget__content">{children}</div>
                )}
            </div>
        </Box>
    );
};

export default Widget;
