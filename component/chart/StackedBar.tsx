import { ChartData, ChartOptions, Plugin } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const data: ChartData<'bar'> = {
  labels: ['1', '2'],
  datasets: [
    {
      label: '# of Red Votes',
      data: [0, 12],
      backgroundColor: 'rgb(255, 99, 132)',
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

const options: ChartOptions<'bar'> = {
  indexAxis: 'y',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'right',
      onClick: (e) => {},
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
    datalabels: {
      color: 'white',
      display: (context) => {
        return context.dataset.data[context.dataIndex] > 0.5;
      },
      font: {
        size: 12,
        weight: 'bold',
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

const StackedBar = () => (
  <>
    <div className="header">
      <h1 className="title">Stacked Bar Chart</h1>
    </div>
    <Bar data={data} options={options} plugins={[ChartDataLabels]} />
  </>
);

export default StackedBar;
