import React, { useEffect, useState } from "react";
import { ColumnLayout, ColumnLayoutAside, ColumnLayoutContent, ColumnLayoutHeader, ColumnLayoutMain, useLayoutContext } from "../../../components";

const ColumnLayoutToggleFromAsideDemo = () => {

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
      primary="aside"
      asidePosition="right"
      isShown={isShown}
      showBurger={false}
      onToggle={setIsShown}
    >
      <ColumnLayoutMain>
        <ColumnLayoutHeader>
          <h1>Main header</h1>
        </ColumnLayoutHeader>

        <ColumnLayoutContent>
          <p>Main content</p>
        </ColumnLayoutContent>
      </ColumnLayoutMain>

      <ColumnLayoutAside>
        <ColumnLayoutHeader>
          <h2>Aside header</h2>
        </ColumnLayoutHeader>

        <ColumnLayoutContent>
          <p>
            Aside content{" "}
            <button onClick={() => setIsShown(true)}>Click me!</button>
          </p>
        </ColumnLayoutContent>
      </ColumnLayoutAside>
    </ColumnLayout>
  )
};

export default ColumnLayoutToggleFromAsideDemo;