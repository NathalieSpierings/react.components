import React, { cloneElement, isValidElement, PropsWithChildren, ReactElement, ReactNode } from "react";
import { useColumnLayout } from "./ColumnLayoutContext";
import ColumnLayoutHeader from "./ColumnLayoutHeader";
import { DismissButton } from "../../UI/DismissButton";

const ColumnLayoutMain: React.FC<PropsWithChildren> = ({ children }) => {
  const { showAside, toggleableView } = useColumnLayout();

  let header: ReactNode = null;
  const restChildren: ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (isValidElement(child) && child.type === ColumnLayoutHeader) {
      const element = child as ReactElement<React.PropsWithChildren<{}>>;
      header = cloneElement(element, {
        children: (
          <>
            {element.props.children}
            {toggleableView && (
              <DismissButton
                right
                label="Sluiten"
                labelPosition="left"
                onClick={showAside}
              />
            )}

          </>
        ),
      });
    } else {
      restChildren.push(child);
    }
  });

  return (
    <div className="column-layout__main">
      {header}
      <div className="column-layout__main__content">{restChildren}</div>
    </div>
  );
};

export default ColumnLayoutMain;
