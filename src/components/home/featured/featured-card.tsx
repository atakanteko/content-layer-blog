import React from 'react';
import Image from 'next/image';

import CategoryTag from '@/components/category-tag/category-tag';
import styles from './featured.module.css';
import { PostType } from '../latest-posts/latest-posts';
import { DateHelper } from '@/helpers/DateHelper';

const FeaturedCard = ({ thirdItem }: { thirdItem: Partial<PostType> }) => {
  return (
    <div className={styles.featured_card}>
      {thirdItem.tags?.map((tag) => (
        <CategoryTag key={tag._id} tag={tag.title} bgColor="#4b6bfb" />
      ))}

      <h2 className={styles.title}>{thirdItem.title}</h2>
      <div className={styles.featured_card_info}>
        <div className={styles.author}>
          <Image src="/images/author.png" width={36} height={36} alt="author" />
          <span className={styles.author_name}>{thirdItem.author}</span>
        </div>
        <span className={styles.date}>
          {DateHelper.formatDate(thirdItem.date!)}
        </span>
      </div>
    </div>
  );
};

export default FeaturedCard;
