import React from 'react';

import classes from './Hero.module.css';

import SectionHeader from '../SectionHeader/SectionHeader';
import Paragraph from '../Paragraph/Paragraph';

export default function Hero({ page, title, text, image }) {
  return (
    <section className={classes.hero}>
      <img src={image} alt={page} />
      <div className={classes.pageName}>{page}</div>
      <div className={classes.body}>
        <SectionHeader>{title}</SectionHeader>
        <Paragraph>{text}</Paragraph>
      </div>
    </section>
  );
}
