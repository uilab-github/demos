import rawData from './hateSpan.json';

export interface hateSpanDataFormat {
  [comment: string]: hateSpanDataFormat;
}

export interface hateSpanDetailFormat {
  comment: string;
  offensiveness: boolean;
  off_start_idx: number;
  off_end_idx: number;
  target: string;
  target_group: string;
  tgt_start_idx: number;
  tgt_end_idx: number;
}

export const sampleComments = Object.keys(rawData);
export const getRandomComment = () => {
  return sampleComments[Math.floor(Math.random() * sampleComments.length)];
};
//for dev
export const getComment = (index: number) => {
  return sampleComments[index];
};
export const getCommentDetail = (comment: string) => {
  if (comment in rawData) {
    return rawData[comment] as hateSpanDetailFormat;
  }
  return undefined;
};
