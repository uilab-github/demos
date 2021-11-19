import CustomHead from './CustomHead';
import TopNavBar from './TopNavBar';

const Layout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <CustomHead title={title} />
      <TopNavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
