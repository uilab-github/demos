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
import { RadioOption } from './ChartAttributeRadioTag';

ChartJS.register(BarElement, LinearScale, CategoryScale, Title, Tooltip);

const _StackedBar = ({ data }: { data: DataFormat }) => {
  const baseAttribute = Object.keys(data)[0];
  const attributes = Object.keys(data);
  const numberOfLanguage = Object.keys(data[baseAttribute]).length;

  const [languageDistributions, setLanguageDistributions] = useState(
    data[baseAttribute]
  );
  const [attribute, setAttribute] = useState(baseAttribute);

  useEffect(() => {
    setLanguageDistributions(data[attribute]);
  }, [data, attribute]);

  return (
    <>
      <Bar
        data={generateChartData(languageDistributions)}
        options={getChartOptions(attribute, numberOfLanguage)}
        plugins={[ChartDataLabels]}
      />
      <RadioOption
        optionList={attributes}
        value={attribute}
        description={'Attributes'}
        onChange={(e) => setAttribute(e.target.value)}
      />
    </>
  );
};

export const StackedBar = memo(_StackedBar);
