import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import { FooterContainer } from './container';
import NavigateLink from '../navigate-link/navigate-link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.left}>
            <Image
              src="/images/navbar/logo.svg"
              width={32}
              height={32}
              alt="logo"
            />
            <span>{new Date().getFullYear()} &copy; </span>
          </div>
          {/* <div className={styles.center}>
            {FooterContainer.socialLinks.map((item) => (
              <NavigateLink targetLink={item.targetLink} key={item.id}>
                <Image
                  src={item.image}
                  width={24}
                  height={24}
                  alt={item.altInfo}
                />
              </NavigateLink>
            ))}
          </div> */}
          <div className={styles.right}>
            <a href="mailto:atakantekoglu@gmail.com">
              <h5>
                Email: <span>atakantekoglu@gmail.com</span>
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
