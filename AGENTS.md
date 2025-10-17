# AGENTS.md

এই প্রজেক্টটি একটি উচ্চ-স্কেলযোগ্য, সরল এবং SEO-অপটিমাইজড MDX ব্লগ প্ল্যাটফর্ম যা বাংলা ভাষায় কন্টেন্ট তৈরির জন্য ডিজাইন করা হয়েছে।

## Project Overview

এটি একটি Next.js ভিত্তিক MDX ব্লগ সিস্টেম যা নিম্নলিখিত বৈশিষ্ট্যগুলি সমর্থন করে:

- **বাংলা ভাষা সাপোর্ট**: ডিফল্ট ভাষা বাংলা, সঠিক ফন্ট রেন্ডারিং সহ
- **উচ্চ স্কেলেবিলিটি**: হাজার হাজার ব্লগ পোস্ট হ্যান্ডল করতে সক্ষম
- **১০০% SEO অপটিমাইজড**: সম্পূর্ণ OG মেটা ট্যাগ, Twitter কার্ড, এবং স্ট্রাকচার্ড ডেটা
- **ব্যানার সাপোর্ট**: ফিচার্ড ইমেজ এবং কাস্টম ব্যানার সাপোর্ট
- **মোবাইল ফ্রেন্ডলি**: সম্পূর্ণ রেসপন্সিভ ডিজাইন
- **সরল এবং পরিষ্কার**: সহজ কোড স্ট্রাকচার এবং মেইনটেইনেবল

## Setup Commands

### Installation

```bash
# Clone repository
git clone https://github.com/likhonshelkh/likhonshelkh.github.io.git
cd likhonshelkh.github.io

# Install dependencies
npm install
# or
pnpm install
# or
yarn install
```

### Development

```bash
# Start development server
npm run dev
# or
pnpm dev

# Build for production
npm run build

# Start production server
npm run start
```

### Deployment

```bash
# Deploy to GitHub Pages
npm run deploy

# Export static site
npm run export
```

## Required Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next-mdx-remote": "^4.4.1",
    "gray-matter": "^4.0.3",
    "remark-gfm": "^3.0.1",
    "rehype-slug": "^6.0.0",
    "rehype-autolink-headings": "^7.0.0",
    "rehype-prism-plus": "^1.6.0",
    "@next/font": "^14.0.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.3.0",
    "@tailwindcss/typography": "^0.5.10",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.31"
  }
}
```

## Project Structure

```
├── content/
│   └── blog/
│       ├── example-blog.mdx      # Example blog post
│       └── my-first-post.mdx     # Sample posts
├── pages/
│   ├── blog/
│   │   ├── [slug].jsx           # Dynamic blog post page
│   │   └── index.jsx            # Blog listing page
│   ├── _app.jsx                 # App wrapper with Bengali font
│   └── index.jsx                # Homepage
├── components/
│   ├── Layout.jsx               # Main layout with footer
│   ├── SEO.jsx                  # SEO component
│   └── Banner.jsx               # Banner component
├── lib/
│   └── mdx.js                   # MDX utilities
├── public/
│   ├── fonts/                   # Bengali fonts
│   └── images/                  # Images and banners
├── styles/
│   └── globals.css              # Global styles with Bengali font
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind configuration
└── AGENTS.md                    # This file
```

## Code Style Guidelines

### JavaScript/React Conventions

- Use **functional components** with hooks
- **ES6+ syntax** preferred
- Use **single quotes** for strings
- **2 spaces** indentation
- Use **const/let** instead of var
- Prefer **arrow functions**
- Use **destructuring** where possible

### File Naming

- Components: `PascalCase.jsx` (e.g., `BlogPost.jsx`)
- Utilities: `camelCase.js` (e.g., `mdx.js`)
- MDX files: `kebab-case.mdx` (e.g., `my-blog-post.mdx`)
- Pages: Next.js convention (`[slug].jsx`)

### Component Structure

```jsx
// 1. Imports
import React from 'react';
import Link from 'next/link';

