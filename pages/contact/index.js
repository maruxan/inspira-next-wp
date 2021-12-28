import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import team from '../../data/team';
import classes from '../../styles/pages/Contact.module.css';

import Layout from '../../components/layout';
import PageMarker from '../../components/PageMarker/PageMarker';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ContactCard from '../../components/Cards/ContactCard/ContactCard';
import TeamCard from '../../components/Cards/TeamCard/TeamCard';

import heroImg from '../../public/images/contact/desktop/image-hero.jpg';
import mapImg from '../../public/images/contact/mapa-inspira.png';
import Button from '../../components/Button/Button';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Inspira | Contacto</title>
      </Head>

      <div className={classes.contact}>
        <PageMarker page="contacto" />

        <Hero
          page="contacto"
          image={heroImg}
          title="Contanos sobre tu proyecto"
          text="Nuestro desafío es dejar en los diversos productos o servicios que ofrecemos, un aporte socio cultural y a la vez, también a uno mismo, como parte de dicha construcción."
        />

        <section className={classes.details}>
          <SectionHeader>Donde nos encontramos</SectionHeader>
          <ContactCard
            title="Formosa Capital"
            mail="info@inspirarte.com.ar"
            address="Hipolito Irigoyen 410 (CP 3600)"
            phone="+54 (370) 5030 161"
          />
        </section>

        <section className={classes.map}>
          <Image src={mapImg} alt="mapa de las oficinas" layout="responsive" />
        </section>

        <section className={classes.team}>
          <SectionHeader>Nuestro equipo</SectionHeader>
          <div>
            {team.map((member) => (
              <TeamCard
                key={member.id}
                image={member.image}
                name={member.name}
                role={member.role}
              />
            ))}
          </div>
        </section>

        {/* <section className={classes.form}>
          <SectionHeader>Connect with us</SectionHeader>
          <form>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <Button onclick={(e) => e.preventDefault()} />
          </form>
        </section> */}
      </div>
    </Layout>
  );
}
