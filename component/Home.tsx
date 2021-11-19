import React from 'react';
import { NextPage } from 'next';
import HomeContent from '../post/homeContent.mdx';
import Layout from './layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout title={'U&I Lab Demo'}>
      <HomeContent />
    </Layout>
  );
};

export default Home;
