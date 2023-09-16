import React from 'react';
import styles from './category-tag.module.css';

type TagType = {
  tag: string;
  bgColor: string;
};

const CategoryTag = ({ tag, bgColor }: TagType) => {
  return (
    <div className={styles.category_tag} style={{ backgroundColor: bgColor }}>
      <span className={styles.badge_text}>{tag}</span>
    </div>
  );
};

export default CategoryTag;
