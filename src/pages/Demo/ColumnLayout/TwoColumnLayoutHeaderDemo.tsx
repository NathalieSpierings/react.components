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
      <ColumnLayoutAside>
        <ColumnLayoutHeader  border={true}
             borderColor={ColorDefinitions.Blue}>Aside Header</ColumnLayoutHeader>
        
        <p>Aside content goes here...</p>
      </ColumnLayoutAside>
      <ColumnLayoutMain>
        <ColumnLayoutHeader  border={true}
             borderColor={ColorDefinitions.Red}>Main Header</ColumnLayoutHeader>
        <div>Main content goes here...</div>
      </ColumnLayoutMain>
    </ColumnLayout>


  )
};
export default ColumnLayoutHeaderDemo;