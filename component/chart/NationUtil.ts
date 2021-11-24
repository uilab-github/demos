export interface NationDistribution extends Record<string, number> {
  America?: number;
  Canada?: number;
  Japan?: number;
  China?: number;
  Korea?: number;
  England?: number;
  France?: number;
  Germany?: number;
  Mexico?: number;
  Iraq?: number;
  Ireland?: number;
  Iran?: number;
  Saudi?: number;
  Russia?: number;
  Vietnam?: number;
  Thailand?: number;
  Australia?: number;
  Spain?: number;
  Turkey?: number;
  Israel?: number;
  Italy?: number;
  Egypt?: number;
  Somalia?: number;
  India?: number;
  Brazil?: number;
  Colombia?: number;
  Greece?: number;
  Afghanistan?: number;
  Cuba?: number;
  Syria?: number;
  Others?: number;
}

// "'America', 'Canada', 'Japan', 'China', 'Korea', 'England', 'France', 'Germany', 'Mexico', 'Iraq', 'Ireland', 'Iran', 'Saudi', 'Russia', 'Vietnam', 'Thailand', 'Australia', 'Spain', 'Turkey', 'Israel', 'Italy', 'Egypt', 'Somalia', 'India', 'Brazil', 'Colombia', 'Greece', 'Afghanistan', 'Cuba', 'Syria'"
const NATIONS_ARRAY = [
  'America',
  'Canada',
  'Japan',
  'China',
  'Korea',
  'England',
  'France',
  'Germany',
  'Mexico',
  'Iraq',
  'Ireland',
  'Iran',
  'Saudi',
  'Russia',
  'Vietnam',
  'Thailand',
  'Australia',
  'Spain',
  'Turkey',
  'Israel',
  'Italy',
  'Egypt',
  'Somalia',
  'India',
  'Brazil',
  'Colombia',
  'Greece',
  'Afghanistan',
  'Cuba',
  'Syria',
  'Others',
];

const NATIONS_TO_ABBR = {
  America: 'America',
  Canada: 'Canada',
  Japan: 'Japan',
  China: 'China',
  Korea: 'Korea',
  England: 'England',
  France: 'France',
  Germany: 'Germany',
  Mexico: 'Mexico',
  Iraq: 'Iraq',
  Ireland: 'Ireland',
  Iran: 'Iran',
  Saudi: 'Saudi',
  Russia: 'Russia',
  Vietnam: 'Vietnam',
  Thailand: 'Thailand',
  Australia: 'Australia',
  Spain: 'Spain',
  Turkey: 'Turkey',
  Israel: 'Israel',
  Italy: 'Italy',
  Egypt: 'Egypt',
  Somalia: 'Somalia',
  India: 'India',
  Brazil: 'Brazil',
  Colombia: 'Colombia',
  Greece: 'Greece',
  Afghanistan: 'Afghan',
  Cuba: 'Cuba',
  Syria: 'Syria',
  Others: 'Others',
};

const ABBR_TO_NATIONS = Object.keys(NATIONS_TO_ABBR).reduce((accum, nation) => {
  accum[NATIONS_TO_ABBR[nation]] = nation;
  return accum;
}, {});

const toRGBString = (r: number, g: number, b: number) => {
  return `rgb(${r}, ${g}, ${b})`;
};

const NATIONS_TO_COLOR = {
  America: toRGBString(212, 116, 182),
  Canada: toRGBString(212, 20, 41),
  Japan: toRGBString(186, 169, 204),
  China: toRGBString(248, 181, 118),
  Korea: toRGBString(238, 177, 203),
  England: toRGBString(181, 179, 59),
  France: toRGBString(18, 26, 109),
  Germany: toRGBString(124, 78, 68),
  Mexico: toRGBString(79, 31, 11),
  Iraq: toRGBString(245, 147, 142),
  Ireland: toRGBString(151, 69, 138),
  Iran: toRGBString(192, 192, 192),
  Saudi: toRGBString(154, 214, 135),
  Russia: toRGBString(184, 147, 139),
  Vietnam: toRGBString(196, 52, 43),
  Thailand: toRGBString(188, 192, 36),
  Australia: toRGBString(188, 97, 108),
  Spain: toRGBString(63, 179, 198),
  Turkey: toRGBString(42, 108, 166),
  Israel: toRGBString(243, 122, 45),
  Italy: toRGBString(167, 191, 225),
  Egypt: toRGBString(52, 164, 44),
  Somalia: toRGBString(36, 117, 180),
  India: toRGBString(253, 125, 19),
  Brazil: toRGBString(139, 92, 78),
  Colombia: toRGBString(41, 36, 120),
  Greece: toRGBString(134, 196, 232),
  Afghanistan: toRGBString(131, 97, 175),
  Cuba: toRGBString(42, 105, 51),
  Syria: toRGBString(215, 212, 139),
  Others: toRGBString(116, 116, 116),
};

const NATIONS_MAP = NATIONS_ARRAY.reduce<Record<string, number>>(
  (acc, cur, idx) => ({ ...acc, [cur]: idx }),
  {}
);

export const getNations = () => {
  return NATIONS_ARRAY;
};
export const getNationIdx = (name: string) => {
  if (!(name in NATIONS_MAP)) {
    return -1;
  }
  return NATIONS_MAP[name];
};
export const getNationName = (idx: number) => {
  if (idx < 0 || idx > NATIONS_ARRAY.length) {
    return '';
  }
  return NATIONS_ARRAY[idx];
};
export const getColorOfNation = (name: string): string => {
  if (!(name in NATIONS_MAP)) {
    return toRGBString(0, 0, 0);
  }
  return NATIONS_TO_COLOR[name];
};

export const getColorOfNationAbbr = (abbr: string): string => {
  if (!(abbr in ABBR_TO_NATIONS)) {
    return toRGBString(0, 0, 0);
  }
  return getColorOfNation(getNationFromAbbr(abbr));
};

export const getAbbrNameFromNation = (name: string): string => {
  if (!(name in NATIONS_MAP)) {
    return '';
  }
  return NATIONS_TO_ABBR[name];
};

export const getNationFromAbbr = (abbr: string): string => {
  if (!(abbr in ABBR_TO_NATIONS)) {
    return '';
  }
  return ABBR_TO_NATIONS[abbr];
};

// const NATIONS = {
//   AMERICA: 'America',
//   CANADA: 'Canada',
//   JAPAN: 'Japan',
//   CHINA: 'China',
//   KOREA: 'Korea',
//   ENGLAND: 'England',
//   FRANCE: 'France',
//   GERMANY: 'Germany',
//   MEXICO: 'Mexico',
//   IRAQ: 'Iraq',
//   IRELAND: 'Ireland',
//   IRAN: 'Iran',
//   SAUDI: 'Saudi',
//   RUSSIA: 'Russia',
//   VIETNAM: 'Vietnam',
//   THAILAND: 'Thailand',
//   AUSTRALIA: 'Australia',
//   SPAIN: 'Spain',
//   TURKEY: 'Turkey',
//   ISRAEL: 'Israel',
//   ITAILY: 'Italy',
//   EGYPT: 'Egypt',
//   SOMALIA: 'Somalia',
//   INDIA: 'India',
//   BRAZIL: 'Brazil',
//   COLOMBIA: 'Colombia',
//   GREECE: 'Greece',
//   AFGHANISTAN: 'Afghanistan',
//   CUBA: 'Cuba',
//   SYRIA: 'Syria',
// };
