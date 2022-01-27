import CardFlip from './CardFlip';
import classes from './CardView.module.css';

const focusOn = (content: string, startIndex: number, endIndex: number) => {
  return (
    <>
      <span className={classes.notFocusOn}>{content.slice(0, startIndex)}</span>
      <span className={classes.focusOn}>
        {content.slice(startIndex, endIndex)}
      </span>
      <span className={classes.notFocusOn}>{content.slice(endIndex)}</span>
      {content.length === endIndex - startIndex && (
        <span className={classes.focusOnTail}>{` (all sentence)`}</span>
      )}
    </>
  );
};

type TCardFrontFormatter = {
  title?: React.ReactNode;
  comment: React.ReactNode;
};

const CardFrontFormatter = ({ title, comment }: TCardFrontFormatter) => (
  <div className={classes.card}>
    <span>
      <span className={classes.green}>Title: </span>
      <br />
      {title}
    </span>
    <br />
    <span>
      <span className={classes.blue}>Comment: </span>
      <br />
      {comment}
    </span>
    <br />
    <span>
      <span className={classes.red}>Question: </span>
      <br />
      Is this comment <span className={classes.italic}>offensive?</span> <br />
      If so, <span className={classes.italic}> who is the target? </span>
      <br />
    </span>
  </div>
);

type TCardBackFormatter = {
  isOffensive?: boolean;
  offensiveSpan?: React.ReactNode;
  target?: string;
  targetGroup?: string;
  taggedComment?: React.ReactNode;
};

const CardBackFormatter = ({
  offensiveSpan,
  target,
  targetGroup,
  taggedComment,
}: TCardBackFormatter) => {
  const isOffensive = offensiveSpan ? true : false;
  return (
    <div className={classes.card}>
      <span>
        <span>Classification: </span>
        <br />
        <span className={isOffensive ? classes.red : classes.green}>
          {isOffensive ? 'Offensive ' : 'Not offensive '} comment
          <br />
        </span>
        <br />
      </span>
      {target && (
        <>
          <span>
            <span>Target: </span>
            <br />
            <span className={classes.blue}>
              {target}
              <br />
              {targetGroup}
            </span>
          </span>
          <br />
        </>
      )}
      {offensiveSpan && (
        <>
          <span>
            <span>Offensive span: </span>
            <br />
            {offensiveSpan}
          </span>
        </>
      )}

      {/* {targetGroup && (
        <>
          <br />
          <span>
            <b>Target Group: </b>
            <br />
            
          </span>
        </>
      )} */}
      {/* <span>{taggedComment}</span> */}
    </div>
  );
};

interface CardContent {
  front: React.ReactNode;
  back: React.ReactNode;
}

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
        title="집중취재 젠더 갈등 중심 제천여성도서관, 할머니 뜻은? MBC충북NEWS"
        comment="이럴 줄 알았다 어디서 쌩 구라를 쳐"
      />
    ),
    back: (
      <CardBackFormatter
        offensiveSpan={focusOn('이럴 줄 알았다 어디서 쌩 구라를 쳐', 0, 20)}
        target="Not specified"
      />
    ),
  },
  {
    front: (
      <CardFrontFormatter
        title="유해석 박사의 이슬람 특강 - 영국의 브렉시트와 이슬람에 대한 관계?"
        comment="성리학이 꽃을 피웠던 나라가, 이제는 기독교 오염으로...?"
      />
    ),
    back: (
      <CardBackFormatter
        offensiveSpan={focusOn(
          '성리학이 꽃을 피웠던 나라가, 이제는 기독교 오염으로...?',
          20,
          33
        )}
        target="[Group] Religion - Christian"
        targetGroup=""
      />
    ),
  },
  {
    front: (
      <CardFrontFormatter
        title="주호영vs이준석, ‘강남역’ 메시지…당대표 젠더 이슈 ‘전초전’ "
        comment="늙은이들은 젠더이슈에 대해서 그냥 입닥치고 있어ㅋㅋ 지들이 다 망쳐놓고선"
      />
    ),
    back: (
      <CardBackFormatter
        offensiveSpan={focusOn(
          '늙은이들은 젠더이슈에 대해서 그냥 입닥치고 있어ㅋㅋ 지들이 다 망쳐놓고선',
          6,
          40
        )}
        target="[Group] Others - Age"
        targetGroup=""
      />
    ),
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
