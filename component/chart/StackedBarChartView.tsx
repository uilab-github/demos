import { useState } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
} from 'chart.js';
import { DataFormat } from 'data/paperDataLoader';
import { RadioOption } from './ChartAttributeRadioTag';
import { StackedBar } from './StackedBarChart';

ChartJS.register(BarElement, LinearScale, CategoryScale, Title, Tooltip);

type TStackedBarViewProps = {
  data: DataFormat;
};

export const StackedBarView = ({ data }: TStackedBarViewProps) => {
  const baseAttribute = Object.keys(data)[0];
  const attributes = Object.keys(data);

  const [attribute, setAttribute] = useState(baseAttribute);

  return (
    <>
      <StackedBar data={data} attribute={attribute} />
      <RadioOption
        optionList={attributes}
        value={attribute}
        description={'Attributes'}
        onChange={(e) => setAttribute(e.target.value)}
      />
    </>
  );
};
