import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
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
  );
};

export default Logo;
