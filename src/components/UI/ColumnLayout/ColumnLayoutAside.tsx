import React, { PropsWithChildren, ReactNode, isValidElement } from "react";
import { ColumnLayoutRegionContext } from "./ColumnLayoutRegionContext";

export interface ColumnLayoutAsideProps extends PropsWithChildren {
  css?: string;
}

const ColumnLayoutAside: React.FC<ColumnLayoutAsideProps> = ({
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
    <ColumnLayoutRegionContext.Provider value="aside">
      <aside className={`column-layout__aside ${css ?? ""}`}>
        {header}
        <div className="column-layout__content">
          {content}
        </div>
      </aside>
    </ColumnLayoutRegionContext.Provider>
  );
};

ColumnLayoutAside.displayName = "ColumnLayoutAside";

export default ColumnLayoutAside;
