'use client';

import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import ThemeToggle from '../theme-toggle/theme-toggle';
import MobileMenu from '../mobile-menu/mobile-menu';
import { useThemeContext } from '@/hooks/useThemeContext';
import Navigation from '../navigation/navigation';
import NavItems from '../navigation/nav-items';
import Logo from './logo';

const Navbar = () => {
  const themeCtx = useThemeContext();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <Navigation>
            <NavItems />
          </Navigation>
          <div className={styles.hamburger} onClick={themeCtx.toggleMobileMenu}>
            <Image
              src="/images/icons/hamburger-icon.svg"
              alt=""
              width={40}
              height={40}
              className={styles.hamburger_icon}
            />
          </div>
          <MobileMenu />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
