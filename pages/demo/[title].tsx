import { GetStaticPaths, GetStaticProps } from 'next';
// import { useRouter } from 'next/router';
import EthnicBiasDemo from '../../post/EthnicBiasDemo.mdx';
import Wrapper from 'component/MdxWrapper';

const titlesToPage = {
  'Mitigating-Language-Dependent-Ethnic-Bias-in-BERT': EthnicBiasDemo,
};

type Props = {
  title?: string;
  errors?: string;
};

const Demos = ({ title, errors }: Props) => {
  if (errors) {
    return <div>Error Occur: {errors}</div>;
  }
  const Content = titlesToPage[title];
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
    paths: getPaths(Object.keys(titlesToPage)),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const title = params?.title as string;
    return { props: { title: title } };
  } catch (Error) {
    return { props: { errors: Error.message } };
  }
};
