import React from 'react';
import { useRouter } from 'next/router';
import { getAllPosts } from '../../lib/api';
import { formatDateString } from '../../lib/utils';

import projects from '../../data/projects';
import classes from '../../styles/pages/Portfolio.module.css';

import Head from 'next/head';
import Layout from '../../components/layout';
import PageMarker from '../../components/PageMarker/PageMarker';
import Cards from '../../components/Cards/Cards';
import ProjectCard from '../../components/Cards/ProjectCard/ProjectCard';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Paragraph from '../../components/Paragraph/Paragraph';

export default function Portfolio({ allPosts: { edges }, preview }) {
  const router = useRouter();
  const posts = edges;

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
            {posts.map(({ node: project }) => (
              <ProjectCard
                key={project.slug}
                name={project.title}
                subtitle={formatDateString(project.date)}
                img={project.featuredImage?.node.sourceUrl}
                onclick={() => router.push(`/posts/${project.slug}`)}
              />
            ))}
            {/* {projects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                subtitle={project.date}
                img={project.image}
                onclick={() => undefined}
              />
            ))} */}
          </Cards>
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPosts(preview);
  return {
    props: { allPosts, preview },
  };
}
