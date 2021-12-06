import { NationDistribution } from '../component/chart/NationUtil';
import rawData from './data.json';

export interface DataFormat {
  [mask: string]: {
    [language: string]: NationDistribution;
  };
}

export const BEFORE_DATA: DataFormat = rawData.before;
export const AFTER_DATA: DataFormat = rawData.migitation;
