import React, { useState } from 'react';
import Link from 'next/link';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

import classes from './Navbar.module.css';
import logo from '../../public/images/logo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClassName = (isActive) => classes.navlink + ' ' + (isActive ? classes.active : '');

  return (
    <div className={classes.navbar}>
      <Link href="/" className={classes.logo} onClick={() => setIsOpen(false)}>
        <img src={logo} alt="Arch logo" />
      </Link>
      <button className={classes.navmenuToggler} onClick={toggleMenuHandler}>
        {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
      </button>
      <nav hidden={!isOpen}>
        <li>
          <Link
            href="/posts"
            className={({ isActive }) => navLinkClassName(isActive)}
            onClick={() => setIsOpen(false)}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={({ isActive }) => navLinkClassName(isActive)}
            onClick={() => setIsOpen(false)}>
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={({ isActive }) => navLinkClassName(isActive)}
            onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </nav>
    </div>
  );
}
