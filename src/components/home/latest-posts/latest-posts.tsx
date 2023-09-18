import React from 'react';
import styles from './latest-posts.module.css';
import PostCard from '@/components/common/post-card/post-card';

const LatestPosts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>En son eklenen yazılar</h3>
      </div>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default LatestPosts;
