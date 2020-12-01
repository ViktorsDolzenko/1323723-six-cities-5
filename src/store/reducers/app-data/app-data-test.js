import {appData} from "./app-data";
import {ActionType} from "../../action";
import {mockOffer, mockOffers, mockReviews, removeItem, replaceItem} from "../../../util";


describe(`App reducer work correctly`, () => {
  it(`Reducer return initial state`, () => {
    expect(appData(void 0, {})).toEqual({
      offers: [],
      comments: null,
      offersNearby: null,
      favoriteOffers: null,
    });
  });

  it(`Reducer should load offers`, () => {
    expect(appData({
      offers: []
    },
    {
      type: ActionType.LOAD_OFFERS,
      payload: mockOffers
    })).toEqual({
      offers: mockOffers
    });
  });

  it(`Reducer should load comments`, () =>{
    expect(appData({
      comments: []
    },
    {
      type: ActionType.LOAD_COMMENTS,
      payload: mockReviews
    })).toEqual({
      comments: mockReviews
    });
  });

  it(`Reducer should load offers nearby`, () =>{
    expect(appData({
      offersNearby: []
    },
    {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: mockOffers
    })).toEqual({
      comments: mockOffers
    });
  });

  it(`Reducer should set favorites offers`, () =>{
    expect(appData({
      favoriteOffers: []
    },
    {
      type: ActionType.SET_FAVORITES_OFFERS,
      payload: mockOffers
    })).toEqual({
      favoriteOffers: replaceItem(mockOffers, mockOffer)
    });
  });

  it(`Reducer should set favorites offers`, () =>{
    expect(appData({
      favoriteOffers: []
    },
    {
      type: ActionType.REMOVE_FAVORITE_OFFERS,
      payload: mockOffers
    })).toEqual({
      favoriteOffers: removeItem(mockOffers, mockOffer)
    });
  });

  it(`Reducer should set favorites offers`, () =>{
    expect(appData({
      favoriteOffers: []
    },
    {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: mockOffers
    })).toEqual({
      favoriteOffers: mockOffers
    });
  });

});
