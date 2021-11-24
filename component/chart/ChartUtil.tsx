import { NationDistribution, getColorOfNation } from './NationUtil';
import { ChartData, ChartDataset } from 'chart.js';

const sortCountries = (distribution: NationDistribution, reversed = false) => {
  return Object.entries<number>(distribution)
    .sort(([, a], [, b]) => {
      return !reversed ? a - b : b - a;
    })
    .reduce((accum, [k, v]) => ({ ...accum, [k]: v }), {});
};

const combineMinorsToOthers = (
  distribution: NationDistribution,
  threshold = 0.05
) => {
  const ret: NationDistribution = Object.entries(distribution).reduce(
    (accum, [k, v]) => {
      if (v < threshold) {
        return { ...accum, Others: (accum['Others'] || 0) + v };
      } else {
        return { ...accum, [k]: v };
      }
    },
    {}
  );
  ret['Others'] = Math.round(ret['Others'] * 100) / 100;
  return ret;
};

export const generateChartData = (
  rawData: Record<string, NationDistribution>
): ChartData<'bar'> => {
  const refinedData = preprocessChartData(rawData);
  return {
    labels: generateChartLabels(refinedData),
    datasets: generateChartDatasets(refinedData),
  };
};

const preprocessChartData = (
  data: Record<string, NationDistribution>
): Record<string, NationDistribution> => {
  return Object.entries<NationDistribution>(data)
    .map(([language, nationDistribution]) => {
      const refinedDistribution = combineMinorsToOthers(
        sortCountries(nationDistribution, true)
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
      backgroundColor: getColorOfNation(nation),
      data: dataArray,
    };
  });
};
