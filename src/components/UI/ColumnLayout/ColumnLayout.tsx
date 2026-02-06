import React, { Children, isValidElement, PropsWithChildren, useMemo, useState } from "react";
import { ColumnLayoutContext } from "./ColumnLayoutContext";
import ColumnLayoutAside from "./ColumnLayoutAside";
import ColumnLayoutMain from "./ColumnLayoutMain";
import ColumnLayoutHeader from "./ColumnLayoutHeader";

export interface ColumnLayoutProps extends PropsWithChildren {
  asidePosition?: "left" | "right";
  css?: string;
}

const ColumnLayout: React.FC<ColumnLayoutProps> & {
  Aside: typeof ColumnLayoutAside;
  Main: typeof ColumnLayoutMain;
  Header: typeof ColumnLayoutHeader;
} = ({
  asidePosition = "left",
  css = "",
  children,
}) => {
    const [shown, setShown] = useState(false);

    const hasAside = Children.toArray(children).some(
      (child) =>
        isValidElement(child) &&
        (child.type as any).displayName === "ColumnLayoutAside"
    );

    const contextValue = useMemo(
      () => ({
        shown,
        hasAside,
        toggleAside: () => setShown((p) => !p),
        closeAside: () => setShown(false),
      }),
      [shown, hasAside]
    );

    const cssClass = [
      "column-layout",
      hasAside ? `column-layout--aside-${asidePosition}` : "",
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

ColumnLayout.Aside = ColumnLayoutAside;
ColumnLayout.Main = ColumnLayoutMain;
ColumnLayout.Header = ColumnLayoutHeader;

export default ColumnLayout;
