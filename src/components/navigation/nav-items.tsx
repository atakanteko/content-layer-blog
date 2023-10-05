import React from 'react';
import { ComponentsContainer } from '../container';
import LinkIndicator from '../link-indicator/link-indicator';
import styles from './navigation.module.css';
import Navigation from './navigation';

const NavItems = () => {
  return (
    <div className={styles.routes}>
      {ComponentsContainer.siteRoutes.map((item) => (
        <LinkIndicator key={item.id} href={item.link}>
          {item.route}
        </LinkIndicator>
      ))}
    </div>
  );
};

export default NavItems;
