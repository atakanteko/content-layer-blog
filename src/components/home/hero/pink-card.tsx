import React from 'react';
import styles from './hero.module.css';
import { PostType } from '../latest-posts/latest-posts';
import { DateHelper } from '@/helpers/DateHelper';
import Link from 'next/link';

const PinkCard = ({ firstPost }: { firstPost: Partial<PostType> }) => {
  return (
    <div className={styles.box}>
      <div className={styles.latest}>
        <div className={styles.tag}>
          <span className={styles.tagText}>En güncel</span>
        </div>
      </div>
      <div className={styles.textContent}>
        <h1 className={styles.title}>{firstPost.title}</h1>
        <p className={styles.desc}>{firstPost.description}</p>
        <div className={styles.info}>
          <span className={styles.author}>{firstPost.author}</span>
          <span className={styles.date}>
            {DateHelper.formatDate(firstPost.date!)}
          </span>
        </div>
        <div className={styles.readMore}>
          <Link href={firstPost.slug!} className={styles.readMoreText}>
            Devamını oku
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PinkCard;
