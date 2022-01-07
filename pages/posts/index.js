import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { getAllPosts } from '../../lib/api';
import { getAllTags } from '../../lib/api';
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
import TagTabs from '../../components/TagTabs/TagTabs';

export default function Portfolio({ allPosts, allTags, preview }) {
  const posts = allPosts.edges;
  const tags = allTags.edges;

  const router = useRouter();
  const [filterTag, setFilterTag] = useState('todos');

  const filteredPosts =
    filterTag === 'todos'
      ? posts
      : posts.filter(({ node }) => node.tags.edges.some(({ node }) => node.name === filterTag));

  return (
    <Layout>
      <Head>
        <title>Inspira | Casos de Estudio</title>
      </Head>
      <div className={classes.portfolio}>
        <PageMarker page="casos de estudio" />
        <SectionHeader>Casos de Estudio</SectionHeader>
        <Paragraph>Historias de arquitectura y diseño alrededor del mundo.</Paragraph>
        <TagTabs
          tags={tags.map(({ node }) => node.name)}
          activeTag={filterTag}
          setActiveTag={setFilterTag}
        />
        <section>
          <Cards>
            {filteredPosts.map(({ node: project }) => (
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
  const allTags = await getAllTags();
  return {
    props: { allPosts, allTags, preview },
  };
}
