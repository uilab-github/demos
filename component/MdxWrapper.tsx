import React from 'react';
import HomeContent from '../post/homeContent.mdx';
import Layout from './layout/Layout';
import classes from './Home.module.css';
import { editorStyle } from 'styles/editorStyle';
import { MDXProvider } from '@mdx-js/react';

type TProps = {
  Content: (props: any) => JSX.Element;
};

const Home = (Content) => {
  return (
    <Layout title={'U&I Lab Demo'}>
      <div className={classes.contentContainer}>
        <MDXProvider components={editorStyle}>
          <HomeContent />
          {/* <Content /> */}
        </MDXProvider>
      </div>
    </Layout>
  );
};

export default Home;
