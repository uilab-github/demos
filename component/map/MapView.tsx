import { useState } from 'react';
import { Map } from './Map';
import classes from './MapView.module.css';
import { NationDistribution } from 'component/chart/NationUtil';
import { getNationFromISOA3 } from 'component/chart/NationUtil';
import { BEFORE_DATA, AFTER_DATA } from 'data/paperDataLoader';
import { RadioOption } from 'component/chart/ChartAttributeRadioTag';

export const MapView = () => {
  const beforeNationDistribution: NationDistribution = BEFORE_DATA.pirate.KO;
  const afterNationDistribution: NationDistribution = AFTER_DATA.pirate.KO;

  const attributes = Object.keys(AFTER_DATA);
  const baseAttribute = attributes[0];

  const languages = Object.keys(AFTER_DATA[baseAttribute]);
  const baseLangague = languages[0];

  const [attribute, setAttribute] = useState(baseAttribute);
  const [language, setLanguage] = useState(baseLangague);

  return (
    <div>
      <div className={classes.map}>
        <Map
          isActive={(geo) => {
            return getNationFromISOA3(geo.properties.ISO_A3) !== '';
          }}
          getColorPoint={(geo) => {
            const nation = getNationFromISOA3(geo.properties.ISO_A3);
            if (nation === '') {
              return 0;
            }
            const distribution = beforeNationDistribution[nation];
            return Math.min(-1.5 / 6 + ((1.5 + 6) / 6) * distribution * 2.0, 1);
          }}
        />
        <Map
          isActive={(geo) => {
            return getNationFromISOA3(geo.properties.ISO_A3) !== '';
          }}
          getColorPoint={(geo) => {
            const nation = getNationFromISOA3(geo.properties.ISO_A3);
            if (nation === '') {
              return 0;
            }
            const distribution = afterNationDistribution[nation];
            return Math.min(-1.5 / 6 + ((1.5 + 6) / 6) * distribution * 2.0, 1);
          }}
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
