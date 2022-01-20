import { LayoutDemo } from './Layout';
import pageMap from 'data/pageMap';
import MdxWrapper from 'component/MdxWrapper';
import TopNavBarForDemo from './TopNavBar';

const DemoPageLayout = (url: string) => {
  const { title, mdxContent, githubUrl, paperUrl } = pageMap[url];

  const TopNavBar = () => (
    <TopNavBarForDemo githubUrl={githubUrl} paperUrl={paperUrl} />
  );

  return (
    <LayoutDemo title={title} TopNavBar={TopNavBar}>
      <MdxWrapper MdxContent={mdxContent}></MdxWrapper>
    </LayoutDemo>
  );
};

export default DemoPageLayout;
