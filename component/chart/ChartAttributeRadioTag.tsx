import React, { Fragment } from 'react';
import classes from './ChartAttributeRatioTag.module.css';
import { v4 as uuidv4 } from 'uuid';

export const AttrRadioOption = ({
  data,
  attribute,
  onChange,
}: {
  data: string[];
  attribute: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  const _attrRadioOptionElem = (_attribute: string) => {
    const uuid: string = uuidv4();
    return (
      <label className={classes.radioTagWrapper} key={uuid}>
        <input
          id={_attribute}
          value={_attribute}
          type="radio"
          checked={attribute === _attribute}
          onChange={onChange}
        />
        {_attribute}
      </label>
    );
  };
  return (
    <div className={classes.radioTagWrapper}>
      <span>Attribute: </span>
      {data.map((oneData) => _attrRadioOptionElem(oneData))}
    </div>
  );
};
