import '../styles/globals.css';
import { Noto_Sans_Bengali } from '@next/font/google';
import Layout from '../components/Layout';

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bengali',
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${notoSansBengali.variable} font-bengali`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;