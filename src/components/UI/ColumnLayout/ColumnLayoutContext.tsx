import { createContext, useContext } from "react";

export interface ColumnLayoutContextProps {
  closeAside: () => void;
  toggleAside: () => void;
  shown: boolean;
  hasAside: boolean;
}

export const ColumnLayoutContext =
  createContext<ColumnLayoutContextProps | null>(null);

export const useColumnLayout = () => {
  const ctx = useContext(ColumnLayoutContext);

  if (!ctx) {
    throw new Error(
      "ColumnLayout compound components must be inside <ColumnLayout>"
    );
  }

  return ctx;
};