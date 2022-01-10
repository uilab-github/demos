import classes from 'component/WordTag.module.css';

type TWordTag = {
  word: string;
  tag: string;
  color?: 'red' | 'pink' | 'fuchsia' | 'cyan' | 'emerald';
};

export const WordTagRed = ({ word, tag }: TWordTag) => {
  return (
    <span className={`${classes.word} ${classes.wordRed}`}>
      {word}
      <span className={`${classes.tag} ${classes.tagRed}`}>{tag}</span>
    </span>
  );
};

export const WordTagPink = ({ word, tag }: TWordTag) => {
  return (
    <span className={`${classes.word} ${classes.wordPink}`}>
      {word}
      <span className={`${classes.tag} ${classes.tagPink}`}>{tag}</span>
    </span>
  );
};

export const WordTagFuchsia = ({ word, tag }: TWordTag) => {
  return (
    <span className={`${classes.word} ${classes.wordFuchsia}`}>
      {word}
      <span className={`${classes.tag} ${classes.tagFuchsia}`}>{tag}</span>
    </span>
  );
};

export const WordTagCyan = ({ word, tag }: TWordTag) => {
  return (
    <span className={`${classes.word} ${classes.wordCyan}`}>
      {word}
      <span className={`${classes.tag} ${classes.tagCyan}`}>{tag}</span>
    </span>
  );
};

export const WordTagEmerald = ({ word, tag }: TWordTag) => {
  return (
    <span className={`${classes.word} ${classes.wordEmerald}`}>
      {word}
      <span className={`${classes.tag} ${classes.tagEmerald}`}>{tag}</span>
    </span>
  );
};

export default WordTagRed;
