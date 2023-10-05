'use client';
import React from 'react';
import { useThemeContext } from '@/hooks/useThemeContext';
import { Switch } from 'antd';

const ThemeToggle = () => {
  const themeCtx = useThemeContext();

  return (
    <Switch className="custom-switch" onChange={() => themeCtx.toggleTheme()} />
  );
};

export default ThemeToggle;
