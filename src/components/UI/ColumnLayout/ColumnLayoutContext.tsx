import { createContext, useContext } from "react";

export type ColumnLayoutPrimary = "main" | "aside";

export interface ColumnLayoutContextProps {
  isShown: boolean;
  onToggle?: (value: boolean) => void;
  primary: ColumnLayoutPrimary;
  showBurger?: boolean;
}

export const ColumnLayoutContext = createContext<ColumnLayoutContextProps | null>(null);

export const ColumnSectionContext = createContext<"main" | "aside" | null>(null);

export const useColumnLayout = () => {
  const ctx = useContext(ColumnLayoutContext);

  if (!ctx) {
    throw new Error(
      "ColumnLayout compound components must be inside <ColumnLayout>"
    );
  }

  return ctx;
};

