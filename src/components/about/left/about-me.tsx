import React from 'react';
import styles from '../about.module.css';

const AboutMeDesc = () => {
  return (
    <div className={styles.about_me}>
      <h2>About Me</h2>
      <p>
        My name is Atakan. {`I'm`} a Frontend Developer, having a degree in
        Computer Engineering. Currently, I live in Istanbul (Turkiye). My
        passion is web applications development: programming, automated testing,
        and good application architecture. {`I'm`} skilled at JavaScript,
        TypeScript, HTML, CSS, including React.js and a bit Vue.js frameworks. I
        have good communication skills and interpersonal skills. I strive to be
        a humble team player and be approachable to receive and give feedback.
        On this blog, I publish regularly posts about Frontend development,
        mainly about JavaScript, TypeScript, Vue.js, and React.js. Writing helps
        me sharpen my writing skills and learn a lot along the way.
      </p>
    </div>
  );
};

export default AboutMeDesc;
