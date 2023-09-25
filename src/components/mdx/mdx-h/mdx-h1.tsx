import React from 'react';
import styles from './mdx-h.module.css';

const MdxH1 = ({ ...props }) => {
  return <h1 className={styles.mdx_h1} {...props} />;
};

export default MdxH1;
