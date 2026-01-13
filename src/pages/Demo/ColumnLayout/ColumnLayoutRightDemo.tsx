import React, { useEffect } from "react";
import { ColumnLayout, ColumnLayoutAside, ColumnLayoutHeader, ColumnLayoutMain, useLayoutContext } from "../../../components";

const ColumnLayoutRightDemo = () => {

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
    <ColumnLayout asidePosition="right">
      <ColumnLayoutAside>
        <ColumnLayoutHeader>Aside Header</ColumnLayoutHeader>
        
        <p>Aside content goes here...</p>
      </ColumnLayoutAside>
      <ColumnLayoutMain>
        <ColumnLayoutHeader>Main Header</ColumnLayoutHeader>
        <div>Main content goes here...</div>
      </ColumnLayoutMain>
    </ColumnLayout>
  )
};
export default ColumnLayoutRightDemo;