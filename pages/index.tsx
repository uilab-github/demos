import { DemoListLayout } from 'component/layout/Layout';
import DemoCardListView from 'component/DemoCardListView';

const HomePage = () => {
  return (
    <DemoListLayout title={'Demos - U&I Lab '}>
      <DemoCardListView />
    </DemoListLayout>
  );
};

export default HomePage;
