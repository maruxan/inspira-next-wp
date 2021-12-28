import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';

import classes from './Footer.module.css';
import logo from '../../public/images/inspira_arq_urb.png';

export default function Footer() {
  const router = useRouter();

  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <Image src={logo} alt="logo inspira" width={150} height={50} />
      </div>
      <nav>
        <li>
          <Link href="/">
            <a className={classes.navlink}>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/servicios">
            <a className={classes.navlink}>Servicios</a>
          </Link>
        </li>
        <li>
          <Link href="/contacto">
            <a className={classes.navlink}>Contacto</a>
          </Link>
        </li>
      </nav>
      <Button text="Casos de Estudio" onclick={() => router.push('/posts')} />
      <span>Inspira &#169; 2022 | made by Liba</span>
    </footer>
  );
}
