import React, { PropsWithChildren } from "react";
import { useColumnLayout } from "./ColumnLayoutContext";
import { useColumnLayoutRegion } from "./ColumnLayoutRegionContext";
import { DismissButton } from "../DismissButton";
import { ColorDefinitions } from "../../../lib/utils/definitions";

export interface ColumnLayoutHeaderProps extends PropsWithChildren {
  borderColor?: ColorDefinitions;
  css?: string;
}

const ColumnLayoutHeader: React.FC<ColumnLayoutHeaderProps> = ({
  borderColor = ColorDefinitions.Surface,
  css,
  children,
}) => {
  const { toggleAside, closeAside, hasAside } = useColumnLayout();
  const region = useColumnLayoutRegion();

  const className = [
    "column-layout__header",
    borderColor && `border-${borderColor}`,
    css,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      {region === "main" && hasAside && (
        <button className="burger burger--sm" onClick={toggleAside}>
          <div className="burger__line"></div>
          <div className="burger__line"></div>
          <div className="burger__line"></div>
        </button>
      )}

      {children}

      {region === "aside" && (
        <DismissButton
          right
          label="Sluiten"
          labelPosition="left"
          onClick={closeAside}
        />
      )}
    </div>
  );
};

ColumnLayoutHeader.displayName = "ColumnLayoutHeader";

export default ColumnLayoutHeader;
