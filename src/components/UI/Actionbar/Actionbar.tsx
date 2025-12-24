import React from 'react';
import ContentItem, { ContentItemType } from '../ContentItem/ContentItem';

export interface ActionbarProps {
    contentItem?: ContentItemType;
    actionbarCss?: string;
}

const Actionbar: React.FC<ActionbarProps> = ({ contentItem, actionbarCss = '' }) => {
    return contentItem ? (
        <div className={`actionbar ${actionbarCss}`}>
            <ContentItem item={contentItem} />
        </div>
    ) : null;
};

export default Actionbar;
