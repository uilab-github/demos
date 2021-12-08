import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import geography from '../../data/geography.json';
import { scaleLinear } from 'd3-scale';

const colorScale = scaleLinear(
  [-1.4 / 5, 0, 1 / 5, 2 / 5, 3 / 5, 4 / 5, 1, 6 / 5],
  [
    '#FFF1F0',
    '#FFA39E',
    '#FF7875',
    '#FF4D4F',
    '#F5222D',
    '#CF1322',
    '#A8071A',
    '#820014',
  ]
);

type MapChartProps = {
  isActive: (geo: any) => boolean;
  getColorPoint: (geo: any) => number;
};

export const Map = ({ isActive, getColorPoint }: MapChartProps) => (
  <ComposableMap>
    <Geographies geography={geography}>
      {({ geographies }) =>
        geographies.map((geo) => {
          const active = isActive(geo);
          const colorPoint = getColorPoint(geo);
          // if (active) {
          //   console.log(`ActiveNation: ${geo.properties.NAME}`);
          // }
          return (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onClick={(e) => {}}
              style={{
                default: {
                  stroke: active ? '#FFFFFF' : '#DADFE8',
                  fill: active ? colorScale(colorPoint) : '#FFFFFF',
                  strokeWidth: 0.5,
                },
                hover: {
                  fill: active ? colorScale(colorPoint + 1.5 / 5) : '#FFFFFF',
                  stroke: active ? '#FFFFFF' : '#DADFE8',
                  strokeWidth: 0.5,
                  cursor: active ? 'pointer' : 'default',
                },
              }}
            />
          );
        })
      }
    </Geographies>
  </ComposableMap>
);
