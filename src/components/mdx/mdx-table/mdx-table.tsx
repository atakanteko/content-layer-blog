import React from 'react';
import styles from './mdx-table.module.css';

const MdxTable = ({ ...props }) => {
  return (
    <div className={styles.mdx_table_container}>
      <table className={styles.mdx_table} {...props} />
    </div>
  );
};

export default MdxTable;
