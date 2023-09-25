import React from 'react';
import styles from './mdx-h.module.css';

const MdxH2 = ({ ...props }) => {
  return <h2 className={styles.mdx_h2} {...props} />;
};

export default MdxH2;
