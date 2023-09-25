import React from 'react';
import styles from './mdx-list.module.css';

const MdxLi = ({ ...props }) => {
  return <li className={styles.mdx_li} {...props} />;
};

export default MdxLi;
