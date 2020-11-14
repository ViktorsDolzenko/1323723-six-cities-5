import {Cities, FilterTypes} from "../../../const";
import {ActionType} from "../../action";
import {extend, getOfferByCity} from "../../../util";

const initialState = {
  offers: [],
  filter: FilterTypes.POPULAR,
  city: Cities.AMSTERDAM,
};

export const sortByType = (offer, filter) => {
  const clonedOffers = Array.from(offer);
  switch (filter) {
    case FilterTypes.POPULAR:
      return clonedOffers;
    case FilterTypes.PRICE_HIGH_TO_LOW:
      return clonedOffers.sort((a, b) => b.price - a.price);
    case FilterTypes.PRICE_LOW_TO_HIGH:
      return clonedOffers.sort((a, b) => a.price - b.price);
    case FilterTypes.TOP_RATED_FIRST:
      return clonedOffers.sort((a, b) => b.rating - a.rating);
    default:
      return FilterTypes.POPULAR;
  }
};


const appProcess = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.GET_OFFER_BY_CITY:
      return extend(state, {
        city: payload.city,
        offers: getOfferByCity(state.offers, payload.city)
      });
    case ActionType.SORT_OFFER:
      return extend(state, {
        filter: payload.filter,
        offers: sortByType(state.offers, payload.filter)
      });
  }
  return state;
};

export {appProcess};