// 2. Component definition
export default function ComponentName({ prop1, prop2 }) {
  // 3. State and hooks
  const [state, setState] = useState(null);
  
  // 4. Effects
  useEffect(() => {
    // side effects
  }, []);
  
  // 5. Event handlers
  const handleClick = () => {
    // handler logic
  };
  
  // 6. Return JSX
  return (
    <div>
      {/* Component content */}
    </div>
  );
}
```

## Bengali Language Configuration

### Font Setup

বাংলা টেক্সট রেন্ডারিংয়ের জন্য **Noto Sans Bengali** বা **Hind Siliguri** ফন্ট ব্যবহার করুন:

```jsx
// pages/_app.jsx
import { Noto_Sans_Bengali } from '@next/font/google';

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bengali',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${notoSansBengali.variable} font-bengali`}>
      <Component {...pageProps} />
    </main>
  );
}
```

### Tailwind Configuration

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        bengali: ['var(--font-bengali)', 'system-ui', 'sans-serif'],
      },
    },
  },
};
```

## SEO and Meta Tags Requirements

### Required Meta Tags for Every Page

প্রতিটি পেজে অবশ্যই নিম্নলিখিত মেটা ট্যাগগুলি থাকতে হবে:

```jsx
<Head>
  {/* Basic Meta Tags */}
  <title>{title} | লিখন শেখ</title>
  <meta name="description" content={description} />
  <meta name="author" content="লিখন শেখ" />
  <meta name="keywords" content={keywords.join(', ')} />
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  
  {/* Open Graph Meta Tags */}
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="bn_BD" />
  <meta property="og:site_name" content="লিখন শেখ" />
  
  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
  <meta name="twitter:creator" content="@likhonsheikh" />
  
  {/* Additional SEO */}
  <link rel="canonical" href={canonicalUrl} />
  <meta name="robots" content="index, follow" />
  <meta name="language" content="Bengali" />
  
  {/* Article Specific */}
  <meta property="article:published_time" content={publishDate} />
  <meta property="article:modified_time" content={modifiedDate} />
  <meta property="article:author" content="লিখন শেখ" />
  {tags.map(tag => (
    <meta property="article:tag" content={tag} key={tag} />
  ))}
</Head>
```

### Structured Data (JSON-LD)

প্রতিটি ব্লগ পোস্টে JSON-LD স্ট্রাকচার্ড ডেটা যুক্ত করুন:

```jsx
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": title,
  "description": description,
  "image": ogImage,
  "author": {
    "@type": "Person",
    "name": "লিখন শেখ",
    "url": "https://github.com/likhonshelkh"
  },
  "datePublished": publishDate,
  "dateModified": modifiedDate,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": canonicalUrl
  }
})}
</script>
```

## Banner Configuration

### Banner Component Usage

```jsx
// components/Banner.jsx
export default function Banner({ image, title, subtitle }) {
  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <div className="p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
          {subtitle && <p className="text-xl">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
```

### Banner in MDX Frontmatter

```yaml
---
title: "আমার প্রথম পোস্ট"
banner:
  image: "/images/banner.jpg"
  alt: "ব্যানার বর্ণনা"
---
```

## Footer Social Icons

### Footer Component

ফুটারে নিম্নলিখিত সোশ্যাল আইকনগুলি অন্তর্ভুক্ত করুন:

```jsx
// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">লিখন শেখ</p>
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} সর্বস্বত্ব সংরক্ষিত</p>
          </div>
          
          <div className="flex space-x-6">
            {/* Telegram */}
            <a 
              href="https://t.me/likhonsheikh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Telegram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
            </a>
            
            {/* GitHub */}
            <a 
              href="https://github.com/likhonshelkh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

## Mobile Responsive Guidelines

### Breakpoints

```css
/* Tailwind Breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### Responsive Patterns

```jsx
{/* Mobile-first approach */}
<div className="text-base md:text-lg lg:text-xl">
  {/* Text scales up on larger screens */}
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>

<div className="px-4 md:px-8 lg:px-16">
  {/* Padding increases on larger screens */}
</div>
```

### Test on Multiple Devices

```bash
# Test responsive design
npm run dev

