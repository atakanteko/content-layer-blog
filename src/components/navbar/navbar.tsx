import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import NavigateLink from '../navigate-link/navigate-link';
import { NavbarContainer } from './container';
import ThemeToggle from '../theme-toggle/theme-toggle';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/images/navbar/logo.svg"
          width={32}
          height={32}
          alt="logo"
        />
        <h2 className={styles.logo_text}>tekoblog</h2>
      </div>
      <div className={styles.right}>
        <div className={styles.hamburger}>
          <Image
            src="/images/icons/hamburger-icon.svg"
            alt=""
            width={32}
            height={32}
            className={styles.hamburger_icon}
          />
        </div>
        <div className={styles.links}>
          {NavbarContainer.socialLinks.map((link) => (
            <NavigateLink targetLink={link.targetLink} key={link.id}>
              <Image
                src={link.image}
                alt={link.altInfo}
                width={16}
                height={16}
              />
            </NavigateLink>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
