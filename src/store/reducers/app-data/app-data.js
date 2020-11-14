import {extend} from "../../../util";
import {ActionType} from "../../action";

const initialState = {
  offers: [],
};

export const appData = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: payload
      });
  }
  return state;
};
