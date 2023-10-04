'use client';
import React from 'react';
import styles from './theme-toggle.module.css';
import { useThemeContext } from '@/hooks/useThemeContext';
import ThemeIcon from './theme-icon';
import { ThemeTypeEnum } from '@/ts/enums/app-enums';

const ThemeToggle = () => {
  const themeCtx = useThemeContext();

  return (
    <div
      onClick={() => themeCtx.toggleTheme()}
      style={
        themeCtx.theme === ThemeTypeEnum.LIGHT
          ? { justifyContent: 'flex-start' }
          : { justifyContent: 'flex-end' }
      }
      className={styles.theme_toggle}
    >
      <div className={styles.theme_icon}>
        <ThemeIcon />
      </div>
    </div>
  );
};

export default ThemeToggle;
