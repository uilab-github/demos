import { ReactNode, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import classes from './CardFlip.module.css';

type TCardFilp = {
  Front: React.ReactNode;
  Back: React.ReactNode;
};

const CardFlip = ({ Front, Back }: TCardFilp) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFocusMobile, setIsFocusForMobile] = useState(false);

  const cardFront = (children: ReactNode) => {
    return <div className={classes.cardFront}>{children}</div>;
  };

  const cardBack = (children: ReactNode) => {
    return <div className={classes.cardBack}>{children}</div>;
  };

  return (
    <div
      className={classes.card}
      onMouseEnter={() => {
        console.log('on mouse Enter');
        setIsFlipped((status) => (isFocusMobile ? status : true));
      }}
      onMouseLeave={() => {
        console.log('on mouse Leave');
        setIsFlipped((status) => (isFocusMobile ? status : false));
      }}
      onTouchStart={() => {
        console.log('on touch start');
        setIsFocusForMobile(true);
        setIsFlipped((status) => !status);
      }}
    >
      <ReactCardFlip
        cardZIndex="1px"
        isFlipped={isFlipped}
        flipDirection="horizontal"
        containerClassName={classes.cardContainer}
        flipSpeedBackToFront={0.8}
        flipSpeedFrontToBack={0.8}
      >
        {cardFront(Front)}
        {cardBack(Back)}
      </ReactCardFlip>
    </div>
  );
};

export default CardFlip;
