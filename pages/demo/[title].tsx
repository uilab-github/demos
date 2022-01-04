import { GetStaticPaths, GetStaticProps } from 'next';
import Wrapper from 'component/MdxWrapper';
import pageMap from 'data/pageMap';

type Props = {
  title: string;
};

const Demos = ({ title }: Props) => {
  const Content = pageMap[title];
  return Wrapper(<Content />);
};

export default Demos;

const getPaths = (titles: string[]) => {
  return titles.map((title) => ({
    params: { title: title },
  }));
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getPaths(Object.keys(pageMap)),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const title = params?.title as string;
  return { props: { title: title } };
};
