import Head from 'next/head';
import { useRouter } from 'next/router';
import { formatDateString } from '../lib/utils';
import { getAllPosts } from '../lib/api';
import Image from 'next/image';
import Layout from '../components/layout';
import { CMS_NAME } from '../lib/constants';

import PageMarker from '../components/PageMarker/PageMarker';
import Banner from '../components/Banner/Banner';
import Cards from '../components/Cards/Cards';
import ProjectCard from '../components/Cards/ProjectCard/ProjectCard';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import Paragraph from '../components/Paragraph/Paragraph';
import Button from '../components/Button/Button';

import classes from '../styles/pages/Home.module.css';
import welcomeImg from '../public/images/home/desktop/image-welcome.jpg';
import teamImg from '../public/images/home/desktop/image-small-team.jpg';

export default function Index({ allPosts: { edges }, preview }) {
  const router = useRouter();
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1, 4);

  return (
    <Layout preview={preview}>
      <Head>
        <title>Inspira | Arquitectura y Urbanismo</title>
      </Head>
      <div className={classes.home}>
        <PageMarker page="inicio" />

        <section className={classes.hero}>
          <Banner
            bgImage={heroPost.featuredImage?.node.sourceUrl}
            title={heroPost.title}
            bodyText={heroPost.excerpt.replace(/<(\/?)p>/g, '')}
            buttonHandler={() => router.push(`/posts/${heroPost.slug}`)}
            buttonText="Ver historia"
          />
        </section>

        <section className={classes.welcome}>
          <svg viewBox="0 0 79.5 16">
            <text x="0" y="15">
              inspira
            </text>
          </svg>
          <div>
            <SectionHeader>
              Inspira <br />
              Estar Bien
            </SectionHeader>
            <Paragraph>
              Contiene una misión en sí, es llamado y respuesta, sensibilidad y acción, es la
              voluntad que busca las formas, la creatividad que transforma lo simple en autentico,
              lo alternativo adaptado al sistema, el diseño abierto a reconocer aportes con
              criterios de complementariedad, el estímulo lucido ante la necesidad de un contexto,
              la dimensión atemporal que se concreta en un tiempo y lugar específico: la actualidad.
            </Paragraph>
            <Paragraph>
              Es el concepto clave, la búsqueda de uno en el encuentro con el otro, y el respeto por
              el entorno, reflexión que descubre contenido en el replanteo para flexibilizar con
              criterios sus fundamentos, es la flecha que da sentido a las infinitas direcciones a
              las que se puede orientar un segmento en su desarrollo, los vínculos o experiencias
              son sus recursos, es indicador de horizonte que se hace común, solo cuando deja
              huellas.
            </Paragraph>
          </div>
          <div className={classes.welcomeImg}>
            <Image src={welcomeImg} alt="edificio elegante" layout="fill" />
          </div>
        </section>

        <section className={classes.team}>
          <Banner
            bgImage={teamImg}
            title="Pequeño equipo, grandes ideas"
            buttonText="servicios"
            buttonHandler={() => router.push('/servicios')}
          />
        </section>

        <section className={classes.featured}>
          <div>
            <SectionHeader>Casos de estudio</SectionHeader>
            <Button text="ver más" onclick={() => router.push('/posts')} />
          </div>
          <Cards>
            {morePosts.map(({ node: project }) => (
              <ProjectCard
                key={project.slug}
                name={project.title}
                subtitle={formatDateString(project.date)}
                img={project.featuredImage?.node.sourceUrl}
                onclick={() => router.push(`/posts/${project.slug}`)}
              />
            ))}
          </Cards>
        </section>
      </div>
      {/* <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage?.node}
              date={heroPost.date}
              author={heroPost.author?.node}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPosts(preview);
  return {
    props: { allPosts, preview },
  };
}
