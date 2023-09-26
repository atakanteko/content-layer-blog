import React from 'react';
import styles from './mdx-table.module.css';

const MdxTh = ({ ...props }) => {
  return <th className={styles.mdx_th} {...props} />;
};

export default MdxTh;
