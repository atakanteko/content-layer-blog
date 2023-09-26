import React from 'react';
import styles from './mdx-table.module.css';

const MdxTr = ({ ...props }) => {
  return <tr className={styles.mdx_tr} {...props} />;
};

export default MdxTr;
