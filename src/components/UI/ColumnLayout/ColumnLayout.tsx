import React, { PropsWithChildren, useMemo } from "react";
import {
  ColumnLayoutContext,
  ColumnLayoutPrimary,
} from "./ColumnLayoutContext";

export interface ColumnLayoutProps extends PropsWithChildren {
  asidePosition?: "left" | "right";
  primary?: ColumnLayoutPrimary;
  isShown?: boolean;
  onToggle?: (value: boolean) => void;
  css?: string;
  hasAside?: boolean;
  showBurger?: boolean;
}

const ColumnLayout = ({
  children,
  asidePosition = "right",
  primary = "main",
  isShown = false,
  onToggle,
  css,
  hasAside = false,
  showBurger = true,
}: ColumnLayoutProps) => {

  const shown = isShown;

  console.log('Before',primary)

  const contextValue = useMemo(() => ({ isShown, onToggle, primary, showBurger }), [isShown, onToggle, primary, showBurger]);
  
  console.log('contextValue',primary)

  const cssClass = [
    "column-layout",    
    hasAside ? `column-layout--aside-${asidePosition}` : "",
    primary && `${primary}-primary`,
    shown ? "shown is-shown" : "",
    
    css,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ColumnLayoutContext.Provider value={contextValue}>
      <div className={cssClass}>{children}</div>
    </ColumnLayoutContext.Provider>
  );
};

export default ColumnLayout;
