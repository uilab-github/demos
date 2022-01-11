import classes from 'component/WordTag.module.css';

type TWordTag = {
  content: React.ReactNode;
  tag: React.ReactNode;
  contentColorClass?: string;
  tagColorClass?: string;
  isBigger?: boolean;
};

const WordTag = ({
  content,
  tag,
  contentColorClass,
  tagColorClass,
  isBigger,
}: TWordTag) => {
  return isBigger ? (
    <span className={`${classes.biggerContent} ${contentColorClass}`}>
      {content}
      <span className={`${classes.tag} ${tagColorClass}`}>{tag}</span>
    </span>
  ) : (
    <span className={`${classes.content} ${contentColorClass}`}>
      {content}
      <span className={`${classes.tag} ${tagColorClass}`}>{tag}</span>
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

export const WordTagOrange = ({ content, tag, isBigger }: TWordTag) => (
  <WordTag
    content={content}
    tag={tag}
    contentColorClass={classes.contentOrange}
    tagColorClass={classes.tagOrange}
    isBigger={isBigger}
  />
);

export const WordTagPink = ({ content, tag, isBigger }: TWordTag) => (
  <WordTag
    content={content}
    tag={tag}
    contentColorClass={classes.contentPink}
    tagColorClass={classes.tagPink}
    isBigger={isBigger}
  />
);

export const WordTagFuchsia = ({ content, tag, isBigger }: TWordTag) => (
  <WordTag
    content={content}
    tag={tag}
    contentColorClass={classes.contentFuchsia}
    tagColorClass={classes.tagFuchsia}
    isBigger={isBigger}
  />
);

export const WordTagCyan = ({ content, tag, isBigger }: TWordTag) => (
  <WordTag
    content={content}
    tag={tag}
    contentColorClass={classes.contentCyan}
    tagColorClass={classes.tagCyan}
    isBigger={isBigger}
  />
);

export const WordTagEmerald = ({ content, tag, isBigger }: TWordTag) => (
  <WordTag
    content={content}
    tag={tag}
    contentColorClass={classes.contentEmerald}
    tagColorClass={classes.tagEmerald}
    isBigger={isBigger}
  />
);

export default WordTagRed;
