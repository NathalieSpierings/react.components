import React, { useEffect } from "react";
import { ColumnLayout, ColumnLayoutAside, ColumnLayoutHeader, ColumnLayoutMain, useLayoutContext } from "../../../components";

const ColumnLayoutLeftDemo = () => {

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
    <ColumnLayout asidePosition="left" >
      <ColumnLayout.Aside>
        <ColumnLayout.Header>Aside Header</ColumnLayout.Header>
        
        <p>Aside content goes here...</p>
      </ColumnLayout.Aside>
      <ColumnLayout.Main>
        <ColumnLayout.Header>Main Header</ColumnLayout.Header>
        <div>Main content goes here...</div>
      </ColumnLayout.Main>
    </ColumnLayout>
  )
};
export default ColumnLayoutLeftDemo;