import { AnimatePresence, motion } from 'framer-motion';
import React, { FC, PropsWithChildren } from 'react';
import { ColorDefinitions, SizeDefinitions } from '../../../lib/utils/definitions';
import { CollectionViewSelectorOption } from './CollectionViewSelector';
import ContentItem, { ContentItemType } from '../ContentItem/ContentItem';

const isSelected = (option: ContentItemType, selected: string[]) => {
    return selected.includes(option.id ?? '');
};
export interface CollectionProps extends PropsWithChildren {
    items: ContentItemType[] | undefined;
    view?: CollectionViewSelectorOption;
    scrollable?: boolean;
    scrollheight?: string;
    colorMute?: ColorDefinitions;
    color?: ColorDefinitions;
    background?: ColorDefinitions;
    borderColor?: ColorDefinitions;
    itemBorder?: 'bordered' | 'underlined';
    rounded?: SizeDefinitions;
    compact?: boolean;
    medium?: boolean;
    hoverable?: boolean;
    selectable?: boolean;
    selectMultiple?: boolean;
    collectionCss?: string;
    selected?: string[];
    setSelected?: (selected: string[]) => void;
}

const Collection: FC<CollectionProps> = ({
    items = [],
    view,
    scrollable,
    scrollheight,
    compact,
    medium,
    colorMute,
    color,
    background,
    borderColor,
    itemBorder,
    rounded,
    hoverable,
    selectable,
    selectMultiple,
    collectionCss = '',
    selected,
    setSelected,
}) => {
    const handleItemClick = (id: string) => {
        if (!selectable || !setSelected) return;

        const currentSelected = selected ?? [];

        if (selectMultiple) {
            const isAlreadySelected = currentSelected.includes(id);
            const newSelection = isAlreadySelected
                ? currentSelected.filter((itemId) => itemId !== id)
                : [...currentSelected, id];
            setSelected(newSelection);
        } else {
            setSelected([id]);
        }
    };

    const roundedCls = rounded ? `rounded-${rounded}` : '';

    const itemCls = [
        roundedCls,
        colorMute ? `text-mute-${colorMute}` : ``,
        color ? `text-${color}` : ``,
        background ? `bg-${background}` : ``,
        borderColor ? `border-${borderColor}` : ``,
    ]
        .filter(Boolean)
        .join(' ');

    const borderItemClass = borderColor && itemBorder ? `collection--${itemBorder}` : '';

    const cls = [
        'collection',
        view,
        collectionCss,
        scrollable ? 'scroll' : '',
        borderItemClass,
        compact ? `collection--compact` : '',
        medium ? `collection--md` : '',
        hoverable ? 'collection--hover' : '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div
            className={cls}
            style={
                {
                    '--collection-scroll-height': scrollheight || '300px',
                } as React.CSSProperties
            }
        >
            <AnimatePresence>
                {items?.map((item, idx) => {
                    return (
                        <motion.div
                            key={item.id || idx}
                            layout
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring' }}
                            onClick={() => {
                                if ((selectable || selectMultiple) && setSelected) {
                                    handleItemClick(item.id);
                                }
                            }}
                            className={`collection__item ${isSelected(item, selected || []) ? 'selected' : ''} ${itemCls}`}
                            style={{ cursor: selectable || selectMultiple ? 'pointer' : 'default' }}
                        >
                            <div className={`collection__item__container  ${roundedCls}`}>
                                <ContentItem item={item} />
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

export default Collection;
