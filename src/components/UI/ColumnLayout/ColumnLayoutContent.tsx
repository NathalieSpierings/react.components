import React, { PropsWithChildren } from "react";

export interface ColumnLayoutContentProps extends PropsWithChildren {
  css?: string;
}

const ColumnLayoutContent = ({
  children,
  css,
}: ColumnLayoutContentProps) => {
  const cssClass = ["column-layout__content", css]
    .filter(Boolean)
    .join(" ");

  return <div className={cssClass}>{children}</div>;
};

export default ColumnLayoutContent;
