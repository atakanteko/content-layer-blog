import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';
import FeaturedCard from './featured-card';

const Featured = () => {
  return (
    <section className={styles.container}>
      <Image
        src="/images/home/bg-dashboard.png"
        alt=""
        fill
        className={styles.image}
      />
      <FeaturedCard />
    </section>
  );
};

export default Featured;
