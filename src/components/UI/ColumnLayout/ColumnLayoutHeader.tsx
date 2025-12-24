import React, { FC, PropsWithChildren } from "react";
import { ColorDefinitions } from "../../../lib/utils/definitions";

export interface ColumnLayoutHeaderProps extends PropsWithChildren {
  border?: boolean;
  borderColor?: ColorDefinitions;
}

const ColumnLayoutHeader: FC<ColumnLayoutHeaderProps> = ({
  border = true,
  borderColor,
  children,
}) => {
  return (
    <div
      className={`column-layout__header shown ${border ? "column-layout__header__border" : ""
        } ${borderColor ? "border-" + borderColor : ""}`}
    >
      {children}
    </div>
  );
};

export default ColumnLayoutHeader;
