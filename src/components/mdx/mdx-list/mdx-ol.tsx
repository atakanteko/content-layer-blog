import React from 'react';
import styles from './mdx-list.module.css';

const MdxOl = ({ ...props }) => {
  return <ol className={styles.mdx_ol} {...props} />;
};

export default MdxOl;
