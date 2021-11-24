import { ChartData } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { MOCK_DATA, REAL_DATA, DataFormat } from 'data/DataLoader';
import { generateChartData } from './ChartUtil';
import { getChartOptions } from './ChartOptions';

export const StackedBar = (/*rawData = REAL_DATA, mask = 'enemy'*/) => {
  const rawData = REAL_DATA;
  const mask = 'enemy';
  // console.log('real_data', REAL_DATA);
  // console.log('rawData', rawData);
  const languageDistributions = rawData[mask];
  // console.log('languageDistributions', languageDistributions);
  return (
    <Bar
      data={generateChartData(languageDistributions)}
      options={getChartOptions(mask)}
      plugins={[ChartDataLabels]}
    />
  );
};

export const StackedBarPrev = () => {
  return (
    <Bar
      data={generateChartData(MOCK_DATA)}
      options={getChartOptions()}
      plugins={[ChartDataLabels]}
    />
  );
};

export const StackedBarChart = (data: ChartData<'bar'>, title = '') => (
  <>
    <div className="header">
      <h1 className="title">{title}</h1>
    </div>
    <Bar data={data} options={getChartOptions()} plugins={[ChartDataLabels]} />
  </>
);
