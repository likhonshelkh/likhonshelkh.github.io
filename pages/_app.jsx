import '../styles/globals.css';
import Layout from '../components/Layout';
import { ThemeProvider, useTheme } from 'next-themes';
import { Noto_Sans_Bengali } from '@next/font/google';
import { GeistProvider, CssBaseline } from '@geist-ui/core';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bengali',
});

const geistFontVariables = `${GeistSans.variable} ${GeistMono.variable}`;

function GeistThemeBridge({ children }) {
  const { resolvedTheme, theme } = useTheme();
  const activeTheme = resolvedTheme || theme || 'light';
  const themeType = activeTheme === 'dark' ? 'dark' : 'light';

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      {children}
    </GeistProvider>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <GeistThemeBridge>
        <main
          className={`${notoSansBengali.variable} ${geistFontVariables} font-sans`}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </GeistThemeBridge>
    </ThemeProvider>
  );
}

export default MyApp;
