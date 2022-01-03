const LANGUAGE_FULL_TO_ABBR = {
  English: 'EN',
  German: 'DE',
  Spanish: 'ES',
  Korean: 'KO',
  Turkish: 'TR',
  Chinese: 'ZH',
};

const LANGUAGE_ABBR_TO_FULL = Object.keys(LANGUAGE_FULL_TO_ABBR).reduce(
  (accum, full) => {
    accum[LANGUAGE_FULL_TO_ABBR[full]] = full;
    return accum;
  },
  {}
);

export const languageAbbrToFull = (abbr: string) => {
  if (!(abbr in LANGUAGE_ABBR_TO_FULL)) {
    return '';
  }
  return LANGUAGE_ABBR_TO_FULL[abbr];
};

export const languageFullToAbbr = (full: string) => {
  if (!(full in LANGUAGE_FULL_TO_ABBR)) {
    return '';
  }
  return LANGUAGE_FULL_TO_ABBR[full];
};
