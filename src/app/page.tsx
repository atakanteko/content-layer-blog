import Image from 'next/image';
import styles from './page.module.css';
import Featured from '@/components/home/featured/featured';
import Hero from '@/components/home/hero/hero';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Featured />
    </main>
  );
}
