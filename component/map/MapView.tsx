import { useState } from 'react';
import { Map } from './Map';
import classes from './MapView.module.css';
import {
  NationDistribution,
  getNationFromISOA3,
} from 'component/chart/NationUtil';

import { BEFORE_DATA, AFTER_DATA, DataFormat } from 'data/paperDataLoader';
import { RadioOption } from 'component/chart/ChartAttributeRadioTag';
import { StackedBar } from 'component/chart/StackedBarChart';

const getColorPoint = (nationDistribution: NationDistribution) => {
  return (geo) => {
    const nation = getNationFromISOA3(geo.properties.ISO_A3);
    if (nation === '') {
      return 0;
    }
    const distribution = nationDistribution[nation];
    return Math.min(-1.5 / 6 + ((1.5 + 6) / 6) * distribution * 2.0, 1);
  };
};

const getChartData = (attribute: string, language: string): DataFormat => {
  return {
    [attribute]: {
      ['Before']: BEFORE_DATA[attribute][language],
      ['After']: AFTER_DATA[attribute][language],
    },
  };
};

export const MapView = () => {
  const attributes = Object.keys(AFTER_DATA);
  const baseAttribute = attributes[0];

  const languages = Object.keys(AFTER_DATA[baseAttribute]);
  const baseLanguage = languages[0];

  const [attribute, setAttribute] = useState(baseAttribute);
  const [language, setLanguage] = useState(baseLanguage);

  return (
    <div>
      <div className={classes.map}>
        <Map getColorPoint={getColorPoint(BEFORE_DATA[attribute][language])} />
        <Map getColorPoint={getColorPoint(AFTER_DATA[attribute][language])} />
      </div>
      <div>
        <StackedBar
          data={getChartData(attribute, language)}
          attribute={attribute}
          displayTitle={false}
        />
      </div>
      <RadioOption
        optionList={attributes}
        value={attribute}
        description={'Attributes'}
        onChange={(e) => setAttribute(e.target.value)}
      />
      <RadioOption
        optionList={languages}
        value={language}
        description={'Language'}
        onChange={(e) => setLanguage(e.target.value)}
      />
    </div>
  );
};
