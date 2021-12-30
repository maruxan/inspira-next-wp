import React from 'react';
import Head from 'next/head';

import projects from '../../data/projects';
import classes from '../../styles/pages/Portfolio.module.css';

import Layout from '../../components/layout';
import PageMarker from '../../components/PageMarker/PageMarker';
import Cards from '../../components/Cards/Cards';
import ProjectCard from '../../components/Cards/ProjectCard/ProjectCard';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Paragraph from '../../components/Paragraph/Paragraph';

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Inspira | Casos de Estudio</title>
      </Head>
      <div className={classes.portfolio}>
        <PageMarker page="casos de estudio" />
        <SectionHeader>Casos de Estudio</SectionHeader>
        <Paragraph>Historias de arquitectura y diseño alrededor del mundo.</Paragraph>
        <section>
          <Cards>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                subtitle={project.date}
                img={project.image}
                onclick={() => undefined}
              />
            ))}
          </Cards>
        </section>
      </div>
    </Layout>
  );
}
