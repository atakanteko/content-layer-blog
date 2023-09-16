import React from 'react';
import styles from './hero.module.css';

const LeftCard = () => {
  return (
    <div className={styles.first_article}>
      <h1 className={styles.first_article_title}>
        ChatGPT is an artificial intelligence chatbot developed by OpenAi
      </h1>
      <div className={styles.subinfo}>
        <div className={styles.subinfo_author}>
          <span className={styles.author_info}>John Doe</span>
          <span className={styles.article_date}>17 Eylül 2023</span>
        </div>
        <div className={styles.more}>
          <span className={styles.more_text}>Read More</span>
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
