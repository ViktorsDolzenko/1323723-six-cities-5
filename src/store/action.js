export const ActionType = {
  GET_OFFER_BY_CITY: `GET_OFFER`,
  SORT_OFFER: `SORT_OFFER`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  SET_FAVORITES_OFFERS: `SET_FAVORITES_OFFERS`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  SET_AUTHORIZATION: `SET_AUTHORIZATION`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_OFFERS_NEARBY: `LOAD_OFFERS_NEARBY`
};

export const getOfferByCity = (city) => ({
  type: ActionType.GET_OFFER_BY_CITY,
  payload: city,
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

export const setFavoritesOffers = (offers) => ({
  type: ActionType.SET_FAVORITES_OFFERS,
  payload: offers
});


export const loadFavoriteOffers = (favoriteOffers) => ({
  type: ActionType.LOAD_FAVORITE_OFFERS,
  payload: favoriteOffers
});

export const setAuthorization = (status, email) => ({
  type: ActionType.SET_AUTHORIZATION,
  payload: {
    status,
    email,
  }
});

export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments
});

export const loadOffersNearby = (offersNearby) => ({
  type: ActionType.LOAD_OFFERS_NEARBY,
  payload: offersNearby
});
