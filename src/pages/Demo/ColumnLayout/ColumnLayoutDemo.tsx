import React, { useEffect } from "react";
import { ColumnLayout, useLayoutContext } from "../../../components";

const ColumnLayoutDemo = () => {

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
    <ColumnLayout>      
      <ColumnLayout.Main>
        <ColumnLayout.Header>Main Header content</ColumnLayout.Header>
        <div>Main content</div>
      </ColumnLayout.Main>
    </ColumnLayout>
  )
};
export default ColumnLayoutDemo;