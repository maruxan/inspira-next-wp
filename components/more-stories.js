import { useRouter } from 'next/router';
import { formatDateString } from '../lib/utils';

import PostPreview from '../components/post-preview';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import Cards from '../components/Cards/Cards';
import ProjectCard from '../components/Cards/ProjectCard/ProjectCard';

export default function MoreStories({ posts }) {
  const router = useRouter();

  return (
    <section>
      <SectionHeader>Más historias</SectionHeader>
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
      </Cards>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage?.node}
            date={node.date}
            author={node.author?.node}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div> */}
    </section>
  );
}
