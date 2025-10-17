import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrismPlus from 'rehype-prism-plus';

const root = process.cwd();
const postsDirectory = path.join(root, 'content/blog');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(postsDirectory, `${realSlug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        [rehypePrismPlus, { ignoreMissing: true }],
      ],
    },
    scope: data,
  });

  return {
    slug: realSlug,
    frontmatter: data,
    source: mdxSource,
  };
}

export async function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await getPostBySlug(slug);
      return {
        slug: slug.replace(/\.mdx$/, ''),
        frontmatter,
      };
    })
  );

  // Sort posts by date in descending order
  return posts.sort((post1, post2) =>
    post1.frontmatter.date > post2.frontmatter.date ? -1 : 1
  );
}