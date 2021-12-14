import { Map } from './Map';
import { NationDistribution } from 'component/chart/NationUtil';
import { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import Tooltip, { TTooltipProps } from './Tooltip';

type MapWithTooltipProps = {
  // distribution: NationDistribution;
  getColorPoint: (geo: any) => number;
};

export const MapWithTooltip = ({
  // distribution,
  getColorPoint,
}: MapWithTooltipProps) => {
  const [tooltipProps, setTooltipProps] = useState<TTooltipProps | undefined>(
    undefined
  );

  return (
    <>
      <Map
        getColorPoint={getColorPoint}
        select={(value) => {
          if (!value) {
            setTooltipProps(undefined);
          } else {
            const { NAME } = value.geo.properties;
            setTooltipProps({
              position: value.position,
              children: (
                <>
                  <p>{NAME}</p>
                </>
              ),
            });
            console.log({ NAME });
          }
        }}
        // setTooltipProps={setTooltipProps}
      />
      {tooltipProps && tooltipProps.children && <Tooltip {...tooltipProps} />}
    </>
  );
};
