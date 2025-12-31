import React, { CSSProperties, PropsWithChildren } from 'react';
import { ColorDefinitions, SizeDefinitions } from '../../../lib/utils/definitions';

export type ElementType = 'div' | 'span' | 'fieldset';

export interface BoxProps extends PropsWithChildren, React.AriaAttributes, React.HTMLAttributes<HTMLDivElement | HTMLSpanElement | HTMLFieldSetElement> {
    colorMute?: ColorDefinitions;
    color?: ColorDefinitions;
    background?: ColorDefinitions;
    borderColor?: ColorDefinitions;
    shadowColor?: ColorDefinitions;
    shadowFromColor?: ColorDefinitions;
    shadowBeforeColor?: ColorDefinitions;
    hoverColor?: ColorDefinitions;
    hoverBackground?: ColorDefinitions;
    hoverBorderColor?: ColorDefinitions;
    hoverShadowColor?: ColorDefinitions;
    hoverShadowBeforeColor?: ColorDefinitions;
    rounded?: SizeDefinitions;
    dashed?: boolean;
    ring?: 'ring-0' | 'ring-1' | 'ring-2' | 'ring-3';
    ringColor?: ColorDefinitions;
    ringOffsetColor?: ColorDefinitions;
    ringOffsetBorderColor?: ColorDefinitions;
    ringOffset?: 'ring-offset-2' | 'ring-offset-4';
    css?: string;
    style?: CSSProperties;
    renderAs?: ElementType;
}

const Box = React.forwardRef<HTMLDivElement | HTMLSpanElement, BoxProps>(
    (
        {
            colorMute,
            color,
            background,
            borderColor,
            shadowColor,
            shadowFromColor,
            shadowBeforeColor,
            hoverColor,
            hoverBackground,
            hoverBorderColor,
            hoverShadowColor,
            hoverShadowBeforeColor,
            rounded,
            dashed,
            ring,
            ringColor,
            ringOffsetColor,
            ringOffsetBorderColor,
            ringOffset,
            css,
            style = {},
            children,
            renderAs = 'div',
            ...rest
        },
        ref
    ) => {


        const addClass = (prefix: string, value?: string) => (value ? `${prefix}-${value}` : '');

        const cls = [
            addClass('text-mute', colorMute),
            addClass('text', color),
            addClass('bg', background),
            addClass('border', borderColor),
            addClass('shadow', shadowColor),
            addClass('shadow-from', shadowFromColor),
            addClass('shadow-before', shadowBeforeColor),
            addClass('hover:text', hoverColor),
            addClass('hover:bg', hoverBackground),
            addClass('hover:border', hoverBorderColor),
            addClass('hover:shadow', hoverShadowColor),
            addClass('hover:shadow-before', hoverShadowBeforeColor),
            rounded ? `rounded-${rounded}` : '',
            dashed ? 'dashed' : '',
            ring ? `ring ${ring}` : '',
            addClass('ring', ringColor),
            addClass('ring-offset', ringOffsetColor),
            addClass('ring-offset-border', ringOffsetBorderColor),
            ringOffset || '',
            css || '',
        ]
            .filter(Boolean)
            .join(' ');



        return React.createElement(renderAs, { className: cls, ref, style, ...rest }, children);
    }
);

export default Box;
