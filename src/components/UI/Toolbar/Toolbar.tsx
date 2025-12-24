import React, { ReactElement, ReactNode } from "react"

export interface ToolbarProps {
    title?: string | ReactElement;
    navItems?: ReactNode;
    showSeparator?: boolean;
    prefixItems?: ReactNode[];
    postfixItems?: ReactNode[];
    borderBottom?: boolean;
}

const Toolbar = ({
    title,
    navItems,
    showSeparator = false,
    prefixItems = [],
    postfixItems = [],
    borderBottom = false
}: ToolbarProps) => {

    const hasActions = prefixItems.length > 0 || postfixItems.length > 0;

    return (
        <div className={`toolbar ${borderBottom ? 'toolbar--border' : ''}`}>

            {title && (
                <div className="toolbar__header">
                    {title}
                </div>
            )}

            <div className="toolbar__container">
                {navItems && (
                    <div className="toolbar__nav">
                        {navItems}
                    </div>
                )}

                 {showSeparator && <div className="toolbar__separator" />}

                {hasActions && (
                    <div className="toolbar__actions">
                        {prefixItems.length > 0 && (
                            <div className="toolbar__actions__prefix">
                                {prefixItems.map((item, idx) => (
                                    <div key={`prefix_${idx}`}>{item}</div>
                                ))}
                            </div>
                        )}

                        {postfixItems.length > 0 && (
                            <div className="toolbar__actions__postfix">
                                {postfixItems.map((item, idx) => (
                                    <div key={`postfix_${idx}`}>{item}</div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Toolbar;