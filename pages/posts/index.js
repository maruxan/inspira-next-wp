import React from 'react';
import Head from 'next/head';

import projects from '../../data/projects';
import classes from './Portfolio.module.css';

import Layout from '../../components/layout';
import PageMarker from '../../components/PageMarker/PageMarker';
import Cards from '../../components/Cards/Cards';
import ProjectCard from '../../components/Cards/ProjectCard/ProjectCard';

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Inspira | Projectos</title>
      </Head>
      <div className={classes.portfolio}>
        <PageMarker page="portfolio" />
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
