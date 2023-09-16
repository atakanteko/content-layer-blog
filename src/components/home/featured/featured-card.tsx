import React from 'react';
import Image from 'next/image';

import CategoryTag from '@/components/category-tag/category-tag';
import styles from './featured.module.css';

const FeaturedCard = () => {
  return (
    <div className={styles.featured_card}>
      <CategoryTag tag="Technology" bgColor="#4b6bfb" />
      <h2 className={styles.title}>
        The Impact of Technology on the Workplace: How Technology is Changing
      </h2>
      <div className={styles.featured_card_info}>
        <div className={styles.author}>
          <Image src="/images/author.png" width={36} height={36} alt="author" />
          <span className={styles.author_name}>Atakan Tekoglu</span>
        </div>
        <span className={styles.date}>16.09.2023</span>
      </div>
    </div>
  );
};

export default FeaturedCard;
