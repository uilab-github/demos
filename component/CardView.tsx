import CardFlip from './CardFlip';
import classes from './CardView.module.css';

interface CardContent {
  front: React.ReactNode;
  back: React.ReactNode;
}

const cardData: CardContent[] = [
  {
    front: <div className={classes.card}>Card1 Front</div>,
    back: <div className={classes.card}>Card1 Back</div>,
  },
  {
    front: <div className={classes.card}>Card2 Front</div>,
    back: <div className={classes.card}>Card2 Back</div>,
  },
  {
    front: <div className={classes.card}>Card3 Front</div>,
    back: <div className={classes.card}>Card3 Back</div>,
  },
  {
    front: <div className={classes.card}>Card4 Front</div>,
    back: <div className={classes.card}>Card4 Back</div>,
  },
];

const CardView = () => (
  <div className={classes.cardView}>
    {cardData.map((cardContent, index) => {
      const { front, back } = cardContent;
      return <CardFlip key={index} Front={front} Back={back} />;
    })}
  </div>
);

export default CardView;
