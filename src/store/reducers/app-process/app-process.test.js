import {appProcess} from "./app-process";
import {ActionType} from "../../action";
import {Cities, FilterTypes} from "../../../const";


describe(`App reducer work correctly`, () => {
  it(`Reducer return initial state`, () => {
    expect(appProcess(void 0, {})).toEqual({
      filter: FilterTypes.POPULAR,
      city: Cities.AMSTERDAM
    });
  });

  it(`Reducer should get offers by city`, () => {
    expect(appProcess({
      city: Cities.AMSTERDAM
    },
    {
      type: ActionType.GET_OFFER_BY_CITY,
      payload: Cities.DUSSELDORF
    }));
  });

  it(`Reducer should sort offers`, () => {
    expect(appProcess({
      filter: FilterTypes.POPULAR
    },
    {
      type: ActionType.SORT_OFFER,
      payload: FilterTypes.TOP_RATED_FIRST
    }));
  });
});

