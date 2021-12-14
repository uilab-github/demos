import React, { Dispatch, SetStateAction } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import geography from '../../data/geography.json';
import { scaleLinear } from 'd3-scale';
import { getNationFromISOA3 } from 'component/chart/NationUtil';
import { TTooltipProps } from './Tooltip';
import { TPosition } from './types';

const colorScale = scaleLinear(
  [0, 1 / 8, 2 / 8, 3 / 8, 4 / 8, 5 / 8, 6 / 8, 7 / 8, 1, 9 / 8],
  [
    '#ffd7cd',
    '#ffc3b4',
    '#feaf9c',
    '#fb9a85',
    '#f7856e',
    '#f26f59',
    '#ed5744',
    '#e63a2f',
    '#de021b',
  ]
);

type MapChartProps = {
  getColorPoint: (geo: any) => number;
  select: (value: undefined | { geo: any; position: TPosition }) => void;

  // setTooltipProps: (props?: TTooltipProps) => void;
};

export const Map = ({ getColorPoint, select }: MapChartProps) => (
  <>
    <ComposableMap width={800} height={475}>
      <Geographies geography={geography}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const active = getNationFromISOA3(geo.properties.ISO_A3) !== '';
            const colorPoint = getColorPoint(geo);
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={(e) => {
                  select(
                    active
                      ? {
                          geo,
                          position: { left: e.clientX, top: e.clientY },
                        }
                      : undefined
                  );
                }}
                onMouseLeave={(e) => {
                  select(undefined);
                }}
                style={{
                  default: {
                    stroke: active ? '#FFFFFF' : '#DADFE8',
                    fill: active ? colorScale(colorPoint) : '#FFFFFF',
                    strokeWidth: 0.5,
                  },
                  hover: {
                    fill: active ? colorScale(colorPoint + 1 / 4) : '#FFFFFF',
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
  </>
);
