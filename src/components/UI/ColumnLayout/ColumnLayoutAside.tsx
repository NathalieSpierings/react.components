import React, { cloneElement, isValidElement, ReactElement, ReactNode } from "react";
import { useColumnLayout } from "./ColumnLayoutContext";
import ColumnLayoutHeader from "./ColumnLayoutHeader";

interface ColumnLayoutAsideProps {
  children: ReactNode;
}

const ColumnLayoutAside: React.FC<ColumnLayoutAsideProps> = ({ children }) => {

  const { isMainVisible, toggleableView } = useColumnLayout();

  let header: ReactNode = null;
  const restChildren: ReactNode[] = [];


   React.Children.forEach(children, (child) => {
    if (isValidElement(child) && child.type === ColumnLayoutHeader) {
      const element = child as ReactElement<React.PropsWithChildren<{}>>;
      header = cloneElement(element, {
        children: (
          <>
            {element.props.children}           
          </>
        ),
      });
    } else {
      restChildren.push(child);
    }
  });


  let visisbleCss = "";
  if (isMainVisible) {
    visisbleCss = "not-shown";
  } else {
    visisbleCss = "shown";
  }
  const className = ["column-layout__aside", toggleableView ? visisbleCss : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <aside className={className}>
      {header}
      <div className="column-layout__aside__content">{restChildren}</div>
    </aside>
  )

};

(ColumnLayoutAside as any)._isColumnLayoutAside = true;


export default ColumnLayoutAside;
