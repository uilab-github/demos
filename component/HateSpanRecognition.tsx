import RadioTag from './RadioTag';
import { useState, useRef } from 'react';
import classes from './HateSpanRecognition.module.css';
import { useEffect } from 'react';
import {
  sampleComments,
  getRandomComment,
  getCommentDetail,
  hateSpanDetailFormat,
} from 'data/hateSpanLoader';
import { ClipLoader } from 'react-spinners';

import WordTagSentence, { Tposition } from './WordTagSentence';

const HateSpanRecognition = () => {
  const textareaRef = useRef(null);

  const modeList = ['Data in dataset', 'Custom Input (on developing)'];
  const banModeList = [modeList[1]];
  const [formMode, setFormMode] = useState<string>(modeList[0]);
  const [input, setInput] = useState<string>(sampleComments[0]);
  const [output, setOutput] = useState<React.ReactChild>();
  const [outputDetail, setOutputDetail] = useState<hateSpanDetailFormat>();
  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {
    textareaRef.current.style.height = '0px';
    const scrollHeight = (textareaRef.current.scrollHeight as number) * 1.06;
    textareaRef.current.style.height = scrollHeight + 'px';
  }, [input]);

  useEffect(() => {
    if (isLoading && formMode === modeList[0]) {
      setTimeout(() => {
        setIsloading(false);
      }, 2000);
    }
  }, [isLoading]);

  const getOutput = () => {
    setIsloading(true);
    const detailInfo = getCommentDetail(input);
    setOutputDetail(detailInfo);
    const offensive: Tposition = {
      startIndex: detailInfo.off_start_idx,
      endIndex: detailInfo.off_end_idx,
    };
    const target: Tposition = detailInfo.tgt_start_idx
      ? {
          startIndex: detailInfo.tgt_start_idx,
          endIndex: detailInfo.tgt_end_idx,
        }
      : undefined;
    setOutput(
      <WordTagSentence sentence={input} offensive={offensive} target={target} />
    );
  };

  const changeData = () => {
    setIsloading(false);
    setOutput(undefined);
    var newComment = getRandomComment();
    while (newComment === input) {
      newComment = getRandomComment();
    }
    setInput(newComment);
  };

  return (
    <div>
      <div className={classes.radioTag}>
        <RadioTag
          optionList={modeList}
          banList={banModeList}
          value={formMode}
          description={'Mode'}
          newLine={true}
          onChange={(e) => setFormMode(e.target.value)}
        />
      </div>
      <div className={classes.inputTitle}>Input Text</div>
      <div className={classes.inputView}>
        <textarea
          ref={textareaRef}
          className={classes.textarea}
          placeholder="Your sentence here..."
          disabled={formMode === modeList[0]}
          value={input}
        />
      </div>
      <div className={classes.buttons}>
        <input type="button" value={'Change Data'} onClick={changeData} />
        {isLoading ? (
          <div className={classes.LoaderWrapper}>
            <ClipLoader size={15} color={'#ffffff'} />
            <span>Loading</span>
          </div>
        ) : (
          <input
            type="button"
            value={'Extract Hate-span'}
            onClick={getOutput}
          />
        )}
      </div>
      {output && !isLoading && (
        <div className={classes.output}>
          <div className={classes.outputTitle}> {`Analysis Result`}</div>
          <div className={classes.outputContent}>
            {/* <div className={classes.offensiveness}>
              {`Offensiveness: `}
              {outputDetail.offensiveness ? `True` : `False`}
            </div> */}

            {/* {outputDetail.offensiveness ? (
              <div className={`${classes.offensiveness} ${classes.red}`}>
                The sentence is offensive
              </div>
            ) : (
              <div className={`${classes.offensiveness} ${classes.green}`}>
                The sentence is not offensive
              </div>
            )} */}
            <div className={classes.outputMain}>{output}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HateSpanRecognition;
