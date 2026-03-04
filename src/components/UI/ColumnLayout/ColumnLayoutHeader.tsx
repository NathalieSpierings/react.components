import React, { PropsWithChildren, useContext } from "react";
import {
  ColumnLayoutContext,
  ColumnSectionContext,
} from "./ColumnLayoutContext";
import { ColorDefinitions } from "../../../lib/utils/definitions";
import { DismissButton } from "../DismissButton";

export interface ColumnLayoutHeaderProps extends PropsWithChildren {
   borderColor?: ColorDefinitions;
  css?: string;
}

const ColumnLayoutHeader = ({
  borderColor = ColorDefinitions.Surface,
  children,
  css,
}: ColumnLayoutHeaderProps) => {
  const section = useContext(ColumnSectionContext);
  const layout = useContext(ColumnLayoutContext);

  if (!section || !layout) return null;

  const { onToggle, primary, showBurger } = layout;

  const isMain = section === "main";
  const isAside = section === "aside";

  const shouldHaveBurger =
    (showBurger && primary === "main" && isMain) ||
    (showBurger && primary === "aside" && isAside);
  const shouldHaveDismiss =
    (primary === "aside" && isMain) || (primary === "main" && isAside);

  const cssClass = [
    "column-layout__header",
    borderColor && `border-${borderColor}`,
     css]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={cssClass}>
      {shouldHaveBurger && (
        <button className="burger" onClick={() => onToggle?.(true)}>
          <span className="burger__line" />
          <span className="burger__line" />
          <span className="burger__line" />
        </button>
      )}

      {children}

      {shouldHaveDismiss && (
        <DismissButton right={true} onClick={() => onToggle?.(false)}/>
       
      )}
    </header>
  );
};

export default ColumnLayoutHeader;
