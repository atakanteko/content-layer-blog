import React from 'react';
import styles from './hero.module.css';
import { PostType } from '../latest-posts/latest-posts';
import Link from 'next/link';
import { DateHelper } from '@/helpers/DateHelper';

const LeftCard = ({ secondPost }: { secondPost: Partial<PostType> }) => {
  return (
    <div className={styles.first_article}>
      <h1 className={styles.first_article_title}>{secondPost.title}</h1>
      <div className={styles.subinfo}>
        <div className={styles.subinfo_author}>
          <span className={styles.author_info}>{secondPost.author}</span>
          <span className={styles.article_date}>
            {DateHelper.formatDate(secondPost.date!)}
          </span>
        </div>
        <div className={styles.more}>
          <Link href={secondPost.slug!} className={styles.more_text}>
            Devamını oku
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
