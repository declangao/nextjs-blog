import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';
import Layout from '@/components/layout/layout';
import config from '@/config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
        <title>{config.siteName}</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
