import React, { useEffect } from "react";
import { ColumnLayout, ColumnLayoutAside, ColumnLayoutHeader, ColumnLayoutMain, useColumnLayout, useLayoutContext } from "../../../components";


const AsideButton: React.FC = () => {
  const { showMain } = useColumnLayout();
  return <button onClick={showMain}>Toon Main</button>;
};

const ColumnLayouToggableDemo = () => {

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
      <ColumnLayout toggleableView={true} asidePosition="left">
      <ColumnLayoutAside>
        <ColumnLayoutHeader>Aside Header</ColumnLayoutHeader>
         <AsideButton/>
        <p>Aside content goes here...</p>
      </ColumnLayoutAside>
      <ColumnLayoutMain>
        <ColumnLayoutHeader>Main Header</ColumnLayoutHeader>
        <div>Main content goes here...</div>
      </ColumnLayoutMain>
    </ColumnLayout>

  )
};
export default ColumnLayouToggableDemo;