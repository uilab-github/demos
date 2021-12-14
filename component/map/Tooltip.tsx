import { ReactNode } from 'react';
import { TPosition } from './types';
import styled from 'styled-components';

const Wrapper = styled.div<{ position: TPosition }>`
  position: absolute;
  top: ${(props) => props.position.top - 20}px;
  left: ${(props) => props.position.left}px;
  transform: translate(-50%, -100%);
  background-color: #222426;
  opacity: 0.9;
  padding: 12px 16px 12px 16px;
  color: #ffffff;
  border-radius: 4px;
`;

export const TooltipTitle = styled.b`
  font-size: 16px;
  padding-right: 24px;
`;

export const TooltipRow = styled.div`
  display: flex;
  line-break: auto;
  white-space: pre-line;
  font-size: 14px;

  a {
    color: #66b5ff;
  }

  p {
    display: inline-block;
  }
`;

export type TTooltipProps = {
  children: ReactNode;
  position: TPosition;
};

const Tooltip = ({ children, position }: TTooltipProps) => {
  console.log(
    `Tooltip generated, position.top: ${position.top}, position.left: ${position.left}`
  );
  return <Wrapper position={position}>{children}</Wrapper>;
};
export default Tooltip;
