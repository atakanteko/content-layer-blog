import React from 'react';
import styles from './hero.module.css';

const PinkCard = () => {
  return (
    <div className={styles.box}>
      <div className={styles.latest}>
        <div className={styles.tag}>
          <span className={styles.tagText}>Latest</span>
        </div>
      </div>
      <div className={styles.textContent}>
        <h1 className={styles.title}>NFTs</h1>
        <p className={styles.desc}>
          Enter the world of Radical Queenz and experience a new level of NFT
          artistry
        </p>
        <div className={styles.info}>
          <span className={styles.author}>John Doe</span>
          <span className={styles.date}>17 Eylül 2023</span>
        </div>
        <div className={styles.readMore}>
          <span className={styles.readMoreText}>Read More</span>
        </div>
      </div>
    </div>
  );
};

export default PinkCard;
