import React from 'react';
import styles from './hero.module.css';
import PinkCard from './pink-card';
import LeftCard from './left-card';
import { PostType } from '../latest-posts/latest-posts';

const Hero = ({ posts }: { posts: PostType[] }) => {
  const [firstPost, secondPost, ...restPosts] = posts;
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <LeftCard secondPost={secondPost} />
      </div>
      <div className={styles.right}>
        <PinkCard firstPost={firstPost} />
      </div>
    </div>
  );
};

export default Hero;
