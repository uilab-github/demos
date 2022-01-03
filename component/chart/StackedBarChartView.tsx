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
import RadioOption from './ChartAttributeRadioTag';
import StackedBar from './StackedBarChart';

ChartJS.register(BarElement, LinearScale, CategoryScale, Title, Tooltip);

type TStackedBarViewProps = {
  data: DataFormat;
};

const StackedBarView = ({ data }: TStackedBarViewProps) => {
  const attributes = Object.keys(data);
  const baseAttribute = attributes[0];
  const [attribute, setAttribute] = useState(baseAttribute);

  return (
    <>
      {attribute && (
        <>
          <RadioOption
            optionList={attributes}
            value={attribute}
            description={'Attributes'}
            onChange={(e) => setAttribute(e.target.value)}
          />
          <br />
          <StackedBar data={data} attribute={attribute} />
        </>
      )}
    </>
  );
};

export default StackedBarView;
