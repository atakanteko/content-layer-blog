import React from 'react';
import styles from './hero.module.css';
import PinkCard from './pink-card';
import LeftCard from './left-card';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <LeftCard />
      </div>
      <div className={styles.right}>
        <PinkCard />
      </div>
    </div>
  );
};

export default Hero;
