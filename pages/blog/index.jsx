import Link from 'next/link';
import SEO from '../../components/SEO';
import { getAllPosts } from '../../lib/mdx';

export default function BlogIndexPage({ posts }) {
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
            <div key={post.slug} className="bg-accents-1 border border-accents-2 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Link href={`/blog/${post.slug}`} legacyBehavior>
                <a>
                  {post.frontmatter.featuredImage && (
                    <img
                      src={post.frontmatter.featuredImage}
                      alt={post.frontmatter.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{post.frontmatter.title}</h2>
                    <p className="text-gray-600 mb-4">{post.frontmatter.excerpt}</p>
                    <div className="text-sm text-gray-500">
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