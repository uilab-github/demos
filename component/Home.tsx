import React from 'react';
import { NextPage } from 'next';
import HomeContent from '../post/homeContent.mdx';
import Layout from './layout/Layout';
import classes from './Home.module.css';

const Home: NextPage = () => {
  return (
    <Layout title={'U&I Lab Demo'}>
      <div className={classes.contentContainer}>
        <HomeContent />
      </div>
    </Layout>
  );
};

export default Home;
