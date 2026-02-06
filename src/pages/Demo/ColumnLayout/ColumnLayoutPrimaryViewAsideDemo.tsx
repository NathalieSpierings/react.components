import React, { useEffect } from "react";
import { ColumnLayout, useLayoutContext } from "../../../components";

const ColumnLayoutPrimaryViewAsideDemo = () => {

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
<ColumnLayout asidePosition="right" primaryMobileView="aside">
  <ColumnLayout.Aside>
    <ColumnLayout.Header>
    Aside Header content
    </ColumnLayout.Header>
    <p>Aside content</p>
  </ColumnLayout.Aside>

  <ColumnLayout.Main>
    <ColumnLayout.Header>Main Header content</ColumnLayout.Header>
    <div>Main content</div>
  </ColumnLayout.Main>
</ColumnLayout>
  )
};
export default ColumnLayoutPrimaryViewAsideDemo;