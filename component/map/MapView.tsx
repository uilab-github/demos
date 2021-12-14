import { useState } from 'react';
import { Map } from './Map';
import classes from './MapView.module.css';
import {
  NationDistribution,
  getNationFromISOA3,
} from 'component/chart/NationUtil';
import { languageAbbrToFull, languageFullToAbbr } from '../util';

import { BEFORE_DATA, AFTER_DATA, DataFormat } from 'data/paperDataLoader';
import { RadioOption } from 'component/chart/ChartAttributeRadioTag';

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

export const MapView = () => {
  const attributes = Object.keys(AFTER_DATA);
  const baseAttribute = attributes[0];

  const languages = Object.keys(AFTER_DATA[baseAttribute]);
  const baseLanguage = languages[0];

  const [attribute, setAttribute] = useState(baseAttribute);
  const [language, setLanguage] = useState(baseLanguage);

  return (
    <div>
      <RadioOption
        optionList={attributes}
        value={attribute}
        description={'Attributes'}
        onChange={(e) => setAttribute(e.target.value)}
      />
      <RadioOption
        optionList={languages.map((abbr) => languageAbbrToFull(abbr))}
        value={languageAbbrToFull(language)}
        description={'Language'}
        onChange={(e) => setLanguage(languageFullToAbbr(e.target.value))}
      />
      <br />
      <br />

      <div className={classes.map}>
        <Map getColorPoint={getColorPoint(BEFORE_DATA[attribute][language])} />
        <Map getColorPoint={getColorPoint(AFTER_DATA[attribute][language])} />
      </div>
      <br />

      <div className={classes.mapTitleBox}>
        <div className={classes.mapTitle}>Bias in the original BERTs</div>
        <div className={classes.mapTitle}>After applying mitigation</div>
      </div>
      <br />
    </div>
  );
};
