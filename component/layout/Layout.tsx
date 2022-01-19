import CustomHead from './CustomHead';
import Footer from './Footer';
import classes from './Layout.module.css';

type TLayout = {
  title: string;
  children: React.ReactNode;
  TopNavBar?: () => JSX.Element;
};

const Layout = ({ title, children, TopNavBar }: TLayout) => {
  return (
    <div className={classes.layout}>
      <CustomHead title={title} />
      {TopNavBar && <TopNavBar />}
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
};

export const DemoListLayout = ({ title, children, TopNavBar }: TLayout) => {
  return (
    <div className={classes.layout}>
      <CustomHead title={title} />
      {TopNavBar && <TopNavBar />}
      <main className={classes.mainLarge}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
