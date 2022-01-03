import React from 'react';
import { NextPage } from 'next';
import HomeContent from '../post/homeContent.mdx';
import Layout from './layout/Layout';
import classes from './Home.module.css';
import { editorStyle } from 'styles/editorStyle';
import { MDXProvider } from '@mdx-js/react';

const Home: NextPage = () => {
  return (
    <Layout title={'U&I Lab Demo'}>
      <div className={classes.contentContainer}>
        <MDXProvider components={editorStyle}>
          <HomeContent />
        </MDXProvider>
      </div>
    </Layout>
  );
};

export default Home;
