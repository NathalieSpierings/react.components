import { createContext, useContext } from "react";

export type ColumnLayoutRegion = "main" | "aside";

export const ColumnLayoutRegionContext =
  createContext<ColumnLayoutRegion | null>(null);

export const useColumnLayoutRegion = () => {
  const ctx = useContext(ColumnLayoutRegionContext);

  if (!ctx) {
    throw new Error(
      "ColumnLayoutHeader must be used inside ColumnLayout.Main or ColumnLayout.Aside"
    );
  }

  return ctx;
};