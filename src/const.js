export const Cities = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};

export const CITIES_COORDINATES = {
  [Cities.AMSTERDAM]: [52.38333, 4.9],
  [Cities.BRUSSELS]: [50.85045, 4.34878],
  [Cities.PARIS]: [48.864716, 2.349014],
  [Cities.COLOGNE]: [50.935173, 6.953101],
  [Cities.HAMBURG]: [53.551086, 9.993682],
  [Cities.DUSSELDORF]: [51.233334, 6.783333]
};

export const FilterTypes = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`,
};

export const sortByType = (offers, filter) => {
  switch (filter) {
    case FilterTypes.POPULAR:
      return offers;
    case FilterTypes.PRICE_HIGH_TO_LOW:
      return offers.sort((a, b) => b.price - a.price);
    case FilterTypes.PRICE_LOW_TO_HIGH:
      return offers.sort((a, b) => a.price - b.price);
    case FilterTypes.TOP_RATED_FIRST:
      return offers.sort((a, b) => a.rating - b.rating);
    default:
      return FilterTypes.POPULAR;
  }
};
