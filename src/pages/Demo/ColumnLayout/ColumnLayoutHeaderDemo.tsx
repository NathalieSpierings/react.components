import React, { useEffect } from "react";
import { ColumnLayout, ColumnLayoutAside, ColumnLayoutHeader, ColumnLayoutMain, useLayoutContext } from "../../../components";
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

  return (
   <ColumnLayout asidePosition="left">
      <ColumnLayout.Aside>
        <ColumnLayout.Header borderColor={ColorDefinitions.Blue}>
        Aside Header
        </ColumnLayout.Header>
        
        <p>Aside content goes here...</p>
      </ColumnLayout.Aside>
      <ColumnLayout.Main>
        <ColumnLayout.Header borderColor={ColorDefinitions.Red}>
        Main Header
        </ColumnLayout.Header>
        <div>Main content goes here...</div>
      </ColumnLayout.Main>
    </ColumnLayout>


  )
};
export default ColumnLayoutHeaderDemo;