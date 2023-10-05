import React from 'react';
import styles from './navigation.module.css';

const Navigation = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.route_wrapper}>{children}</div>;
};

export default Navigation;
