import React from 'react';
import classes from './ChartAttributeRatioTag.module.css';
import { v4 as uuidv4 } from 'uuid';

export const RadioOption = ({
  optionList,
  value,
  description,
  onChange,
}: {
  optionList: string[];
  value: string;
  description: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
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
