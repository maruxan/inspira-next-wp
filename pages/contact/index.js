import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import classes from '../../styles/pages/Contact.module.css';

import Layout from '../../components/layout';
import PageMarker from '../../components/PageMarker/PageMarker';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ContactCard from '../../components/Cards/ContactCard/ContactCard';

import heroImg from '../../public/images/contact/desktop/image-hero.jpg';
import mapImg from '../../public/images/contact/desktop/image-map.png';
import Button from '../../components/Button/Button';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Inspira | Contacto</title>
      </Head>

      <div className={classes.contact}>
        <PageMarker page="contact" />

        <Hero
          page="contact"
          image={heroImg}
          title="Tell us about your project"
          text="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
        />

        <section className={classes.details}>
          <SectionHeader>Contact Details</SectionHeader>
          <ContactCard
            title="Main Office"
            mail="archone@mail.com"
            address="1892 Chenoweth Drive TN"
            phone="802-456-3451"
          />
          <ContactCard
            title="Office II"
            mail="archtwo@mail.com"
            address="3399 Wines Lane TX"
            phone="832-145-4321"
          />
        </section>

        <section className={classes.map}>
          <Image src={mapImg} alt="mapa de las oficinas" layout="responsive" />
        </section>

        <section className={classes.form}>
          <SectionHeader>Connect with us</SectionHeader>
          <form>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <Button onclick={(e) => e.preventDefault()} />
          </form>
        </section>
      </div>
    </Layout>
  );
}
