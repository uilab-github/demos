import { Map } from './Map';
import { NationDistribution } from 'component/chart/NationUtil';
import { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';

export type ContentType = {
  nation: string;
  before: number;
  after: number;
};

type MapWithTooltipProps = {
  distributions: NationDistribution[];
  getColorPoint: (geo: any) => number;
};

const TooltipWrapper = styled.div`
  background-color: #222426;
  opacity: 0.9;
  padding: 8px 18px 8px 18px;
  color: #ffffff;
  text-align: center;
  border-radius: 4px;
  font-size: 12px;
`;

const TooltipHeader = styled.div`
  font-size: 14px;
  padding-bottom: 7px;
`;

const generateStyledContent = (content: ContentType) => (
  <>
    <TooltipHeader>{content.nation}</TooltipHeader>
    <div>{`before: ${content.before}`}</div>
    <div>{`after: ${content.after}`}</div>
  </>
);

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px 10px;
`;

export const MapWithTooltip = ({
  distributions,
  getColorPoint,
}: MapWithTooltipProps) => {
  const [content, setContent] = useState<ContentType | undefined>(undefined);

  return (
    <Wrapper>
      <Map
        getColorPoint={getColorPoint}
        setContent={setContent}
        distributions={distributions}
      />
      <ReactTooltip>
        {content && (
          <TooltipWrapper>{generateStyledContent(content)}</TooltipWrapper>
        )}
      </ReactTooltip>
    </Wrapper>
  );
};
