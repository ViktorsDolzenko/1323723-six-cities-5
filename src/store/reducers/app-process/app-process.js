import {Cities, FilterTypes} from "../../../const";
import {ActionType} from "../../action";
import {extend} from "../../../util";

const initialState = {
  filter: FilterTypes.POPULAR,
  city: Cities.AMSTERDAM,
};

export const appProcess = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.GET_OFFER_BY_CITY:
      return extend(state, {
        city: payload.city,
      });
    case ActionType.SORT_OFFER:
      return extend(state, {
        filter: payload.filter,
      });
  }
  return state;
};
