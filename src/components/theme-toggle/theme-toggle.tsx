'use client';

'use client';

import React from 'react';
import styles from './theme-toggle.module.css';
import { useThemeContext } from '@/hooks/useThemeContext';
import ThemeIcon from './theme-icon';
import { ThemeTypeEnum } from '@/ts/enums/app-enums';

const ThemeToggle = () => {
  const themeCtx = useThemeContext();
  console.log();
  return (
    <div
      style={
        themeCtx.theme === ThemeTypeEnum.LIGHT
          ? { justifyContent: 'flex-start' }
          : { justifyContent: 'flex-end' }
      }
      className={styles.theme_toggle}
    >
      <div className={styles.theme_icon} onClick={() => themeCtx.toggleTheme()}>
        <ThemeIcon />
      </div>
    </div>
  );
};

export default ThemeToggle;
