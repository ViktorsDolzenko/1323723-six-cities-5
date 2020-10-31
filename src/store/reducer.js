import offers from "../mocks/offer";
import {Cities, FilterTypes} from "../const.js";
import {extend, getOfferByCity} from "../util";
import {ActionType} from "./action";
import {sortByType} from "../const";
const initialState = {
  city: Cities.AMSTERDAM,
  offers,
  filter: FilterTypes.POPULAR
};

initialState.filteredOffers = getOfferByCity(initialState.offers, initialState.city, initialState.filter);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFER:
      return extend(state, {
        city: action.payload.city,
        filteredOffers: action.payload.filteredOffers
      });
    case ActionType.SORT_OFFER:
      return extend(state, {
        filter: action.payload.filter,
        filteredOffers: sortByType(action.payload.filteredOffers, action.payload.filter)
      });
  }
  return state;
};

export {reducer};
