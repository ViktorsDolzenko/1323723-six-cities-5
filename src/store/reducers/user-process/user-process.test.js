import {userProcess} from "../user-process/user-process";
import {ActionType} from "../../action";
import {AuthorizationStatus} from "../../../const";


describe(`App reducer work correctly`, () => {
  it(`Reducer return initial state`, () => {
    expect(userProcess(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });
  });

  it(`Reducer should should set authorization`, () => {
    expect(userProcess({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
    {
      type: ActionType.SET_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    }));
  });
});

