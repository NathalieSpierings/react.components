import React, { Children, isValidElement, PropsWithChildren, useMemo, useState } from "react";
import { ColumnLayoutContext } from "./ColumnLayoutContext";

interface ColumnLayoutProps extends PropsWithChildren {
  toggleableView?: boolean;
  asidePosition?: "left" | "right";
}

const ColumnLayout: React.FC<ColumnLayoutProps> = ({
  children,
  toggleableView = false,
  asidePosition = "left",
}) => {
  const [isMainVisible, setIsMainVisible] = useState(false);

  const hasAside = Children.toArray(children).some(
  (child) => isValidElement(child) && (child.type as any)._isColumnLayoutAside
);

  const isToggleable = hasAside && toggleableView;

  const contextValue = useMemo(
    () => ({
      showMain: isToggleable ? () => setIsMainVisible(true) : () => {},
      showAside: isToggleable ? () => setIsMainVisible(false) : () => {},
      isMainVisible: isToggleable ? isMainVisible : true,
      toggleableView: isToggleable,
    }),
    [isMainVisible, isToggleable]
  );

  const className = [
    "column-layout",
    hasAside ? "column-layout--duo" : "column-layout--single",
    hasAside ? `column-layout__aside--${asidePosition}` : '',
    isToggleable ? "column-layout--toggleable" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ColumnLayoutContext.Provider value={contextValue}>
      <div className={className}>{children}</div>
    </ColumnLayoutContext.Provider>
  );
};

export default ColumnLayout;
