import React, { useEffect } from "react";
import { ColumnLayout, ColumnLayoutContent, ColumnLayoutHeader, ColumnLayoutMain, useLayoutContext } from "../../../components";

const ColumnLayoutMainOnlyDemo = () => {

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



  return (
    <ColumnLayout showBurger={false}>
            <ColumnLayoutMain>
                <ColumnLayoutHeader>
                    <h1>Main header</h1>
                </ColumnLayoutHeader>

                <ColumnLayoutContent>
                    <p>Main content</p>
                </ColumnLayoutContent>
            </ColumnLayoutMain>
        </ColumnLayout>
  )
};
export default ColumnLayoutMainOnlyDemo;