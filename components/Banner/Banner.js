import React from 'react';
import Button from '../Button/Button';
import Paragraph from '../Paragraph/Paragraph';
import SectionHeader from '../SectionHeader/SectionHeader';

import classes from './Banner.module.css';

export default function Banner({ bgImage, title, bodyText, buttonHandler, buttonText }) {
  return (
    <article className={classes.banner}>
      <div className={classes.bgImage}>
        <img src={bgImage} alt={title} />
      </div>
      <SectionHeader color="light">{title}</SectionHeader>
      {bodyText && <Paragraph color="light">{bodyText}</Paragraph>}
      <Button onclick={buttonHandler} text={buttonText} />
    </article>
  );
}
