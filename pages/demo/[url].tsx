import { GetStaticPaths, GetStaticProps } from 'next';
import DemoPageLayout from 'component/layout/DemoPageLayout';
import pageMap from 'data/pageMap';

type Props = {
  url: string;
};

const Demos = ({ url }: Props) => {
  const Content = pageMap[url];

  return DemoPageLayout(url);
};

export default Demos;

const getPaths = (validUrls: string[]) => {
  return validUrls.map((url) => ({
    params: { url: url },
  }));
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getPaths(Object.keys(pageMap)),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const url = params?.url as string;
  return { props: { url: url } };
};
