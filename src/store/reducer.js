import offers from "../mocks/offer";
import {CITIES} from "../const.js";
import {extend, getOfferByCity} from "../util";
import {ActionType} from "./action";
const initialState = {
  city: CITIES.AMSTERDAM,
  offers
};

initialState.filtredOffers = getOfferByCity(initialState.offers, initialState.city);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFER:
      return extend(state, {
        city: action.payload.city,
        filtredOffers: action.payload.filtredOffers
      });
  }
  return state;
};

export {reducer};
