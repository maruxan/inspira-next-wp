import React from 'react';
import Image from 'next/image';

import classes from './TeamCard.module.css';

import { BsLinkedin, BsTwitter } from 'react-icons/bs';

export default function TeamCard({ image, name, role }) {
  return (
    <article className={classes.teamCard}>
      <Image src={image} alt={name} layout="responsive" />
      <h2>{name}</h2>
      <div>{role}</div>
      <div>
        <BsLinkedin />
        <BsTwitter />
      </div>
    </article>
  );
}
