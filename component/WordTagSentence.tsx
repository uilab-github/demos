import {
  WordTagRed,
  WordTagOrange,
  WordTagCyan,
  WordTagPink,
  WordTagFuchsia,
} from 'component/WordTag';

type Tposition = {
  startIndex: number;
  endIndex: number;
};

type TWordTagSentence = {
  sentence: string;
  offensive?: Tposition;
  target?: Tposition;
};

type TTaggedPartElement = Tposition & {
  tag: string;
};

type TWordTagType = {
  content: React.ReactNode;
  tag: string;
  isBigger?: boolean;
};

const WordTagType = ({ content, tag, isBigger }: TWordTagType) => {
  switch (tag) {
    case 'offensive':
      return <WordTagRed content={content} tag={tag} isBigger={isBigger} />;
    case 'target':
      return <WordTagPink content={content} tag={tag} isBigger={isBigger} />;
    default:
      return <WordTagFuchsia content={content} tag={tag} isBigger={isBigger} />;
  }
};

const WordTagSentence = ({ sentence, offensive, target }: TWordTagSentence) => {
  const isOverlap =
    offensive &&
    target &&
    offensive.startIndex <= target.startIndex &&
    target.endIndex <= offensive.endIndex;

  const taggedParts: TTaggedPartElement[] = [];
  if (offensive) {
    taggedParts.push({
      tag: 'offensive',
      startIndex: offensive.startIndex,
      endIndex: offensive.endIndex,
    });
  }
  if (target) {
    taggedParts.push({
      tag: 'target',
      startIndex: target.startIndex,
      endIndex: target.endIndex,
    });
  }
  taggedParts.sort((a, b) => {
    const [aStart, aEnd] = [a.startIndex, a.endIndex];
    const [bStart, bEnd] = [b.startIndex, b.endIndex];
    if (aStart < bStart || (aStart === bStart && aEnd < bEnd)) {
      return -1;
    }
    if (aStart === bStart && aEnd === bEnd) {
      return 0;
    }
    return 1;
  });

  const wordTagNonOverlap = (
    sentence: string,
    taggedParts: TTaggedPartElement[]
  ) => {
    var currIndex = 0;
    var output: React.ReactNode[] = [];
    for (const taggedPart of taggedParts) {
      const { startIndex, endIndex, tag } = taggedPart;
      output.push(sentence.slice(currIndex, startIndex));
      output.push(
        <WordTagType content={sentence.slice(startIndex, endIndex)} tag={tag} />
      );
      currIndex = endIndex;
    }
    if (currIndex !== sentence.length) {
      output.push(sentence.slice(currIndex));
    }
    return <span>{output}</span>;
  };

  const wordTagOverlap = (
    sentence: string,
    taggedParts: TTaggedPartElement[]
  ) => {
    var output: React.ReactNode[] = [];
    const [innerStartIndex, innerEndIndex, innerTag] = [
      taggedParts[0].startIndex,
      taggedParts[0].endIndex,
      taggedParts[0].tag,
    ];
    const [outerStartIndex, outerEndIndex, outerTag] = [
      taggedParts[1].startIndex,
      taggedParts[1].endIndex,
      taggedParts[1].tag,
    ];

    const innerTagged = (
      <WordTagType
        content={sentence.slice(innerStartIndex, innerEndIndex)}
        tag={innerTag}
      />
    );

    const outerTagged = (
      <WordTagType
        content={
          <>
            {sentence.slice(outerStartIndex, innerStartIndex)}
            {innerTagged}
            {sentence.slice(innerEndIndex, outerEndIndex)}
          </>
        }
        tag={outerTag}
        isBigger={true}
      />
    );
    return (
      <span>
        {sentence.slice(0, outerStartIndex)}
        {outerTagged}
        {sentence.slice(outerEndIndex)}
      </span>
    );
  };

  return isOverlap
    ? wordTagOverlap(sentence, taggedParts)
    : wordTagNonOverlap(sentence, taggedParts);
};

export default WordTagSentence;
