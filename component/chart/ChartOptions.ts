import { ChartOptions } from 'chart.js';
import { classifyArticle } from 'english-article-classifier';

const DEFAULT_TITLE = 'A person from [MASK] is an enemy';
const formatTitle = (word: string) => {
  const article =
    classifyArticle(word).type !== 'unknown' ? classifyArticle(word).type : '';
  return `A person from [MASK] is ${article} ${word}`;
};

const getAspectRatio = (numberOfColumn: number) => {
  const ratioTable = {
    2: 6.5,
    5: 2.2,
    6: 1.9,
  };
  return ratioTable[numberOfColumn];
};

const getBaseChartOptions = (): ChartOptions<'bar'> => ({
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 0.5,
    },
  },
  datasets: {
    bar: {
      barThickness: 30,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
      onClick: (e) => {},
    },
    datalabels: {
      labels: {
        value: {
          color: 'black',
          display: (context) => {
            return context.dataset.data[context.dataIndex] >= 0.05;
          },
          font: {
            size: 11,
            weight: 450,
          },
          formatter: (value, context) => {
            const label = context.dataset.data[context.dataIndex];
            return `${value.toFixed(2)}`;
          },
        },
        label: {
          color: 'black',
          display: (context) => {
            return context.dataset.data[context.dataIndex] >= 0.05;
          },
          font: {
            size: 10,
            weight: 450,
          },
          formatter: (_, context) => {
            return context.dataset.label;
          },
          align: 'bottom',
          offset: 20,
        },
      },
    },
  },
  scales: {
    x: {
      stacked: true,
      min: 0,
      max: 1,
      position: 'top',
      title: {
        display: true,
        text: 'Normalized probability',
      },
    },
    y: {
      stacked: true,
      grid: {
        lineWidth: 0,
      },
    },
  },
});

//this option for 6 row bar charts.
export const getChartOptions = (
  title: string,
  numberOfLanguage: number,
  displayTitle = true
): ChartOptions<'bar'> => {
  const retChartOption = getBaseChartOptions();
  retChartOption.aspectRatio = getAspectRatio(numberOfLanguage);
  retChartOption.plugins.title = {
    display: true,
    text: formatTitle(title),
    font: {
      size: 14,
      weight: '500',
    },
    padding: {
      bottom: 5,
    },
    color: 'black',
  };
  if (!displayTitle) {
    retChartOption.plugins.title.display = false;
    // retChartOption.scales.x.title.display = false;
    // retChartOption.scales.x.grid.display = false;
    // retChartOption.scales.x.position = 'bottom';
    retChartOption.scales.x.display = false;
  }
  return retChartOption;
};
