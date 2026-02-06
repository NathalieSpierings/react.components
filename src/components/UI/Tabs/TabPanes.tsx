import React, { FC, ReactNode } from "react";

export interface TabPanesProps {
  selectedTab: number;
  children: ReactNode[];
}

const TabPanes: FC<TabPanesProps> = ({ selectedTab, children }) => {
  return (
    <div className="tabs__panes">
      {React.Children.map(children, (child, index) => (
        <div className={`pane ${selectedTab === index ? "shown" : ""}`}>
          {selectedTab === index && child}
        </div>
      ))}
    </div>
  );
};

export default TabPanes;
