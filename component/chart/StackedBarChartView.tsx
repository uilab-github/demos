import { useEffect } from 'react';
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

import { useAppDispatch, useAppSelector } from '../../store/hook';
import { updateRadio } from '../../store/modules/radioSlice';

ChartJS.register(BarElement, LinearScale, CategoryScale, Title, Tooltip);

type TStackedBarViewProps = {
  data: DataFormat;
};

export const StackedBarView = ({ data }: TStackedBarViewProps) => {
  const attribute = useAppSelector((state) => state.radio.value);
  const dispatch = useAppDispatch();

  const attributes = Object.keys(data);

  const isAttrubuteExist = attribute !== undefined;

  useEffect(() => {
    if (isAttrubuteExist) {
      const baseAttribute = Object.keys(data)[0];
      dispatch(updateRadio(baseAttribute));
    }
  }, [data, isAttrubuteExist, dispatch]);

  return (
    <>
      {attribute && (
        <>
          <StackedBar data={data} attribute={attribute} />
          <RadioOption
            optionList={attributes}
            value={attribute}
            description={'Attributes'}
            onChange={(e) => dispatch(updateRadio(e.target.value))}
          />
        </>
      )}
    </>
  );
};
