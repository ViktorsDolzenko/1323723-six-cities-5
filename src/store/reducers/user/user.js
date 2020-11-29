import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../action";
import {extend} from "../../../util";


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

export const user = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.SET_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: payload.status,
        email: payload.email,
      });
  }
  return state;
};
