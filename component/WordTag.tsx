import classes from 'component/WordTag.module.css';

type TWordTag = {
  word: string;
  tag: string;
  wordColorClass?: string;
  tagColorClass?: string;
};

const WordTag = ({ word, tag, wordColorClass, tagColorClass }: TWordTag) => {
  return (
    <span className={`${classes.word} ${wordColorClass}`}>
      {word}
      <span className={`${classes.tag} ${tagColorClass}`}>{tag}</span>
    </span>
  );
};

export const WordTagRed = ({ word, tag }: TWordTag) => (
  <WordTag
    word={word}
    tag={tag}
    wordColorClass={classes.wordRed}
    tagColorClass={classes.tagRed}
  />
);

export const WordTagPink = ({ word, tag }: TWordTag) => (
  <WordTag
    word={word}
    tag={tag}
    wordColorClass={classes.wordPink}
    tagColorClass={classes.tagPink}
  />
);

export const WordTagFuchsia = ({ word, tag }: TWordTag) => (
  <WordTag
    word={word}
    tag={tag}
    wordColorClass={classes.wordFuchsia}
    tagColorClass={classes.tagFuchsia}
  />
);

export const WordTagCyan = ({ word, tag }: TWordTag) => (
  <WordTag
    word={word}
    tag={tag}
    wordColorClass={classes.wordCyan}
    tagColorClass={classes.tagCyan}
  />
);

export const WordTagEmerald = ({ word, tag }: TWordTag) => (
  <WordTag
    word={word}
    tag={tag}
    wordColorClass={classes.wordEmerald}
    tagColorClass={classes.tagEmerald}
  />
);

export default WordTagRed;
