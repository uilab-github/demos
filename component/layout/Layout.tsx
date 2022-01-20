import CustomHead from './CustomHead';
import { FooterMain, FooterDemo } from './Footer';
import classes from './Layout.module.css';

type TLayout = {
  title: string;
  children: React.ReactNode;
  TopNavBar?: () => JSX.Element;
};

export const LayoutDemo = ({ title, children, TopNavBar }: TLayout) => {
  return (
    <div className={classes.layout}>
      <CustomHead title={title} />
      {TopNavBar && <TopNavBar />}
      <main className={classes.main}>{children}</main>
      <FooterDemo />
    </div>
  );
};

export const LayoutMain = ({ title, children, TopNavBar }: TLayout) => {
  return (
    <div className={classes.layout}>
      <CustomHead title={title} />
      {TopNavBar && <TopNavBar />}
      <main className={classes.mainLarge}>{children}</main>
      <FooterMain />
    </div>
  );
};
