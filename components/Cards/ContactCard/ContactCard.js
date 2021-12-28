import React from 'react';
import { useRouter } from 'next/router';

import classes from './ContactCard.module.css';

import Button from '../../Button/Button';

export default function ContactCard({ title, mail, address, phone }) {
  const router = useRouter();

  return (
    <article className={classes.contactCard}>
      <h2>{title}</h2>

      <div>
        <table>
          <tbody>
            <tr>
              <td>Correo:</td>
              <td>{mail}</td>
            </tr>
            <tr>
              <td>Dirección:</td>
              <td>{address}</td>
            </tr>
            <tr>
              <td>Teléfono:</td>
              <td>{phone}</td>
            </tr>
          </tbody>
        </table>

        <Button
          text="Ver mapa"
          color="light"
          onclick={() => router.push('https://goo.gl/maps/3zJdT2pyPjQw4wpY6')}
        />
      </div>
    </article>
  );
}
