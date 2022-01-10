import { title } from 'process';
import CardFlip from './CardFlip';
import classes from './CardView.module.css';
import {
  WordTagRed,
  WordTagCyan,
  WordTagEmerald,
  WordTagFuchsia,
  WordTagPink,
} from './WordTag';

interface CardContent {
  front: React.ReactNode;
  back: React.ReactNode;
}

type TCardFrontFormatter = {
  title?: React.ReactNode;
  comment: React.ReactNode;
};

const CardFrontFormatter = ({ title, comment }: TCardFrontFormatter) => (
  <div className={classes.card}>
    <span>
      <b>Title: </b>
      {title}
    </span>
    <br />
    <span>
      <b>Comment: </b>
      {comment}
    </span>
    <br />
    {/* <span>
      <b>Question: </b>
      Is this comment <span className={classes.red}>offensive?</span> <br />
      <span className={classes.red}> If offensive, who is the target? </span>
    </span> */}
  </div>
);

type TCardBackFormatter = {
  isAggressive?: boolean;
  targetGroup?: string;
  taggedComment: React.ReactNode;
};

const CardBackFormatter = ({
  isAggressive,
  targetGroup,
  taggedComment,
}: TCardBackFormatter) => (
  <div className={classes.card}>
    <span>
      <b>Classification: </b>
      The comment is aggressive.
    </span>
    <br />
    {targetGroup && (
      <>
        <span>
          <b>Target Group: </b>
          {targetGroup}
        </span>
        <br />
      </>
    )}
    <span>{taggedComment}</span>
  </div>
);

const cardData: CardContent[] = [
  {
    front: (
      <CardFrontFormatter
        title="Not offensive title"
        comment="Not offensive comment"
      />
    ),
    back: <CardBackFormatter taggedComment={`Tagged not offensive comment`} />,
  },
  {
    front: (
      <CardFrontFormatter
        title="[100분토론] 젠더갈등, 대책은 무엇인가? | 정준희 | 신지예 | 이준석"
        comment="대한민국 여자들 죄다 군대 보내버려 잡소리할거면"
      />
    ),
    back: <CardBackFormatter taggedComment={`Card2 Back`} />,
  },
  {
    front: (
      <CardFrontFormatter
        title="베트남전 민간인 학살 책임…대한민국에 묻겠습니다"
        comment="좌파정권이후로 나라 개박살난다."
      />
    ),
    back: <CardBackFormatter taggedComment={`Card3 Back`} />,
  },
  {
    front: (
      <CardFrontFormatter
        title="주호영vs이준석, ‘강남역’ 메시지…당대표 젠더 이슈 ‘전초전’ "
        comment="늙은이들은 젠더이슈에 대해서 그냥 입닥치고 있어ㅋㅋ 지들이 다 망쳐놓고선"
      />
    ),
    back: <CardBackFormatter taggedComment={`Card4 Back`} />,
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
