import { IThemeContextType, ThemeContext } from "@/context/ThemeContext";
import React from "react";

export const useThemeContext = (): IThemeContextType =>
  React.useContext(ThemeContext) as IThemeContextType;