# Then test on:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px
```

## MDX Frontmatter Schema

### Required Fields

প্রতিটি MDX ফাইলে নিম্নলিখিত ফিল্ডগুলি থাকতে হবে:

```yaml
---
title: "পোস্টের শিরোনাম"                    # Required
author: "লিখন শেখ"                          # Required
date: "2025-10-17"                          # Required (YYYY-MM-DD)
readTime: 5                                 # Required (minutes)
category: "ওয়েব ডেভেলপমেন্ট"               # Required
tags: ["React", "Next.js", "বাংলা"]        # Required (array)
excerpt: "সংক্ষিপ্ত বর্ণনা"                  # Required (150-160 chars)
featuredImage: "/images/post.jpg"           # Required
banner:
  image: "/images/banner.jpg"               # Optional
  alt: "ব্যানার বর্ণনা"                     # Optional
seo:
  description: "SEO বর্ণনা"                 # Required (150-160 chars)
  keywords: ["keyword1", "keyword2"]        # Required
  ogImage: "/images/og-image.jpg"           # Required (1200x630)
  canonicalUrl: "https://site.com/post"     # Required
  publishDate: "2025-10-17T10:00:00Z"      # Required (ISO 8601)
  modifiedDate: "2025-10-17T15:00:00Z"     # Optional
---
```

## Testing Instructions

### Before Committing

```bash
# 1. Build the project
npm run build

# 2. Check for TypeScript/ESLint errors
npm run lint

# 3. Test locally
npm run start

# 4. Check mobile responsiveness (Chrome DevTools)
# 5. Verify all links work
# 6. Check SEO meta tags (View Page Source)
# 7. Test Open Graph preview (https://www.opengraph.xyz/)
```

### SEO Testing Checklist

- [ ] Title tag present and unique
- [ ] Meta description 150-160 characters
- [ ] OG image 1200x630px
- [ ] All images have alt text
- [ ] Canonical URL set correctly
- [ ] Structured data validates (https://validator.schema.org/)
- [ ] Mobile-friendly test passes (https://search.google.com/test/mobile-friendly)
- [ ] Page speed > 90 (https://pagespeed.web.dev/)

### Bengali Font Testing

- [ ] Bengali text renders correctly
- [ ] No broken characters (য-ফলা, র-ফলা, etc.)
- [ ] Font loads on all devices
- [ ] Fallback fonts work

## Performance Optimization

### Image Optimization

```jsx
import Image from 'next/image';

// Use Next.js Image component
<Image
  src="/images/post.jpg"
  alt="বর্ণনা"
  width={1200}
  height={630}
  quality={85}
  loading="lazy"
/>
```

### Code Splitting

```jsx
// Lazy load components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>লোড হচ্ছে...</p>,
});
```

### Static Generation

```jsx
// Use getStaticProps for blog posts
export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    props: { post },
    revalidate: 3600, // Revalidate every hour
  };
}
```

## Deployment Checklist

### Pre-deployment

- [ ] All environment variables set
- [ ] Build succeeds without errors
- [ ] All tests pass
- [ ] SEO meta tags verified
- [ ] Mobile responsiveness checked
- [ ] Performance optimized
- [ ] Bengali fonts loading correctly
- [ ] Social links working

### GitHub Pages Deployment

```bash
# Build and export
npm run build
npm run export

# Deploy to GitHub Pages
git add .
git commit -m "Deploy: [description]"
git push origin main
```

### Post-deployment

- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Images loading
- [ ] Bengali text rendering properly
- [ ] OG meta tags working (test on social media)
- [ ] Analytics tracking (if configured)

## Common Issues and Solutions

### Issue: Bengali fonts not loading

**Solution**: Check font import in `_app.jsx` and verify font files in `/public/fonts/`

### Issue: OG image not showing on social media

**Solution**:

- Verify image is 1200x630px
- Use absolute URL
- Clear social media cache

### Issue: Build fails

**Solution**:

```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Issue: Slow page load

**Solution**:

- Optimize images (use WebP format)
- Enable lazy loading
- Minimize JavaScript bundles
- Use CDN for static assets

## Contact and Support

- **GitHub**: <https://github.com/likhonshelkh>
- **Telegram**: <https://t.me/likhonsheikh>

-----

**Note for AI Agents**: এই প্রজেক্টে কাজ করার সময়, সবসময় বাংলা ভাষা এবং ফন্ট সাপোর্ট নিশ্চিত করুন। প্রতিটি নতুন পেজে সম্পূর্ণ SEO মেটা ট্যাগ এবং OG মেটা যুক্ত করুন। মোবাইল রেসপন্সিভনেস সর্বদা প্রাথমিকতা দিন।
