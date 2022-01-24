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
    summaryImgPath: '/summary/Mitigating.png',
    summaryTitle: 'Mitigating Language Dependent Ethnic Bias in BERT',
    summaryShort: `Mitigating ethnic bias by using a multilingual model,
       and using contextual word alignment of two monolingual models`,
    summaryLong: `We study ethnic bias and how it varies across languages 
    by analyzing and mitigating ethnic bias in monolingual BERT for English, German, Spanish, Korean, Turkish, and Chinese. 
    We compare our proposed methods with monolingual BERT and show that these methods effectively alleviate the ethnic bias.`,
  },
  'Korean-Hate-Speech-Dataset': {
    title: 'U&I Lab Demo',
    mdxContent: KoreanHateSpeechDatasetDemo,
    pageUrl: '/demo/Korean-Hate-Speech-Dataset',
    summaryImgPath: '/summary/Hatespan.png',
    summaryTitle: 'Korean Hate Speech Dataset',
    summaryShort: `A dataset that classify not only offensiveness of a sentence but also hate span`,
    summaryLong: `This dataset labels the aggression and hate targets of Korean news comments. 
    This dataset discriminates offensive and not offensive for each comment as binary.
    Also, it finds hate span, the basis of classification, and classifies it into target-term, predicate-term, and no-span hate speech.`,
  },
};

export default pageUrlToPage;
