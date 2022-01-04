import React from 'react';
import Layout from './layout/Layout';
import classes from './Home.module.css';
import { editorStyle } from 'styles/editorStyle';
import { MDXProvider } from '@mdx-js/react';

const MdxWrapper = (Content: JSX.Element) => {
  return (
    <Layout title={'U&I Lab Demo'}>
      <div className={classes.contentContainer}>
        <MDXProvider components={editorStyle}>{Content}</MDXProvider>
      </div>
    </Layout>
  );
};

export default MdxWrapper;
