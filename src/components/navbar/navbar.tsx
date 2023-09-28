import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import NavigateLink from '../navigate-link/navigate-link';
import ThemeToggle from '../theme-toggle/theme-toggle';
import { ComponentsContainer } from '../container';
import LinkIndicator from '../link-indicator/link-indicator';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logo_link}>
            <Image
              src="/images/navbar/logo.svg"
              width={32}
              height={32}
              alt="logo"
            />
            <h2 className={styles.logo_text}>bytebadger</h2>
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.routes}>
            {ComponentsContainer.siteRoutes.map((item) => (
              <LinkIndicator key={item.id} href={item.link}>
                {item.route}
              </LinkIndicator>
            ))}
          </div>

          <div className={styles.hamburger}>
            <Image
              src="/images/icons/hamburger-icon.svg"
              alt=""
              width={40}
              height={40}
              className={styles.hamburger_icon}
            />
          </div>

          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
