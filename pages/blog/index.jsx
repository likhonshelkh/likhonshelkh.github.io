import Link from 'next/link';
import Image from 'next/image';
import SEO from '../../components/SEO';
import { getAllPosts } from '../../lib/mdx';
import ShowMore from '../../components/ShowMore';
import Skeleton from '../../components/Skeleton';
import { useEffect, useState } from 'react';

export default function BlogIndexPage({ posts }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (posts) {
      setLoading(false);
    }
  }, [posts]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          <Skeleton className="h-12 w-1/2 mx-auto" />
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-background border border-accents-2 rounded-lg overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <div className="p-6">
                <Skeleton className="h-8 w-3/4 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3 mb-4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Blog"
        description="A collection of articles on web development, programming, and technology."
        ogType="website"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-foreground">সকল ব্লগ পোস্ট</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.slug} className="bg-background border border-accents-2 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Link href={`/blog/${post.slug}`} legacyBehavior>
                <a>
                  {post.frontmatter.featuredImage && (
                    <Image
                      src={post.frontmatter.featuredImage}
                      alt={post.frontmatter.title}
                      className="w-full h-48 object-cover"
                      width={400}
                      height={200}
                    />
                  )}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-foreground">{post.frontmatter.title}</h2>
                    <ShowMore>
                      <p className="text-accents-6 mb-4">{post.frontmatter.excerpt}</p>
                    </ShowMore>
                    <div className="text-sm text-accents-5">
                      <span>{new Date(post.frontmatter.date).toLocaleDateString('bn-BD')}</span>
                      <span className="mx-2">•</span>
                      <span>{post.frontmatter.readTime} মিনিট পড়া</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}