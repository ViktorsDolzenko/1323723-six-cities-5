import {extend} from "../../../util";
import {ActionType} from "../../action";

const initialState = {
  offers: [],
  comments: [],
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
  }
  return state;
};
