import { LayoutMain } from 'component/layout/Layout';
import DemoCardListView from 'component/DemoCardListView';
import TopNavBarMain from 'component/layout/TopNavBarMain';

const HomePage = () => {
  return (
    <LayoutMain title={'Demos - U&I Lab '} TopNavBar={TopNavBarMain}>
      <DemoCardListView />
    </LayoutMain>
  );
};

export default HomePage;
