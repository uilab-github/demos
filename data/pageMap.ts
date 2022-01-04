import { MDXProps } from 'mdx/types';
import EthnicBiasDemo from '../post/EthnicBiasDemo.mdx';

export interface PageData {
  [url: string]: {
    title: string;
    mdxContent: (props: MDXProps) => JSX.Element;
    githubUrl?: string;
    paperUrl?: string;
  };
}

const pageUrlToPage: PageData = {
  'Mitigating-Language-Dependent-Ethnic-Bias-in-BERT': {
    title: 'U&I Lab Demo',
    mdxContent: EthnicBiasDemo,
    githubUrl: 'https://github.com/jaimeenahn',
    paperUrl: 'https://arxiv.org/abs/2109.05704',
  },
};

export default pageUrlToPage;
