import React from 'react';

import classes from './TeamCard.module.css';

import { BsLinkedin, BsTwitter } from 'react-icons/bs';

export default function TeamCard({ image, name, role }) {
  return (
    <article className={classes.teamCard}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <div>{role}</div>
      <div>
        <BsLinkedin />
        <BsTwitter />
      </div>
    </article>
  );
}
