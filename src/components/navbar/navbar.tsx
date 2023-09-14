import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

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
        <h2>tekoblog</h2>
      </div>
      <div className={styles.links}>
        <Link href="/categories">Kategori</Link>
        <Link href="/about-me">Hakkımda</Link>
        <Link href="/contact">İletişim</Link>
      </div>
    </div>
  );
};

export default Navbar;
