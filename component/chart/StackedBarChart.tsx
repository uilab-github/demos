import { ChartData, ChartOptions, Plugin } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { NationDistribution } from './NationUtil';
import { generateChartData } from './ChartUtil';

const options: ChartOptions<'bar'> = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
      onClick: (e) => {},
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
    datalabels: {
      labels: {
        value: {
          color: 'white',
          display: (context) => {
            return context.dataset.data[context.dataIndex] > 0.5;
          },
          font: {
            size: 12,
            weight: 'bold',
          },
          formatter: (value, context) => {
            const label = context.dataset.data[context.dataIndex];
            return `${value}`;
          },
        },
        label: {
          color: 'black',
          display: (context) => {
            return context.dataset.data[context.dataIndex] > 0.5;
          },
          font: {
            size: 12,
            weight: 'bold',
          },
          formatter: (value, context) => {
            return context.dataset.label;
          },
          align: 'bottom',
          offset: 50,
        },
      },
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const _data: ChartData<'bar'> = {
  labels: ['1', '2'],
  datasets: [
    {
      label: '# of Red Votes',
      data: [0, 12],
      backgroundColor: '#FF6384',
    },
    {
      label: '# of Blue Votes',
      data: [2, 3],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: '# of Green Votes',
      data: [3, 4],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: '# of Red Votes',
      data: [12, 0],
      backgroundColor: 'rgb(255, 99, 132)',
    },
  ],
};

// ensure that Sum(country) == 1
const MOCK_DATA = {
  EN: {
    Korea: 0.03,
    England: 0.03,
    France: 0.03,
    Germany: 0.03,
    Mexico: 0.03,
    Ireland: 0.03,
    Iran: 0.03,
    Vietnam: 0.03,
    Thailand: 0.03,
    Australia: 0.03,
    Turkey: 0.02,
    Israel: 0.02,
    Italy: 0.02,
    Egypt: 0.02,
    Somalia: 0.02,
    India: 0.01,
    Brazil: 0.01,
    Colombia: 0.01,
    Greece: 0.01,
    Cuba: 0.01,
    America: 0.09,
    Iraq: 0.08,
    Syria: 0.07,
    Russia: 0.07,
    Saudi: 0.05,
    Afghanistan: 0.05,
    Spain: 0.05,
    Canada: 0.03,
    Japan: 0.03,
    China: 0.03,
  } as NationDistribution,
};

const _StackedBar = () => (
  <>
    <div className="header">
      <h1 className="title">Stacked Bar Chart</h1>
    </div>
    <Bar
      data={generateChartData(MOCK_DATA)}
      options={options}
      plugins={[ChartDataLabels]}
    />
  </>
);

// const _StackedBar = () => (
//   <>
//     <div className="header">
//       <h1 className="title">Stacked Bar Chart</h1>
//     </div>
//     <Bar data={_data} options={options} plugins={[ChartDataLabels]} />
//   </>
// );

export const StackedBarChart = (data: ChartData<'bar'>, title = '') => (
  <>
    <div className="header">
      <h1 className="title">{title}</h1>
    </div>
    <Bar data={data} options={options} plugins={[ChartDataLabels]} />
  </>
);

export default _StackedBar;
