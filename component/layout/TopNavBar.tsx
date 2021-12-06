import classes from './TopNavBar.module.css';
import TopNavElement from './TopNavElement';
import GithubIcon from 'public/github.svg';
import PaperIcon from 'public/paper.svg';

const TopNavBar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.padding}>
        <div className={classes.paddingText}>
          <span className={classes.paddingTextBold}>{'KAIST'}</span>
          {'Users & Information Lab'}
        </div>
      </div>
      <div className={classes.content}>
        <a href="https://uilab.kr/" className={classes.logo}>
          <div className={classes.logoImage}></div>
          <div className={classes.logoText}>
            USERS {'&'} <br />
            INFORMATION
          </div>
        </a>
        <ul>
          <TopNavElement name="Paper" link="https://arxiv.org/abs/2109.05704">
            <PaperIcon />
          </TopNavElement>
          <TopNavElement name="Code" link="https://github.com/jaimeenahn">
            <GithubIcon />
          </TopNavElement>
        </ul>
      </div>
    </header>
  );
};

export default TopNavBar;
