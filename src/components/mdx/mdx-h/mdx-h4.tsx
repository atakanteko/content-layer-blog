import React from 'react';
import styles from './mdx-h.module.css';

const MdxH4 = ({ ...props }) => {
  return <h4 className={styles.mdx_h4} {...props} />;
};

export default MdxH4;
