export const ActionType = {
  GET_OFFER_BY_CITY: `GET_OFFER`,
  SORT_OFFER: `SORT_OFFER`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  BOOKMARK_OFFER: `BOOKMARK_OFFER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`
};

export const getOfferByCity = (city) => ({
  type: ActionType.GET_OFFER_BY_CITY,
  payload: {
    city,
  }
});

export const sortOffers = (filter, offers) => ({
  type: ActionType.SORT_OFFER,
  payload: {
    filter,
    offers
  }
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});

export const bookmarkOffer = (bookmark) => ({
  type: ActionType.BOOKMARK_OFFER,
  payload: bookmark
});

export const requiredAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});
