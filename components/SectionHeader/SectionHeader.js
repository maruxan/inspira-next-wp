import React from 'react';

import classes from './SectionHeader.module.css';

export default function SectionHeader({ children, color = 'dark' }) {
  const headerClasses = `${classes.sectionHeader} ${classes[color]}`;

  return <h1 className={headerClasses}>{children}</h1>;
}
