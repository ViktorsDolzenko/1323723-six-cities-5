import {
  ActionType,
  getOfferByCity, loadComments,
  loadFavoriteOffers,
  loadOffers, loadOffersNearby,
  setAuthorization,
  setFavoritesOffers,
  sortOffers,
} from "./action";
import {mockAuthInfo, mockOffers, mockReviews} from "../util";

const city = `Dusseldorf`;
const filter = `Popular`;
const offers = mockOffers;
const status = 1;
const email = mockAuthInfo.email;
const comments = mockReviews;

describe(`Actions work correctly`, () => {
  it(`Action getOfferByCity work correctly`, () => {
    expect(getOfferByCity(city)).toEqual({
      type: ActionType.GET_OFFER_BY_CITY,
      payload: city
    });
  });

  it(`Action sortOffers work correctly`, () => {
    expect(sortOffers(filter, offers)).toEqual({
      type: ActionType.SORT_OFFER,
      payload: {
        filter,
        offers
      }
    });
  });

  it(`Action loadOffers work correctly`, () => {
    expect(loadOffers(offers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: offers
    });
  });

  it(`Action setFavoritesOffers work correctly`, () => {
    expect(setFavoritesOffers(offers)).toEqual({
      type: ActionType.SET_FAVORITES_OFFERS,
      payload: offers
    });
  });

  it(`Action loadFavoritesOffers work correctly`, () => {
    expect(loadFavoriteOffers(offers)).toEqual({
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: offers
    });
  });

  it(`Action setAuthorization work correctly`, () => {
    expect(setAuthorization(status, email)).toEqual({
      type: ActionType.SET_AUTHORIZATION,
      payload: {
        status,
        email
      }
    });
  });

  it(`Action loadComments work correctly`, () => {
    expect(loadComments(comments)).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: comments
    });
  });

  it(`Action loadOffersNearby work correctly`, () => {
    expect(loadOffersNearby(offers)).toEqual({
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offers
    });
  });
});
