import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import AboutTitle from '@/components/about/left/title';
import AboutMeDesc from '@/components/about/left/about-me';
import Experience from '@/components/about/left/experience';
import Profile from '@/components/about/right/profile';
import Tools from '@/components/about/right/tools';
import Education from '@/components/about/left/education';

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <AboutTitle />
        <AboutMeDesc />
        <Experience />
        <Education />
      </div>
      <div className={styles.right}>
        <Profile />
        <Tools />
      </div>
    </div>
  );
};

export default AboutMe;
