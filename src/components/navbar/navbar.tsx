import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import NavigateLink from '../navigate-link/navigate-link';
import { NavbarContainer } from './container';

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
      <div className={styles.links}>
        {NavbarContainer.socialLinks.map((link) => (
          <NavigateLink targetLink={link.targetLink} key={link.id}>
            <Image src={link.image} alt={link.altInfo} width={24} height={24} />
          </NavigateLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
