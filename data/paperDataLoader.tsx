import { NationDistribution } from '../component/chart/NationUtil';
import rawData from './paperData.json';

export interface DataFormat {
  [attribute: string]: {
    [language: string]: NationDistribution;
  };
}

export const BEFORE_DATA: DataFormat = rawData.before;
export const AFTER_DATA: DataFormat = rawData.migitation;
