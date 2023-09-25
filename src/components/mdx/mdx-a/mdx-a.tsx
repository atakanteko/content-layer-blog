import React from 'react';
import styles from './mdx-a.module.css';

const MdxA = ({ ...props }) => {
  return <a className={styles.mdx_a} {...props} />;
};

export default MdxA;
