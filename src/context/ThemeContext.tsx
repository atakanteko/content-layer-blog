'use client';

import { LocalStorageHelper } from '@/helpers/LocalStorageHelper';
import { SystemHelper } from '@/helpers/SystemHelper';
import {
  LocalStorageEnum,
  SystemKeysEnum,
  ThemeTypeEnum,
} from '@/ts/enums/app-enums';

import React, { createContext } from 'react';

export interface IThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const getThemeTypeFromLocalStorage = () => {
  if (typeof window !== undefined) {
    const value = LocalStorageHelper.getLocalStorageItem(
      LocalStorageEnum.SYSTEM
    )?.theme;
    return value || ThemeTypeEnum.LIGHT;
  }
  return ThemeTypeEnum.LIGHT;
};

export const ThemeContext = createContext<IThemeContextType | null>(null);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = React.useState<string>(() => {
    return getThemeTypeFromLocalStorage();
  });

  const toggleTheme = () => {
    setTheme(
      theme === ThemeTypeEnum.LIGHT ? ThemeTypeEnum.DARK : ThemeTypeEnum.LIGHT
    );
  };

  React.useEffect(() => {
    SystemHelper.updateSystemConfig(SystemKeysEnum.THEME, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
