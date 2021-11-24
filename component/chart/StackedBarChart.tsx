import { ChartData } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { MOCK_DATA } from '../DataLoader';
import { generateChartData } from './ChartUtil';
import { getChartOptions } from './ChartOptions';

const _StackedBar = () => (
  <>
    <div className="header">
      <h1 className="title">Stacked Bar Chart</h1>
    </div>
    <Bar
      data={generateChartData(MOCK_DATA)}
      options={getChartOptions()}
      plugins={[ChartDataLabels]}
    />
  </>
);

export const StackedBarChart = (data: ChartData<'bar'>, title = '') => (
  <>
    <div className="header">
      <h1 className="title">{title}</h1>
    </div>
    <Bar data={data} options={getChartOptions()} plugins={[ChartDataLabels]} />
  </>
);

export default _StackedBar;
