import { useState } from 'react';
import MapWithTooltip from './MapWithTooltip';
import classes from './MapView.module.css';
import { NationDistribution, getNationFromISOA3 } from 'component/nationUtil';
import { languageAbbrToFull, languageFullToAbbr } from '../languageUtil';

import { BEFORE_DATA, AFTER_DATA, DataFormat } from 'data/paperDataLoader';
import RadioTag from 'component/RadioTag';

const getColorPoint = (nationDistribution: NationDistribution) => {
  return (geo) => {
    const nation = getNationFromISOA3(geo.properties.ISO_A3);
    if (nation === '') {
      return 0;
    }
    const distribution = nationDistribution[nation];
    return distribution;
  };
};

const MapView = () => {
  const attributes = Object.keys(AFTER_DATA);
  const baseAttribute = attributes[0];

  const languages = Object.keys(AFTER_DATA[baseAttribute]);
  const baseLanguage = languages[0];

  const [attribute, setAttribute] = useState(baseAttribute);
  const [language, setLanguage] = useState(baseLanguage);

  return (
    <div>
      <RadioTag
        optionList={attributes}
        value={attribute}
        description={'Attributes'}
        onChange={(e) => setAttribute(e.target.value)}
      />
      <RadioTag
        optionList={languages.map((abbr) => languageAbbrToFull(abbr))}
        value={languageAbbrToFull(language)}
        description={'Language'}
        onChange={(e) => setLanguage(languageFullToAbbr(e.target.value))}
      />
      <br />
      <br />

      <div className={classes.maps}>
        <div className={classes.map}>
          <MapWithTooltip
            getColorPoint={getColorPoint(BEFORE_DATA[attribute][language])}
            distributions={[
              BEFORE_DATA[attribute][language],
              AFTER_DATA[attribute][language],
            ]}
          />
          <div className={classes.mapTitle}>Bias in the original BERTs</div>
        </div>
        <div className={classes.map}>
          <MapWithTooltip
            getColorPoint={getColorPoint(AFTER_DATA[attribute][language])}
            distributions={[
              BEFORE_DATA[attribute][language],
              AFTER_DATA[attribute][language],
            ]}
          />
          <div className={classes.mapTitle}>After applying mitigation</div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
