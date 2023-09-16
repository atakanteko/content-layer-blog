import Image from 'next/image';
import styles from './page.module.css';
import Featured from '@/components/home/featured/featured';

export default function Home() {
  return (
    <main className={styles.main}>
      <Featured />
    </main>
  );
}
