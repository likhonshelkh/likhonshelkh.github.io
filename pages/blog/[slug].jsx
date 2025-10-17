import { MDXRemote } from 'next-mdx-remote';
import { getPostBySlug, getPostSlugs } from '../../lib/mdx';
import SEO from '../../components/SEO';
import Banner from '../../components/Banner';
import Image from 'next/image';

const components = {
  Image, // Make Next.js Image component available in MDX
};

export default function PostPage({ source, frontmatter }) {
  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.seo.description}
        keywords={frontmatter.seo.keywords}
        ogImage={frontmatter.seo.ogImage}
        canonicalUrl={frontmatter.seo.canonicalUrl}
        publishDate={frontmatter.seo.publishDate}
        modifiedDate={frontmatter.seo.modifiedDate}
        tags={frontmatter.tags}
        ogType="article"
      />

      {frontmatter.banner && (
        <Banner
          image={frontmatter.banner.image}
          title={frontmatter.title}
          alt={frontmatter.banner.alt}
        />
      )}

      <article className="prose prose-lg max-w-4xl mx-auto py-12 px-4">
        {!frontmatter.banner && <h1 className="text-4xl font-bold mb-8">{frontmatter.title}</h1>}
        <div className="text-gray-500 mb-8">
          <span>{new Date(frontmatter.date).toLocaleDateString('bn-BD')}</span>
          <span className="mx-2">•</span>
          <span>{frontmatter.readTime} মিনিট পড়া</span>
        </div>
        <MDXRemote {...source} components={components} />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug: slug.replace(/\.mdx$/, '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getPostBySlug(params.slug);

  return {
    props: {
      source,
      frontmatter,
    },
  };
}