import styles from './page.module.css';
import Featured from '@/components/home/featured/featured';
import Hero from '@/components/home/hero/hero';
import LatestPosts from '@/components/home/latest-posts/latest-posts';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export default function Home() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <main className={styles.main}>
      <Hero posts={posts} />
      <Featured posts={posts} />
      {posts?.length ? (
        <LatestPosts allPosts={posts} />
      ) : (
        <p>No posts published.</p>
      )}
    </main>
  );
}
