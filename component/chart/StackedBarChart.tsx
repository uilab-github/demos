import { ChangeEvent, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { DataFormat } from 'data/DataLoader';
import { generateChartData } from './ChartUtil';
import { getChartOptions } from './ChartOptions';
import { REAL_DATA } from 'data/DataLoader';
import { AttrRadioOption } from './ChartAttributeRadioTag';

const defaultStackedBar = {
  data: REAL_DATA,
  mask: 'enemy',
};

export const StackedBar = ({
  data,
  mask,
}: {
  data: DataFormat;
  mask: string;
}) => {
  const _data = data !== undefined ? data : defaultStackedBar.data;
  const _mask = mask !== undefined ? mask : defaultStackedBar.mask;
  const languageDistributions = _data[_mask];
  const maskList = Object.keys(_data);

  // const [dataState, setDataState] = useState(_data);
  const [attribute, setAttribute] = useState(maskList[0]);

  const chart = (
    <Bar
      data={generateChartData(languageDistributions)}
      options={getChartOptions(_mask)}
      plugins={[ChartDataLabels]}
    />
  );

  const onAttributeChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAttribute(e.target.value);
  };

  return (
    <>
      <AttrRadioOption
        data={maskList}
        attribute={attribute}
        onChange={onAttributeChange}
      />
      {chart}
    </>
  );
};
