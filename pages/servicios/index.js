import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

import team from '../../data/team';
import classes from '../../styles/pages/About.module.css';

import Layout from '../../components/layout';
import PageMarker from '../../components/PageMarker/PageMarker';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Paragraph from '../../components/Paragraph/Paragraph';
import TeamCard from '../../components/Cards/TeamCard/TeamCard';

import heroImg from '../../public/images/about/desktop/image-hero.jpg';
import heritageImg from '../../public/images/about/desktop/image-heritage.jpg';
import Button from '../../components/Button/Button';

export default function About() {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Inspira | Servicios</title>
      </Head>

      <div className={classes.about}>
        <PageMarker page="servicios" />

        <Hero
          page="servicios"
          image={heroImg}
          title="Diagnóstico e investigación"
          text="La arquitectura es el valor agregado de la construcción. Despejamos los riesgos de cada rubro en la ejecución por medio de un programa de trabajo que articula y observa de cerca al operario y sus técnicas."
        />

        <section className={classes.heritage}>
          <div>
            <SectionHeader>Inversión inteligente</SectionHeader>
            <Paragraph>
              Los productos que ofrece esta consultora de Arquitectura y Urbanismo, se enmarca en
              una de las inversiones iniciales más significativas, al tratarse de la planificación
              estratégica, la previsión general y la predisposición técnica hasta en los detalles,
              asesoramiento con la experiencia y responsabilidad que implican emprendimientos en los
              diferentes niveles de complejidad, desde la potencialidad de un inmueble al impacto
              urbano en el sector.
            </Paragraph>
            <ul>
              <li>Proyecto nuevo y de remodelación</li>
              <li>Consultoría y dirección técnica de obra</li>
              <li>Valuación y potencialidades de inmuebles</li>
              <li>Diagnóstico y reordenamiento urbano ambiental</li>
            </ul>
            <Button text="contactenos" onclick={() => router.push('/contacto')} />
          </div>
          <div className={classes.heritageImg}>
            <Image src={heritageImg} alt="edificio de fachada moderna" layout="responsive" />
          </div>
        </section>

        {/* <section className={classes.team}>
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
        </section> */}
      </div>
    </Layout>
  );
}
