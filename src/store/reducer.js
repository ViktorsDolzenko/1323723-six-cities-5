import offers from "../mocks/offer";
import {CITIES, FilterTypes} from "../const.js";
import {extend, getOfferByCity} from "../util";
import {ActionType} from "./action";
const initialState = {
  city: CITIES.AMSTERDAM,
  offers,
  currentFilter: FilterTypes.POPULAR
};

initialState.filteredOffers = getOfferByCity(initialState.offers, initialState.city, initialState.currentFilter);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFER:
      return extend(state, {
        city: action.payload.city,
        filteredOffers: action.payload.filteredOffers
      });
    case ActionType.SORT_OFFER:
      return extend(state, {
        currentFilter: action.payload.currentFilter,
        filteredOffers: action.payload.filteredOffers
      });
  }
  return state;
};

export {reducer};
