import Link from 'next/link';
import SEO from '../../components/SEO';
import { getAllPosts } from '../../lib/mdx';
import ShowMore from '../../components/ShowMore';
import Skeleton from '../../components/Skeleton';
import { useEffect, useState } from 'react';
import { Card, Text } from '@geist-ui/core';

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
            <Link key={post.slug} href={`/blog/${post.slug}`} legacyBehavior>
              <a className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg">
                <Card hoverable shadow className="bg-background border border-accents-2 h-full">
                  {post.frontmatter.featuredImage && (
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src={post.frontmatter.featuredImage}
                        alt={post.frontmatter.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <Card.Content className="space-y-4">
                    <Text h3 className="text-foreground">
                      {post.frontmatter.title}
                    </Text>
                    <ShowMore>
                      <Text p className="text-accents-6">
                        {post.frontmatter.excerpt}
                      </Text>
                    </ShowMore>
                  </Card.Content>
                  <Card.Footer className="justify-between text-sm text-accents-5">
                    <span>{new Date(post.frontmatter.date).toLocaleDateString('bn-BD')}</span>
                    <span>{post.frontmatter.readTime} মিনিট পড়া</span>
                  </Card.Footer>
                </Card>
              </a>
            </Link>
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