import React from 'react';
import styles from './mdx-blockquote.module.css';

const MdxBlockquote = ({ ...props }) => {
  return <blockquote className={styles.mdx_blockquote} {...props} />;
};

export default MdxBlockquote;
