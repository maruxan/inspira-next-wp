import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';

import classes from './Footer.module.css';
import logo from '../../public/images/logo.svg';

export default function Footer() {
  const router = useRouter();

  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <Image src={logo} alt="logo inspira" />
      </div>
      <nav>
        <li>
          <Link href="/posts" className={classes.navlink}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/about" className={classes.navlink}>
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contact" className={classes.navlink}>
            Contact
          </Link>
        </li>
      </nav>
      <Button text="see our portfolio" onclick={() => router.push('/posts')} />
      <span>Arch &#169; 2021</span>
    </footer>
  );
}
