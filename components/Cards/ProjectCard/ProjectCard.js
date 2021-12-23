import React from 'react';
import Image from 'next/image';

import classes from './ProjectCard.module.css';

export default function ProjectCard({ name, subtitle, img, onclick }) {
  return (
    <article className={classes.projectCard} onClick={onclick}>
      <div className={classes.cardImg}>
        <Image src={img} alt={name} layout="fill" />
      </div>
      <div className={classes.cardBody}>
        <h1>{name}</h1>
        <h2>{subtitle}</h2>
      </div>
    </article>
  );
}
