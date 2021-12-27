import React, { useState } from 'react';
import Image from 'next/image';
import NavLink from '../NavLink/NavLink';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

import classes from './Navbar.module.css';
import logo from '../../public/images/Inspira_logo_OK.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.navbar}>
      <Image src={logo} alt="logo Inspira" height={50} width={150} />
      <button className={classes.navmenuToggler} onClick={toggleMenuHandler}>
        {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
      </button>
      <nav hidden={!isOpen}>
        <li>
          <NavLink
            href="/"
            activeClassName={classes.activeNavlink}
            onClick={() => setIsOpen(false)}>
            <a className={classes.navlink}>Inicio</a>
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/posts"
            activeClassName={classes.activeNavlink}
            onClick={() => setIsOpen(false)}>
            <a className={classes.navlink}>Casos de Estudio</a>
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/about"
            activeClassName={classes.activeNavlink}
            onClick={() => setIsOpen(false)}>
            <a className={classes.navlink}>Sobre Nosotros</a>
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/contact"
            activeClassName={classes.activeNavlink}
            onClick={() => setIsOpen(false)}>
            <a className={classes.navlink}>Contacto</a>
          </NavLink>
        </li>
      </nav>
    </div>
  );
}
