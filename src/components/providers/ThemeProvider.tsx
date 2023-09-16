"use client";
import { useThemeContext } from '@/hooks/useThemeContext';
import React from 'react';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeCtx = useThemeContext();

  return (
    <div className={themeCtx.theme}>
        {children}
    </div>
  )
}

export default ThemeProvider