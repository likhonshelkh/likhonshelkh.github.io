import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SEO({
  title = 'লিখন শেখ',
  description = 'A personal blog by Likhon Sheikh. I write about web development, programming, and technology.',
  keywords = ['Likhon Sheikh', 'Web Developer', 'Programmer', 'Technology', 'Blog'],
  ogImage = 'https://example.com/og-image.jpg', // Replace with a default image
  ogType = 'website',
  canonicalUrl: customCanonicalUrl,
  publishDate,
  modifiedDate,
  tags = [],
}) {
  const router = useRouter();
  const siteName = 'লিখন শেখ';
  const twitterHandle = '@likhonsheikh';
  const canonicalUrl = customCanonicalUrl || `https://likhonshelkh.github.io${router.asPath}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      <meta name="author" content={siteName} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="bn_BD" />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Additional SEO */}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Bengali" />

      {/* Article Specific */}
      {publishDate && <meta property="article:published_time" content={publishDate} />}
      {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      <meta property="article:author" content={siteName} />
      {tags.map((tag) => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ogType === 'article' ? 'BlogPosting' : 'WebSite',
            headline: title,
            description: description,
            image: ogImage,
            author: {
              '@type': 'Person',
              name: 'লিখন শেখ',
              url: 'https://github.com/likhonsheikh',
            },
            datePublished: publishDate,
            dateModified: modifiedDate,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': canonicalUrl,
            },
          }),
        }}
      />
    </Head>
  );
}