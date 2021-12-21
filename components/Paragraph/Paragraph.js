import React from 'react';

import classes from './Paragraph.module.css';

export default function Paragraph({ children, color = 'dark' }) {
  const pClassName = `${classes.paragraph} ${classes[color]}`;

  return <p className={pClassName}>{children}</p>;
}
