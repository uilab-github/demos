import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerInliner}>
        <div>
          © Copyright 2021 | Users {'&'} Information Lab. <br /> U{'&'}I Lab.,
          Room 4417, E3-1 Computer Science Building, <br />
          KAIST, 291 Daehak-ro, Yuseong-gu, Daejeon 34141, South Korea
        </div>
        <div>
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

export default Footer;
