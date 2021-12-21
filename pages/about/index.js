import React from 'react';
import Head from 'next/head';

import team from '../../data/team';
import classes from './About.module.css';

import Layout from '../../components/layout';
import PageMarker from '../../components/PageMarker/PageMarker';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Paragraph from '../../components/Paragraph/Paragraph';
import TeamCard from '../../components/Cards/TeamCard/TeamCard';

import heroImg from '../../public/images/about/desktop/image-hero.jpg';
import heritageImg from '../../public/images/about/desktop/image-heritage.jpg';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Inspira | Sobre nosotros</title>
      </Head>

      <div className={classes.about}>
        <PageMarker page="about" />

        <Hero
          page="about"
          image={heroImg}
          title="Your team of professionals"
          text="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
        />

        <section className={classes.heritage}>
          <div>
            <SectionHeader>Our Heritage</SectionHeader>
            <Paragraph>
              Founded in 2007, we started as a trio of architects. Our complimentary skills and
              relentless attention to detail turned Arch into one of the most sought after boutique
              firms in the country.
            </Paragraph>
            <Paragraph>
              Speciliazing in Urban Design allowed us to focus on creating exceptional structures
              that live in harmony with their surroundings. We consider every detail from every
              surrounding element to inform our designs.
            </Paragraph>
            <Paragraph>
              Our small team of world-class professionals provides input on every project.
            </Paragraph>
          </div>
          <img src={heritageImg} alt="metal building" />
        </section>

        <section className={classes.team}>
          <SectionHeader>The Leaders</SectionHeader>
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
      </div>
    </Layout>
  );
}
