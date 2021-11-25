import React, { Fragment } from 'react';

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
    return (
      <Fragment key={_attribute}>
        <input
          id={_attribute}
          value={_attribute}
          name="attribute"
          type="radio"
          key={_attribute}
          checked={attribute === _attribute}
          onChange={onChange}
        />
        {_attribute}
      </Fragment>
    );
  };
  return (
    <div>
      <span>Attribute: </span>
      {data.map((oneData) => _attrRadioOptionElem(oneData))}
    </div>
  );
};
