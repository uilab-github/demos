// import { BarController } from 'chart.js';
import { Chart, ChartData, ChartOptions, Plugin } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

const data: ChartData<'bar'> = {
  // labels: [
  //   '2018-07-06',
  //   '2018-07-07',
  //   '2018-07-08',
  //   '2018-07-09',
  //   '2018-07-10',
  // ],
  // datasets: [
  //   {
  //     label: 'Dataset 1',
  //     backgroundColor: 'red',
  //     data: [
  //       { x: '2018-07-06', y: 1 },
  //       { x: '2018-07-07', y: 2 },
  //       { x: '2018-07-08', y: 3 },
  //     ],
  //   },
  //   {
  //     label: 'Dataset 2',
  //     backgroundColor: 'blue',
  //     data: [
  //       { x: '2018-07-06', y: 3 },
  //       { x: '2018-07-07', y: 2 },
  //       { x: '2018-07-08', y: 1 },
  //     ],
  //   },
  //   {
  //     label: 'Dataset 3',
  //     backgroundColor: 'green',
  //     data: [
  //       { x: '2018-07-06', y: 2 },
  //       { x: '2018-07-07', y: 1 },
  //       { x: '2018-07-08', y: 2 },
  //     ],
  //   },
  // ],
  // borderWidth: 1,

  labels: ['1'],
  datasets: [
    {
      label: '# of Red Votes',
      data: [12],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: '# of Blue Votes',
      data: [2],
      backgroundColor: 'rgb(54, 162, 235)',
    },
    {
      label: '# of Green Votes',
      data: [3],
      backgroundColor: 'rgb(75, 192, 192)',
    },

    // labels: ['1', '2', '3', '4', '5', '6'],
    // datasets: [
    //   {
    //     label: '# of Red Votes',
    //     data: [12, 19, 3, 5, 2, 3],
    //     backgroundColor: 'rgb(255, 99, 132)',
    //   },
    //   {
    //     label: '# of Blue Votes',
    //     data: [2, 3, 20, 5, 1, 4],
    //     backgroundColor: 'rgb(54, 162, 235)',
    //   },
    //   {
    //     label: '# of Green Votes',
    //     data: [3, 10, 13, 15, 22, 30],
    //     backgroundColor: 'rgb(75, 192, 192)',
    //   },
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
      position: 'right',
      onClick: (e) => {},
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
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

const plugins: Plugin<'bar'>[] = [
  {
    id: 'sorting all elements in each bars',
    beforeDraw: (chart: Chart, args) => {
      console.log('BeforeDraw');
      const red = chart.getDatasetMeta(0).data;
      const blue = chart.getDatasetMeta(1).data;
      const green = chart.getDatasetMeta(2).data;
      console.log(blue);
      const orderChanges = [
        [blue[0].x, blue[0].base],
        [green[0].x, green[0].base],
        [red[0].x, red[0].base],
      ];
      chart.orderChanges = orderChanges;
    },
  },
  {
    id: 'Second',
    beforeDatasetDraw: (chart: Chart, args) => {
      console.log('BeforeDataSetDraw');
      console.log('orderChanges', chart.orderChanges);

      // create data container in chart instance
      // const sortedData = {};

      // iterate over datasets
      // chart.data.datasets.forEach((dataset, datasetIndex) => {
      // iterate over dataset records
      // dataset.data.forEach((data, index) => {
      // create data container for bar stack data
      // if (!sortedData[index]) {
      //   sortedData[index] = {
      //     data: [],
      //   };
      // }

      // save data
      //   sortedData[index].data[datasetIndex] = {
      //     datasetIndex: datasetIndex,
      //     hidden: chart.getDatasetMeta(datasetIndex).hidden ? true : false,
      //     color: dataset.backgroundColor,
      //     value: dataset!.data[index]!,
      //     x: chart.getDatasetMeta(datasetIndex).data[index].x,
      //     base: chart.getDatasetMeta(datasetIndex).data[index].base,
      //   };
      // });
      // console.log('before sortedData');
      // console.log(chart.getDatasetMeta(datasetIndex).data);
      // console.log('sortedData');
      // console.log(sortedData);
      // });

      // console.log('before Draw Dataset chart');
      // console.log(chart);
      // console.log('before Draw Dataset args');
      // console.log(args);

      // console.log('chart.getDatasetMeta()');
      // console.log(chart.getDatasetMeta(0).data);
      // console.log(chart.getDatasetMeta(1).data);
      // console.log(chart.getDatasetMeta(2).data);

      // const red = chart.getDatasetMeta(0).data;
      // const blue = chart.getDatasetMeta(1).data;
      // const green = chart.getDatasetMeta(2).data;
      // const orderChanges = [blue, green, red];

      chart.getDatasetMeta(args.index).data.forEach((data, index) => {
        // console.log(chart.getDatasetMeta(datasetIndex).data);

        // console.log('data I want to see', args.index, index);
        // console.log(data);
        // console.log('what the hell is going on', newIndex);
        // console.log(orderChanges[newIndex][index]);
        data.x = chart.orderChanges[args.index][0];
        data.base = chart.orderChanges[args.index][1];
        // data.width = chart.orderChanges[args.index][index].width;
        console.log(args.index, index, data);
      });
      console.log('after ordering');
      // console.log(chart.getDatasetMeta.)
    },
  },
];

const StackedBar = () => (
  <>
    <div className="header">
      <h1 className="title">Stacked Bar Chart</h1>
    </div>
    <Bar data={data} options={options} plugins={plugins} />
  </>
);

export default StackedBar;
