import React from 'react';
import styles from '../about.module.css';
import Image from 'next/image';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.img_container}>
        <Image
          src="/images/bytebadger.png"
          fill
          alt="atakan tekoglu"
          className={styles.img}
        />
      </div>
      <div className={styles.info}>
        <span>atakantekoglu@gmail.com</span>
        <span>Istanbul, Turkiye</span>
      </div>
    </div>
  );
};

export default Profile;
