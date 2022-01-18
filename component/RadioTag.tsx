import React from 'react';
import classes from './RatioTag.module.css';
import { v4 as uuidv4 } from 'uuid';

type TRadioOption = {
  optionList: string[];
  banList?: string[];
  value: string;
  description: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const RadioOption = ({
  optionList,
  banList,
  value,
  description,
  onChange,
}: TRadioOption) => {
  const attrRadioOptionElem = (option: string) => {
    const uuid: string = uuidv4();
    return (
      <div className={classes.radioTagWrapper} key={uuid}>
        <input
          id={uuid}
          value={option}
          type="radio"
          checked={value === option}
          onChange={onChange}
          disabled={banList && banList.includes(option)}
        />
        <label className={classes.radioTagWrapper} htmlFor={uuid}>
          {option}
        </label>
      </div>
    );
  };
  return (
    <div className={classes.radioTagsWrapper}>
      <span className={classes.span}>{description}: </span>
      {optionList.map((oneData) => attrRadioOptionElem(oneData))}
    </div>
  );
};

export default RadioOption;
