import classes from './TopNavBarMain.module.css';
import TopNavElement from './TopNavElement';
import { useState } from 'react';

const TopNavBarMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  const TopNavElementList = (
    <ul>
      <TopNavElement name="Home" link="http://uilab.kr/" />
      <TopNavElement name="Members" link="http://uilab.kr/members" />
      <TopNavElement name="Research" link="http://uilab.kr/research" />
      <TopNavElement name="Links" link="http://uilab.kr/links" />
      <TopNavElement name="Contact" link="http://uilab.kr/contact" />
    </ul>
  );

  return (
    <header className={classes.header}>
      <div className={classes.padding}>
        <div className={classes.paddingText}>
          <a href={'http://uilab.kr/'}>
            <span className={classes.paddingTextBold}>{'KAIST'}</span>
            {'Users & Information Lab'}
          </a>
        </div>
      </div>
      <div className={classes.content}>
        {/* <a href="https://uilab.kr/"> */}
        <div className={classes.logoText}>
          Articles
          {/* USERS {'& '} <br />
          INFORMATION */}
          <div className={classes.dropDown}>
            <div className={classes.droupDownBtn}></div>
            {TopNavElementList}
          </div>
        </div>
        {TopNavElementList}
      </div>
    </header>
  );
};

export default TopNavBarMain;
