import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';

import classes from './Button.module.css';

export default function Button({ text, onclick, color = 'dark' }) {
  const btnClasses = `${classes.button} ${classes[color]}`;

  return (
    <button onClick={onclick} className={btnClasses}>
      {text && <span>{text}</span>}
      <HiOutlineArrowRight />
    </button>
  );
}
