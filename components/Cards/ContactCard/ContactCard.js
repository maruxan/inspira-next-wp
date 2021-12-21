import React from 'react';

import classes from './ContactCard.module.css';

import Button from '../../Button/Button';

export default function ContactCard({ title, mail, address, phone }) {
  return (
    <article className={classes.contactCard}>
      <h2>{title}</h2>

      <div>
        <table>
          <tbody>
            <tr>
              <td>Mail:</td>
              <td>{mail}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{address}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{phone}</td>
            </tr>
          </tbody>
        </table>

        <Button text="View on Map" color="light" onclick={() => undefined} />
      </div>
    </article>
  );
}
