import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { DataFormat } from 'data/DataLoader';
import { generateChartData } from './ChartUtil';
import { getChartOptions } from './ChartOptions';
import { REAL_DATA } from 'data/DataLoader';
import { AttrRadioOption } from './ChartAttributeRadioTag';

ChartJS.register(BarElement, LinearScale, CategoryScale, Title, Tooltip);

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
  const maskList = Object.keys(_data);

  const [languageDistributions, setLanguageDistributions] = useState(
    _data[_mask]
  );
  const [_attribute, set_Attribute] = useState(maskList[0]);

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
        options={getChartOptions(_attribute)}
        plugins={[ChartDataLabels]}
        // redraw={true} This option for redraw all the chart
      />
      <br />
      <AttrRadioOption
        data={maskList}
        attribute={_attribute}
        onChange={onAttributeChange}
      />
    </>
  );
};
