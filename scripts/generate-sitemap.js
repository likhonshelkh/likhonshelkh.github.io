const fs = require('fs');
const globby = require('globby');
const matter = require('gray-matter');

async function generateSitemap() {
  const siteUrl = 'https://likhonsheikh.github.io';

  // Get all pages
  const pages = await globby([
    'pages/**/*.jsx',
    '!pages/_*.jsx',
    '!pages/api',
    '!pages/blog/[slug].jsx',
  ]);

  // Get all blog posts
  const posts = await globby(['content/blog/**/*.mdx']);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      const path = page
        .replace('pages', '')
        .replace('.jsx', '')
        .replace('/index', '');
      const route = path === '/index' ? '' : path;
      return `
        <url>
          <loc>${`${siteUrl}${route}`}</loc>
        </url>
      `;
    })
    .join('')}
  ${posts
    .map((post) => {
      const source = fs.readFileSync(post, 'utf8');
      const { data } = matter(source);
      const route = `/blog/${post.replace('content/blog/', '').replace('.mdx', '')}`;
      return `
        <url>
          <loc>${`${siteUrl}${route}`}</loc>
          <lastmod>${new Date(data.date).toISOString()}</lastmod>
        </url>
      `;
    })
    .join('')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();