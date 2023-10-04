'use client';
import React from 'react';
import styles from './theme-toggle.module.css';
import { useThemeContext } from '@/hooks/useThemeContext';
import ThemeIcon from './theme-icon';
import { ThemeTypeEnum } from '@/ts/enums/app-enums';
import { Switch } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  .ant-switch {
    background-color: #e03a6f !important;
  }
  .ant-switch-checked {
    background-color: #77c3ed !important;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

const ThemeToggle = () => {
  const themeCtx = useThemeContext();

  return (
    <Wrapper>
      <Switch onChange={() => themeCtx.toggleTheme()} />
    </Wrapper>
  );
};

export default ThemeToggle;
