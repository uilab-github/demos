import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { DataFormat } from 'data/DataLoader';
import { generateChartData } from './ChartUtil';
import { getChartOptions } from './ChartOptions';
import { REAL_DATA } from 'data/DataLoader';

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
  return (
    <Bar
      data={generateChartData(languageDistributions)}
      options={getChartOptions(_mask)}
      plugins={[ChartDataLabels]}
    />
  );
};
