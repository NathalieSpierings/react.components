import React, { PropsWithChildren } from "react";
import { ColumnSectionContext } from "./ColumnLayoutContext";
import { ColorDefinitions } from "../../../lib/utils/definitions";

export interface ColumnLayoutAsideProps extends PropsWithChildren {
   borderColor?: ColorDefinitions;
  css?: string;
}

const ColumnLayoutAside = ({ 
  borderColor = ColorDefinitions.Surface,
  children, 
  css 
}: ColumnLayoutAsideProps) => {
  const cssClass = [
    "column-layout__aside",
    borderColor && `border-${borderColor}`,
     css
    ]
    .filter(Boolean)
    .join(" ");

  return (
    <ColumnSectionContext.Provider value="aside">
      <aside className={cssClass}>{children}</aside>
    </ColumnSectionContext.Provider>
  );
};

export default ColumnLayoutAside;
