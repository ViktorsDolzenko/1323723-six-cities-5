import {extend, replaceItem} from "../../../util";
import {ActionType} from "../../action";

const initialState = {
  offers: [],
  comments: [],
  offersNearby: [],
  favoriteOffers: [],
};

export const appData = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: payload
      });
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: payload
      });
    case ActionType.LOAD_OFFERS_NEARBY:
      return extend(state, {
        offersNearby: payload
      });
    case ActionType.SET_FAVORITES_OFFERS:
      return extend(state, {
        offers: replaceItem(state.offers, payload)
      });
    case ActionType.LOAD_FAVORITE_OFFERS:
      return extend(state, {
        favoriteOffers: payload.favoriteOffers
      });
  }
  return state;
};
