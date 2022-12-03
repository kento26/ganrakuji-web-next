import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { pageview } from 'lib/gtag';
import { config } from 'lib/nextSeoConfig';

import 'styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <DefaultSeo {...config} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
