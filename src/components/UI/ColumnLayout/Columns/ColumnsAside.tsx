import React, { PropsWithChildren } from "react";
import { ColorDefinitions } from "../../../../lib/utils/definitions";


export interface ColumnsAsideProps extends PropsWithChildren {
  borderColor?: ColorDefinitions;
  css?: string;
}

const ColumnsAside = ({ 
  borderColor = ColorDefinitions.Surface,
  children, 
  css,
 }: ColumnsAsideProps) => {
  
  const cssClass = [
    "columns__aside", 
    borderColor && `border-${borderColor}`,
    css
  ].filter(Boolean).join(" ");

  return <aside className={cssClass}>{children}</aside>;
};

export default ColumnsAside;
