import React from 'react';
import styles from './mdx-code.module.css';

const MdxCode = ({ ...props }) => {
  return <code className={styles.mdx_code} {...props} />;
};

export default MdxCode;
