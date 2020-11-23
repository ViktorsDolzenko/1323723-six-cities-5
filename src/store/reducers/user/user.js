import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../action";
import {extend} from "../../../util";


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

export const user = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: payload,
      });
  }
  return state;
};
