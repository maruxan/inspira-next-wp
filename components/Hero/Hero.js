import React from 'react';
import Image from 'next/image';

import classes from './Hero.module.css';

import SectionHeader from '../SectionHeader/SectionHeader';
import Paragraph from '../Paragraph/Paragraph';

export default function Hero({ page, title, text, image }) {
  return (
    <section className={classes.hero}>
      <div className={classes.heroImg}>
        <Image src={image} alt={page} layout="fill" />
      </div>
      <div className={classes.pageName}>{page}</div>
      <div className={classes.body}>
        <SectionHeader>{title}</SectionHeader>
        <Paragraph>{text}</Paragraph>
      </div>
    </section>
  );
}
