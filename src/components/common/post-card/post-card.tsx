import React from 'react';
import styles from './post-card.module.css';
import Image from 'next/image';

const PostCard = () => {
  return (
    <div className={styles.post_card}>
      <div className={styles.text_container}>
        <div className={styles.header}>
          <span className={styles.date}>18 Eylül 2023</span>
          <span className={styles.tag}>Technology</span>
        </div>
        <div className={styles.post_text}>
          <h2 className={styles.post_title}>
            10 Hilarious Cartoons That Depict Real-Life Problems of Programmers
          </h2>
          <p className={styles.post_desc}>
            Redefined the user acquisition and redesigned the onboarding
            experience, all within 3 working weeks.
          </p>
        </div>
      </div>
      <div className={styles.img_container}>
        <Image
          src="/images/home/bg-dashboard.png"
          fill
          alt=""
          className={styles.post_card_img}
        />
      </div>
    </div>
  );
};

export default PostCard;
