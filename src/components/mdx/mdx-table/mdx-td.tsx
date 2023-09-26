import React from 'react';
import styles from './mdx-table.module.css';

const MdxTd = ({ ...props }) => {
  return <td className={styles.mdx_td} {...props} />;
};

export default MdxTd;
