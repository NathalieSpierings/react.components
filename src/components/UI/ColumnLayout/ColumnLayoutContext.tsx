import { createContext, useContext } from "react";

export interface ColumnLayoutContextProps {
  showMain: () => void;
  showAside: () => void;
  isMainVisible: boolean;
  toggleableView: boolean;
}

export const ColumnLayoutContext = createContext<
  ColumnLayoutContextProps | undefined
>(undefined);

export const useColumnLayout = () => {
  const context = useContext(ColumnLayoutContext);
  if (!context) {
    throw new Error("useColumnLayout must be used within a ColumnLayout");
  }
  return context;
};
