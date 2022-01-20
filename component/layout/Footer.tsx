import classes from './Footer.module.css';

export const FooterDemo = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerInliner}>
        <div className={classes.footerContent}>
          <div>
            © Copyright 2021 | Users {'&'} Information Lab. U{'&'}I Lab.,
          </div>
          <div>
            Room 4417, E3-1 Computer Science Building, <br />
          </div>
          <div>
            KAIST, 291 Daehak-ro, Yuseong-gu, Daejeon 34141, South Korea
          </div>
        </div>
        <div className={classes.footerContent}>
          <a
            className={classes.editLink}
            href="https://github.com/quark325/uilab-visualization-demo"
          >
            Edit this page
          </a>
        </div>
      </div>
    </div>
  );
};

export const FooterMain = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerInlinerLonger}>
        <div className={classes.footerContent}>
          <div>
            © Copyright 2021 | Users {'&'} Information Lab. U{'&'}I Lab.,
          </div>
          <div>
            Room 4417, E3-1 Computer Science Building, <br />
          </div>
          <div>
            KAIST, 291 Daehak-ro, Yuseong-gu, Daejeon 34141, South Korea
          </div>
        </div>
        <div className={classes.footerContent}>
          <a
            className={classes.editLink}
            href="https://github.com/quark325/uilab-visualization-demo"
          >
            Edit this page
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterDemo;
