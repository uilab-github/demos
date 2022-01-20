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
    <>
      <CustomHead title={title} />
      <div className={classes.body}>
        {TopNavBar && <TopNavBar />}
        <main className={classes.main}>{children}</main>
      </div>
      <div className={classes.footer}>
        <FooterDemo />
      </div>
    </>
  );
};

export const LayoutMain = ({ title, children, TopNavBar }: TLayout) => {
  return (
    <>
      <CustomHead title={title} />
      <div className={classes.body}>
        {TopNavBar && <TopNavBar />}
        <main className={classes.mainLarge}>{children}</main>
      </div>
      <div className={classes.footer}>
        <FooterMain />
      </div>
    </>
  );
};
