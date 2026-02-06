import React, { ReactElement } from 'react';

export interface ContentItemType {
    id: string;
    title?: string | ReactElement;
    subtitle?: string | ReactElement;
    isDivider?: boolean;
    content?: string | ReactElement;
    contentPositon?: 'center' | 'end';
    prefix?: string | ReactElement;
    postfix?: string | ReactElement;
    prefixPosition?: 'start' | 'end';
    postfixPosition?: 'start' | 'end';
    metaActions?: ReactElement;
    separatorAfterPrefix?: boolean;
    separatorAfterMeta?: boolean;
}

export interface ContentItemProps {
    item: ContentItemType;
    gap?: '0' | '5' | '10' | '15';
}

const ContentItem: React.FC<ContentItemProps> = ({ item, gap }) => {
    const metaContent = (() => {
        if (item.title || item.subtitle && item.metaActions) {
            return (
                <div className={`meta${item.contentPositon ? ' meta--' + item.contentPositon : ''}`}>
                    {item.title && <>{item.title}</>}
                    {item.subtitle && <>{item.subtitle}</>}
                    {item.metaActions && <div className="meta__actions">{item.metaActions}</div>}
                </div>
            );
        }

        if (item.metaActions) {
            return (
                <div className={`meta${item.contentPositon ? ' meta--' + item.contentPositon : ''}`}>
                    {item.metaActions && <div className="meta__actions">{item.metaActions}</div>}
                </div>
            );
        }

        if (item.content) {
            return (
                <div className={`meta${item.contentPositon ? ' meta--' + item.contentPositon : ''}`}>
                    {item.content}
                    {item.metaActions && <div className="meta__actions">{item.metaActions}</div>}
                </div>
            );
        }

        return null;
    })();

    return (
        <div className={`content-item ${gap ? 'gap-' + gap : ''}`} key={item.id}>
            {item.prefix ? (
                <div className={`actions ${item.prefixPosition ? 'actions--' + item.prefixPosition : ''}`}>
                    {item.prefix}
                </div>
            ) : null}

            {item.separatorAfterPrefix && (
                <div className="separator"></div>
            )}

            {metaContent}

             {item.separatorAfterMeta && (
                <div className="separator"></div>
            )}
         
            {item.postfix ? (
                <div className={`actions ${item.postfixPosition ? 'actions--' + item.postfixPosition : ''}`}>
                    {item.postfix}
                </div>
            ) : null}
        </div>
    );
};

export default ContentItem;
