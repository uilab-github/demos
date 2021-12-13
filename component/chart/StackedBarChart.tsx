import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Plugin,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { DataFormat } from 'data/paperDataLoader';
import { generateChartData } from './ChartUtil';
import { getChartOptions } from './ChartOptions';

ChartJS.register(BarElement, LinearScale, CategoryScale, Title, Tooltip);

type TStackedBarProps = {
  data: DataFormat;
  attribute: string;
  displayTitle?: boolean;
  plugins?: Plugin<'bar'>[];
};

const _multilinePlugin = (chart: ChartJS) => {
  chart.data.labels.forEach(
    (e: string, i: number, a: string[] | string[][]) => {
      if (/\n/.test(e)) {
        a[i] = e.split(/\n/);
      }
    }
  );
};

const multilinePlugin: Plugin<'bar'> = {
  id: 'multilinePlugin',
  beforeInit: _multilinePlugin,
  beforeUpdate: _multilinePlugin,
};

export const StackedBar = ({
  data,
  attribute,
  displayTitle,
  plugins,
}: TStackedBarProps) => {
  const numberOfLanguage = Object.keys(data[attribute]).length;
  return (
    <Bar
      data={generateChartData(data[attribute])}
      options={getChartOptions(attribute, numberOfLanguage, displayTitle)}
      plugins={[ChartDataLabels, multilinePlugin]}
    />
  );
};
