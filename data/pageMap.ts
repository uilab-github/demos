import { MDXProps } from 'mdx/types';
import EthnicBiasDemo from '../post/EthnicBiasDemo.mdx';
import KoreanHateSpeechDatasetDemo from '../post/KoreanHateSpeechDatasetDemo.mdx';

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
  'Korean-Hate-Speech-Dataset': {
    title: 'U&I Lab Demo',
    mdxContent: KoreanHateSpeechDatasetDemo,
  },
};

export default pageUrlToPage;
