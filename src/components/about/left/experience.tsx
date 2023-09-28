import React from 'react';
import styles from '../about.module.css';
import { ComponentsContainer } from '../../container';

const Experience = () => {
  return (
    <div className={styles.experience}>
      <h3 className={styles.title}>Experience</h3>
      {ComponentsContainer.workHistory.map((work) => (
        <div className={styles.experience_card} key={work.id}>
          <div className={styles.header}>
            <h5>
              {work.company} - {work.title}
            </h5>
            <span>{work.date}</span>
          </div>
          <div className={styles.work_description}>
            <p>{work.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
