import React, { FC, PropsWithChildren } from 'react';
import { ColorDefinitions } from '../../../lib/utils/definitions';
import GridLayoutDrawer from './GridLayoutDrawer';

export interface GridLayoutProps extends PropsWithChildren {
    open?: boolean | null;
    openDrawer?: (open: boolean | null) => void;
    drawerContent?: any;
    drawerTitle?: string;
    drawerHeaderBorderColor?: ColorDefinitions;
    drawerPosition?: 'left' | 'right';
    dividerBorderColor?: ColorDefinitions;
}

const GridLayout: FC<GridLayoutProps> = ({
    open = false,
    openDrawer,
    drawerContent,
    drawerTitle,
    drawerHeaderBorderColor,
    drawerPosition = 'left',
    dividerBorderColor,
    children,
}) => {

    const hasDrawer = Boolean(drawerTitle || drawerContent);
    const shouldRenderDrawer = Boolean(openDrawer && hasDrawer);

    const renderDrawer = () => {
        if (!shouldRenderDrawer) return null;

        return (
            <GridLayoutDrawer
                title={drawerTitle}
                headerBorderColor={drawerHeaderBorderColor}
                dividerBorderColor={dividerBorderColor}
                open={open}
                openDrawer={openDrawer || (() => {})}
            >
                {drawerContent}
            </GridLayoutDrawer>
        );
    };


    return (

        <div className={`gridlayout ${hasDrawer ? 'has-drawer' : ''} ${open ? 'shown' : ''}`}
        >
            {drawerPosition === 'left' && renderDrawer()}

            <div className="gridlayout__content">
                <div className="gridlayout__content__container">{children}</div>
            </div>

            {drawerPosition === 'right' && renderDrawer()}
        </div>
    );
};

export default GridLayout;
