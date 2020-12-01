import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../action";
import {extend} from "../../../util";


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const userProcess = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionType.SET_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: payload.status,
        email: payload.email,
      });
  }
  return state;
};

export {userProcess};
