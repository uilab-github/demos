import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import HomeContent from '../post/homeContent.mdx';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>U{'&'}I Lab Demo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>

      <main>
        <HomeContent />
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
