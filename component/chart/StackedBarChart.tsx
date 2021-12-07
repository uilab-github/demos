import { useState, useEffect, memo } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  Title,
  // SubTitle,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { DataFormat } from 'data/paperDataLoader';
import { generateChartData } from './ChartUtil';
import { getChartOptions } from './ChartOptions';
import { AttrRadioOption } from './ChartAttributeRadioTag';

ChartJS.register(
  BarElement,
  LinearScale,
  CategoryScale,
  Title,
  // SubTitle,
  Tooltip
);

const _StackedBar = ({ data, mask }: { data: DataFormat; mask: string }) => {
  const _data = data;
  const _mask = mask !== undefined ? mask : Object.keys(data)[0];

  const [languageDistributions, setLanguageDistributions] = useState(
    _data[_mask]
  );
  const [_attribute, set_Attribute] = useState(_mask);

  const onAttributeChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    set_Attribute(e.target.value);
  };

  useEffect(() => {
    const _languageDistributions = _data[_attribute];
    setLanguageDistributions(_languageDistributions);
  }, [_data, _attribute]);

  return (
    <>
      <Bar
        data={generateChartData(languageDistributions)}
        options={getChartOptions(_attribute, Object.keys(_data[_mask]).length)}
        plugins={[ChartDataLabels]}
      />
      <AttrRadioOption
        data={Object.keys(_data)}
        attribute={_attribute}
        onChange={onAttributeChange}
      />
    </>
  );
};

export const StackedBar = memo(_StackedBar);
