import React, { useEffect, useState } from "react";
import { ColumnLayout, ColumnLayoutAside, ColumnLayoutContent, ColumnLayoutHeader, ColumnLayoutMain, useLayoutContext } from "../../../components";

const ColumnLayoutPrimaryMainDemo = () => {

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
            asidePosition='right'
            primary='main'
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
                    <p>Main content | Resize me to tablet or mobiel</p>
                </ColumnLayoutContent>

            </ColumnLayoutMain>

        </ColumnLayout>
  )
};
export default ColumnLayoutPrimaryMainDemo;