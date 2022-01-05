import React from 'react';
import classes from './MdxWrapper.module.css';
import { editorStyle } from 'styles/editorStyle';
import { MDXProvider } from '@mdx-js/react';
import { MDXProps } from 'mdx/types';

type TMdxWrapper = {
  MdxContent: (props: MDXProps) => JSX.Element;
};

const MdxWrapper = ({ MdxContent }: TMdxWrapper) => {
  return (
    <div className={classes.contentContainer}>
      <MDXProvider components={editorStyle}>
        <MdxContent />
      </MDXProvider>
    </div>
  );
};

export default MdxWrapper;
