import { useState } from 'react';
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

ChartJS.register(BarElement, LinearScale, CategoryScale, Title, Tooltip);

const generateCompareFormData = (
  beforeData: DataFormat,
  afterData: DataFormat,
  attribute: string
) => {
  const languages = Object.keys(afterData[attribute]);
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
  const modes = ['Result only', 'Compare'];

  const attributes = Object.keys(beforeData);
  const baseAttribute = attributes[0];
  const [attribute, setAttribute] = useState(baseAttribute);
  const [isCompareMode, setIsCompareMode] = useState(false);

  return (
    <>
      {attribute && (
        <>
          <RadioOption
            optionList={attributes}
            value={attribute}
            description={'Attributes'}
            onChange={(e) => setAttribute(e.target.value)}
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
