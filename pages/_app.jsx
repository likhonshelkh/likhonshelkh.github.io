import '../styles/globals.css';
import Layout from '../components/Layout';
import { ThemeProvider } from 'next-themes';
import { Noto_Sans_Bengali } from '@next/font/google';

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bengali',
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <main className={`${notoSansBengali.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </ThemeProvider>
  );
}

export default MyApp;