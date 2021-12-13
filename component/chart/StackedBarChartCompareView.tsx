import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
} from 'chart.js';
import { DataFormat } from 'data/paperDataLoader';
import { RadioOption } from './ChartAttributeRadioTag';
import { StackedBar } from './StackedBarChart';

import { useAppDispatch, useAppSelector } from '../../store/hook';
import { updateRadio } from '../../store/modules/radio';

ChartJS.register(BarElement, LinearScale, CategoryScale, Title, Tooltip);

const generateCompareFormData = (
  beforeData: DataFormat,
  afterData: DataFormat,
  attribute: string
) => {
  const languages = Object.keys(afterData[attribute]);
  console.log('in GenerateCompare', beforeData[attribute][languages[0]]);
  const retFormat = languages
    .map((language) => ({
      [' ' + language + ' \nprev']: beforeData[attribute][language],
      [' ' + language + ' \nafter']: afterData[attribute][language],
    }))
    .reduce(
      (accum, entries) => ({
        ...accum,
        [Object.keys(entries)[0]]: Object.values(entries)[0],
        [Object.keys(entries)[1]]: Object.values(entries)[1],
      }),
      {}
    );
  return { [attribute]: retFormat };
};

type TStackedBarViewProps = {
  beforeData: DataFormat;
  afterData: DataFormat;
};

export const StackedBarCompareView = ({
  beforeData,
  afterData,
}: TStackedBarViewProps) => {
  const attribute = useAppSelector((state) => state.radio.value);
  const dispatch = useAppDispatch();

  const modes = ['Result only', 'Compare'];

  const [isCompareMode, setIsCompareMode] = useState(false);
  const attributes = Object.keys(beforeData);

  const isAttrubuteExist = attribute !== undefined;

  useEffect(() => {
    if (isAttrubuteExist) {
      const baseAttribute = Object.keys(beforeData)[0];
      dispatch(updateRadio(baseAttribute));
    }
  }, [beforeData, isAttrubuteExist, dispatch]);

  return (
    <>
      {attribute && (
        <>
          <RadioOption
            optionList={attributes}
            value={attribute}
            description={'Attributes'}
            onChange={(e) => dispatch(updateRadio(e.target.value))}
          />
          <RadioOption
            optionList={modes}
            value={isCompareMode ? modes[1] : modes[0]}
            description={'View'}
            onChange={(e) => {
              const modeStatus = e.target.value === modes[0] ? false : true;
              setIsCompareMode(modeStatus);
            }}
          />
          <br />
          {!isCompareMode && (
            <StackedBar data={afterData} attribute={attribute} />
          )}
          {isCompareMode && (
            <StackedBar
              data={generateCompareFormData(beforeData, afterData, attribute)}
              attribute={attribute}
            />
          )}
        </>
      )}
    </>
  );
};
