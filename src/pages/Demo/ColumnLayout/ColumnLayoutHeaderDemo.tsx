import React, { useEffect, useState } from "react";
import { ColumnLayout, ColumnLayoutAside, ColumnLayoutContent, ColumnLayoutHeader, ColumnLayoutMain, useLayoutContext } from "../../../components";
import { ColorDefinitions } from "../../../lib/utils/definitions";


const ColumnLayoutHeaderDemo = () => {

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
                <ColumnLayoutHeader borderColor={ColorDefinitions.Blue}>
                    <h2>Aside header</h2>
                </ColumnLayoutHeader>

                <ColumnLayoutContent>
                    <p>Aside content</p>
                </ColumnLayoutContent>
            </ColumnLayoutAside>

            <ColumnLayoutMain>
                <ColumnLayoutHeader borderColor={ColorDefinitions.Red}>
                    <h1>Main header</h1>
                </ColumnLayoutHeader>

                <ColumnLayoutContent>
                    <p>Main content</p>
                </ColumnLayoutContent>
            </ColumnLayoutMain>
        </ColumnLayout>
  )
};
export default ColumnLayoutHeaderDemo;