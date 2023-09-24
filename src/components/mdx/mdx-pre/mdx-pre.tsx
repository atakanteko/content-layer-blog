import React from 'react';
import styles from './mdx-pre.module.css';

const MdxPre = ({ ...props }) => {
  return <pre className={styles.mdx_pre} {...props} />;
};

export default MdxPre;
