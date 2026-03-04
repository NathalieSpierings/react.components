import React, { PropsWithChildren } from "react";

export interface ColumnsMainProps extends PropsWithChildren {
  css?: string;
}

const ColumnsMain = ({ children, css }: ColumnsMainProps) => {
  const cssClass = ["columns__main", css].filter(Boolean).join(" ");

  return <main className={cssClass}>{children}</main>;
};

export default ColumnsMain;
