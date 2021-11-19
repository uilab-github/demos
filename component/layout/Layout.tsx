import CustomHead from './CustomHead';
import TopNavBar from './TopNavBar';
import classes from './Layout.module.css';

const Layout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={classes.layout}>
      <CustomHead title={title} />
      <TopNavBar />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
