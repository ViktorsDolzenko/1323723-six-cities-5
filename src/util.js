import {FilterTypes} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const offersByCity = (offers, city) => offers.filter((offer) =>
  offer.city.name === city);


const sortOffersByFilterType = (filteredOffers, filterType) => {
  switch (filterType) {
    case FilterTypes.TOP_RATED_FIRST:
      return filteredOffers.slice().sort((a, b) => b.rating - a.rating);
    case FilterTypes.PRICE_HIGH_TO_LOW:
      return filteredOffers.slice().sort((a, b) => b.price - a.price);
    case FilterTypes.PRICE_LOW_TO_HIGH:
      return filteredOffers.slice().sort((a, b) => a.price - b.price);
  }
  return filteredOffers;
};

export const getOffersByCityAndFilter = (offers, city, filterType) => {
  const filteredOffersByCity = offersByCity(offers, city);
  return sortOffersByFilterType(filteredOffersByCity, filterType);
};

