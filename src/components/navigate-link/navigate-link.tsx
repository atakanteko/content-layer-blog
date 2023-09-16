'use client';

import React from 'react';
import styles from './navigate-link.module.css';

type NavigateLinkType = {
  children: React.ReactNode;
  targetLink: string;
};

const NavigateLink = ({ children, targetLink }: NavigateLinkType) => {
  const navigateToTarget = () => {
    window.open(targetLink, '_blank');
  };

  return (
    <div className={styles.navigate_link} onClick={navigateToTarget}>
      {children}
    </div>
  );
};

export default NavigateLink;
