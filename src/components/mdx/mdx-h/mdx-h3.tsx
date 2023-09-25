import React from 'react';
import styles from './mdx-h.module.css';

const MdxH3 = ({ ...props }) => {
  return <h3 className={styles.mdx_h3} {...props} />;
};

export default MdxH3;
