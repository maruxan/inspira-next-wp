import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import PostBody from '../../components/post-body';
import MoreStories from '../../components/more-stories';
import PostHeader from '../../components/post-header';
import SectionSeparator from '../../components/section-separator';
import Layout from '../../components/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';
import Tags from '../../components/tags';

export default function Post({ post, posts, preview }) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <PostTitle>Cargando…</PostTitle>
      ) : (
        <div className="py-8">
          <Head>
            <title>{post.title} | Inspira</title>
            <meta property="og:image" content={post.featuredImage?.node?.sourceUrl} />
          </Head>
          <article>
            <PostHeader
              title={post.title}
              coverImage={post.featuredImage?.node}
              date={post.date}
              author={post.author?.node}
              categories={post.categories}
              tags={post.tags}
            />
            <PostBody content={post.content} />
          </article>

          <div className="px-[var(--container)] mb-8">
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </div>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
}
