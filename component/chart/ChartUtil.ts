import {
  NationDistribution,
  getAbbrNameFromNation,
  getColorOfNationAbbr,
  getNations,
} from 'component/nationUtil';
import { ChartData, ChartDataset } from 'chart.js';

export const generateChartData = (
  rawData: Record<string, NationDistribution>
): ChartData<'bar'> => {
  const refinedData = preprocessChartData(rawData);
  const labels = generateChartLabels(refinedData);
  const datasets = generateChartDatasets(refinedData);
  const paddingData = generatePaddingData(labels.length);
  return {
    labels: labels,
    datasets: [...paddingData, ...datasets],
  };
};

// sort -> combineMinorsToOthers -> changeCountryNameToAbbr
const preprocessChartData = (
  data: Record<string, NationDistribution>
): Record<string, NationDistribution> => {
  return Object.entries<NationDistribution>(data)
    .map(([language, nationDistribution]) => {
      const refinedDistribution = changeCountryNameToAbbr(
        combineMinorsToOthers(sortCountries(nationDistribution, true))
      );
      return { [language]: refinedDistribution };
    })
    .reduce(
      (accum, entry) => ({
        ...accum,
        [Object.keys(entry)[0]]: Object.values(entry)[0],
      }),
      {}
    );
};

const sortCountries = (
  distribution: NationDistribution,
  reversed = false
): NationDistribution => {
  return Object.entries<number>(distribution)
    .sort(([, a], [, b]) => {
      return !reversed ? a - b : b - a;
    })
    .reduce((accum, [nation, ratio]) => ({ ...accum, [nation]: ratio }), {});
};

const combineMinorsToOthers = (
  distribution: NationDistribution,
  threshold = 0.05
): NationDistribution => {
  const ret: NationDistribution = Object.entries(distribution)
    .filter(([_, ratio]) => ratio >= threshold)
    .reduce((accum, [nation, ratio]) => ({ ...accum, [nation]: ratio }), {});
  const othersValue = 1 - Object.values(ret).reduce((a, b) => a + b);
  ret['Others'] = Math.round(othersValue * 100) / 100;
  return ret;
};

const changeCountryNameToAbbr = (
  distribution: NationDistribution
): NationDistribution => {
  return Object.entries<number>(distribution)
    .map(([nation, ratio]) => {
      return [getAbbrNameFromNation(nation), ratio];
    })
    .reduce((accum, [nation, ratio]) => ({ ...accum, [nation]: ratio }), {});
};

const generateChartLabels = (data: Record<string, NationDistribution>) => {
  return Object.entries<NationDistribution>(data).map(([nation, _]) => {
    return nation;
  });
};

const generateChartDatasets = (data: Record<string, NationDistribution>) => {
  const languageCount = Object.keys(data).length;

  return Object.entries<NationDistribution>(data)
    .map(([_, nationDistribution], langagueIndex) => {
      return generateChartDataset(
        nationDistribution,
        languageCount,
        langagueIndex
      );
    })
    .flat();
};

const generateChartDataset = (
  nationDistribution: NationDistribution,
  languageCount: number,
  languageIndex: number
): ChartDataset<'bar', number[]>[] => {
  return Object.entries<number>(nationDistribution).map(([nation, ratio]) => {
    const dataArray: number[] = new Array(languageCount).fill(0);
    dataArray[languageIndex] = ratio;
    return {
      label: nation,
      backgroundColor: getColorOfNationAbbr(nation),
      data: dataArray,
    };
  });
};

// These padding data for smooth animation,
// TODO: sync getAbbrNameFromNation in changeCountryNameToAbbr
const generatePaddingData = (
  columnCount: number
): ChartDataset<'bar', number[]>[] => {
  const nations = getNations();
  const zeroArray: number[] = new Array(nations.length).fill(0);
  return nations.map((nation) => ({
    label: getAbbrNameFromNation(nation),
    data: zeroArray,
  }));
};
