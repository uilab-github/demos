import classes from './TopNavBarMain.module.css';

const TopNavBarMain = () => {
  return (
    <header className={classes.header}>
      <div className={classes.padding}>
        <div className={classes.paddingText}>
          <span className={classes.paddingTextBold}>{'KAIST'}</span>
          {'Users & Information Lab'}
        </div>
      </div>
      <div className={classes.content}>
        {/* <a href="https://uilab.kr/"> */}
        <div className={classes.logoText}>
          Demos
          {/* Users {'& '}
          INFORMATION */}
        </div>
        {/* </a> */}
      </div>
    </header>
  );
};

export default TopNavBarMain;
