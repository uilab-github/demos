import React, { Dispatch, memo, SetStateAction } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import geography from '../../data/geography.json';
import { scaleLinear } from 'd3-scale';
import {
  getNationFromISOA3,
  NationDistribution,
} from 'component/chart/NationUtil';
import { ContentType } from './MapWithTooltip';

const colorScale = scaleLinear(
  [
    0,
    1 / 10,
    2 / 10,
    3 / 10,
    4 / 10,
    5 / 10,
    6 / 10,
    7 / 10,
    8 / 10,
    9 / 10,
    1,
  ],
  [
    '#ffffff',
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
  setContent: Dispatch<SetStateAction<ContentType | undefined>>;
  distributions: NationDistribution[];
};

const Map_ = ({ getColorPoint, setContent, distributions }: MapChartProps) => (
  <>
    <ComposableMap width={800} height={475} data-tip="">
      <ZoomableGroup
        minZoom={1}
        maxZoom={1}
        translateExtent={[
          [0, 0],
          [800, 475],
        ]}
      >
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
                  onMouseEnter={() => {
                    if (active) {
                      const nation = getNationFromISOA3(geo.properties.ISO_A3);
                      const probabilityBefore = distributions[0][nation];
                      const probabilityAfter = distributions[1][nation];
                      setContent({
                        nation: nation,
                        before: probabilityBefore,
                        after: probabilityAfter,
                      } as ContentType);
                    }
                  }}
                  onMouseLeave={(e) => {
                    setContent(undefined);
                  }}
                  style={{
                    default: {
                      stroke:
                        active && colorPoint > 0.1 ? '#FFFFFF' : '#DADFE8',
                      fill: active ? colorScale(colorPoint) : '#FFFFFF',
                      strokeWidth: 0.5,
                    },
                    hover: {
                      fill: active ? colorScale(colorPoint) : '#FFFFFF',
                      stroke:
                        active && colorPoint > 0.1 ? '#FFFFFF' : '#DADFE8',
                      strokeWidth: 0.5,
                      cursor: active ? 'pointer' : 'default',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  </>
);

export const Map = memo(Map_);
