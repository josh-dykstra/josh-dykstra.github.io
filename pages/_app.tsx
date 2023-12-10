import type { AppProps } from 'next/app';
import classnames from 'classnames';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

import { Roboto_Mono as RobotoMono } from 'next/font/google';

import Navigation from '../lib/components/navigation';
import '../styles/globals.scss';
import styles from '../styles/main.module.scss';

const robotoMono = RobotoMono({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Josh Dykstra</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={classnames(styles.container, robotoMono.className)}>
        <Navigation />
        { /* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
        <Analytics />
      </main>
    </>
  );
}
