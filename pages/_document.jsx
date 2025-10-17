import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/geist@1/dist/fonts/geist-sans.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/geist@1/dist/fonts/geist-mono.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}