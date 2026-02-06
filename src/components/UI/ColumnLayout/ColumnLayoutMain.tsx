import React, { PropsWithChildren, ReactNode, isValidElement } from "react";
import { ColumnLayoutRegionContext } from "./ColumnLayoutRegionContext";

export interface ColumnLayoutMainProps extends PropsWithChildren {
  css?: string;
}

const ColumnLayoutMain: React.FC<ColumnLayoutMainProps> = ({
  css,
  children,
}) => {

  let header: ReactNode = null;
  const content: ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (
      isValidElement(child) &&
      (child.type as any).displayName === "ColumnLayoutHeader"
    ) {
      header = child;
    } else {
      content.push(child);
    }
  });

  return (
    <ColumnLayoutRegionContext.Provider value="main">
      <div className={`column-layout__main ${css ?? ""}`}>
        {header}
        <div className="column-layout__content">
          {content}
        </div>
      </div>
    </ColumnLayoutRegionContext.Provider>
  );
};

ColumnLayoutMain.displayName = "ColumnLayoutMain";

export default ColumnLayoutMain;
