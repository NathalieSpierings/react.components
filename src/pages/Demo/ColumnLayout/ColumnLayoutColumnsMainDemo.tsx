import React, { useEffect, useState } from "react";
import { ColumnLayout, ColumnLayoutAside, ColumnLayoutContent, ColumnLayoutHeader, ColumnLayoutMain, Columns, ColumnsAside, ColumnsContent, ColumnsMain, useLayoutContext } from "../../../components";

const ColumnLayoutColumnsMainDemo = () => {

    const { setFullscreen } = useLayoutContext();
    const { setShowHeader } = useLayoutContext();

    useEffect(() => {
        setFullscreen(true);
        setShowHeader(false);
        return () => {
            setFullscreen(false);
            setShowHeader(true);
        };
    }, [setFullscreen, setShowHeader]);

    const [isShown, setIsShown] = useState(false);


    return (
        <ColumnLayout
            hasAside
            isShown={isShown}
            onToggle={setIsShown}
        >
            <ColumnLayoutAside>
                <ColumnLayoutHeader>
                    <h2>Aside header</h2>
                </ColumnLayoutHeader>

                <ColumnLayoutContent>
                    <p>Aside content</p>
                </ColumnLayoutContent>
            </ColumnLayoutAside>

            <ColumnLayoutMain>
                <ColumnLayoutHeader>
                    <h1>Main header</h1>
                </ColumnLayoutHeader>

                <ColumnLayoutContent>

                    <Columns >
                        <ColumnsMain>
                            <ColumnsContent>Main column content</ColumnsContent>
                        </ColumnsMain>
                    </Columns>

                </ColumnLayoutContent>
            </ColumnLayoutMain>
        </ColumnLayout>
    )
};

export default ColumnLayoutColumnsMainDemo;