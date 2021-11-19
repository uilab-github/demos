import { ReactElement, ReactNode } from 'react';
import classes from './TopNavElement.module.css';

const TopNavElement = ({
  name,
  link,
  children,
}: {
  name: string;
  link: string;
  children: ReactNode;
}) => {
  return (
    <li>
      <a className={classes.link} href={link}>
        {children}
        <span className={classes.span}>{name}</span>
      </a>
    </li>
  );
};

export default TopNavElement;
