import {combineReducers} from "redux";
import {appProcess} from "./reducers/app-process/app-process";
import {appData} from "./reducers/app-data/app-data";
import {userProcess} from "./reducers/user-process/user-process";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: `USER`,
};

export const reducers = combineReducers({
  [NameSpace.PROCESS]: appProcess,
  [NameSpace.DATA]: appData,
  [NameSpace.USER]: userProcess,
});
