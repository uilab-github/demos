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
      <b className={classes.green}>Title: </b>
      <br />
      {title}
    </span>
    <br />
    <span>
      <b className={classes.blue}>Comment: </b>
      <br />
      {comment}
    </span>
    <br />
    <span>
      <b className={classes.red}>Question: </b>
      <br />
      Is this comment <span className={classes.bold}>offensive?</span> If so,{' '}
      <span className={classes.bold}> who is the target? </span>
      <br />
    </span>
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
        title="젠더와 컨버터! 이제 더이상 헷갈리지 마세요!"
        comment="dvi to hdmi 젠더는 어디에서 구할 수 있나요? 구하기가 매우 어렵네요."
      />
    ),
    back: <CardBackFormatter taggedComment={`Tagged not offensive comment`} />,
  },
  {
    front: (
      <CardFrontFormatter
        title="주호영vs이준석, ‘강남역’ 메시지…당대표 젠더 이슈 ‘전초전’ "
        comment="늙은이들은 젠더이슈에 대해서 그냥 입닥치고 있어ㅋㅋ 지들이 다 망쳐놓고선"
      />
    ),
    // 공격적 - 집단 - 기타 - 나이
    back: <CardBackFormatter taggedComment={`Card4 Back`} />,
  },

  {
    front: (
      <CardFrontFormatter
        title="[100분토론] 젠더갈등, 대책은 무엇인가? | 정준희 | 신지예 | 이준석"
        comment="대한민국 여자들 죄다 군대 보내버려 잡소리할거면"
      />
    ),
    // 공격적 - 집단 - 성 정체성  - 여성,
    back: <CardBackFormatter taggedComment={`Card2 Back`} />,
  },
  {
    front: (
      <CardFrontFormatter
        title="집중취재 젠더 갈등 중심 제천여성도서관, 할머니 뜻은? MBC충북NEWS"
        comment="이럴 줄 알았다 어디서 쌩 구라를 쳐"
      />
    ),
    back: <CardBackFormatter taggedComment={`Card3 Back`} />,
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
