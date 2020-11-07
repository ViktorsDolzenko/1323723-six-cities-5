export const ActionType = {
  GET_OFFER_BY_CITY: `GET_OFFER`,
  SORT_OFFER: `SORT_OFFER`
};

export const ActionCreator = {
  getOffer: (city) => ({
    type: ActionType.GET_OFFER_BY_CITY,
    payload: {
      city,
    }
  }),
  sortOffers: (filter) => ({
    type: ActionType.SORT_OFFER,
    payload: {
      filter
    }
  })
};

