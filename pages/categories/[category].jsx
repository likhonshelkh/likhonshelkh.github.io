import Link from 'next/link';
import Image from 'next/image';
import SEO from '../../components/SEO';
import { getPostsByCategory } from '../../lib/mdx';
import { categories, categoryMap } from '../../lib/categories';
import ShowMore from '../../components/ShowMore';
import CategoryTranslator from '../../components/CategoryTranslator';

export default function CategoryPage({ category, posts }) {
  const translatedCategory = categoryMap[category] || category;

  return (
    <>
      <SEO
        title={`Posts in ${translatedCategory}`}
        description={`A collection of posts in the ${translatedCategory} category.`}
        ogType="website"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-foreground">
          ক্যাটাগরি: {translatedCategory}
        </h1>
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
                      <span className="mx-2">•</span>
                      <CategoryTranslator category={post.frontmatter.category} />
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

export async function getStaticPaths() {
  const paths = categories.map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { category } = params;
  const posts = await getPostsByCategory(category);

  return {
    props: {
      category,
      posts,
    },
  };
}