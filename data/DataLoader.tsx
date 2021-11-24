import { NationDistribution } from '../component/chart/NationUtil';
import rawData from './data.json';

export interface DataFormat {
  [mask: string]: {
    [language: string]: NationDistribution;
  };
}

export const REAL_DATA: DataFormat = rawData;
