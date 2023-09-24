import React from 'react';
import styles from './mdx-p.module.css';

const MdxP = ({ ...props }) => {
  return <p className={styles.mdx_p} {...props} />;
};

export default MdxP;
