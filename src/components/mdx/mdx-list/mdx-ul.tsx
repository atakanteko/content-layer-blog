import React from 'react';
import styles from './mdx-list.module.css';

const MdxUl = ({ ...props }) => {
  return <ul className={styles.mdx_ul} {...props} />;
};

export default MdxUl;
