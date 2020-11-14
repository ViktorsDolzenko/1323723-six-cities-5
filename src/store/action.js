export const ActionType = {
  GET_OFFER_BY_CITY: `GET_OFFER`,
  SORT_OFFER: `SORT_OFFER`,
  LOAD_OFFERS: `LOAD_OOFERS`
};

export const getOfferByCity = (city) => ({
  type: ActionType.GET_OFFER_BY_CITY,
  payload: {
    city,
  }
});

export const sortOffers = (filter) => ({
  type: ActionType.SORT_OFFER,
  payload: {
    filter
  }
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: {
    offers
  }
});


