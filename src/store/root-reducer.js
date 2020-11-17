import {combineReducers} from "redux";
import {appProcess} from "./reducers/app-process/app-process";
import {appData} from "./reducers/app-data/app-data";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
};

export const reducers = combineReducers({
  [NameSpace.PROCESS]: appProcess,
  [NameSpace.DATA]: appData,
});
