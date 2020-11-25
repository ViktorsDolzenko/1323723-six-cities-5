export const ActionType = {
  GET_OFFER_BY_CITY: `GET_OFFER`,
  SORT_OFFER: `SORT_OFFER`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  BOOKMARK_OFFER: `BOOKMARK_OFFER`,
  SET_AUTHORIZATION: `SET_AUTHORIZATION`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
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

export const setAuthorization = (status, email) => ({
  type: ActionType.SET_AUTHORIZATION,
  payload: {
    status,
    email
  }
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments
});
