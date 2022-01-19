import { MDXProps } from 'mdx/types';
import EthnicBiasDemo from '../post/EthnicBiasDemo.mdx';
import KoreanHateSpeechDatasetDemo from '../post/KoreanHateSpeechDatasetDemo.mdx';

export interface SummaryData {
  summaryImgPath?: string;
  summaryTitle?: string;
  summaryShort?: string;
  summaryLong?: string;
  pageUrl?: string;
}

interface PageData extends SummaryData {
  title: string;
  mdxContent: (props: MDXProps) => JSX.Element;
  githubUrl?: string;
  paperUrl?: string;
}

interface PageMap {
  [url: string]: PageData;
}

const pageUrlToPage: PageMap = {
  'Mitigating-Language-Dependent-Ethnic-Bias-in-BERT': {
    title: 'U&I Lab Demo',
    mdxContent: EthnicBiasDemo,
    githubUrl: 'https://github.com/jaimeenahn',
    paperUrl: 'https://arxiv.org/abs/2109.05704',
    pageUrl: '/demo/Mitigating-Language-Dependent-Ethnic-Bias-in-BERT',
    summaryImgPath: '/summary/test.png',
    summaryTitle: 'Mitigating Language Dependent Ethnic Bias in BERT',
    summaryShort: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
    summaryLong: `do eiusmod tempXor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat`,
  },
  'Korean-Hate-Speech-Dataset': {
    title: 'U&I Lab Demo',
    mdxContent: KoreanHateSpeechDatasetDemo,
    pageUrl: '/demo/Korean-Hate-Speech-Dataset',
    summaryImgPath: '/summary/test.png',
    summaryTitle: 'Korean Hate Speech Dataset',
    summaryShort: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
    summaryLong: `do eiusmod tempXor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat`,
  },
};

export default pageUrlToPage;
