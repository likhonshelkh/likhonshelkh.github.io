import { MDXRemote } from 'next-mdx-remote';
import { getPostBySlug, getPostSlugs } from '../../lib/mdx';
import SEO from '../../components/SEO';
import Banner from '../../components/Banner';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Skeleton from '../../components/Skeleton';
import { useEffect, useState } from 'react';
import MDXCodeBlock from '../../components/MDXCodeBlock';

const components = {
  Image, // Make Next.js Image component available in MDX
  pre: MDXCodeBlock,
};

export default function PostPage({ source, frontmatter }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (source) {
      setLoading(false);
    }
  }, [source]);

  if (loading || router.isFallback) {
    return (
      <div>
        <Skeleton className="h-96 w-full" />
        <div className="max-w-4xl mx-auto py-12 px-4">
          <Skeleton className="h-12 w-3/4 mb-8" />
          <Skeleton className="h-4 w-1/4 mb-8" />
          <Skeleton className="h-6 w-full mb-4" />
          <Skeleton className="h-6 w-full mb-4" />
          <Skeleton className="h-6 w-5/6 mb-4" />
          <Skeleton className="h-6 w-full mb-4" />
        </div>
      </div>
    );
  }

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
        {!frontmatter.banner && <h1 className="text-4xl font-bold mb-8 text-foreground">{frontmatter.title}</h1>}
        <div className="text-accents-5 mb-8">
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
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getPostBySlug(params.slug);

  return {
    props: {
      source,
      frontmatter,
    },
    revalidate: 60,
  };
}