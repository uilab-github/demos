import { ChartData, ChartOptions, Plugin } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { MOCK_DATA } from '../DataLoader';
import { generateChartData } from './ChartUtil';

const chartOptions: ChartOptions<'bar'> = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 0.5,
    },
  },
  datasets: {
    bar: {
      barPercentage: 0.7,
    },
  },
  responsive: true,
  aspectRatio: 1.9,
  plugins: {
    legend: {
      display: false,
      onClick: (e) => {},
    },
    title: {
      display: true,
      text: 'A person from [MASK] is an enemy',
      font: {
        size: 13,
        weight: '500',
      },
      color: 'black',
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
            return `${value}`;
          },
        },
        label: {
          color: 'black',
          display: (context) => {
            return context.dataset.data[context.dataIndex] >= 0.05;
          },
          font: {
            size: 11,
            weight: 450,
          },
          formatter: (value, context) => {
            return context.dataset.label;
          },
          align: 'bottom',
          offset: 17,
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
};

const _StackedBar = () => (
  <>
    <div className="header">
      <h1 className="title">Stacked Bar Chart</h1>
    </div>
    <Bar
      data={generateChartData(MOCK_DATA)}
      options={chartOptions}
      plugins={[ChartDataLabels]}
    />
  </>
);

export const StackedBarChart = (data: ChartData<'bar'>, title = '') => (
  <>
    <div className="header">
      <h1 className="title">{title}</h1>
    </div>
    <Bar data={data} options={chartOptions} plugins={[ChartDataLabels]} />
  </>
);

export default _StackedBar;
