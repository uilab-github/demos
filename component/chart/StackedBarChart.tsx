import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { DataFormat } from 'data/DataLoader';
import { generateChartData } from './ChartUtil';
import { getChartOptions } from './ChartOptions';

export const StackedBar = ({
  data,
  mask,
}: {
  data: DataFormat;
  mask: string;
}) => {
  const languageDistributions = data[mask];
  return (
    <Bar
      data={generateChartData(languageDistributions)}
      options={getChartOptions(mask)}
      plugins={[ChartDataLabels]}
    />
  );
};
