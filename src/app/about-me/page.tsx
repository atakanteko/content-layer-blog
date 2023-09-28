import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import AboutTitle from '@/components/about/title';
import AboutMeDesc from '@/components/about/about-me';

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <AboutTitle />
        <AboutMeDesc />
      </div>
      <div className={styles.right}>
        <div className={styles.img_container}>
          <Image
            src="/images/bytebadger.png"
            fill
            alt="atakan tekoglu"
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
