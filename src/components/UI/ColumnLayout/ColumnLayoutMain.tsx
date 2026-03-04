import React, { PropsWithChildren } from "react";
import { ColumnSectionContext } from "./ColumnLayoutContext";

export interface ColumnLayoutMainProps extends PropsWithChildren {
  css?: string;
}

const ColumnLayoutMain = ({ children, css }: ColumnLayoutMainProps) => {
  const cssClass = ["column-layout__main", css].filter(Boolean).join(" ");

  return (
    <ColumnSectionContext.Provider value="main">
      <main className={cssClass}>{children}</main>
    </ColumnSectionContext.Provider>
  );
};

export default ColumnLayoutMain;
