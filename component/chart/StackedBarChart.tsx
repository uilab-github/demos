import { useState, useEffect, memo } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
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
};

export const StackedBar = ({ data, attribute }: TStackedBarProps) => {
  const numberOfLanguage = Object.keys(data[attribute]).length;

  return (
    <Bar
      data={generateChartData(data[attribute])}
      options={getChartOptions(attribute, numberOfLanguage)}
      plugins={[ChartDataLabels]}
    />
  );
};
