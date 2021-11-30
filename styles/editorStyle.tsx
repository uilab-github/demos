import { MDXProviderComponentsProp } from '@mdx-js/react';
import classes from './editorStyle.module.css';

export const editorStyle: MDXProviderComponentsProp = {
  h1: (props) => <h1 className={classes.h1} {...props} />,
  h2: (props) => <h2 className={classes.h2} {...props} />,
};
