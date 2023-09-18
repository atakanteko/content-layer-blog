import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';
import FeaturedCard from './featured-card';
import { PostType } from '../latest-posts/latest-posts';

const Featured = ({ posts }: { posts: PostType[] }) => {
  const thirdItem = posts[2];
  return (
    <section className={styles.container}>
      <Image src={thirdItem.image} alt="" fill className={styles.image} />
      <FeaturedCard thirdItem={thirdItem} />
    </section>
  );
};

export default Featured;
