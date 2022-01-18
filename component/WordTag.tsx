import classes from 'component/WordTag.module.css';

type TWordTag = {
  content: React.ReactNode;
  tag: React.ReactNode;
  contentColorClass?: string;
  tagColorClass?: string;
  isBigger?: boolean;
  isSmaller?: boolean;
};

const WordTag = ({
  content,
  tag,
  contentColorClass,
  tagColorClass,
  isBigger,
}: TWordTag) => {
  return (
    <span className={classes.wrapper}>
      {isBigger ? (
        <>
          <span className={`${classes.biggerContent} ${contentColorClass}`}>
            {content}
          </span>
          <span className={`${classes.tag} ${tagColorClass}`}>{tag}</span>
        </>
      ) : (
        <span className={classes.smallWrapper}>
          <span className={`${classes.content} ${contentColorClass}`}>
            {content}
          </span>
          <span className={`${classes.tag} ${tagColorClass}`}>{tag}</span>
        </span>
      )}
    </span>
  );
};

export const WordTagRed = ({ content, tag, isBigger }: TWordTag) => (
  <WordTag
    content={content}
    tag={tag}
    contentColorClass={classes.contentRed}
    tagColorClass={classes.tagRed}
    isBigger={isBigger}
  />
);

export const WordTagYellow = ({ content, tag, isBigger }: TWordTag) => (
  <WordTag
    content={content}
    tag={tag}
    contentColorClass={classes.contentYellow}
    tagColorClass={classes.tagYellow}
    isBigger={isBigger}
  />
);

export default WordTagRed;
